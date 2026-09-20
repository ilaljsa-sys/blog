// =========================================================================
// MODUL ARSIP TUGAS - SECURE PIN PROTECTED (PIN: 2006)
// =========================================================================

const KUNCI_PIN_TUGAS = "2006";

// SVG Icon Gembok Minimalis
const SVG_LOCK = `<svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>`;

const DAFTAR_BERKAS_TUGAS = [
  {
    judul: "Asas Kepastian Hukum Pidana",
    matkul: "Pengantar Ilmu Hukum",
    semester: "Semester 1",
    fileUrl: "#"
  },
  {
    judul: "Analisis Asas Legalitas Regulasi",
    matkul: "Hukum Tata Negara",
    semester: "Semester 1",
    fileUrl: "#"
  }
];

// Helper kontrol navigasi mobile & widget audio
function kelolaNavigasiMobileTugas(sembunyikan) {
  if (typeof window.aturVisibilitasNavigasiMobile === "function") {
    window.aturVisibilitasNavigasiMobile(sembunyikan);
    return;
  }
  const selectors = [
    "#bottom-navbar-mobile",
    "#ambient-audio-widget",
    "nav.fixed.bottom-0",
    "#bottom-nav"
  ];
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.style.display = sembunyikan ? "none" : "";
  });
}

// 1. FUNGSI UTAMA PEMANGGIL ARSIP TUGAS
window.bukaModulTugas = function() {
  kelolaNavigasiMobileTugas(true);

  const display = document.getElementById("eksplor-detail-display");
  const menuUtama = document.getElementById("eksplor-menu-utama");

  if (menuUtama) menuUtama.classList.add("hidden");
  if (!display) return;
  display.classList.remove("hidden");

  const sudahBukaKunci = sessionStorage.getItem("akses_arsip_tugas") === "true";

  if (sudahBukaKunci) {
    window.renderDaftarTugas();
  } else {
    window.renderLayarKunciTugas();
  }
  window.scrollTo(0, 0);
};

// 2. TAMPILAN MODAL KUNCI PASSWORD (PIN ENTRY DENGAN SVG LOCK)
window.renderLayarKunciTugas = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  display.innerHTML = `
    <div class="w-full max-w-sm mx-auto px-4 py-16 text-center space-y-6">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
        <button onclick="window.tutupDisplayTugas()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali</span>
        </button>
        <span class="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wide">Terkunci</span>
      </div>

      <div class="w-16 h-16 rounded-3xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto shadow-inner">
        ${SVG_LOCK}
      </div>

      <div class="space-y-1.5">
        <h3 class="text-xl font-black text-slate-900 dark:text-white">Arsip Berkas Studi Hukum</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Area arsip ini bersifat privat. Masukkan kode akses untuk membuka dokumen.
        </p>
      </div>

      <div class="space-y-3 max-w-xs mx-auto">
        <div class="relative">
          <input 
            type="password" 
            id="input-pin-tugas" 
            maxlength="8" 
            placeholder="••••" 
            onkeydown="if(event.key==='Enter') window.verifikasiPinTugas()"
            class="w-full py-3 px-4 text-center tracking-widest text-lg font-mono font-black rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition shadow-inner"
            autofocus
          >
        </div>
        <p id="pesan-error-pin" class="text-[11px] font-bold text-rose-500 hidden">Password salah! Silakan coba lagi.</p>

        <button 
          onclick="window.verifikasiPinTugas()" 
          class="w-full py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-black shadow-md transition transform active:scale-95"
        >
          Buka Berkas Arsip
        </button>
      </div>
    </div>
  `;
};

// 3. LOGIKA VERIFIKASI PASSWORD
window.verifikasiPinTugas = function() {
  const input = document.getElementById("input-pin-tugas");
  const pesanError = document.getElementById("pesan-error-pin");
  if (!input) return;

  if (input.value.trim() === KUNCI_PIN_TUGAS) {
    sessionStorage.setItem("akses_arsip_tugas", "true");
    window.renderDaftarTugas();
  } else {
    input.value = "";
    input.classList.add("border-rose-500");
    if (pesanError) pesanError.classList.remove("hidden");
    input.focus();
  }
};

// 4. TAMPILAN BERKAS TUGAS JIKA BENAR
window.renderDaftarTugas = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const itemHtml = DAFTAR_BERKAS_TUGAS.map(item => `
    <div class="p-4 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shadow-sm hover:border-sky-500/40 transition">
      <div class="space-y-1 min-w-0">
        <h4 class="text-sm font-black text-slate-900 dark:text-white truncate">${item.judul}</h4>
        <p class="text-xs text-slate-400 truncate">${item.matkul}</p>
        <span class="text-[10px] font-mono font-bold text-sky-400 block">• ${item.semester}</span>
      </div>
      <a 
        href="${item.fileUrl}" 
        target="_blank" 
        class="px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold shrink-0 transition shadow-sm inline-flex items-center gap-1"
      >
        Unduh PDF
      </a>
    </div>
  `).join("");

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16 space-y-5">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <button onclick="window.tutupDisplayTugas()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali ke Menu</span>
        </button>
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">Terbuka</span>
          <button onclick="sessionStorage.removeItem('akses_arsip_tugas'); window.renderLayarKunciTugas();" class="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-400 text-xs transition" title="Kunci Kembali">
            🔒
          </button>
        </div>
      </div>

      <div class="text-center space-y-1">
        <span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[11px] font-bold">Fakultas Hukum</span>
        <h3 class="text-xl lg:text-2xl font-black text-slate-900 dark:text-white pt-1">Arsip Berkas Studi Hukum</h3>
        <p class="text-xs text-slate-400">Daftar laporan, analisis, dan makalah perkuliahan pribadi.</p>
      </div>

      <div class="space-y-3 pt-2">
        ${itemHtml}
      </div>
    </div>
  `;
};

// 5. TUTUP DISPLAY
window.tutupDisplayTugas = function() {
  kelolaNavigasiMobileTugas(false);
  const display = document.getElementById("eksplor-detail-display");
  const menuUtama = document.getElementById("eksplor-menu-utama");
  if (display) display.classList.add("hidden");
  if (menuUtama) menuUtama.classList.remove("hidden");
  window.scrollTo(0, 0);
};