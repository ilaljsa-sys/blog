// script.js - Core Engine, Database & Router Navigasi

const APPS_SCRIPT_API_URL = "https://script.google.com/macros/s/AKfycbzelb8A39t38A_oYlNut4MVfsO5KzcbaWm7Azt3Gl3qqlAg79J4CsVWygQ5zhJu93dz1g/exec";

let localDB = {
  profil: { 
    nama_lengkap: "I'lal Jalalludin Syahputra", 
    teks_ketik: "Mahasiswa Hukum, Japanese Learner, Livestock Farm", 
    quote: "Kebodohan bukan ketika seseorang belum mengetahui, melainkan ketika ia menutup telinga karena terlalu yakin bahwa dirinya telah mengetahui."
  },
  pendidikan: [
    { "Nama Instansi": "TK Roudhotul Ilmi", "Jurusan / Tingkat": "Pendidikan Kanak", "Tahun": "2011-2013", "Status": "Lulus" },
    { "Nama Instansi": "MI Mathala'ul Anwar", "Jurusan / Tingkat": "Pendidikan Dasar", "Tahun": "2013-2018", "Status": "Lulus" },
    { "Nama Instansi": "Mts Negeri 2 Pringsewu", "Jurusan / Tingkat": "Pendidikan Menengah", "Tahun": "2018-2021", "Status": "Lulus" },
    { "Nama Instansi": "SMK Negeri Sukoharjo", "Jurusan / Tingkat": "Pendidikan Atas (DKV)", "Tahun": "2021-2024", "Status": "Lulus" },
    { "Nama Instansi": "Universitas Terbuka", "Jurusan / Tingkat": "Ilmu Hukum • S1", "Tahun": "Aktif", "Status": "Aktif" }
  ],
  blog: [
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
  ],
  tugas: [
    { "Mata Kuliah": "Pengantar Ilmu Hukum", "Judul Makalah / Tugas": "Asas Kepastian Hukum Pidana", Semester: "Semester 1", "Link PDF Drive": "#" },
    { "Mata Kuliah": "Hukum Tata Negara", "Judul Makalah / Tugas": "Analisis Asas Legalitas Regulasi", Semester: "Semester 1", "Link PDF Drive": "#" }
  ]
};

function initTheme() {
  const html = document.documentElement;
  const body = document.getElementById('body-root');
  html.classList.add('dark');
  body.classList.remove('bg-slate-50', 'text-slate-900', 'bg-dots-light');
  body.classList.add('bg-neutralDark', 'text-slate-100', 'bg-dots-dark');
  localStorage.removeItem('theme');
}

function toggleTheme() {
  const html = document.documentElement;
  const body = document.getElementById('body-root');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    body.classList.remove('bg-neutralDark', 'text-slate-100', 'bg-dots-dark');
    body.classList.add('bg-slate-50', 'text-slate-900', 'bg-dots-light');
  } else {
    html.classList.add('dark');
    body.classList.remove('bg-slate-50', 'text-slate-900', 'bg-dots-light');
    body.classList.add('bg-neutralDark', 'text-slate-100', 'bg-dots-dark');
  }
}

function updateNavIndicator(activeButton) {
  const indicator = document.getElementById('nav-indicator');
  if (!indicator || !activeButton) return;
  indicator.style.width = `${activeButton.offsetWidth}px`;
  indicator.style.height = `${activeButton.offsetHeight}px`;
  indicator.style.left = `${activeButton.offsetLeft}px`;
  indicator.style.top = `${activeButton.offsetTop}px`;
}

