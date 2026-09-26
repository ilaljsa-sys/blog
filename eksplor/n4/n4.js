function getNamaTabelSupabaseN4(sheetName) {
  const map = {
    'N4_Kanji': 'n4_kanji',
    'N4_Bunpou': 'n4_bunpou_minna_2',
    'N4_Kotoba_Irodori_1': 'n4_kotoba_irodori_1',
    'N4_Kotoba_Irodori_2': 'n4_kotoba_irodori_2',
    'N4_Kotoba_Minna_2': 'n4_kotoba_minna_2'
  };
  return map[sheetName] || sheetName.toLowerCase();
}

function pastikanSupabaseClientN4() {
  if (!window.supabaseClient && window.supabase) {
    try {
      window.supabaseClient = window.supabase.createClient(
        "https://maleqbfrpboaqeqshsiy.supabase.co",
        "sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG"
      );
    } catch (e) {
      window.supabaseClient = null;
    }
  }
}

window.sesiGoiAktifN4 = {
  kategori: "",
  judul: "",
  seluruhData: [],
  antreanHafal: [],
  indeksSekarang: 0,
  idSudahHafal: [],
  sembunyikanKanji: false,
  sembunyikanBaca: false,
  sembunyikanArti: false,
  modelLihatSudahHafal: false,
  isFlipped: false,
  modeTampilan: "flashcard",
  pencarianBuku: "",
  babTerpilih: null,
  bukuSembunyiKanji: false,
  bukuSembunyiBaca: false,
  bukuSembunyiArti: false,
  bukuKanjiBlindMode: false,
  bukuFlippedItems: {}
};

const SVG_ICONS_N4 = {
  kanji: `<svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>`,
  book: `<svg class="w-5 h-5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
  vocab: `<svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`,
  chat: `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>`,
  flashcard: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
  check: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>`,
  eyeOpen: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
  eyeClosed: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path></svg>`
};

function aturVisibilitasNavigasiMobileN4(sembunyikan) {
  const bottomNav = document.getElementById("bottom-navbar-mobile");
  const ambientAudio = document.getElementById("ambient-audio-widget");
  if (bottomNav) bottomNav.style.display = sembunyikan ? "none" : "";
  if (ambientAudio) ambientAudio.style.display = sembunyikan ? "none" : "";
}

window.renderFuriganaHtmlN4 = function(text) {
  if (!text) return "";
  let parsed = String(text);
  parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)\[([^\x00-\x7F]+?)\]/g, '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>');
  parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)\(([^\x00-\x7F]+?)\)/g, '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>');
  return parsed;
};

window.bukaModulN4 = function() {
  aturVisibilitasNavigasiMobileN4(true);
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  display.classList.remove("hidden");
  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-4xl mx-auto px-1 pb-16 transition-all">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
        <a href="/eksplor/" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali ke Eksplor</span>
        </a>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wide">JLPT N4</span>
      </div>

      <div class="text-center space-y-2 mb-8">
        <h3 class="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
          Modul Pembelajaran <span class="whitespace-nowrap">JLPT N4</span>
        </h3>
        <p class="text-xs lg:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
          Pondasi lanjutan kosakata dan tata bahasa dasar menengah menuju N3.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
        <div onclick="window.ambilDataSheetN4('N4_Kanji', 'Kanji N4')" class="p-5 lg:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
              ${SVG_ICONS_N4.kanji}
            </div>
            <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Kanji N4</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">295 karakter esensial tingkat dasar-menengah.</p>
          </div>
          <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1">Buka Kanji →</span>
        </div>
        <div onclick="window.bukaPilihanBabBunpouN4()" class="p-5 lg:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
              ${SVG_ICONS_N4.book}
            </div>
            <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Tata Bahasa (Bunpou)</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">
              Pola kalimat Minna no Nihongo 2<br>
              <span class="whitespace-nowrap font-medium text-slate-400">Bab 26 sampai Bab 50.</span>
            </p>
          </div>
          <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1">Buka Bunpou →</span>
        </div>
        <div onclick="window.bukaHalamanMenuKotobaN4()" class="p-5 lg:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
              ${SVG_ICONS_N4.vocab}
            </div>
            <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Kosakata (Kotoba)</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">Minna no Nihongo 2, Irodori 1, atau Irodori 2.</p>
          </div>
          <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1">Pilih Sumber →</span>
        </div>
      </div>
      <a href="/eksplor/kuis/" class="mt-6 p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/20 hover:border-sky-500 transition flex items-center justify-between group shadow-sm block">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
          </div>
          <div>
            <h5 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-400 transition">Kuis Nihonggo</h5>
            <p class="text-xs text-slate-400">Simulasi kuis interaktif N5 sampai N1.</p>
          </div>
        </div>
        <span class="text-xs font-bold text-sky-400 shrink-0 hidden sm:inline-flex items-center gap-1 group-hover:translate-x-1 transition">Mulai Kuis →</span>
      </a>
    </div>
  `;
  window.scrollTo(0, 0);
};

window.bukaHalamanMenuKotobaN4 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
        <button onclick="window.bukaModulN4()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali ke Menu Utama</span>
        </button>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">Kotoba N4</span>
      </div>

      <div class="text-center space-y-1 mb-6">
        <h3 class="text-xl lg:text-2xl font-black text-slate-900 dark:text-white">Pilih Sumber Kosakata</h3>
        <p class="text-xs text-slate-400">Pilih modul buku referensi kotoba yang ingin dipelajari.</p>
      </div>

      <div class="space-y-3">
        <div onclick="window.bukaPilihanBabKotobaMinnaN4()" class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group">
          <div>
            <h4 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Minna no Nihongo 2</h4>
            <p class="text-xs text-slate-400 mt-0.5">Bab 26 sampai 50</p>
          </div>
          <span class="text-xs font-bold text-sky-400">Pilih Bab →</span>
        </div>

        <div onclick="window.ambilDataSheetN4('N4_Kotoba_Irodori_1', 'Kotoba Irodori 1')" class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group">
          <div>
            <h4 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Kotoba Irodori 1</h4>
            <p class="text-xs text-slate-400 mt-0.5">170 Kosakata Irodori 1</p>
          </div>
          <span class="text-xs font-bold text-sky-400">Buka →</span>
        </div>

        <div onclick="window.ambilDataSheetN4('N4_Kotoba_Irodori_2', 'Kotoba Irodori 2')" class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group">
          <div>
            <h4 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Kotoba Irodori 2</h4>
            <p class="text-xs text-slate-400 mt-0.5">350 Kosakata Irodori 2</p>
          </div>
          <span class="text-xs font-bold text-sky-400">Buka →</span>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
};

