// pages/catatan.js - Modul Blog & Catatan (Cache-First Kilat + Share Lengkap FB, WA, X, Threads, IG)

const URL_GAS_BLOG = "https://script.google.com/macros/s/AKfycby7uH_OZjjEevBl18220gEdg6nQkBL9TPPd3lsB0uy4s1VVqqaDO30cuPjLBMQse82c2w/exec?sheet=Blog";

// Helper pembersih format tanggal (menghapus embel-embel GMT bawaan Sheets)
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

// 1. SINKRONISASI DI LATAR BELAKANG (SILENT BACKGROUND SYNC)
async function sinkronkanBlogSheets() {
  try {
    const res = await fetch(URL_GAS_BLOG);
    const result = await res.json();
    const items = result.data || (Array.isArray(result) ? result : []);

    if (items && items.length > 0) {
      const cacheSekarang = localStorage.getItem('cache_blog_ilal_v3');
      const dataBaruString = JSON.stringify(items);

      // Selalu simpan ke dataCatatanBlog
      dataCatatanBlog = items;
      localStorage.setItem('cache_blog_ilal_v3', dataBaruString);

      // Jika data dari server ada beda dengan cache sebelumnya, re-render
      if (cacheSekarang !== dataBaruString) {
        renderBlogCards(dataCatatanBlog);
      }
    }
  } catch (err) {
    console.warn("Background sync tertunda, tetap pakai data lokal:", err);
  }
}

// 2. RENDER WADAH UTAMA BLOG (LOAD 0 DETIK)
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

  // Cek memori variabel dulu atau cache localStorage (instan 0.001 detik)
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
      blogBox.innerHTML = `<div class="col-span-full text-center py-16 text-slate-400 text-sm animate-pulse">Menghubungkan ke database catatan...</div>`;
    }
  }

  // Tarik data baru di latar belakang tanpa bikin layar macet
  sinkronkanBlogSheets();
}

