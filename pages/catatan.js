// pages/catatan.js - Modul Blog & Catatan (Instant Load + Background Sync)

const URL_GAS_BLOG = "https://script.google.com/macros/s/AKfycbxGVt4Ag8mDtLsjRUet0m7L0b0Sn3H-6DAhr3nDbIHKpDdB7BP1tk-wDVf2olOOtZ-J-w/exec?sheet=Blog";

// 1. DATA CADANGAN LOKAL 10 ARTIKEL (Biar web selalu instan tampil, gak pernah kosong)
const ARTIKEL_DEFAULT = [
  { "Judul Artikel": "Kisah Steve Jobs & Garasi Apple: Dari Hobi Menjadi Imperium", Kategori: "Sejarah Bisnis", Tanggal: "12 Sep 2026", "Ringkasan Cuplikan": "Bagaimana visi produk Steve Jobs dan kejeniusan teknis Steve Wozniak mengubah komputer jadi kebutuhan personal.", "Isi Lengkap Artikel": "Apple Inc. bukan berawal dari gedung megah Silicon Valley, melainkan garasi sempit keluarga Jobs di Los Altos pada tahun 1976.\n\nKunci sukses awal Apple terletak pada duet komplementer: Steve Wozniak adalah insinyur murni yang merakit motherboard Apple I sendirian, sementara Steve Jobs memiliki kejelian luar biasa dalam melihat potensi pasar bahwa komputer pribadi bisa menjadi alat rumah tangga dan kantor massal, bukan sekadar hobi rakitan sirkuit.\n\nKetika Mike Markkula bergabung sebagai investor sekaligus mentor awal, ia menyusun Apple Marketing Philosophy dengan tiga pilar: Empathy, Focus, dan Impute.\n\nPelajaran praktis: Membangun sistem yang hebat secara teknis baru setengah perjalanan. Cara kamu mengemas, mengomunikasikan, dan menyajikan nilai produk tersebutlah yang menentukan dampaknya di dunia nyata.", "SumberURL": "https://id.wikipedia.org/wiki/Steve_Jobs" },
  { "Judul Artikel": "Mengenal Berbagai Jenis Investor Saham: Panduan Lengkap", Kategori: "Finansial", Tanggal: "10 Sep 2026", "Ringkasan Cuplikan": "Membahas tuntas karakteristik Value Investor, Growth Investor, hingga Day Trader di pasar modal.", "Isi Lengkap Artikel": "Di pasar saham, tidak ada satu strategi tunggal yang cocok untuk semua orang. Tiga profil utama yang umum ditemui:\n\n1. Value Investor: Mengadopsi prinsip Warren Buffett dan Benjamin Graham. Mencari emiten undervalued dengan fundamental kokoh.\n2. Growth Investor: Membidik perusahaan berpotensi ekspansi agresif dengan pertumbuhan laba di atas rata-rata industri.\n3. Day Trader: Mengandalkan analisa teknikal dan volatilitas harga harian untuk meraup keuntungan jangka pendek.", "SumberURL": "https://www.investopedia.com/investing/investing-101-the-basics/" },
  { "Judul Artikel": "Jeff Bezos & Amazon: Menjual Buku dari Garasi Rumah", Kategori: "Sejarah Bisnis", Tanggal: "04 Sep 2026", "Ringkasan Cuplikan": "Perjuangan Jeff Bezos meninggalkan kemapanan Wall Street demi merintis raksasa e-commerce global.", "Isi Lengkap Artikel": "Tahun 1994, Jeff Bezos mengamati pertumbuhan internet yang melonjak lebih dari 2.300% per tahun. Angka tersebut memicu lahirnya Regret Minimization Framework.\n\nBezos meninggalkan kariernya dan mendirikan Amazon dari sebuah garasi sewaan. Buku dipilih karena memiliki katalog judul terbanyak yang mustahil ditampung toko fisik.", "SumberURL": "https://id.wikipedia.org/wiki/Jeff_Bezos" },
  { "Judul Artikel": "Tipe Investor: Konservatif, Moderat, hingga Agresif", Kategori: "Finansial", Tanggal: "28 Agu 2026", "Ringkasan Cuplikan": "Menakar toleransi risiko dan psikologi keuangan dalam menyusun alokasi aset portofolio.", "Isi Lengkap Artikel": "Toleransi risiko membagi investor menjadi tiga:\n1. Konservatif: Fokus keutuhan modal (pasar uang, deposito, SBN).\n2. Moderat: Kombinasi obligasi dan saham blue chip dividen.\n3. Agresif: Fluktuasi tajam demi imbal hasil maksimal (saham growth, kripto).", "SumberURL": "https://www.ojk.go.id" },
  { "Judul Artikel": "Bill Gates dan Revolusi Perangkat Lunak Microsoft", Kategori: "Sejarah Bisnis", Tanggal: "22 Agu 2026", "Ringkasan Cuplikan": "Kisah dedikasi Bill Gates dalam mendominasi ekosistem sistem operasi komputer dunia.", "Isi Lengkap Artikel": "Bill Gates membalik paradigma bahwa software adalah komoditas berharga dengan melisensikan MS-DOS tanpa menjual hak ciptanya ke IBM, menciptakan standar ekosistem dunia.", "SumberURL": "https://id.wikipedia.org/wiki/Bill_Gates" },
  { "Judul Artikel": "Investor Institusional vs Investor Ritel di Pasar Modal", Kategori: "Finansial", Tanggal: "15 Agu 2026", "Ringkasan Cuplikan": "Memahami dinamika perbedaan skala modal, akses informasi, dan fleksibilitas di bursa saham.", "Isi Lengkap Artikel": "Institusi memiliki modal masif dan riset dalam tetapi lamban bermanuver. Ritel memiliki kelincahan (agility) penuh untuk keluar-masuk saham dalam hitungan detik.", "SumberURL": "https://www.investopedia.com" },
  { "Judul Artikel": "Kisah Henry Ford dan Lini Produksi Massal Mobil", Kategori: "Sejarah Bisnis", Tanggal: "08 Agu 2026", "Ringkasan Cuplikan": "Inovasi konveyor perakitan gerak yang mengubah mobil dari barang mewah jadi kendaraan rakyat.", "Isi Lengkap Artikel": "Melalui moving assembly line, Ford memangkas waktu produksi mobil dari 12 jam menjadi 93 menit, membuat harga terjangkau bagi masyarakat luas.", "SumberURL": "https://id.wikipedia.org/wiki/Henry_Ford" },
  { "Judul Artikel": "Passive Investor vs Active Trader: Mana yang Lebih Efektif?", Kategori: "Finansial", Tanggal: "02 Agu 2026", "Ringkasan Cuplikan": "Membedah komparasi waktu, beban psikologis, dan efisiensi imbal hasil jangka panjang.", "Isi Lengkap Artikel": "Data historis menunjukkan 85%+ pengelola dana aktif gagal mengalahkan indeks pasar dalam rentang 10 tahun. Investasi pasif indeks menawarkan ketenangan pikiran dan compound interest.", "SumberURL": "https://www.investopedia.com" },
  { "Judul Artikel": "Kisah Mark Zuckerberg & Facebook dari Kamar Asrama", Kategori: "Sejarah Bisnis", Tanggal: "25 Jul 2026", "Ringkasan Cuplikan": "Dari direktori profil kampus Harvard hingga menjadi imperium media sosial global.", "Isi Lengkap Artikel": "Bermula dari kamar asrama Harvard, Zuckerberg memanfaatkan kebutuhan alami manusia untuk saling terhubung dan membangun identitas di ruang digital.", "SumberURL": "https://id.wikipedia.org/wiki/Mark_Zuckerberg" },
  { "Judul Artikel": "Pentingnya Memahami Valuasi Saham bagi Pemula", Kategori: "Finansial", Tanggal: "18 Jul 2026", "Ringkasan Cuplikan": "Membedakan nilai intrinsik bisnis yang sehat dengan tren spekulasi harga pasar.", "Isi Lengkap Artikel": "Harga per lembar saham bukan penentu mahal atau murah. Valuasi sesungguhnya dinilai melalui rasio fundamental seperti PER, PBV, dan ROE.", "SumberURL": "https://www.ojk.go.id" }
];