window.bukaPilihanBabKotobaMinnaN4 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const babList = [26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
  const daftarBabHtml = babList.map(bab => `
    <div onclick="window.pilihBabKotobaMinnaN4Direct(${bab})" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group">
      <div>
        <h4 class="text-xs font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Bab ${bab}</h4>
      </div>
      <span class="text-xs font-bold text-sky-400">Pilih →</span>
    </div>
  `).join("");

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-3xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
        <button onclick="window.bukaHalamanMenuKotobaN4()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali</span>
        </button>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">Minna no Nihongo 2</span>
      </div>

      <div onclick="window.bukaModeBukuKotobaLangsungN4()" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group mb-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition">
            ${SVG_ICONS_N4.book}
          </div>
          <div>
            <h4 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Mode Buku</h4>
            <p class="text-[11px] text-slate-400">Semua Bab 26 - 50</p>
          </div>
        </div>
        <span class="text-xs font-bold text-sky-400">Buka →</span>
      </div>

      <div class="relative flex py-2 items-center mb-4">
        <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
        <span class="flex-shrink mx-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">FLASHCARD BAB SPESIFIK</span>
        <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${daftarBabHtml}
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
};

window.bukaPilihanBabBunpouN4 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const babList = [26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
  const daftarBabHtml = babList.map(bab => `
    <div onclick="window.mulaiFlashcardBunpouBabLangsungN4(${bab})" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group">
      <div>
        <h4 class="text-xs font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Bab ${bab}</h4>
      </div>
      <span class="text-xs font-bold text-sky-400">Buka →</span>
    </div>
  `).join("");

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-3xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
        <button onclick="window.bukaModulN4()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali</span>
        </button>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">Tata Bahasa</span>
      </div>

      <div onclick="window.bukaModeBukuBunpouLangsungN4()" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group mb-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition">
            ${SVG_ICONS_N4.book}
          </div>
          <div>
            <h4 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Mode Buku</h4>
            <p class="text-[11px] text-slate-400">Semua Bab 26 - 50</p>
          </div>
        </div>
        <span class="text-xs font-bold text-sky-400">Buka →</span>
      </div>

      <div class="relative flex py-2 items-center mb-4">
        <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
        <span class="flex-shrink mx-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">ATAU SESI FLASHCARD</span>
        <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${daftarBabHtml}
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
};

