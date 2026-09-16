// DATABASE LOKAL (Cadangan jika Google Sheets belum siap)
const localDB = {
  profil: {
    nama: "I'lal Jalalludin Syahputra",
    bioSingkat: "Fokus: Japanese | Perunggasan",
    quotePrinsip: "Kebodohan bukan ketika seseorang belum mengetahui, melainkan ketika ia menutup telinga karena terlajuk yakin bahwa dirinya telah mengetahui.",
    quoteAuthor: "I'lal Jalalludin Syahputra"
  },
  pendidikan: [
    { tahun: "2010 - 2011", tingkat: "TK PGRI 1 Pematang Pasir", deskripsi: "Masa pengenalan lingkungan dan pengembangan minat bermain.", lokasi: "Ketapang, Lampung Selatan" },
    { tahun: "2011 - 2017", tingkat: "SDN 1 Pematang Pasir", deskripsi: "Pendidikan dasar, pembentukan kedisiplinan dan literasi.", lokasi: "Ketapang, Lampung Selatan" },
    { tahun: "2017 - 2020", tingkat: "SMPN 2 Ketapang", deskripsi: "Aktif organisasi kepemudaan, eksplorasi teknologi informasi awal.", lokasi: "Ketapang, Lampung Selatan" },
    { tahun: "2020 - 2023", tingkat: "SMKN 1 Sukoharjo", deskripsi: "Jurusan Desain Komunikasi Visual (DKV). Menguasai graphic design, branding, visual composition.", lokasi: "Sukoharjo, Jawa Tengah" },
    { tahun: "2025 - Sekarang", tingkat: "Universitas Terbuka (Ilmu Hukum)", deskripsi: "Mendalami hukum perdata, pidana, dan administrasi negara.", lokasi: "Pendidikan Tinggi Jarak Jauh" }
  ],
  blog: [
    { id: 1, kategori: "Sejarah Bisnis", tanggal: "12 Sep 2026", judul: "Kisah Steve Jobs & Garasi Apple: Dari Hobi Menjadi Raksasa", cuplikan: "Bagaimana ketekunan Steve Jobs dan Steve Wozniak mengubah komputer pribadi jadi revolusi global.", isi: "Apple bermula dari sebuah garasi sederhana keluarga Jobs di Los Altos, California pada tahun 1976...", linkSumber: "https://www.apple.com" },
    { id: 2, kategori: "Finansial", tanggal: "10 Sep 2026", judul: "Mengenal Berbagai Jenis Investor Saham: Panduan Finansial", cuplikan: "Membahas tuntas profil dan gaya investor dari Value Investor, Growth, hingga Day Trader.", isi: "Pasar modal menawarkan ruang investasi beragam...", linkSumber: "" }
  ],
  tugas: [
    { judul: "Analisis Yuridis Perlindungan Konsumen Digital", matkul: "Hukum Perlindungan Konsumen", tgl: "Agu 2026", link: "https://drive.google.com" },
    { judul: "Tinjauan Regulasi Ketenagakerjaan Sektor Informal", matkul: "Hukum Ketenagakerjaan", tgl: "Jul 2026", link: "https://drive.google.com" }
  ]
};

