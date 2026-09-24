function formatTanggalRapi(raw) {
  if (!raw) return "";
  const s = String(raw).trim();
  if (!s.includes("GMT") && s.length <= 15) return s;

  try {
    const d = new Date(s);
    if (!isNaN(d.getTime())) {
      const bln = ["Jan", "Feb", "Mar", "Agu", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
      return `${String(d.getDate()).padStart(2, '0')} ${bln[d.getMonth()]} ${d.getFullYear()}`;
    }
  } catch (e) {}

  return s.split("00:00:00")[0].trim();
}

let dataCatatanBlog = [];

async function sinkronkanBlogSupabase() {
  if (!window.supabaseClient) {
    console.warn("Supabase SDK belum aktif.");
    return;
  }

  try {
    const { data, error } = await window.supabaseClient
      .from('catatan')
      .select('*');

    if (error) throw error;

    const items = data || [];
    if (items && items.length > 0) {
      dataCatatanBlog = items;
      localStorage.setItem('cache_blog_ilal_v3', JSON.stringify(items));
      renderBlogCards(dataCatatanBlog);
    }
  } catch (err) {
    console.warn("Sync tertunda, memakai cache lokal:", err);
  }
}

function renderCatatan() {
  const container = document.getElementById('sec-blog');
  if (!container) return;

  container.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
      <div>
        <span class="px-4 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 text-xs font-black uppercase tracking-wider">Artikel & Catatan</span>
        <h2 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-2">Pikiran, Gagasan, & Esai</h2>
      </div>
      <input type="text" id="blog-search" oninput="cariBlog()" placeholder="Cari artikel..." class="w-full sm:w-80 bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-sky-500 shadow-sm">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6" id="blog-container"></div>
  `;

  const cached = localStorage.getItem('cache_blog_ilal_v3');
  
  if (dataCatatanBlog.length > 0) {
    renderBlogCards(dataCatatanBlog);
  } else if (cached) {
    try {
      dataCatatanBlog = JSON.parse(cached);
      renderBlogCards(dataCatatanBlog);
    } catch(e) {}
  } else {
    const blogBox = document.getElementById('blog-container');
    if (blogBox) {
      blogBox.innerHTML = `<div class="col-span-full text-center py-16 text-slate-400 text-sm animate-pulse">Menghubungkan ke database...</div>`;
    }
  }

  sinkronkanBlogSupabase();
}

function renderBlogCards(list) {
  const blogBox = document.getElementById('blog-container');
  const daftar = list || dataCatatanBlog;
  if (!blogBox || !daftar) return;

  if (daftar.length === 0) {
    blogBox.innerHTML = `<div class="col-span-full text-center py-16 text-slate-400 text-sm">Tidak ada catatan yang ditemukan.</div>`;
    return;
  }

  blogBox.innerHTML = daftar.map((b) => {
    const idItem = b.ID ?? b.id ?? '';
    const tgl = formatTanggalRapi(b['Tanggal'] || b.tanggal || '');
    const kat = b['Kategori'] || b.kategori || 'Umum';
    const judul = b['Judul Artikel'] || b.judul || '';
    const ringkasan = b['Ringkasan Cuplikan'] || b.ringkasan || '';
    const views = b.views || b.Views || 0;

    return `
      <article onclick="bukaModalBlog('${idItem}')" class="smooth-zoom-card p-6 rounded-3xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 cursor-pointer group flex flex-col justify-between shadow-sm hover:border-sky-500 transition duration-300 min-h-[220px]">
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-3 text-xs">
            <span class="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 font-bold shrink-0">${kat}</span>
            <div class="flex items-center gap-2 text-slate-400 dark:text-slate-500 font-medium shrink-0">
              <span class="flex items-center gap-1 text-[11px]">
                <svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                <span id="card-views-${idItem}">${views}</span>
              </span>
              <span>•</span>
              <span>${tgl}</span>
            </div>
          </div>
          <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-sky-500 transition leading-snug line-clamp-2">${judul}</h3>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">${ringkasan}</p>
        </div>
        <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-sky-500 mt-4">
          <span>Baca Selengkapnya</span>
          <span class="group-hover:translate-x-1 transition">→</span>
        </div>
      </article>
    `;
  }).join('');

  cekDeepLinkArtikel();
}

function cariBlog() {
  const searchInput = document.getElementById('blog-search');
  if (!searchInput) return;
  const q = searchInput.value.toLowerCase().trim();

  if (!q) {
    renderBlogCards(dataCatatanBlog);
    return;
  }

  const hasil = dataCatatanBlog.filter(b => {
    const j = String(b['Judul Artikel'] || b.judul || '').toLowerCase();
    const r = String(b['Ringkasan Cuplikan'] || b.ringkasan || '').toLowerCase();
    const k = String(b['Kategori'] || b.kategori || '').toLowerCase();
    return j.includes(q) || r.includes(q) || k.includes(q);
  });

  renderBlogCards(hasil);
}


async function tambahViewArtikel(itemArtikel, viewsBaru) {
  if (!window.supabaseClient || !itemArtikel) return;

  const idValue = itemArtikel.ID ?? itemArtikel.id;
  if (idValue === undefined || idValue === null) return;

  try {
    const { error } = await window.supabaseClient.rpc('tambah_views_catatan', {
      row_id: String(idValue)
    });

    if (error) {
      await window.supabaseClient
        .from('catatan')
        .update({ views: viewsBaru })
        .eq('ID', String(idValue));
    }
  } catch (err) {
    console.warn("Koneksi update views Supabase error:", err);
  }
}


function bukaModalBlog(targetId) {
  const b = dataCatatanBlog.find(item => String(item.ID ?? item.id) === String(targetId));
  if (!b) return;

  const idValue = b.ID ?? b.id;
  const viewsSaatIni = parseInt(b.views || b.Views || 0, 10);
  const viewsTampil = viewsSaatIni + 1;

  
  b.views = viewsTampil;
  localStorage.setItem('cache_blog_ilal_v3', JSON.stringify(dataCatatanBlog));

  
  const elCardViews = document.getElementById(`card-views-${idValue}`);
  if (elCardViews) elCardViews.innerText = viewsTampil;

  
  tambahViewArtikel(b, viewsTampil);

  
  document.getElementById('modal-cat').innerText = b['Kategori'] || b.kategori || 'Umum';
  
  const elViewCount = document.getElementById('modal-views-count');
  if (elViewCount) {
    elViewCount.innerText = `${viewsTampil} kali dilihat`;
  }

  document.getElementById('modal-tgl').innerText = formatTanggalRapi(b['Tanggal'] || b.tanggal || '');
  document.getElementById('modal-judul').innerText = b['Judul Artikel'] || b.judul || '';

  const isiEl = document.getElementById('modal-isi');
  isiEl.style.whiteSpace = "pre-line";
  isiEl.className = "text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar";
  isiEl.innerText = b['Isi Lengkap Artikel'] || b.isiLengkap || b['Ringkasan Cuplikan'] || '';

  const linkRef = b['Sumber Referensi'] || b['Sumber URL'] || b['SumberURL'] || b['Link Cover Foto'] || '';
  const sumberEl = document.getElementById('modal-sumber');
  if (linkRef && linkRef.startsWith("http")) {
    sumberEl.innerHTML = `Referensi: <a href="${linkRef}" target="_blank" rel="noopener noreferrer" class="text-sky-500 underline font-semibold ml-1 break-all">${linkRef}</a>`;
  } else {
    sumberEl.innerHTML = "";
  }

  let shareBox = document.getElementById('modal-share-container');
  if (!shareBox) {
    shareBox = document.createElement('div');
    shareBox.id = 'modal-share-container';
    shareBox.className = 'mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3';
    sumberEl.parentNode.appendChild(shareBox);
  }

  const baseUrl = window.location.origin + window.location.pathname;
  const linkSpesifik = `${baseUrl}?id=${idValue}`;

  const judulEncoded = encodeURIComponent(b['Judul Artikel'] || b.judul || 'Catatan');
  const urlEncoded = encodeURIComponent(linkSpesifik);

  shareBox.innerHTML = `
    <span class="text-xs font-bold text-slate-500 dark:text-slate-400">Bagikan Catatan:</span>
    <div class="flex items-center gap-2 flex-wrap">
      <a href="https://api.whatsapp.com/send?text=${judulEncoded}%20${urlEncoded}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:bg-emerald-500 hover:text-white transition">
        WhatsApp
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-600 hover:text-white transition">
        Facebook
      </a>
      <a href="https://twitter.com/intent/tweet?text=${judulEncoded}&url=${urlEncoded}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-black hover:text-white transition">
        X
      </a>
      <a href="https://threads.net/intent/post?text=${judulEncoded}%20${urlEncoded}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 text-xs font-bold hover:bg-purple-600 hover:text-white transition">
        Threads
      </a>
      <button onclick="salinLinkKhusus('${linkSpesifik}', this)" type="button" 
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-bold hover:bg-sky-500 hover:text-white transition">
        Salin Link
      </button>
    </div>
  `;

  document.getElementById('modal-reader').classList.remove('hidden');
}

function salinLinkKhusus(url, btn) {
  navigator.clipboard.writeText(url).then(() => {
    const teksAwal = btn.innerText;
    btn.innerText = "✓ Tersalin!";
    setTimeout(() => { btn.innerText = teksAwal; }, 2000);
  });
}

function tutupModal() { 
  document.getElementById('modal-reader').classList.add('hidden'); 
  const urlBersih = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, urlBersih);
  cariBlog(); 
}

function cekDeepLinkArtikel() {
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = urlParams.get('id');
  if (targetId && dataCatatanBlog.length > 0) {
    bukaModalBlog(targetId);
  }
}