window.ambilDataSheetN4 = async function(sheetName, judul, babTarget = null) {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  pastikanSupabaseClientN4();
  const cacheKey = `cache_n4_${sheetName}_v12_baru`;
  const dataCache = localStorage.getItem(cacheKey);
  const namaTabel = getNamaTabelSupabaseN4(sheetName);

  const olahDataKeSesi = (dataArray) => {
    window.sesiGoiAktifN4.kategori = sheetName;
    window.sesiGoiAktifN4.judul = judul;
    window.sesiGoiAktifN4.babTerpilih = babTarget;
    window.sesiGoiAktifN4.isFlipped = false;
    window.sesiGoiAktifN4.pencarianBuku = "";
    window.sesiGoiAktifN4.modelLihatSudahHafal = false;

    let dataArrayMapped = dataArray.map((item, idx) => {
      const rawId = String(item.id || item.ID || `item-${idx + 1}`).trim();
      let babNum = null;

      if (sheetName === 'N4_Bunpou') {
        const m = rawId.match(/#?(\d+)-/);
        if (m) babNum = parseInt(m[1], 10);
      } else if (sheetName === 'N4_Kotoba_Minna_2') {
        const m = rawId.match(/^(\d+)-/);
        if (m) babNum = parseInt(m[1], 10);
      }

      return {
        serialNumber: idx + 1,
        uid: rawId,
        bab: babNum,
        kanji: item.pola_kalimat || item.kanji || item.Kanji || "-",
        baca: item.rumus || item.hiragana || item.Hiragana || item.Cara_Baca || "-",
        arti: item.arti_pola || item.arti || item.Arti || item.Makna || "-",
        contoh: item.contoh_kalimat || item['contoh Kalimat'] || item.Contoh_Kalimat || "",
        arti_contoh: item.arti_contoh || item['arti kalimat'] || item.Arti_Contoh || ""
      };
    });

    if (babTarget !== null) {
      dataArrayMapped = dataArrayMapped.filter(item => item.bab === babTarget);
    }

    window.sesiGoiAktifN4.seluruhData = dataArrayMapped;
    const simpanan = localStorage.getItem(`hafalan_n4_${sheetName}_bab_${babTarget || 'all'}`);
    window.sesiGoiAktifN4.idSudahHafal = simpanan ? JSON.parse(simpanan) : [];

    if (sheetName === 'N4_Bunpou' && babTarget === null) {
      window.sesiGoiAktifN4.modeTampilan = "buku";
      window.renderModeBukuN4();
    } else {
      window.bukaMenuPorsiHafalanN4();
    }
  };

  if (dataCache) {
    try {
      const parsed = JSON.parse(dataCache);
      if (parsed && Array.isArray(parsed) && parsed.length > 0) {
        olahDataKeSesi(parsed);
        return;
      }
    } catch (e) {}
  }

  display.innerHTML = `
    <div class="w-full max-w-md mx-auto py-24 text-center space-y-4">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-2 border-sky-400 border-t-transparent"></div>
      <p class="text-xs text-slate-300 font-bold">Menyiapkan seluruh materi ${judul}...</p>
    </div>
  `;

  try {
    if (!window.supabaseClient) throw new Error("Supabase client belum terpasang.");

    let semuaData = [];
    let start = 0;
    const batchSize = 1000;

    
    while (true) {
      const { data, error } = await window.supabaseClient
        .from(namaTabel)
        .select('*')
        .range(start, start + batchSize - 1);

      if (error) throw error;
      if (!data || data.length === 0) break;

      semuaData.push(...data);
      if (data.length < batchSize) break;
      start += batchSize;
    }

    if (semuaData.length > 0) {
      localStorage.setItem(cacheKey, JSON.stringify(semuaData));
      olahDataKeSesi(semuaData);
    } else {
      alert("Materi kosong.");
      window.bukaModulN4();
    }
  } catch (err) {
    alert("Koneksi gagal saat memuat materi.");
    window.bukaModulN4();
  }
};

window.bukaModeBukuBunpouLangsungN4 = async function() {
  await window.ambilDataSheetN4('N4_Bunpou', 'Tata Bahasa N4', null);
  window.sesiGoiAktifN4.modeTampilan = "buku";
  window.renderModeBukuN4();
};

window.mulaiFlashcardBunpouBabLangsungN4 = async function(bab) {
  await window.ambilDataSheetN4('N4_Bunpou', `Tata Bahasa N4 (Bab ${bab})`, bab);
  window.sesiGoiAktifN4.modelLihatSudahHafal = false;
  window.sesiGoiAktifN4.antreanHafal = [...window.sesiGoiAktifN4.seluruhData];
  window.sesiGoiAktifN4.indeksSekarang = 0;
  window.sesiGoiAktifN4.isFlipped = false;
  window.sesiGoiAktifN4.modeTampilan = "flashcard";
  window.renderLayarBelajarN4();
};

window.bukaModeBukuKotobaLangsungN4 = async function() {
  await window.ambilDataSheetN4('N4_Kotoba_Minna_2', 'Minna no Nihongo 2', null);
  window.sesiGoiAktifN4.modeTampilan = "buku";
  window.renderModeBukuN4();
};

window.pilihBabKotobaMinnaN4Direct = async function(bab) {
  await window.ambilDataSheetN4('N4_Kotoba_Minna_2', `Minna no Nihongo 2 (Bab ${bab})`, bab);
};

window.bukaMenuPorsiHafalanN4 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  window.sesiGoiAktifN4.modelLihatSudahHafal = false;

  const belumHafal = window.sesiGoiAktifN4.seluruhData.filter(
    item => !window.sesiGoiAktifN4.idSudahHafal.includes(item.uid)
  ).length;

  let tombolKembaliAksi = "window.bukaModulN4()";
  let tampilkanTombolModeBuku = true;

  if (window.sesiGoiAktifN4.kategori === 'N4_Kotoba_Minna_2') {
    if (window.sesiGoiAktifN4.babTerpilih !== null) {
      tombolKembaliAksi = "window.bukaPilihanBabKotobaMinnaN4()";
      tampilkanTombolModeBuku = false;
    } else {
      tombolKembaliAksi = "window.bukaHalamanMenuKotobaN4()";
    }
  } else if (window.sesiGoiAktifN4.kategori.includes('Irodori')) {
    tombolKembaliAksi = "window.bukaHalamanMenuKotobaN4()";
  } else if (window.sesiGoiAktifN4.kategori === 'N4_Bunpou') {
    tombolKembaliAksi = "window.bukaPilihanBabBunpouN4()";
  }

  const tombolBukuHtml = tampilkanTombolModeBuku ? `
    <div class="mb-5">
      <div onclick="window.gantiModeTampilanN4('buku')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between gap-3 shadow-sm group">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition">
            ${SVG_ICONS_N4.book}
          </div>
          <h4 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition whitespace-nowrap">Mode Buku</h4>
        </div>
        <span class="text-xs font-bold text-sky-400 shrink-0 pr-1">Buka →</span>
      </div>
    </div>

    <div class="relative flex py-2 items-center mb-4">
      <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
      <span class="flex-shrink mx-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Atau Sesi Flashcard</span>
      <div class="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
    </div>
  ` : '';

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
        <button onclick="${tombolKembaliAksi}" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali</span>
        </button>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">${window.sesiGoiAktifN4.judul}</span>
      </div>

      ${tombolBukuHtml}

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
        <button onclick="window.mulaiSesiHafalanN4(10)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">10</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
        </button>
        <button onclick="window.mulaiSesiHafalanN4(20)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">20</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
        </button>
        <button onclick="window.mulaiSesiHafalanN4(50)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">50</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
        </button>
        <button onclick="window.mulaiSesiHafalanN4('semua')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">Semua</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">${belumHafal} Item</span>
        </button>
      </div>

      <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
        <div class="text-center sm:text-left">
          <h4 class="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap">Atur Jumlah Bebas</h4>
          <p class="text-[10px] text-slate-400 whitespace-nowrap">Ketik porsi materi sesi ini.</p>
        </div>
        <div class="flex items-center gap-2 w-full sm:w-auto">
          <input type="number" id="input-custom-porsi-n4" min="1" max="${belumHafal || 1}" placeholder="15" onkeydown="if(event.key==='Enter') window.mulaiCustomPorsiN4()" class="w-full sm:w-28 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-center focus:outline-none focus:border-sky-500 transition shadow-inner">
          <button onclick="window.mulaiCustomPorsiN4()" class="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition shadow-sm whitespace-nowrap">
            Mulai →
          </button>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
};

window.mulaiCustomPorsiN4 = function() {
  const input = document.getElementById("input-custom-porsi-n4");
  if (!input) return;
  const nilai = parseInt(input.value, 10);
  if (isNaN(nilai) || nilai <= 0) {
    alert("Masukkan angka yang pas!");
    return;
  }
  window.mulaiSesiHafalanN4(nilai);
};

