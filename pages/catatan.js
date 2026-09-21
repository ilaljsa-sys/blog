// pages/catatan.js - Modul Blog & Catatan Mandiri Terhubung Google Sheets

const URL_GAS_BLOG = "MASUKKAN_URL_DEPLOY_APPS_SCRIPT_KAMU_DISINI";

// Data awal / cadangan (fallback jika internet offline / API loading)
let dataCatatanBlog = [
  {
    id: "blog_001",
    "Tanggal": "12 Sep 2026",
    "Judul Artikel": "Kisah Steve Jobs & Garasi Apple: Dari Hobi Menjadi Imperium",
    "Kategori": "Sejarah Bisnis",
    "Ringkasan Cuplikan": "Bagaimana visi produk Steve Jobs dan kejeniusan teknis Steve Wozniak mengubah komputer jadi kebutuhan personal.",
    "Isi Lengkap Artikel": "Apple Inc. bukan berawal dari gedung megah Silicon Valley, melainkan garasi sempit keluarga Jobs di Los Altos pada tahun 1976.\n\nKunci sukses awal Apple terletak pada duet komplementer: Steve Wozniak adalah insinyur jenius yang merakit motherboard Apple I sendirian, sementara Steve Jobs memiliki kejelian luar biasa dalam melihat potensi pasar bahwa komputer bukan cuma mainan kaum hobi elektronik, melainkan produk konsumen massal.\n\nKetika Mike Markkula masuk sebagai investor perdana, Apple menanamkan filosofi marketing legendaris: Empathy (memahami kebutuhan user), Focus (eliminasi hal tak penting), dan Impute (cara produk dibungkus dan dipresentasikan menentukan nilainya di mata dunia).\n\nPelajaran penting: Keunggulan sistem atau teknologi hebat membutuhkan pengemasan dan komunikasi yang sama kuatnya agar bisa diterima oleh dunia luas.",
    "SumberURL": "https://id.wikipedia.org/wiki/Steve_Jobs"
  }
];

// 2. FUNGSI SINKRONISASI DATA DARI GOOGLE SHEETS
async function sinkronkanBlogSheets() {
  if (!URL_GAS_BLOG || URL_GAS_BLOG.includes("MASUKKAN_URL")) return;
  try {
    const res = await fetch(URL_GAS_BLOG);
    const result = await res.json();
    if (result.status === "success" && Array.isArray(result.data) && result.data.length > 0) {
      dataCatatanBlog = result.data;
      renderBlogCards(dataCatatanBlog);
    }
  } catch (err) {
    console.warn("Gagal mengambil data dari Google Sheets, menggunakan data cadangan:", err);
  }
}

// 3. FUNGSI RENDER WADAH UTAMA BLOG
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

  renderBlogCards(dataCatatanBlog);
  sinkronkanBlogSheets(); // Otomatis fetch data terbaru dari spreadsheet
}

// 4. FUNGSI RENDER KARTU ARTIKEL
function renderBlogCards(list) {
  const blogBox = document.getElementById('blog-container');
  const daftar = list || dataCatatanBlog;
  if (!blogBox || !daftar) return;

  if (daftar.length === 0) {
    blogBox.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 text-sm">Tidak ada catatan yang ditemukan.</div>`;
    return;
  }

  blogBox.innerHTML = daftar.map((b, idx) => `
    <article onclick="bukaModalBlog(${idx})" class="smooth-zoom-card p-6 rounded-3xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 cursor-pointer group flex flex-col justify-between shadow-sm hover:border-sky-500 transition duration-300 space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 font-bold">${b.Kategori || 'Umum'}</span>
          <span class="text-slate-400">${b.Tanggal || ''}</span>
        </div>
        <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-sky-500 transition leading-snug">${b['Judul Artikel']}</h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2">${b['Ringkasan Cuplikan'] || ''}</p>
      </div>
      <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-sky-500">
        <span>Baca Selengkapnya</span>
        <span class="group-hover:translate-x-1 transition">→</span>
      </div>
    </article>
  `).join('');
}

