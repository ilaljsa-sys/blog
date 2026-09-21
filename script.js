// script.js - Core Engine & Router Navigasi Utama Murni

const APPS_SCRIPT_API_URL = "https://script.google.com/macros/s/AKfycby7uH_OZjjEevBl18220gEdg6nQkBL9TPPd3lsB0uy4s1VVqqaDO30cuPjLBMQse82c2w/exec";

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
        if (sec) {
            if (s === nama) {
                sec.classList.remove('hidden');
                sec.classList.remove('page-tab-enter');
                void sec.offsetWidth;
                sec.classList.add('page-tab-enter');

                // TAMBAHAN SET-SET: Kalau cache sheet udah ada, sembunyikan loading
                if (nama === 'eksplor' && localStorage.getItem("cache_data_sheets_ilal")) {
                    const loadingEl = document.getElementById('loading-eksplor');
                    if (loadingEl) loadingEl.classList.add('hidden');
                }
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
        el.classList.add('text-sky-600', 'dark:text-sky-400', 'font-bold');
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

// 1. Jalankan otomatis pas halaman pertama kali dimuat buat curi start (prefetch)
window.addEventListener('DOMContentLoaded', () => {
  muatDataSheets(true);
});

// 2. Fungsi utama yang udah di-upgrade pakai Cache localStorage
async function muatDataSheets(isBackground = false) {
  const kunciCache = "cache_data_sheets_ilal";
  
  const dataLama = localStorage.getItem(kunciCache);
  if (dataLama) {
    try {
      const parsedData = JSON.parse(dataLama);
      prosesDanRenderData(parsedData);
      if (!isBackground) return;
    } catch (e) {
      console.error("Gagal baca cache", e);
    }
  }

  if (APPS_SCRIPT_API_URL) {
    try {
      const res = await fetch(APPS_SCRIPT_API_URL);
      const data = await res.json();
      
      if (data && data.status === "success") {
        localStorage.setItem(kunciCache, JSON.stringify(data));
        prosesDanRenderData(data);
      }
    } catch (err) {
      console.error("Gagal ambil data dari Google Sheets:", err);
    }
  }
}

function prosesDanRenderData(data) {
  if (data.profil && Object.keys(data.profil).length > 0) {
    if (document.getElementById('hero-nama') && data.profil.nama_lengkap) document.getElementById('hero-nama').innerText = data.profil.nama_lengkap;
    if (document.getElementById('hero-quote') && data.profil.quote) document.getElementById('hero-quote').innerText = data.profil.quote;
  }
  if (data.pendidikan && data.pendidikan.length > 0 && typeof renderPendidikan === 'function') {
    renderPendidikan(data.pendidikan);
  }
  if (data.blog && data.blog.length > 0 && typeof renderBlogCards === 'function') {
    const existingTitles = new Set(dataCatatanBlog.map(b => b['Judul Artikel']));
    data.blog.forEach(item => {
      if (!existingTitles.has(item['Judul Artikel'])) {
        dataCatatanBlog.unshift(item);
      }
    });
    renderBlogCards(dataCatatanBlog);
  }
}

window.onload = function() { 
  initTheme(); 
  
  // Render semua halaman dari modul mandirinya masing-masing
  renderBeranda();
  renderTentang();
  renderKeahlian();
  renderCatatan();
  
  muatDataSheets();
  
  const firstTab = document.querySelector('.tab-item');
  if (firstTab) updateNavIndicator(firstTab);
};

// --- ANTI INSPECT & BLOKIR KLIK KANAN ---
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
  if (
    e.key === 'F12' || 
    ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'i', 'C', 'c', 'J', 'j'].includes(e.key)) ||
    ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u'))
  ) {
    e.preventDefault();
    return false;
  }
});



// =============================================================================
// 🌐 UNIVERSAL HASH ROUTER (Navigasi Langsung Per Menu & Sub-Fitur)
// =============================================================================
(function() {
  function jalankanNavigasiHash() {
    try {
      let rawHash = window.location.hash.toLowerCase().trim();
      if (!rawHash || rawHash === '#' || rawHash === '#/') return;

      // Bersihkan tanda # dan slash di awal/akhir
      let route = rawHash.replace(/^#\/?/, '').replace(/\/$/, '');

      // Helper untuk klik elemen berdasarkan kata kunci (jika fungsi JS langsung tidak ada)
      function triggerKlik(kunci) {
        const selector = [
          `[onclick*="${kunci}"]`,
          `[data-tab*="${kunci}"]`,
          `[data-page*="${kunci}"]`,
          `[data-menu*="${kunci}"]`,
          `#btn-${kunci}`,
          `#tab-${kunci}`,
          `#nav-${kunci}`,
          `#${kunci}`
        ].join(',');
        
        const el = document.querySelector(selector);
        if (el) {
          el.click();
          return true;
        }
        return false;
      }

      // Daftar Mapping Rute ke Fungsi Halaman / Klik Otomatis
      switch (route) {
        // --- 1. PAGES / MENU UTAMA ---
        case 'beranda':
        case 'home':
          if (typeof renderBeranda === 'function') renderBeranda();
          else triggerKlik('beranda');
          break;

        case 'catatan':
        case 'blog':
          if (typeof renderCatatan === 'function') renderCatatan();
          else triggerKlik('catatan');
          break;

        case 'tentang':
        case 'about':
          if (typeof renderTentang === 'function') renderTentang();
          else triggerKlik('tentang');
          break;

        case 'keahlian':
        case 'skills':
        case 'skill':
          if (typeof renderKeahlian === 'function') renderKeahlian();
          else triggerKlik('keahlian');
          break;

        // --- 2. EKSPLOR HUB ---
        case 'eksplor':
        case 'explore':
          if (typeof renderEksplor === 'function') renderEksplor();
          else triggerKlik('eksplor');
          break;

        // --- 3. EKSPLOR: AL-QURAN ---
        case 'alquran':
        case 'eksplor/alquran':
        case 'quran':
          if (typeof renderAlquran === 'function') renderAlquran();
          else if (typeof initAlquran === 'function') initAlquran();
          else triggerKlik('alquran');
          break;

        // --- 4. EKSPLOR: TUGAS KULIAH ---
        case 'tugas':
        case 'eksplor/tugas':
        case 'tugaskuliah':
        case 'tugas-kuliah':
          if (typeof renderTugas === 'function') renderTugas();
          else if (typeof initTugas === 'function') initTugas();
          else triggerKlik('tugas');
          break;

        // --- 5. EKSPLOR: PERSIAPAN JLPT N3 ---
        case 'n3':
        case 'eksplor/n3':
        case 'jlpt':
        case 'jlptn3':
          if (typeof renderN3 === 'function') renderN3();
          else if (typeof initN3 === 'function') initN3();
          else if (typeof muatDataN3 === 'function') muatDataN3();
          else triggerKlik('n3');
          break;

        default:
          // Cadangan darurat: jika rute tidak ada di daftar, cari elemen dengan ID sama
          triggerKlik(route);
          break;
      }
    } catch (err) {
      console.warn("Router info:", err);
    }
  }

  // Jalankan saat halaman pertama kali selesai dimuat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(jalankanNavigasiHash, 300);
    });
  } else {
    setTimeout(jalankanNavigasiHash, 300);
  }

  // Jalankan otomatis jika user mengetik atau mengganti hash di URL
  window.addEventListener('hashchange', jalankanNavigasiHash);
})();