window.mulaiSesiHafalanN4 = function(jumlah) {
  window.sesiGoiAktifN4.modelLihatSudahHafal = false;

  let kandidat = window.sesiGoiAktifN4.seluruhData.filter(
    item => !window.sesiGoiAktifN4.idSudahHafal.includes(item.uid)
  );
  kandidat = kandidat.sort(() => Math.random() - 0.5);

  if (jumlah !== "semua") {
    kandidat = kandidat.slice(0, jumlah);
  }

  if (kandidat.length === 0) {
    kandidat = window.sesiGoiAktifN4.seluruhData;
  }

  window.sesiGoiAktifN4.modeTampilan = "flashcard";
  window.sesiGoiAktifN4.antreanHafal = kandidat;
  window.sesiGoiAktifN4.indeksSekarang = 0;
  window.sesiGoiAktifN4.isFlipped = false;
  window.renderLayarBelajarN4();
};

window.gantiModeTampilanN4 = function(mode) {
  window.sesiGoiAktifN4.modeTampilan = mode;
  window.sesiGoiAktifN4.modelLihatSudahHafal = false;
  if (mode === "buku") {
    window.renderModeBukuN4();
  } else {
    window.renderLayarBelajarN4();
  }
};

window.renderModeBukuN4 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const keyword = (window.sesiGoiAktifN4.pencarianBuku || "").trim().toLowerCase();
  const kategori = window.sesiGoiAktifN4.kategori;
  const isBunpou = kategori === "N4_Bunpou";
  const isKanji = kategori === "N4_Kanji";
  const isKotoba = !isBunpou && !isKanji;
  const babAktif = window.sesiGoiAktifN4.babTerpilih;

  let dataset = window.sesiGoiAktifN4.seluruhData;

  if (babAktif !== null && (isBunpou || kategori === 'N4_Kotoba_Minna_2')) {
    dataset = dataset.filter(item => item.bab === babAktif);
  }

  const dataTerfilter = dataset.filter(item => {
    if (!keyword) return true;
    const nomorCocok = String(item.serialNumber) === keyword || `#${item.serialNumber}` === keyword;
    return nomorCocok ||
           item.kanji.toLowerCase().includes(keyword) ||
           item.baca.toLowerCase().includes(keyword) ||
           item.arti.toLowerCase().includes(keyword);
  });

  let daftarHtml = "";
  if (dataTerfilter.length === 0) {
    daftarHtml = `<div class="py-16 text-center text-slate-400 text-xs col-span-full">Tidak ada materi yang cocok. Total materi: ${dataset.length}.</div>`;
  } else {
    dataTerfilter.forEach(item => {
      const sudahHafal = window.sesiGoiAktifN4.idSudahHafal.includes(item.uid);

      if (isKanji) {
        const isBlind = window.sesiGoiAktifN4.bukuKanjiBlindMode;
        const isFlipped = window.sesiGoiAktifN4.bukuFlippedItems[item.uid] || false;
        const sembunyikanInfo = isBlind && !isFlipped;

        daftarHtml += `
          <div onclick="window.toggleFlipBukuKanjiN4('${item.uid}')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-sky-500/50 transition select-none cursor-pointer relative">
            <div class="flex items-start justify-between gap-1">
              <span class="text-xs font-mono font-bold text-slate-500">#${item.serialNumber}</span>
              <button onclick="event.stopPropagation(); window.toggleTandaHafalN4('${item.uid}')" class="p-1 rounded-lg border transition ${sudahHafal ? 'bg-emerald-500 text-white border-emerald-500' : 'text-slate-500 border-slate-700 hover:text-white'}">
                ${SVG_ICONS_N4.check}
              </button>
            </div>
            <div class="my-2 text-center">
              <span class="text-3xl font-black text-slate-900 dark:text-white block">${item.kanji}</span>
              <span class="text-xs font-mono font-bold text-sky-400 block mt-1 transition ${sembunyikanInfo ? 'filter blur-sm select-none' : ''}">${item.baca}</span>
            </div>
            <div>
              <span class="text-xs font-medium text-slate-700 dark:text-slate-300 block line-clamp-1 transition ${sembunyikanInfo ? 'filter blur-sm select-none' : ''}">${item.arti}</span>
              ${item.contoh ? `
                <button onclick="event.stopPropagation(); window.bukaModalContohN4('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}')" class="mt-2 text-[10px] font-bold text-sky-400 hover:underline inline-flex items-center gap-1">
                  ${SVG_ICONS_N4.chat} <span>Contoh</span>
                </button>
              ` : ''}
            </div>
          </div>
        `;
      } else if (isBunpou) {
        daftarHtml += `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 hover:border-sky-500/50 transition">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-start gap-2.5">
                <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 shrink-0">#${item.serialNumber}</span>
                <div>
                  <h4 class="text-base lg:text-lg font-black text-slate-900 dark:text-white leading-[2.4] tracking-wide">
                    ${window.renderFuriganaHtmlN4(item.kanji)}
                  </h4>
                  <p class="text-xs font-mono text-sky-400 font-semibold mt-0.5 leading-[2.0]">
                    ${window.renderFuriganaHtmlN4(item.baca)}
                  </p>
                </div>
              </div>
              <button onclick="window.toggleTandaHafalN4('${item.uid}')" class="text-xs px-2.5 py-1 rounded-xl font-bold border transition shrink-0 ${sudahHafal ? 'bg-emerald-500 text-white border-emerald-500' : 'text-slate-400 border-slate-700 hover:text-white'}">
                ${sudahHafal ? '✓ Hafal' : 'Tandai'}
              </button>
            </div>
            <div class="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
              <p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-relaxed">${item.arti}</p>
            </div>
            ${item.contoh ? `
              <div class="text-xs space-y-1 pt-1">
                <p class="text-slate-900 dark:text-slate-100 font-medium leading-[2.4]">
                  ${window.renderFuriganaHtmlN4(item.contoh)}
                </p>
                <p class="text-slate-400 text-[11px] italic">${item.arti_contoh || ""}</p>
              </div>
            ` : ''}
          </div>
        `;
      } else {
        daftarHtml += `
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-sky-500/40 transition">
            <div class="flex items-center gap-3 min-w-0">
              <span class="text-[11px] font-mono font-bold text-slate-400 w-7 shrink-0">#${item.serialNumber}</span>
              <div class="truncate">
                <div class="flex items-baseline gap-2">
                  <span class="text-base font-black text-slate-900 dark:text-white cursor-pointer transition select-none ${window.sesiGoiAktifN4.bukuSembunyiKanji ? 'blur-md' : ''}" onclick="this.classList.toggle('blur-md')">${item.kanji}</span>
                  <span class="text-xs font-mono text-sky-400 font-semibold cursor-pointer transition select-none ${window.sesiGoiAktifN4.bukuSembunyiBaca ? 'blur-sm' : ''}" onclick="this.classList.toggle('blur-sm')">${item.baca}</span>
                </div>
                <p class="text-xs text-slate-400 truncate mt-0.5 cursor-pointer transition select-none ${window.sesiGoiAktifN4.bukuSembunyiArti ? 'blur-sm' : ''}" onclick="this.classList.toggle('blur-sm')">${item.arti}</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              ${item.contoh ? `
                <button onclick="window.bukaModalContohN4('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}')" class="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition" title="Lihat Contoh">
                  ${SVG_ICONS_N4.chat}
                </button>
              ` : ''}
              <button onclick="window.toggleTandaHafalN4('${item.uid}')" class="p-1.5 rounded-lg border transition ${sudahHafal ? 'bg-emerald-500 text-white border-emerald-500' : 'text-slate-400 border-slate-700 hover:text-white'}">
                ${SVG_ICONS_N4.check}
              </button>
            </div>
          </div>
        `;
      }
    });
  }

  let pillFilterHtml = "";
  if (isBunpou || kategori === 'N4_Kotoba_Minna_2') {
    const babArray = [null, ...Array.from({ length: 25 }, (_, i) => i + 26)];
    pillFilterHtml = `
      <div class="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none no-scrollbar">
        ${babArray.map(b => {
          const isActive = babAktif === b;
          const label = b === null ? 'Semua Bab' : `Bab ${b}`;
          return `
            <button onclick="window.sesiGoiAktifN4.babTerpilih = ${b}; window.renderModeBukuN4();" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${isActive ? 'bg-sky-500 border-sky-500 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-200'}">
              ${label}
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  let kontrolKotobaHtml = "";
  if (isKotoba) {
    kontrolKotobaHtml = `
      <div class="grid grid-cols-3 gap-1.5 mb-3">
        <button onclick="window.sesiGoiAktifN4.bukuSembunyiKanji = !window.sesiGoiAktifN4.bukuSembunyiKanji; window.renderModeBukuN4();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN4.bukuSembunyiKanji ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          ${window.sesiGoiAktifN4.bukuSembunyiKanji ? 'Buka Kanji' : 'Tutup Kanji'}
        </button>
        <button onclick="window.sesiGoiAktifN4.bukuSembunyiBaca = !window.sesiGoiAktifN4.bukuSembunyiBaca; window.renderModeBukuN4();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN4.bukuSembunyiBaca ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          ${window.sesiGoiAktifN4.bukuSembunyiBaca ? 'Buka Furigana' : 'Tutup Furigana'}
        </button>
        <button onclick="window.sesiGoiAktifN4.bukuSembunyiArti = !window.sesiGoiAktifN4.bukuSembunyiArti; window.renderModeBukuN4();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN4.bukuSembunyiArti ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          ${window.sesiGoiAktifN4.bukuSembunyiArti ? 'Buka Arti' : 'Tutup Arti'}
        </button>
      </div>
    `;
  }

  let tombolKembaliBuku = `<button onclick="window.bukaMenuPorsiHafalanN4()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-200 font-bold text-xs">← Porsi</button>`;
  if (isBunpou) {
    tombolKembaliBuku = `<button onclick="window.bukaPilihanBabBunpouN4()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-200 font-bold text-xs">← Menu</button>`;
  } else if (kategori === 'N4_Kotoba_Minna_2') {
    tombolKembaliBuku = `<button onclick="window.bukaPilihanBabKotobaMinnaN4()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-200 font-bold text-xs">← Menu</button>`;
  }

  const gridClass = isKanji ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5" : (isBunpou ? "space-y-3" : "grid grid-cols-1 sm:grid-cols-2 gap-2");

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-4xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4 gap-2">
        <div class="flex items-center gap-1.5 min-w-0">
          ${tombolKembaliBuku}
          <span class="px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold truncate max-w-[160px]">${window.sesiGoiAktifN4.judul}</span>
        </div>

        <button onclick="window.mulaiSesiHafalanN4(10)" class="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5 shrink-0 whitespace-nowrap">
          ${SVG_ICONS_N4.flashcard} <span>Flashcard</span>
        </button>
      </div>

      <div class="flex items-center gap-2 mb-2">
        <input type="text" id="input-cari-buku-n4" placeholder="Cari nomor (#1), kanji, pola, atau arti..." value="${window.sesiGoiAktifN4.pencarianBuku}" oninput="window.sesiGoiAktifN4.pencarianBuku = this.value; window.renderModeBukuN4();" class="w-full px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition shadow-inner">
        ${isKanji ? `
          <button onclick="window.toggleBlindModeKanjiN4()" title="Sembunyikan Furigana & Arti" class="h-10 w-10 shrink-0 rounded-2xl border flex items-center justify-center transition shadow-inner ${window.sesiGoiAktifN4.bukuKanjiBlindMode ? 'bg-sky-500 border-sky-500 text-white' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-white'}">
            ${window.sesiGoiAktifN4.bukuKanjiBlindMode ? SVG_ICONS_N4.eyeClosed : SVG_ICONS_N4.eyeOpen}
          </button>
        ` : ''}
      </div>

      ${pillFilterHtml}
      ${kontrolKotobaHtml}

      <div class="${gridClass}">
        ${daftarHtml}
      </div>
    </div>
  `;

  const inputCari = document.getElementById("input-cari-buku-n4");
  if (inputCari && window.sesiGoiAktifN4.pencarianBuku) {
    inputCari.focus();
    const len = inputCari.value.length;
    inputCari.setSelectionRange(len, len);
  }
};

window.toggleFlipBukuKanjiN4 = function(uid) {
  if (!window.sesiGoiAktifN4.bukuKanjiBlindMode) return;
  window.sesiGoiAktifN4.bukuFlippedItems[uid] = !window.sesiGoiAktifN4.bukuFlippedItems[uid];
  window.renderModeBukuN4();
};

window.toggleBlindModeKanjiN4 = function() {
  window.sesiGoiAktifN4.bukuKanjiBlindMode = !window.sesiGoiAktifN4.bukuKanjiBlindMode;
  window.sesiGoiAktifN4.bukuFlippedItems = {};
  window.renderModeBukuN4();
};

window.renderLayarBelajarN4 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const listTampil = window.sesiGoiAktifN4.modelLihatSudahHafal 
    ? window.sesiGoiAktifN4.seluruhData.filter(item => window.sesiGoiAktifN4.idSudahHafal.includes(item.uid))
    : window.sesiGoiAktifN4.antreanHafal;

  const total = listTampil.length;
  const item = listTampil[window.sesiGoiAktifN4.indeksSekarang];

  if (!item || total === 0) {
    display.innerHTML = `
      <div class="text-center py-16 space-y-3 max-w-sm mx-auto px-2 pb-16">
        <span class="text-4xl block font-black text-sky-400">COMPLETE</span>
        <h4 class="text-lg font-black text-slate-900 dark:text-white">Target Sesi Tuntas!</h4>
        <p class="text-xs text-slate-400">Seluruh target materi pada sesi ini telah dipelajari.</p>
        <div class="pt-3 flex items-center justify-center gap-2">
          <button onclick="window.sesiGoiAktifN4.modelLihatSudahHafal = false; window.bukaMenuPorsiHafalanN4()" class="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md transition">
            + Porsi Baru
          </button>
          <button onclick="window.gantiModeTampilanN4('buku')" class="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-300 font-bold text-xs transition">
            Mode Buku
          </button>
        </div>
      </div>
    `;
    return;
  }

  const sudahDihafal = window.sesiGoiAktifN4.idSudahHafal.includes(item.uid);
  const kategori = window.sesiGoiAktifN4.kategori;

  let tombolSelesaiAksi = "window.bukaMenuPorsiHafalanN4()";
  if (kategori === 'N4_Bunpou') {
    tombolSelesaiAksi = "window.bukaPilihanBabBunpouN4()";
  }

  const topHeader = `
    <div class="border-b border-slate-200 dark:border-slate-800 pb-2.5 mb-3 space-y-2">
      <div class="flex items-center justify-between">
        <button onclick="${tombolSelesaiAksi}" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition text-xs">
          ← Selesai
        </button>
        <button onclick="window.gantiModeTampilanN4('buku')" class="px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500 hover:text-white text-sky-400 font-bold transition text-xs border border-sky-500/20 inline-flex items-center gap-1.5 whitespace-nowrap">
          ${SVG_ICONS_N4.book} <span>Mode Buku</span>
        </button>
      </div>

      <div class="flex items-center justify-between text-xs pt-0.5">
        <button onclick="window.toggleLihatSudahHafalN4()" class="px-2.5 py-1 rounded-lg text-[10px] font-bold border transition flex items-center gap-1.5 ${window.sesiGoiAktifN4.modelLihatSudahHafal ? 'bg-amber-500/15 border-amber-500/40 text-amber-400 hover:bg-amber-500/25' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-white'}">
          <span>${window.sesiGoiAktifN4.modelLihatSudahHafal ? '← Belum Hafal' : 'Lihat Hafal'}</span>
          <span class="px-1.5 py-0.2 rounded bg-black/20 text-[9px] font-mono">
            ${window.sesiGoiAktifN4.modelLihatSudahHafal ? window.sesiGoiAktifN4.antreanHafal.length : window.sesiGoiAktifN4.idSudahHafal.length}
          </span>
        </button>
        <span class="font-mono font-bold text-slate-400">${window.sesiGoiAktifN4.indeksSekarang + 1} / ${total}</span>
      </div>
    </div>
  `;

  const bottomNav = `
    <div class="flex items-center gap-2 pt-2">
      <button onclick="window.gantiKartuN4(-1)" title="Kartu Sebelumnya (Shortcut: ← Panah Kiri / A)" class="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition text-xs shadow-sm">
        ◀
      </button>
      <button onclick="window.toggleTandaHafalN4('${item.uid}')" title="Tandai Hafal (Shortcut: M)" class="flex-1 py-3 rounded-2xl font-bold text-xs transition shadow-sm flex items-center justify-center gap-1.5 ${sudahDihafal ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white text-slate-700 dark:text-slate-300'}">
        ${SVG_ICONS_N4.check}
        <span>${sudahDihafal ? 'Sudah Ditandai Hafal' : 'Tandai Hafal'}</span>
      </button>
      <button onclick="window.gantiKartuN4(1)" title="Kartu Berikutnya (Shortcut: → Panah Kanan / D)" class="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition text-xs shadow-sm">
        ▶
      </button>
    </div>
  `;

  
  if (kategori === "N4_Bunpou") {
    display.innerHTML = `
      <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
        ${topHeader}
        <div class="p-6 lg:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4 text-left">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <span class="text-xs font-bold text-sky-400">Bab ${item.bab || '26-50'} - Minna no Nihongo 2</span>
            <span class="text-xs font-mono font-bold text-slate-400">#${item.serialNumber}</span>
          </div>

          <div>
            <h2 class="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-[2.4] tracking-wide">
              ${window.renderFuriganaHtmlN4(item.kanji)}
            </h2>
            <p class="text-xs font-mono text-sky-400 font-semibold mt-1 leading-[2.0]">
              ${window.renderFuriganaHtmlN4(item.baca)}
            </p>
          </div>

          <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">MAKNA POLA</span>
            <p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-relaxed">${item.arti}</p>
          </div>

          ${item.contoh ? `
            <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">CONTOH KALIMAT</span>
              <p class="text-sm font-medium text-slate-900 dark:text-slate-100 leading-[2.4]">
                ${window.renderFuriganaHtmlN4(item.contoh)}
              </p>
              <p class="text-xs text-slate-400 italic">${item.arti_contoh || ""}</p>
            </div>
          ` : ''}
        </div>
        <div class="mt-3">${bottomNav}</div>
      </div>
    `;
    return;
  }

  
  if (kategori === "N4_Kanji") {
    display.innerHTML = `
      <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
        ${topHeader}
        <div onclick="window.toggleFlipCardN4()" class="p-6 lg:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center relative shadow-md min-h-[220px] lg:min-h-[280px] flex flex-col justify-center items-center cursor-pointer transition select-none hover:border-sky-500/60">
          <span class="absolute top-3.5 left-4 text-xs font-mono font-bold text-slate-500">#${item.serialNumber}</span>

          <div class="${window.sesiGoiAktifN4.isFlipped ? 'hidden' : 'block'}">
            <h2 class="text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-wider">${item.kanji}</h2>
          </div>

          <div class="${window.sesiGoiAktifN4.isFlipped ? 'block' : 'hidden'} space-y-2">
            <div class="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">${item.kanji}</div>
            <div class="text-base font-bold text-sky-400 font-mono">${item.baca}</div>
            <div class="text-sm lg:text-base font-bold text-slate-700 dark:text-slate-200 max-w-md mx-auto pt-2 border-t border-slate-200 dark:border-slate-800">${item.arti}</div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-2 px-1">
          <span class="text-[10px] text-slate-400 font-medium">(Ketuk kartu untuk membalik)</span>
          ${item.contoh ? `
            <button onclick="window.bukaModalContohN4('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}')" class="px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500 hover:text-white text-sky-400 text-[10px] font-bold transition inline-flex items-center gap-1">
              ${SVG_ICONS_N4.chat} <span>Contoh</span>
            </button>
          ` : ''}
        </div>
        <div class="mt-2">${bottomNav}</div>
      </div>
    `;
    return;
  }

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
      ${topHeader}
      <div class="p-6 lg:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center relative shadow-md min-h-[190px] flex flex-col justify-center items-center">
        <span class="absolute top-3.5 left-4 text-xs font-mono font-bold text-slate-500">#${item.serialNumber}</span>

        <h2 class="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white transition cursor-pointer select-none ${window.sesiGoiAktifN4.sembunyikanKanji ? 'blur-md filter' : ''}" onclick="this.classList.toggle('blur-md')">
          ${item.kanji}
        </h2>

        <p class="text-xs font-bold text-sky-400 mt-1.5 font-mono transition cursor-pointer select-none ${window.sesiGoiAktifN4.sembunyikanBaca ? 'blur-sm filter' : ''}" onclick="this.classList.toggle('blur-sm')">
          ${item.baca}
        </p>

        <div class="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 w-full max-w-xs">
          <p class="text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-200 transition cursor-pointer select-none ${window.sesiGoiAktifN4.sembunyikanArti ? 'blur-sm filter' : ''}" onclick="this.classList.toggle('blur-sm')">
            ${item.arti}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-1.5 mt-2.5">
        <button onclick="window.toggleSensorGoiN4('kanji')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN4.sembunyikanKanji ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          Kanji
        </button>
        <button onclick="window.toggleSensorGoiN4('baca')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN4.sembunyikanBaca ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          Furigana
        </button>
        <button onclick="window.toggleSensorGoiN4('arti')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN4.sembunyikanArti ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          Arti
        </button>
        <button onclick="if('${item.contoh}') window.bukaModalContohN4('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}'); else alert('Contoh belum tersedia');" class="h-9 px-1.5 rounded-xl border border-sky-500/30 text-sky-400 text-[10px] font-bold transition hover:bg-sky-500/20 flex items-center justify-center gap-1">
          ${SVG_ICONS_N4.chat}
          <span class="truncate">Contoh</span>
        </button>
      </div>

      <div class="mt-3">${bottomNav}</div>
    </div>
  `;
};