// PENGATUR TEMA (Dark/Light)
function initTheme() {
  const isDark = localStorage.getItem('theme') !== 'light';
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// NAVIGASI TAB DENGAN URL HASH (#beranda, #tentang, dll)
function pindahTab(nama, el, updateUrl = true) {
  const tabs = ['beranda', 'tentang', 'skills', 'blog', 'eksplor'];
  tabs.forEach(s => {
    const sec = document.getElementById(`sec-${s}`);
    if (sec) {
      if (s === nama) {
        sec.classList.remove('hidden');
        sec.classList.remove('page-tab-enter');
        void sec.offsetWidth;
        sec.classList.add('page-tab-enter');
      } else {
        sec.classList.add('hidden');
      }
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

  // Update URL di browser secara dinamis
  if (updateUrl) {
    history.pushState(null, '', `#${nama}`);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function pindahTabByName(nama) {
  const map = {
    'beranda': 'beranda',
    'tentang': 'tentang',
    'keahlian': 'skills',
    'skills': 'skills',
    'catatan': 'blog',
    'blog': 'blog',
    'eksplor': 'eksplor'
  };
  const targetTab = map[nama] || 'beranda';
  const btns = Array.from(document.querySelectorAll('.tab-item'));
  const targetBtn = btns.find(b => b.innerText.toLowerCase().includes(nama));
  pindahTab(targetTab, targetBtn || btns[0]);
}

function updateNavIndicator(targetEl) {
  const ind = document.getElementById('nav-indicator');
  if (!ind || !targetEl) return;
  ind.style.width = `${targetEl.offsetWidth}px`;
  ind.style.height = `${targetEl.offsetHeight}px`;
  ind.style.left = `${targetEl.offsetLeft}px`;
  ind.style.top = `${targetEl.offsetTop}px`;
}

// BACA URL HASH (Saat web pertama dibuka / tombol Back di-klik)
function handleHashRoute() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  const routeMap = {
    'beranda': 'beranda',
    'tentang': 'tentang',
    'keahlian': 'skills',
    'skills': 'skills',
    'catatan': 'blog',
    'blog': 'blog',
    'eksplor': 'eksplor'
  };

  const targetTab = routeMap[hash] || 'beranda';
  const btns = Array.from(document.querySelectorAll('.tab-item'));
  const targetBtn = btns.find(b => 
    b.innerText.toLowerCase().includes(hash) || 
    (hash === 'skills' && b.innerText.toLowerCase().includes('keahlian')) ||
    (hash === 'blog' && b.innerText.toLowerCase().includes('catatan'))
  );

  pindahTab(targetTab, targetBtn || btns[0], false);
}

window.addEventListener('popstate', handleHashRoute);

// AUDIO AMBIENT
function toggleAudio() {
  const audio = document.getElementById('bg-audio');
  const btn = document.getElementById('btn-audio');
  const status = document.getElementById('audio-status');
  if (!audio) return;

  if (audio.paused) {
    audio.play();
    if (btn) btn.innerText = '⏸';
    if (status) status.innerText = 'Memutar musik chill';
  } else {
    audio.pause();
    if (btn) btn.innerText = '▶';
    if (status) status.innerText = 'Jeda (Klik putar)';
  }
}

// PESAN ANONIM
function bukaModalAnon() {
  const m = document.getElementById('modal-anon');
  if (m) m.classList.remove('hidden');
}

function tutupModalAnon() {
  const m = document.getElementById('modal-anon');
  if (m) m.classList.add('hidden');
}

function kirimPesanAnonim() {
  const inp = document.getElementById('anon-pesan-input');
  const stat = document.getElementById('anon-status');
  if (!inp || !inp.value.trim()) return;

  stat.classList.remove('hidden');
  stat.className = "text-xs font-bold text-center text-sky-500";
  stat.innerText = "Mengirim pesan...";

  // Simulasi sukses
  setTimeout(() => {
    stat.className = "text-xs font-bold text-center text-emerald-500";
    stat.innerText = "Pesan terkirim dengan rahasia!";
    inp.value = "";
    setTimeout(() => {
      tutupModalAnon();
      stat.classList.add('hidden');
    }, 1500);
  }, 1000);
}

// INTEGRASI GOOGLE SHEETS
async function muatDataSheets() {
  // Opsional: jika memiliki endpoint Google Apps Script
}

// SAAT HALAMAN PERTAMA KALI SELESAI DIMUAT
window.onload = function() {
  initTheme();

  // Render komponen halaman
  if (typeof renderBeranda === 'function') renderBeranda(localDB.profil);
  if (typeof renderTentang === 'function') renderTentang(localDB.pendidikan);
  if (typeof renderKeahlian === 'function') renderKeahlian();
  if (typeof renderCatatan === 'function') renderCatatan();

  if (typeof mulaiTypewriter === 'function') {
    mulaiTypewriter(["Mahasiswa Hukum", "Japanese Learner", "Livestock Farm"]);
  }

  // Cek dan sesuaikan tab berdasarkan hashtag di URL
  handleHashRoute();
};
