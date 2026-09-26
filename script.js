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

function getKamusPath() {
  const scripts = document.querySelectorAll('script[src]');
  for (let i = 0; i < scripts.length; i++) {
    const src = scripts[i].getAttribute('src') || '';
    if (src.includes('script.js')) {
      return src.replace('script.js', 'kamus.js');
    }
  }
  return './kamus.js';
}

function loadKamusScript(callback) {
  if (typeof window.bukaModalKamus === 'function') {
    if (callback) callback();
    return;
  }
  let s = document.querySelector('script[data-kamus="true"]');
  if (!s) {
    s = document.createElement('script');
    s.setAttribute('data-kamus', 'true');
    s.src = getKamusPath();
    s.onload = () => {
      if (callback) callback();
    };
    document.head.appendChild(s);
  } else if (callback) {
    s.addEventListener('load', callback, { once: true });
  }
}

loadKamusScript();

window.bukaModalShortcut = function() {
  let modal = document.getElementById('modal-shortcut');
  if (modal) {
    modal.classList.remove('hidden');
    return;
  }

  const modalHtml = `
    <div id="modal-shortcut" class="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div class="bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-lg p-6 sm:p-7 space-y-5 shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-black text-sm">⌨</div>
            <div>
              <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">Pintasan Keyboard</h3>
              <p class="text-[10px] text-slate-400 font-medium">Navigasi cepat keyboard</p>
            </div>
          </div>
          <button onclick="window.tutupModalShortcut()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold transition">✕</button>
        </div>

        <div class="space-y-4 max-h-[60vh] overflow-y-auto pr-1 kuis-scrollbar text-xs">
          <div class="space-y-2">
            <h4 class="font-black text-sky-500 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span>Mode Kuis JLPT</span>
            </h4>
            <div class="grid grid-cols-1 gap-1.5 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800/80">
              <div class="flex items-center justify-between py-1">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Pilih Jawaban Opsi</span>
                <div class="flex items-center gap-1"><kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">A</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">B</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">C</kbd> <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">D</kbd> <span class="text-slate-400 text-[10px]">atau</span> <kbd class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">1-4</kbd></div>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Lewati Soal (Skip)</span>
                <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">→</kbd>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Kembali ke Soal Sebelumnya</span>
                <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">←</kbd>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Lanjut setelah Pembahasan</span>
                <div class="flex items-center gap-1"><kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">Enter</kbd> <span class="text-slate-400 text-[10px]">atau</span> <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">Spasi</kbd></div>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Putar Audio Soal</span>
                <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">P</kbd>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <h4 class="font-black text-sky-500 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span>Mode Flashcard</span>
            </h4>
            <div class="grid grid-cols-1 gap-1.5 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800/80">
              <div class="flex items-center justify-between py-1">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Kartu Berikutnya</span>
                <div class="flex items-center gap-1"><kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">→</kbd> <span class="text-slate-400 text-[10px]">atau</span> <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">D</kbd></div>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Kartu Sebelumnya</span>
                <div class="flex items-center gap-1"><kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">←</kbd> <span class="text-slate-400 text-[10px]">atau</span> <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">A</kbd></div>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Balik Kartu (Flip)</span>
                <div class="flex items-center gap-1"><kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">Spasi</kbd> <span class="text-slate-400 text-[10px]">atau</span> <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">Enter</kbd></div>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Tandai Sudah Hafal</span>
                <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">M</kbd>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Sensor Kotoba (1: Kanji, 2: Baca, 3: Arti)</span>
                <div class="flex items-center gap-1"><kbd class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">1</kbd> <kbd class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">2</kbd> <kbd class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">3</kbd></div>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <h4 class="font-black text-sky-500 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span>Umum & Navigasi</span>
            </h4>
            <div class="grid grid-cols-1 gap-1.5 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200 dark:border-slate-800/80">
              <div class="flex items-center justify-between py-1">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Kamus Pintar</span>
                <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">Ctrl + K / ⌘K</kbd>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Ganti Tema Gelap / Terang</span>
                <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">T</kbd>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Bantuan Pintasan</span>
                <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">?</kbd>
              </div>
              <div class="flex items-center justify-between py-1 border-t border-slate-200/60 dark:border-slate-800/60">
                <span class="text-slate-600 dark:text-slate-300 font-medium">Tutup Modal</span>
                <kbd class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700">Esc</kbd>
              </div>
            </div>
          </div>
        </div>

        <button onclick="window.tutupModalShortcut()" class="w-full py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs transition active:scale-95 shadow-md">
          Tutup
        </button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

window.tutupModalShortcut = function() {
  const modal = document.getElementById('modal-shortcut');
  if (modal) modal.remove();
};

window._kamusKeydownBound = true;
window.addEventListener('keydown', (e) => {
  const isCmdOrCtrl = !!(e.metaKey || e.ctrlKey);
  const isK = (e.key && (e.key === 'k' || e.key === 'K')) || e.code === 'KeyK' || e.keyCode === 75 || e.which === 75;

  if (isCmdOrCtrl && isK) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    const selectedText = window.getSelection ? window.getSelection().toString().trim() : '';
    if (typeof window.toggleModalKamus === 'function') {
      window.toggleModalKamus(selectedText);
    } else if (typeof window.bukaModalKamus === 'function') {
      const modal = document.getElementById('modal-kamus');
      if (modal && !modal.classList.contains('hidden')) {
        window.tutupModalKamus();
      } else {
        window.bukaModalKamus(selectedText);
      }
    } else {
      loadKamusScript(() => {
        if (typeof window.toggleModalKamus === 'function') {
          window.toggleModalKamus(selectedText);
        } else if (typeof window.bukaModalKamus === 'function') {
          window.bukaModalKamus(selectedText);
        }
      });
    }
    return;
  }

  if (e.key === 'Escape') {
    const modalS = document.getElementById('modal-shortcut');
    if (modalS) {
      e.preventDefault();
      window.tutupModalShortcut();
      return;
    }
    const modalK = document.getElementById('modal-kamus');
    if (modalK && !modalK.classList.contains('hidden')) {
      e.preventDefault();
      if (typeof window.tutupModalKamus === 'function') window.tutupModalKamus();
      return;
    }
  }

  const activeEl = document.activeElement;
  if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable)) {
    return;
  }

  if (e.key === '?' || (e.shiftKey && (e.key === '/' || e.code === 'Slash'))) {
    e.preventDefault();
    window.bukaModalShortcut();
    return;
  }

  if (e.key === 't' || e.key === 'T') {
    e.preventDefault();
    if (typeof toggleTheme === 'function') {
      toggleTheme();
    }
    return;
  }
}, true);