window.bukaModalContohN4 = function(judul, contohEncoded, artiEncoded) {
  const contoh = decodeURIComponent(contohEncoded);
  const arti = decodeURIComponent(artiEncoded);

  const modalExisting = document.getElementById("n4-modal-contoh");
  if (modalExisting) modalExisting.remove();

  const modalHtml = `
    <div id="n4-modal-contoh" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-lg p-6 space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xs font-black px-2.5 py-0.5 rounded-lg bg-sky-500/10 text-sky-400 inline-flex items-center gap-1">
              ${SVG_ICONS_N4.chat} <span>Contoh Penggunaan</span>
            </span>
            <span class="text-base font-black text-slate-900 dark:text-white">${judul}</span>
          </div>
          <button onclick="document.getElementById('n4-modal-contoh').remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm">✕</button>
        </div>

        <div class="space-y-3 py-2">
          <p class="text-base font-medium text-slate-800 dark:text-slate-100 leading-[2.5] tracking-wide">
            ${window.renderFuriganaHtmlN4(contoh)}
          </p>
          <p class="text-xs text-slate-400 italic pt-2 border-t border-slate-100 dark:border-slate-800/80">
            ${arti || "Tidak ada terjemahan."}
          </p>
        </div>

        <button onclick="document.getElementById('n4-modal-contoh').remove()" class="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-sm transition">
          Tutup
        </button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
};

window.toggleFlipCardN4 = function() {
  window.sesiGoiAktifN4.isFlipped = !window.sesiGoiAktifN4.isFlipped;
  window.renderLayarBelajarN4();
};

window.gantiKartuN4 = function(arah) {
  const listTampil = window.sesiGoiAktifN4.modelLihatSudahHafal 
    ? window.sesiGoiAktifN4.seluruhData.filter(item => window.sesiGoiAktifN4.idSudahHafal.includes(item.uid))
    : window.sesiGoiAktifN4.antreanHafal;

  window.sesiGoiAktifN4.indeksSekarang += arah;
  if (window.sesiGoiAktifN4.indeksSekarang < 0) window.sesiGoiAktifN4.indeksSekarang = 0;
  if (window.sesiGoiAktifN4.indeksSekarang >= listTampil.length) window.sesiGoiAktifN4.indeksSekarang = listTampil.length - 1;
  window.sesiGoiAktifN4.isFlipped = false;
  window.renderLayarBelajarN4();
};

window.toggleSensorGoiN4 = function(tipe) {
  if (tipe === 'kanji') window.sesiGoiAktifN4.sembunyikanKanji = !window.sesiGoiAktifN4.sembunyikanKanji;
  if (tipe === 'baca') window.sesiGoiAktifN4.sembunyikanBaca = !window.sesiGoiAktifN4.sembunyikanBaca;
  if (tipe === 'arti') window.sesiGoiAktifN4.sembunyikanArti = !window.sesiGoiAktifN4.sembunyikanArti;
  window.renderLayarBelajarN4();
};

window.toggleTandaHafalN4 = function(uid) {
  const idx = window.sesiGoiAktifN4.idSudahHafal.indexOf(uid);
  if (idx > -1) {
    window.sesiGoiAktifN4.idSudahHafal.splice(idx, 1);
  } else {
    window.sesiGoiAktifN4.idSudahHafal.push(uid);
  }
  localStorage.setItem(`hafalan_n4_${window.sesiGoiAktifN4.kategori}_bab_${window.sesiGoiAktifN4.babTerpilih || 'all'}`, JSON.stringify(window.sesiGoiAktifN4.idSudahHafal));
  
  if (window.sesiGoiAktifN4.modeTampilan === "buku") {
    window.renderModeBukuN4();
  } else {
    window.renderLayarBelajarN4();
  }
};

window.toggleLihatSudahHafalN4 = function() {
  window.sesiGoiAktifN4.modelLihatSudahHafal = !window.sesiGoiAktifN4.modelLihatSudahHafal;
  window.sesiGoiAktifN4.indeksSekarang = 0;
  window.sesiGoiAktifN4.isFlipped = false;
  window.renderLayarBelajarN4();
};

window.addEventListener("DOMContentLoaded", () => {
  pastikanSupabaseClientN4();
  setTimeout(() => {
    if (typeof window.bukaModulN4 === 'function') {
      window.bukaModulN4();
    }
  }, 100);
});

window.addEventListener('keydown', function(e) {
  const activeEl = document.activeElement;
  if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable)) {
    return;
  }

  const modalShortcut = document.getElementById("modal-shortcut");
  if (modalShortcut) {
    if (e.key === 'Escape') {
      e.preventDefault();
      if (typeof window.tutupModalShortcut === 'function') window.tutupModalShortcut();
    }
    return;
  }

  const modalContoh = document.getElementById("modal-contoh-n4");
  if (modalContoh) {
    if (e.key === 'Escape') {
      e.preventDefault();
      modalContoh.remove();
    }
    return;
  }

  if (!window.sesiGoiAktifN4 || window.sesiGoiAktifN4.modeTampilan !== 'flashcard') return;

  const key = e.key;

  if (key === '?' || (e.shiftKey && key === '/')) {
    e.preventDefault();
    if (typeof window.bukaModalShortcut === 'function') window.bukaModalShortcut();
    return;
  }

  if (key === 'ArrowRight' || key === 'd' || key === 'D') {
    e.preventDefault();
    window.gantiKartuN4(1);
    return;
  }

  if (key === 'ArrowLeft' || key === 'a' || key === 'A') {
    e.preventDefault();
    window.gantiKartuN4(-1);
    return;
  }

  if (key === ' ' || key === 'ArrowUp' || key === 'ArrowDown' || key === 'Enter') {
    e.preventDefault();
    window.toggleFlipCardN4();
    return;
  }

  if (key === '1') {
    e.preventDefault();
    if (typeof window.toggleSensorGoiN4 === 'function') window.toggleSensorGoiN4('kanji');
    return;
  }
  if (key === '2') {
    e.preventDefault();
    if (typeof window.toggleSensorGoiN4 === 'function') window.toggleSensorGoiN4('baca');
    return;
  }
  if (key === '3') {
    e.preventDefault();
    if (typeof window.toggleSensorGoiN4 === 'function') window.toggleSensorGoiN4('arti');
    return;
  }

  if (key === 'm' || key === 'M') {
    e.preventDefault();
    const listTampil = window.sesiGoiAktifN4.modelLihatSudahHafal 
      ? window.sesiGoiAktifN4.seluruhData.filter(item => window.sesiGoiAktifN4.idSudahHafal.includes(item.uid))
      : window.sesiGoiAktifN4.antreanHafal;
    const item = listTampil[window.sesiGoiAktifN4.indeksSekarang];
    if (item) {
      window.toggleTandaHafalN4(item.uid);
    }
    return;
  }

  if (key === 'p' || key === 'P') {
    e.preventDefault();
    const listTampil = window.sesiGoiAktifN4.modelLihatSudahHafal 
      ? window.sesiGoiAktifN4.seluruhData.filter(item => window.sesiGoiAktifN4.idSudahHafal.includes(item.uid))
      : window.sesiGoiAktifN4.antreanHafal;
    const item = listTampil[window.sesiGoiAktifN4.indeksSekarang];
    if (item) {
      const teksSuara = item.kanji || item.baca || '';
      if (teksSuara) window.putarSuaraJepangN4(teksSuara);
    }
    return;
  }

  if (key === 'Escape') {
    e.preventDefault();
    window.gantiModeTampilanN4('buku');
    return;
  }
});