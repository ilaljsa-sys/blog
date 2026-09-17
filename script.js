// script.js - Core Engine (Navigasi, Tema, Audio, & Pesan Anonim)

const APPS_SCRIPT_API_URL = "https://script.google.com/macros/s/AKfycbzelb8A39t38A_oYlNut4MVfs05KzcbaWm7Azt3Gl3qqlaAg79J4CsVWygQ5zhJu93dz1g/exec";

// 1. PENGATUR TEMA (DARK / LIGHT)
function initTheme() {
  const html = document.documentElement;
  const body = document.getElementById('body-root');
  if (!body) return;
  html.classList.add('dark');
  body.classList.remove('bg-slate-50', 'text-slate-900', 'bg-dots-light');
  body.classList.add('bg-neutralDark', 'text-slate-100', 'bg-dots-dark');
  localStorage.removeItem('theme');
}

function toggleTheme() {
  const html = document.documentElement;
  const body = document.getElementById('body-root');
  if (!body) return;
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

// 2. NAVIGASI TAB & URL HASH
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

  window.location.hash = nama;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function pindahTabByName(nama) {
  const targetMap = {
    'beranda': 'beranda',
    'tentang': 'tentang',
    'keahlian': 'skills',
    'catatan': 'blog',
    'eksplor': 'eksplor'
  };
  const targetId = targetMap[nama.toLowerCase()] || nama.toLowerCase();
  const targetBtn = Array.from(document.querySelectorAll('.tab-item')).find(b => 
    b.innerText.toLowerCase().includes(nama.toLowerCase())
  );
  pindahTab(targetId, targetBtn || null);
}

// 3. PESAN ANONIM
function bukaModalAnon() {
  const inp = document.getElementById('anon-pesan-input');
  if (inp) inp.value = '';
  const st = document.getElementById('anon-status');
  if (st) st.classList.add('hidden');
  const modal = document.getElementById('modal-anon');
  if (modal) modal.classList.remove('hidden');
}

function tutupModalAnon() {
  const modal = document.getElementById('modal-anon');
  if (modal) modal.classList.add('hidden');
}

async function kirimPesanAnon() {
  const inp = document.getElementById('anon-pesan-input');
  const st = document.getElementById('anon-status');
  const pesan = inp ? inp.value.trim() : '';

  if (!pesan) {
    if (st) {
      st.classList.remove('hidden');
      st.innerText = 'Tulis pesan dulu!';
    }
    return;
  }

  try {
    if (st) {
      st.classList.remove('hidden');
      st.innerText = 'Mengirim pesan...';
    }

    await fetch(APPS_SCRIPT_API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pesan: pesan })
    });

    if (st) st.innerText = 'Pesan rahasia berhasil terkirim!';
    setTimeout(tutupModalAnon, 1200);
  } catch (err) {
    if (st) st.innerText = 'Gagal mengirim pesan.';
  }
}

// 4. PEMUTAR AUDIO AMBIENT
function toggleAudio() {
  const audioEl = document.getElementById('bg-audio');
  const btn = document.getElementById('btn-audio');
  const status = document.getElementById('audio-status');
  if (!audioEl || !btn || !status) return;

  if (audioEl.paused) {
    audioEl.play();
    btn.innerText = '⏸';
    status.innerText = 'Memutar';
  } else {
    audioEl.pause();
    btn.innerText = '▶';
    status.innerText = 'Jeda (Klik putar)';
  }
}

// 5. EVENT LISTENER SISTEM
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  const hash = window.location.hash.replace('#', '').toLowerCase() || 'beranda';
  pindahTabByName(hash);

  const firstTab = document.querySelector('.tab-item');
  if (firstTab) updateNavIndicator(firstTab);
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '').toLowerCase() || 'beranda';
  pindahTabByName(hash);
});