let dataCatatanBlog = [];

// 2. FUNGSI SINKRONISASI CEPAT (BACKGROUND FETCH)
async function sinkronkanBlogSheets() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // Batas 6 detik agar tidak macet

    const res = await fetch(URL_GAS_BLOG, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    const result = await res.json();
    const items = result.data || (Array.isArray(result) ? result : []);

    if (items.length > 0) {
      dataCatatanBlog = items;
      localStorage.setItem('cache_blog_data', JSON.stringify(items));
      renderBlogCards(dataCatatanBlog);
    }
  } catch (err) {
    console.warn("Sinkronisasi live lambat/gagal, tetap menggunakan data cache:", err);
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

  // Ambil cache dulu biar instan muncul
  const cached = localStorage.getItem('cache_blog_data');
  if (cached) {
    try {
      dataCatatanBlog = JSON.parse(cached);
    } catch(e) {
      dataCatatanBlog = ARTIKEL_DEFAULT;
    }
  } else {
    dataCatatanBlog = ARTIKEL_DEFAULT;
  }

  // Render langsung detik itu juga
  renderBlogCards(dataCatatanBlog);

  // Sync background ke Google Sheets
  sinkronkanBlogSheets();
}

// 4. RENDER KARTU ARTIKEL
function renderBlogCards(list) {
  const blogBox = document.getElementById('blog-container');
  const daftar = list || dataCatatanBlog;
  if (!blogBox || !daftar) return;

  if (daftar.length === 0) {
    blogBox.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400 text-sm">Tidak ada catatan yang cocok.</div>`;
    return;
  }

  blogBox.innerHTML = daftar.map((b, idx) => `
    <article onclick="bukaModalBlog(${idx})" class="smooth-zoom-card p-6 rounded-3xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 cursor-pointer group flex flex-col justify-between shadow-sm hover:border-sky-500 transition duration-300 space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 font-bold">${b['Kategori'] || b.kategori || 'Umum'}</span>
          <span class="text-slate-400">${b['Tanggal'] || b.tanggal || ''}</span>
        </div>
        <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-sky-500 transition leading-snug">${b['Judul Artikel'] || b.judul || ''}</h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2">${b['Ringkasan Cuplikan'] || b.ringkasan || ''}</p>
      </div>
      <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-sky-500">
        <span>Baca Selengkapnya</span>
        <span class="group-hover:translate-x-1 transition">→</span>
      </div>
    </article>
  `).join('');
}

