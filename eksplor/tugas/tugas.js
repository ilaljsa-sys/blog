const KUNCI_PIN_TUGAS = "2006";

const SVG_LOCK = `<svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>`;
const SVG_LOCK_SM = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>`;

let daftarBerkasTugas = [];

function kelolaNavigasiMobileTugas(sembunyikan) {
  if (typeof window.aturVisibilitasNavigasiMobile === "function") {
    window.aturVisibilitasNavigasiMobile(sembunyikan);
    return;
  }
  const selectors = ["#bottom-navbar-mobile", "#ambient-audio-widget", "nav.fixed.bottom-0", "#bottom-nav"];
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) el.style.display = sembunyikan ? "none" : "";
  });
}

window.bukaModulTugas = function() {
  kelolaNavigasiMobileTugas(true);

  const display = document.getElementById("eksplor-detail-display");
  const menuUtama = document.getElementById("eksplor-menu-utama");

  if (menuUtama) menuUtama.classList.add("hidden");
  if (!display) return;
  display.classList.remove("hidden");

  sessionStorage.removeItem("akses_arsip_tugas");
  window.renderLayarKunciTugas();
  window.scrollTo(0, 0);
};

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

window.verifikasiPinTugas = function() {
  const input = document.getElementById("input-pin-tugas");
  const pesanError = document.getElementById("pesan-error-pin");
  if (!input) return;

  if (input.value.trim() === KUNCI_PIN_TUGAS) {
    sessionStorage.setItem("akses_arsip_tugas", "true");
    window.muatDanRenderTugas();
  } else {
    input.value = "";
    input.classList.add("border-rose-500");
    if (pesanError) pesanError.classList.remove("hidden");
    input.focus();
  }
};

window.muatDanRenderTugas = async function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  display.innerHTML = `
    <div class="w-full max-w-md mx-auto py-24 text-center space-y-4">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-2 border-sky-400 border-t-transparent"></div>
      <p class="text-xs text-slate-300 font-bold">Mengambil berkas arsip tugas...</p>
    </div>
  `;

  if (!window.supabaseClient && window.supabase) {
    window.supabaseClient = window.supabase.createClient(
      "https://maleqbfrpboaqeqshsiy.supabase.co",
      "sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG"
    );
  }

  try {
    const { data, error } = await window.supabaseClient
      .from('tugas_kuliah')
      .select('*');

    if (error) throw error;
    daftarBerkasTugas = data || [];
    window.renderDaftarTugas();
  } catch (err) {
    console.error("Gagal sinkron tugas Supabase:", err);
    display.innerHTML = `
      <div class="text-center py-16 space-y-3">
        <p class="text-xs text-rose-400 font-bold">Gagal memuat arsip dari database.</p>
        <button onclick="window.muatDanRenderTugas()" class="px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-bold">Coba Lagi</button>
      </div>
    `;
  }
};

window.renderDaftarTugas = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  if (daftarBerkasTugas.length === 0) {
    display.innerHTML = `
      <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16 space-y-5">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <button onclick="window.tutupDisplayTugas()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
            <span>←</span> <span>Kembali</span>
          </button>
          <span class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">Terbuka</span>
        </div>
        <div class="text-center py-16 text-slate-400 text-xs">Belum ada berkas tugas yang tersimpan di Supabase.</div>
      </div>
    `;
    return;
  }

  const itemHtml = daftarBerkasTugas.map(item => {
    
    const judul = item['Judul Makalah / Tugas'] || item['Judul'] || item.judul || 'Dokumen Tugas';
    const matkul = item['Mata Kuliah'] || item['Matkul'] || item.matkul || '-';
    const semester = item['Semester'] || item.semester || '';
    const fileUrl = item['Link PDF Drive'] || item['File URL'] || item['url'] || '';

    return `
      <div class="p-4 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shadow-sm hover:border-sky-500/40 transition">
        <div class="space-y-1 min-w-0">
          <h4 class="text-sm font-black text-slate-900 dark:text-white truncate">${judul}</h4>
          <p class="text-xs text-slate-400 truncate">${matkul}</p>
          ${semester ? `<span class="text-[10px] font-mono font-bold text-sky-400 block">• ${semester}</span>` : ''}
        </div>
        ${fileUrl ? `
          <a 
            href="${fileUrl}" 
            target="_blank" 
            class="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold shrink-0 transition shadow-sm inline-flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <svg class="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <span>Unduh</span>
          </a>
        ` : `
          <span class="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-500 text-xs font-bold">Link Kosong</span>
        `}
      </div>
    `;
  }).join("");

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16 space-y-5">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <button onclick="window.tutupDisplayTugas()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali</span>
        </button>
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">Terbuka</span>
          <button onclick="window.renderLayarKunciTugas()" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-400 transition flex items-center justify-center shadow-sm" title="Kunci Kembali">
            ${SVG_LOCK_SM}
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

window.tutupDisplayTugas = function() {
  sessionStorage.removeItem("akses_arsip_tugas");
  kelolaNavigasiMobileTugas(false);

  const display = document.getElementById("eksplor-detail-display");
  const menuUtama = document.getElementById("eksplor-menu-utama");

  if (display) {
    display.classList.add("hidden");
    display.innerHTML = "";
  }
  if (menuUtama) {
    menuUtama.classList.remove("hidden");
  } else {
    window.location.href = "/eksplor/";
  }
};