function pindahTab(nama, el) {
  const tabs = ['beranda', 'tentang', 'skills', 'blog', 'eksplor'];
  tabs.forEach(s => {
    const sec = document.getElementById(`sec-${s}`);
    if(sec) {
      if (s === nama) {
        sec.classList.remove('hidden'); sec.classList.remove('page-tab-enter'); void sec.offsetWidth; sec.classList.add('page-tab-enter');
      } else { sec.classList.add('hidden'); }
    }
  });
  document.querySelectorAll('.tab-item').forEach(btn => {
    btn.classList.remove('text-sky-600', 'dark:text-sky-400', 'font-black');
    btn.classList.add('text-slate-600', 'dark:text-slate-400', 'font-bold');
  });
  if (el) {
    el.classList.remove('text-slate-600', 'dark:text-slate-400');
    el.classList.add('text-sky-600', 'dark:text-sky-400', 'font-black');
    updateNavIndicator(el);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function pindahTabByName(nama) {
  const targetMap = { 'beranda': 'beranda', 'tentang': 'tentang', 'keahlian': 'skills', 'catatan': 'blog', 'eksplor': 'eksplor' };
  const targetId = targetMap[nama.toLowerCase()] || nama.toLowerCase();
  const targetBtn = Array.from(document.querySelectorAll('.tab-item')).find(b => b.innerText.toLowerCase().includes(nama.toLowerCase()));
  if (targetBtn) {
    pindahTab(targetId, targetBtn);
  } else {
    pindahTab(targetId, null);
  }
}

function bukaModalAnon() { 
  document.getElementById('anon-pesan-input').value = ""; 
  document.getElementById('anon-status').classList.add('hidden'); 
  document.getElementById('modal-anon').classList.remove('hidden'); 
}

function tutupModalAnon() { 
  document.getElementById('modal-anon').classList.add('hidden'); 
}

async function kirimPesanAnonim() {
  const pesan = document.getElementById('anon-pesan-input').value.trim();
  const status = document.getElementById('anon-status');
  if (!pesan) { status.classList.remove('hidden'); status.innerText = "Tulis pesan dulu!"; return; }
  try {
    await fetch(APPS_SCRIPT_API_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ pesan: pesan }) });
    status.classList.remove('hidden'); status.classList.add('text-emerald-500'); status.innerText = "✓ Pesan rahasia berhasil terkirim!";
    setTimeout(() => tutupModalAnon(), 1500);
  } catch (e) { status.classList.remove('hidden'); status.innerText = "Gagal kirim pesan."; }
}

function toggleAudio() {
  const audioEl = document.getElementById('bg-audio');
  const btn = document.getElementById('btn-audio');
  const status = document.getElementById('audio-status');
  if (audioEl.paused) {
    audioEl.play();
    btn.innerText = "❚❚";
    status.innerText = "Memutar ♫";
  } else {
    audioEl.pause();
    btn.innerText = "▶";
    status.innerText = "Jeda (Klik putar)";
  }
}

async function muatDataSheets() {
  if (APPS_SCRIPT_API_URL) {
    try {
      const res = await fetch(APPS_SCRIPT_API_URL);
      const data = await res.json();
      if (data && data.status === "success") {
        if (data.profil && Object.keys(data.profil).length > 0) localDB.profil = data.profil;
        if (data.pendidikan && data.pendidikan.length > 0) localDB.pendidikan = data.pendidikan;
        if (data.blog && data.blog.length > 0) {
          const existingTitles = new Set(localDB.blog.map(b => b['Judul Artikel']));
          data.blog.forEach(item => {
            if (!existingTitles.has(item['Judul Artikel'])) {
              localDB.blog.unshift(item);
            }
          });
        }
        if (data.tugas && data.tugas.length > 0) localDB.tugas = data.tugas;
      }
    } catch (err) {
      console.log("Menggunakan data lokal cadangan:", err);
    }
  }

  // Update render ulang jika data Sheets selesai di-fetch
  if (document.getElementById('hero-nama')) document.getElementById('hero-nama').innerText = localDB.profil.nama_lengkap;
  if (document.getElementById('hero-quote')) document.getElementById('hero-quote').innerText = localDB.profil.quote;
  renderPendidikan(localDB.pendidikan);
  renderBlogCards(localDB.blog);
}

window.onload = function() { 
  initTheme(); 
  
  // Render semua halaman dari komponen modular masing-masing
  renderBeranda(localDB.profil);
  renderTentang(localDB.pendidikan);
  renderKeahlian();
  renderCatatan();
  
  mulaiTypewriter(["Mahasiswa Hukum", "Japanese Learner", "Livestock Farm"]);
  muatDataSheets();
  
  // Inisialisasi posisi indikator tab pertama kali
  const firstTab = document.querySelector('.tab-item');
  if (firstTab) updateNavIndicator(firstTab);
};