// 5. FILTER PENCARIAN
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

// 6. MODAL BACA + MENU SHARE SVG
function bukaModalBlog(idx) {
  const b = dataCatatanBlog[idx];
  if (!b) return;
  
  document.getElementById('modal-cat').innerText = b['Kategori'] || b.kategori || 'Umum';
  document.getElementById('modal-tgl').innerText = b['Tanggal'] || b.tanggal || '';
  document.getElementById('modal-judul').innerText = b['Judul Artikel'] || b.judul || '';
  
  const isiEl = document.getElementById('modal-isi');
  isiEl.style.whiteSpace = "pre-line";
  isiEl.innerText = b['Isi Lengkap Artikel'] || b.isiLengkap || b['Ringkasan Cuplikan'] || '';
  
  const linkSumber = b['Sumber URL'] || b['SumberURL'] || b['Link Cover Foto'] || b.sumber || '';
  const sumberEl = document.getElementById('modal-sumber');
  if (linkSumber && linkSumber.startsWith("http")) {
    sumberEl.innerHTML = `Referensi: <a href="${linkSumber}" target="_blank" rel="noopener noreferrer" class="text-sky-500 underline font-semibold ml-1 break-all">${linkSumber}</a>`;
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

  const judulEncoded = encodeURIComponent(b['Judul Artikel'] || b.judul || 'Catatan');
  const urlSekarang = encodeURIComponent(window.location.href);

  shareBox.innerHTML = `
    <span class="text-xs font-bold text-slate-500 dark:text-slate-400">Bagikan:</span>
    <div class="flex items-center gap-2 flex-wrap">
      <a href="https://api.whatsapp.com/send?text=${judulEncoded}%20${urlSekarang}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:bg-emerald-500 hover:text-white transition">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
        WhatsApp
      </a>
      <a href="https://twitter.com/intent/tweet?text=${judulEncoded}&url=${urlSekarang}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-black hover:text-white transition">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        X
      </a>
      <a href="https://threads.net/intent/post?text=${judulEncoded}%20${urlSekarang}" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 text-xs font-bold hover:bg-purple-600 hover:text-white transition">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.186 24c-3.57 0-6.495-1.205-8.461-3.486C1.792 18.266 1 15.228 1 11.758 1 8.243 1.831 5.222 3.821 2.97 5.79 0.74 8.647 0 12.186 0c3.568 0 6.446.745 8.411 2.977C22.569 5.23 23.4 8.252 23.4 11.758c0 .363-.01.724-.031 1.082h-3.926c.01-.358.016-.719.016-1.082 0-2.607-.582-4.716-1.921-6.19C16.277 4.17 14.453 3.6 12.186 3.6c-2.288 0-4.133.568-5.467 1.968C5.358 6.994 4.75 9.13 4.75 11.758c0 2.651.608 4.793 1.969 6.21 1.334 1.393 3.179 1.952 5.467 1.952 1.637 0 3.037-.306 4.161-.911.968-.52 1.705-1.258 2.2-2.195-1.026-.497-2.18-.84-3.424-.962-.489-.047-.991-.072-1.503-.072-3.13 0-5.32 1.547-5.32 3.76 0 1.25.688 2.308 1.888 2.905.992.493 2.285.735 3.743.735 2.155 0 3.968-.52 5.385-1.545 1.066-.77 1.815-1.795 2.227-3.048.423-1.288.638-2.824.638-4.567 0-3.805-1.046-6.643-3.111-8.435C16.892 4.195 14.516 3.6 12.186 3.6z"/></svg>
        Threads
      </a>
      <button onclick="salinLinkArtikel(this)" type="button" 
         class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-bold hover:bg-sky-500 hover:text-white transition">
        <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        <span class="btn-copy-text">Salin Link</span>
      </button>
    </div>
  `;

  document.getElementById('modal-reader').classList.remove('hidden');
}

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