// 5. FUNGSI FILTER PENCARIAN
function cariBlog() {
  const q = document.getElementById('blog-search').value.toLowerCase();
  const hasil = dataCatatanBlog.filter(b => 
    (b['Judul Artikel'] && b['Judul Artikel'].toLowerCase().includes(q)) || 
    (b['Ringkasan Cuplikan'] && b['Ringkasan Cuplikan'].toLowerCase().includes(q)) ||
    (b.Kategori && b.Kategori.toLowerCase().includes(q))
  );
  renderBlogCards(hasil);
}

// 6. FUNGSI BUKA MODAL DETAIL + MENU SHARE SOSMED
function bukaModalBlog(idx) {
  const b = dataCatatanBlog[idx];
  if (!b) return;
  
  document.getElementById('modal-cat').innerText = b.Kategori || 'Umum';
  document.getElementById('modal-tgl').innerText = b.Tanggal || '';
  document.getElementById('modal-judul').innerText = b['Judul Artikel'] || '';
  
  // Format rapi teks panjang agar baris paragraf tidak menyatu
  const isiEl = document.getElementById('modal-isi');
  isiEl.style.whiteSpace = "pre-line";
  isiEl.innerText = b['Isi Lengkap Artikel'] || b['Ringkasan Cuplikan'] || '';
  
  const sumberEl = document.getElementById('modal-sumber');
  if (b.SumberURL && b.SumberURL.startsWith("http")) {
    sumberEl.innerHTML = `Referensi: <a href="${b.SumberURL}" target="_blank" rel="noopener noreferrer" class="text-sky-500 underline font-semibold ml-1 break-all">${b.SumberURL}</a>`;
  } else {
    sumberEl.innerHTML = "";
  }

  // Siapkan wadah tombol share dinamis di bawah referensi
  let shareBox = document.getElementById('modal-share-container');
  if (!shareBox) {
    shareBox = document.createElement('div');
    shareBox.id = 'modal-share-container';
    shareBox.className = 'mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3';
    sumberEl.parentNode.appendChild(shareBox);
  }

  const judulEncoded = encodeURIComponent(b['Judul Artikel']);
  const urlSekarang = encodeURIComponent(window.location.href);

  shareBox.innerHTML = `
    <span class="text-xs font-bold text-slate-500 dark:text-slate-400">Bagikan artikel:</span>
    <div class="flex items-center gap-2 flex-wrap">
      <!-- WhatsApp -->
      <a href="https://api.whatsapp.com/send?text=${judulEncoded}%20${urlSekarang}" target="_blank" rel="noopener noreferrer" 
         class="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:bg-emerald-500 hover:text-white transition">
        WhatsApp
      </a>
      
      <!-- X / Twitter -->
      <a href="https://twitter.com/intent/tweet?text=${judulEncoded}&url=${urlSekarang}" target="_blank" rel="noopener noreferrer" 
         class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-black hover:text-white transition">
        X
      </a>

      <!-- Threads -->
      <a href="https://threads.net/intent/post?text=${judulEncoded}%20${urlSekarang}" target="_blank" rel="noopener noreferrer" 
         class="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 text-xs font-bold hover:bg-purple-600 hover:text-white transition">
        Threads
      </a>

      <!-- Copy Link (Instagram / TikTok) -->
      <button onclick="salinLinkArtikel(this)" type="button"
         class="px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-bold hover:bg-sky-500 hover:text-white transition">
        Salin Link
      </button>
    </div>
  `;

  document.getElementById('modal-reader').classList.remove('hidden');
}

// 7. HELPER SALIN LINK CLIPBOARD
function salinLinkArtikel(btn) {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    const teksAwal = btn.innerText;
    btn.innerText = "✓ Tersalin!";
    setTimeout(() => {
      btn.innerText = teksAwal;
    }, 2000);
  }).catch(() => {
    alert("Gagal menyalin link.");
  });
}

function tutupModal() { 
  document.getElementById('modal-reader').classList.add('hidden'); 
}