// 3. RENDER KARTU ARTIKEL PROPORSIONAL (TETAP SAMA SEPERTI ASLINYA)
function renderBlogCards(list) {
  const blogBox = document.getElementById('blog-container');
  const daftar = list || dataCatatanBlog;
  if (!blogBox || !daftar) return;

  if (daftar.length === 0) {
    blogBox.innerHTML = `<div class="col-span-full text-center py-16 text-slate-400 text-sm">Tidak ada catatan yang ditemukan.</div>`;
    return;
  }

  blogBox.innerHTML = daftar.map((b, idx) => {
    const tgl = formatTanggalRapi(b['Tanggal'] || b.tanggal || '');
    const kat = b['Kategori'] || b.kategori || 'Umum';
    const judul = b['Judul Artikel'] || b.judul || '';
    const ringkasan = b['Ringkasan Cuplikan'] || b.ringkasan || '';

    return `
      <article onclick="bukaModalBlog(${idx})" class="smooth-zoom-card p-6 rounded-3xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 cursor-pointer group flex flex-col justify-between shadow-sm hover:border-sky-500 transition duration-300 min-h-[220px]">
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-3 text-xs">
            <span class="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 font-bold shrink-0">${kat}</span>
            <span class="text-slate-400 dark:text-slate-500 font-medium shrink-0 text-right">${tgl}</span>
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
}

// 4. FILTER PENCARIAN
function cariBlog() {
  const q = document.getElementById('blog-search').value.toLowerCase();
  const hasil = dataCatatanBlog.filter(b => {
    const j = (b['Judul Artikel'] || b.judul || '').toLowerCase();
    const r = (b['Ringkasan Cuplikan'] || b.ringkasan || '').toLowerCase();
    const k = (b['Kategori'] || b.kategori || '').toLowerCase();
    return j.includes(q) || r.includes(q) || k.includes(q);
  });
  renderBlogCards(hasil);
}

// 5. MODAL DETAIL + MENU SHARE LENGKAP VIA IG, FB, X, THREADS, WA
function bukaModalBlog(idx) {
  const b = dataCatatanBlog[idx];
  if (!b) return;

  const tgl = formatTanggalRapi(b['Tanggal'] || b.tanggal || '');
  document.getElementById('modal-cat').innerText = b['Kategori'] || b.kategori || 'Umum';
  document.getElementById('modal-tgl').innerText = tgl;
  document.getElementById('modal-judul').innerText = b['Judul Artikel'] || b.judul || '';

  const isiEl = document.getElementById('modal-isi');
  isiEl.style.whiteSpace = "pre-line";
  isiEl.className = "text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar";
  isiEl.innerText = b['Isi Lengkap Artikel'] || b.isiLengkap || b['Ringkasan Cuplikan'] || '';

  // Membaca Kolom 'Sumber Referensi' dari Google Sheets
  const linkRef = b['Sumber Referensi'] || b['Sumber URL'] || b['SumberURL'] || b['Link Cover Foto'] || '';
  const sumberEl = document.getElementById('modal-sumber');
  if (linkRef && linkRef.startsWith("http")) {
    sumberEl.innerHTML = `Referensi: <a href="${linkRef}" target="_blank" rel="noopener noreferrer" class="text-sky-500 underline font-semibold ml-1 break-all">${linkRef}</a>`;
  } else {
    sumberEl.innerHTML = "";
  }

  // Wadah menu share di bagian paling bawah modal
  let shareBox = document.getElementById('modal-share-container');
  if (!shareBox) {
    shareBox = document.createElement('div');
    shareBox.id = 'modal-share-container';
    shareBox.className = 'mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3';
    sumberEl.parentNode.appendChild(shareBox);
  }

  const judulEncoded = encodeURIComponent(b['Judul Artikel'] || b.judul || 'Catatan');
  const urlSekarang = encodeURIComponent(window.location.href);

  shareBox.innerHTML = `
    <span class="text-xs font-bold text-slate-500 dark:text-slate-400">Bagikan:</span>
    <div class="flex items-center gap-2 flex-wrap">
      <!-- 1. WhatsApp -->
      <a href="https://api.whatsapp.com/send?text=${judulEncoded}%20${urlSekarang}" target="_blank" rel="noopener noreferrer" 
         title="Bagikan ke WhatsApp"
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:bg-emerald-500 hover:text-white transition">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        WhatsApp
      </a>

      <!-- 2. Facebook -->
      <a href="https://www.facebook.com/sharer/sharer.php?u=${urlSekarang}" target="_blank" rel="noopener noreferrer" 
         title="Bagikan ke Facebook"
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-600 hover:text-white transition">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        Facebook
      </a>

      <!-- 3. X / Twitter -->
      <a href="https://twitter.com/intent/tweet?text=${judulEncoded}&url=${urlSekarang}" target="_blank" rel="noopener noreferrer" 
         title="Bagikan ke X"
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-black hover:text-white transition">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        X
      </a>

      <!-- 4. Threads -->
      <a href="https://threads.net/intent/post?text=${judulEncoded}%20${urlSekarang}" target="_blank" rel="noopener noreferrer" 
         title="Bagikan ke Threads"
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 text-xs font-bold hover:bg-purple-600 hover:text-white transition">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.186 24c-3.57 0-6.495-1.205-8.461-3.486C1.792 18.266 1 15.228 1 11.758 1 8.243 1.831 5.222 3.821 2.97 5.79 0.74 8.647 0 12.186 0c3.568 0 6.446.745 8.411 2.977C22.569 5.23 23.4 8.252 23.4 11.758c0 .363-.01.724-.031 1.082h-3.926c.01-.358.016-.719.016-1.082 0-2.607-.582-4.716-1.921-6.19C16.277 4.17 14.453 3.6 12.186 3.6c-2.288 0-4.133.568-5.467 1.968C5.358 6.994 4.75 9.13 4.75 11.758c0 2.651.608 4.793 1.969 6.21 1.334 1.393 3.179 1.952 5.467 1.952 1.637 0 3.037-.306 4.161-.911.968-.52 1.705-1.258 2.2-2.195-1.026-.497-2.18-.84-3.424-.962-.489-.047-.991-.072-1.503-.072-3.13 0-5.32 1.547-5.32 3.76 0 1.25.688 2.308 1.888 2.905.992.493 2.285.735 3.743.735 2.155 0 3.968-.52 5.385-1.545 1.066-.77 1.815-1.795 2.227-3.048.423-1.288.638-2.824.638-4.567 0-3.805-1.046-6.643-3.111-8.435C16.892 4.195 14.516 3.6 12.186 3.6z"/></svg>
        Threads
      </a>

      <!-- 5. Instagram (Salin Link Otomatis + Arahkan ke IG) -->
      <button onclick="bagikanInstagram(this)" type="button" 
         title="Salin tautan & buka Instagram"
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 text-xs font-bold hover:bg-pink-600 hover:text-white transition">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        <span class="btn-ig-text">Instagram</span>
      </button>

      <!-- 6. Salin Link -->
      <button onclick="salinLinkArtikel(this)" type="button" 
         title="Salin tautan catatan"
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-bold hover:bg-sky-500 hover:text-white transition">
        <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        <span class="btn-copy-text">Salin Link</span>
      </button>
    </div>
  `;

  document.getElementById('modal-reader').classList.remove('hidden');
}

// 6. HELPER BAGIKAN INSTAGRAM
function bagikanInstagram(btn) {
  const url = window.location.href;
  const labelSpan = btn.querySelector('.btn-ig-text');
  navigator.clipboard.writeText(url).then(() => {
    if (labelSpan) labelSpan.innerText = "Link Tersalin!";
    setTimeout(() => {
      window.open('https://www.instagram.com/', '_blank');
      if (labelSpan) labelSpan.innerText = "Instagram";
    }, 800);
  });
}

// 7. HELPER SALIN LINK
function salinLinkArtikel(btn) {
  const url = window.location.href;
  const labelSpan = btn.querySelector('.btn-copy-text');
  navigator.clipboard.writeText(url).then(() => {
    const teksAwal = labelSpan ? labelSpan.innerText : btn.innerText;
    if (labelSpan) labelSpan.innerText = "Tersalin!";
    setTimeout(() => {
      if (labelSpan) labelSpan.innerText = teksAwal;
    }, 2000);
  });
}

function tutupModal() { 
  document.getElementById('modal-reader').classList.add('hidden'); 
}
