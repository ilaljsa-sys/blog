// pages/catatan.js - Modul Blog & Catatan Mandiri

// 1. DATA 10 ARTIKEL BLOG MANDIRI (Dipindahkan dari script.js)
const dataCatatanBlog = [
  { "Judul Artikel": "Kisah Steve Jobs & Garasi Apple: Dari Hobi Menjadi Imperium", Kategori: "Sejarah Bisnis", Tanggal: "12 Sep 2026", "Ringkasan Cuplikan": "Bagaimana ketekunan Steve Jobs dan Steve Wozniak mengubah komputer pribadi jadi revolusi global.", "Isi Lengkap Artikel": "Apple Inc. bukan lahir dari gedung kantor mewah, melainkan garasi sempit di Los Altos, California pada tahun 1976...", "SumberURL": "https://id.wikipedia.org/wiki/Steve_Jobs" },
  { "Judul Artikel": "Mengenal Berbagai Jenis Investor Saham: Panduan Lengkap", Kategori: "Finansial", Tanggal: "10 Sep 2026", "Ringkasan Cuplikan": "Membahas tuntas profil dan gaya investor dari Value Investor, Growth, hingga Day Trader.", "Isi Lengkap Artikel": "Dalam dunia investasi saham, pembagian tipe investor sangat dipengaruhi oleh profil risiko dan tujuan finansial...", "SumberURL": "https://www.investopedia.com/investing/investing-101-the-basics/" },
  { "Judul Artikel": "Jeff Bezos & Amazon: Menjual Buku dari Garasi Rumah", Kategori: "Sejarah Bisnis", Tanggal: "04 Sep 2026", "Ringkasan Cuplikan": "Perjuangan Jeff Bezos meninggalkan Wall Street demi merintis raksasa e-commerce global.", "Isi Lengkap Artikel": "Tahun 1994, Jeff Bezos menyetir mobil lintas negara sambil merancang skema bisnis buku daring pertama...", "SumberURL": "https://id.wikipedia.org/wiki/Jeff_Bezos" },
  { "Judul Artikel": "Tipe Investor: Konservatif, Moderat, hingga Agresif", Kategori: "Finansial", Tanggal: "28 Agu 2026", "Ringkasan Cuplikan": "Menilai tingkat kenyamanan psikologis dalam menghadapi fluktuasi pasar modal modern.", "Isi Lengkap Artikel": "Sebelum menaruh modal, mengenali toleransi risiko pribadi adalah tameng utama agar tidak gegabah di bursa...", "SumberURL": "https://www.ojk.go.id" },
  { "Judul Artikel": "Bill Gates dan Revolusi Perangkat Lunak Microsoft", Kategori: "Sejarah Bisnis", Tanggal: "22 Agu 2026", "Ringkasan Cuplikan": "Kisah drop-out Harvard yang sukses mendominasi sistem operasi komputer dunia.", "Isi Lengkap Artikel": "Bersama Paul Allen, Bill Gates mendedikasikan masa mudanya di ruang komputer kampus sebelum mendirikan Microsoft tahun 1975...", "SumberURL": "https://id.wikipedia.org/wiki/Bill_Gates" },
  { "Judul Artikel": "Investor Institusional vs Investor Ritel di Pasar Modal", Kategori: "Finansial", Tanggal: "15 Agu 2026", "Ringkasan Cuplikan": "Perbedaan volume dana, analisa fundamental, dan manuver transaksi di lantai bursa.", "Isi Lengkap Artikel": "Pasar modal digerakkan oleh dua kubu besar: kekuatan dana raksasa institusi dan kelincahan investor perorangan...", "SumberURL": "https://www.investopedia.com" },
  { "Judul Artikel": "Kisah Henry Ford dan Lini Produksi Massal Mobil", Kategori: "Sejarah Bisnis", Tanggal: "08 Agu 2026", "Ringkasan Cuplikan": "Revolusi konveyor pabrik yang mengubah mobil menjadi transportasi umum yang terjangkau.", "Isi Lengkap Artikel": "Henry Ford membuktikan bahwa efisiensi perakitan massal mampu menekan biaya produksi secara drastis...", "SumberURL": "https://id.wikipedia.org/wiki/Henry_Ford" },
  { "Judul Artikel": "Passive Investor vs Active Trader: Mana yang Lebih Efektif?", Kategori: "Finansial", Tanggal: "02 Agu 2026", "Ringkasan Cuplikan": "Analisis waktu, disiplin emosi, dan performa imbal hasil portofolio jangka panjang.", "Isi Lengkap Artikel": "Strategi buy-and-hold indeks vs scalping harian membutuhkan kesiapan psikologi dan manajemen risiko yang sangat bertolak belakang...", "SumberURL": "https://www.investopedia.com" },
  { "Judul Artikel": "Kisah Mark Zuckerberg & Facebook dari Kamar Asrama", Kategori: "Sejarah Bisnis", Tanggal: "25 Jul 2026", "Ringkasan Cuplikan": "Proyek coding mahasiswa Harvard yang menjelma menjadi platform media sosial global.", "Isi Lengkap Artikel": "Bermula dari direktori profil mahasiswa internal kampus yang diberi nama Facemash dan TheFacebook...", "SumberURL": "https://id.wikipedia.org/wiki/Mark_Zuckerberg" },
  { "Judul Artikel": "Pentingnya Memahami Valuasi Saham bagi Pemula", Kategori: "Finansial", Tanggal: "18 Jul 2026", "Ringkasan Cuplikan": "Membedakan valuasi perusahaan yang sehat dengan tren spekulasi harga di pasar saham.", "Isi Lengkap Artikel": "Membeli saham sejatinya adalah membeli kepemilikan bisnis, bukan sekadar menebak naik-turunnya grafik lilin...", "SumberURL": "https://www.ojk.go.id" }
];

