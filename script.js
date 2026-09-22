// script.js - Core Engine Global (Multi-Page Version)

const APPS_SCRIPT_API_URL = "https://script.google.com/macros/s/AKfycby7uH_OZjjEevBl18220gEdg6nQkBL9TPPd3lsB0uy4s1VVqqaDO30cuPjLBMQse82c2w/exec";

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
  if (status) status.classList.add('hidden'); 
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
    if (status) { status.classList.remove('hidden'); status.innerText = "Tulis pesan dulu!"; }
    return; 
  }
  try {
    await fetch(APPS_SCRIPT_API_URL, { 
      method: "POST", 
      mode: "no-cors", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ pesan: pesan }) 
    });
    if (status) {
      status.classList.remove('hidden'); 
      status.classList.add('text-emerald-500'); 
      status.innerText = "✓ Pesan rahasia berhasil terkirim!";
    }
    setTimeout(() => tutupModalAnon(), 1500);
  } catch (e) { 
    if (status) { status.classList.remove('hidden'); status.innerText = "Gagal kirim pesan."; }
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

// Prefetch data sheets di background
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
});