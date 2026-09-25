const SUPABASE_URL = "https://maleqbfrpboaqeqshsiy.supabase.co";
const SUPABASE_KEY = "sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG";

window.supabaseClient = (window.supabase && window.supabase.createClient) 
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) 
  : null;

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

function bukaModalAnon() { 
  const input = document.getElementById('anon-pesan-input');
  const status = document.getElementById('anon-status');
  const modal = document.getElementById('modal-anon');
  if (input) input.value = ""; 
  if (status) {
    status.classList.add('hidden');
    status.classList.remove('text-emerald-500', 'text-rose-500');
  }
  if (modal) modal.classList.remove('hidden'); 
}

function tutupModalAnon() { 
  const modal = document.getElementById('modal-anon');
  if (modal) modal.classList.add('hidden'); 
}

async function kirimPesanAnonim() {
  const input = document.getElementById('anon-pesan-input');
  const status = document.getElementById('anon-status');
  const pesan = input ? input.value.trim() : "";

  if (!pesan) { 
    if (status) { 
      status.classList.remove('hidden'); 
      status.classList.add('text-rose-400');
      status.innerText = "Tulis pesan dulu!"; 
    }
    return; 
  }

  if (!window.supabaseClient) {
    if (status) {
      status.classList.remove('hidden');
      status.classList.add('text-rose-400');
      status.innerText = "Supabase SDK belum dimuat.";
    }
    return;
  }

  if (status) {
    status.classList.remove('hidden', 'text-rose-400', 'text-emerald-500');
    status.classList.add('text-sky-400');
    status.innerText = "Mengirim pesan...";
  }

  const sekarang = new Date();
  const idUnikBebasBentrok = Date.now();
  const tanggal = sekarang.toISOString().split('T')[0];
  const waktu = sekarang.toTimeString().split(' ')[0];

  try {
    const { error } = await window.supabaseClient
      .from('pesan_anonim')
      .insert([{
        ID: idUnikBebasBentrok,
        Tanggal: tanggal,
        Waktu: waktu,
        Pesan: pesan
      }]);

    if (error) throw error;

    if (status) {
      status.classList.remove('text-sky-400', 'text-rose-400'); 
      status.classList.add('text-emerald-500'); 
      status.innerText = "✓ Pesan rahasia berhasil terkirim!";
    }
    setTimeout(() => tutupModalAnon(), 1500);
  } catch (e) { 
    if (status) { 
      status.classList.remove('hidden', 'text-sky-400'); 
      status.classList.add('text-rose-400');
      status.innerText = "Gagal kirim pesan: " + (e.message || "Error"); 
    }
  }
}

function toggleAudio() {
  const audioEl = document.getElementById('bg-audio');
  const btn = document.getElementById('btn-audio');
  const status = document.getElementById('audio-status');
  if (!audioEl) return;
  if (audioEl.paused) {
    audioEl.play();
    if (btn) btn.innerText = "❚❚";
    if (status) status.innerText = "Memutar ♫";
  } else {
    audioEl.pause();
    if (btn) btn.innerText = "▶";
    if (status) status.innerText = "Jeda (Klik putar)";
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initTheme();
});

(function() {
  if (!document.querySelector('script[src*="kamus.js"]')) {
    const s = document.createElement('script');
    const currentScript = document.currentScript;
    if (currentScript && currentScript.src) {
      s.src = new URL('kamus.js', currentScript.src).href;
    } else {
      s.src = '/kamus.js';
    }
    document.head.appendChild(s);
  }
})();