// 2. FUNGSI RENDER WADAH CATATAN
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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" id="blog-container"></div>
  `;

  renderBlogCards(dataCatatanBlog);
}

// 3. FUNGSI RENDER KARTU ARTIKEL
function renderBlogCards(list) {
  const blogBox = document.getElementById('blog-container');
  const daftar = list || dataCatatanBlog;
  if (!blogBox || !daftar) return;

  blogBox.innerHTML = daftar.map((b, idx) => `
    <article onclick="bukaModalBlog(${idx})" class="smooth-zoom-card p-6 rounded-3xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 cursor-pointer group flex flex-col justify-between shadow-sm hover:border-sky-500 transition duration-300 space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 font-bold">${b.Kategori}</span>
          <span class="text-slate-400">${b.Tanggal}</span>
        </div>
        <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-sky-500 transition leading-snug">${b['Judul Artikel']}</h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2">${b['Ringkasan Cuplikan']}</p>
      </div>
      <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-sky-500">
        <span>Baca Selengkapnya</span>
        <span class="group-hover:translate-x-1 transition">→</span>
      </div>
    </article>
  `).join('');
}

// 4. FUNGSI FILTER PENCARIAN
function cariBlog() {
  const q = document.getElementById('blog-search').value.toLowerCase();
  const hasil = dataCatatanBlog.filter(b => 
    b['Judul Artikel'].toLowerCase().includes(q) || 
    b['Ringkasan Cuplikan'].toLowerCase().includes(q)
  );
  renderBlogCards(hasil);
}

// 5. FUNGSI BACA ARTIKEL (MODAL POP-UP)
function bukaModalBlog(idx) {
  const b = dataCatatanBlog[idx];
  if (!b) return;
  document.getElementById('modal-cat').innerText = b.Kategori;
  document.getElementById('modal-tgl').innerText = b.Tanggal;
  document.getElementById('modal-judul').innerText = b['Judul Artikel'];
  document.getElementById('modal-isi').innerText = b['Isi Lengkap Artikel'] || b['Ringkasan Cuplikan'];
  const sumberEl = document.getElementById('modal-sumber');
  if (b.SumberURL) {
    sumberEl.innerHTML = `Referensi: <a href="${b.SumberURL}" target="_blank" class="text-sky-500 underline font-semibold ml-1">${b.SumberURL}</a>`;
  } else {
    sumberEl.innerHTML = "";
  }
  document.getElementById('modal-reader').classList.remove('hidden');
}

function tutupModal() { 
  document.getElementById('modal-reader').classList.add('hidden'); 
}