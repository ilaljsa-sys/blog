window.sesiGoiAktifN5 = {
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

const SVG_ICONS_N5 = {
  kanji: `<svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>`,
  book: `<svg class="w-5 h-5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
  vocab: `<svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`,
  chat: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>`,
  flashcard: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
  check: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>`,
  eyeOpen: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
  eyeClosed: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path></svg>`,
  sound: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>`
};

function aturVisibilitasNavigasiMobileN5(sembunyikan) {
  const bottomNav = document.getElementById("bottom-navbar-mobile");
  const ambientAudio = document.getElementById("ambient-audio-widget");
  if (bottomNav) bottomNav.style.display = sembunyikan ? "none" : "";
  if (ambientAudio) ambientAudio.style.display = sembunyikan ? "none" : "";
}

window.renderFuriganaHtmlN5 = function(text) {
  if (!text) return "";
  let parsed = String(text);
  parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)\[([^\x00-\x7F]+?)\]/g, '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>');
  parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)\(([^\x00-\x7F]+?)\)/g, '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>');
  return parsed;
};

window.putarSuaraJepangN5 = function(teks) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const cleanText = teks.replace(/\[.*?\]|\(.*?\)/g, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ja-JP';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
};

window.bukaModulN5 = function() {
  aturVisibilitasNavigasiMobileN5(true);
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  display.classList.remove("hidden");
  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-4xl mx-auto px-1 pb-16 transition-all">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
        <a href="/eksplor/" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali ke Eksplor</span>
        </a>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wide">JLPT N5</span>
      </div>

      <div class="text-center space-y-2 mb-8">
        <h3 class="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
          Modul Pembelajaran <span class="whitespace-nowrap">JLPT N5</span>
        </h3>
        <p class="text-xs lg:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
          Pondasi dasar kosakata, huruf kanji, dan tata bahasa Minna no Nihongo 1 (Bab 1–25).
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
        <div onclick="window.ambilDataSheetN5('N5_Kanji', 'Kanji N5')" class="p-5 lg:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
              ${SVG_ICONS_N5.kanji}
            </div>
            <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Kanji N5</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">Kosakata Kanji tingkat pemula (angka, waktu, arah, alam, aktivitas).</p>
          </div>
          <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1">Buka Kanji →</span>
        </div>

        <div onclick="window.bukaPilihanBabBunpouN5()" class="p-5 lg:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
              ${SVG_ICONS_N5.book}
            </div>
            <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Tata Bahasa (Bunpou)</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">
              Pola kalimat Minna no Nihongo 1<br>
              <span class="whitespace-nowrap font-medium text-slate-400">Bab 1 sampai Bab 25.</span>
            </p>
          </div>
          <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1">Buka Bunpou →</span>
        </div>

        <div onclick="window.bukaPilihanBabKotobaN5()" class="p-5 lg:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
              ${SVG_ICONS_N5.vocab}
            </div>
            <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Kosakata (Kotoba)</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">
              Kosakata Minna no Nihongo 1<br>
              <span class="whitespace-nowrap font-medium text-slate-400">Bab 1 sampai Bab 25.</span>
            </p>
          </div>
          <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1">Pilih Bab →</span>
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

window.bukaPilihanBabKotobaN5 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const babList = Array.from({ length: 25 }, (_, i) => i + 1);
  const daftarBabHtml = babList.map(bab => `
    <div onclick="window.pilihBabKotobaMinnaN5Direct(${bab})" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group">
      <div>
        <h4 class="text-xs font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Bab ${bab}</h4>
      </div>
      <span class="text-xs font-bold text-sky-400">Pilih →</span>
    </div>
  `).join("");

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-3xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
        <button onclick="window.bukaModulN5()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali</span>
        </button>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">Kosakata Minna 1</span>
      </div>

      <div onclick="window.bukaModeBukuKotobaLangsungN5()" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group mb-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition">
            ${SVG_ICONS_N5.book}
          </div>
          <div>
            <h4 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Mode Buku</h4>
            <p class="text-[11px] text-slate-400">Bab 1 - 25</p>
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

window.bukaPilihanBabBunpouN5 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const babList = Array.from({ length: 25 }, (_, i) => i + 1);
  const daftarBabHtml = babList.map(bab => `
    <div onclick="window.mulaiFlashcardBunpouBabLangsungN5(${bab})" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group">
      <div>
        <h4 class="text-xs font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Bab ${bab}</h4>
      </div>
      <span class="text-xs font-bold text-sky-400">Buka →</span>
    </div>
  `).join("");

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-3xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
        <button onclick="window.bukaModulN5()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali</span>
        </button>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">Tata Bahasa N5</span>
      </div>

      <div onclick="window.bukaModeBukuBunpouLangsungN5()" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group mb-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition">
            ${SVG_ICONS_N5.book}
          </div>
          <div>
            <h4 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Mode Buku</h4>
            <p class="text-[11px] text-slate-400">Pola Kalimat Bab 1 - 25</p>
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

window.ambilDataSheetN5 = async function(sheetName, judul, babTarget = null) {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const fileMap = {
    'N5_Kanji': './data/kanji.json',
    'N5_Bunpou': './data/bunpou.json',
    'N5_Kotoba': './data/kotoba.json'
  };

  const jsonUrl = fileMap[sheetName] || `./data/${sheetName.toLowerCase()}.json`;
  const cacheKey = `cache_n5_${sheetName}_v4`;
  const dataCache = localStorage.getItem(cacheKey);

  const olahDataKeSesi = (dataArray) => {
    window.sesiGoiAktifN5.kategori = sheetName;
    window.sesiGoiAktifN5.judul = judul;
    window.sesiGoiAktifN5.babTerpilih = babTarget;
    window.sesiGoiAktifN5.isFlipped = false;
    window.sesiGoiAktifN5.pencarianBuku = "";
    window.sesiGoiAktifN5.modelLihatSudahHafal = false;

    let dataArrayMapped = dataArray.map((item, idx) => {
      const rawId = String(item.id || item.uid || `n5-${idx + 1}`).trim();
      let babNum = item.bab !== undefined ? item.bab : null;

      if (babNum === null) {
        const m = rawId.match(/#?(\d+)-/);
        if (m) babNum = parseInt(m[1], 10);
      }

      return {
        serialNumber: idx + 1,
        uid: rawId,
        bab: babNum,
        kanji: item.kanji || item.pola || "-",
        baca: item.baca || item.rumus || "-",
        arti: item.arti || item.arti_pola || "-",
        contoh: item.contoh || item.contoh_kalimat || "",
        arti_contoh: item.arti_contoh || item.arti_kalimat || ""
      };
    });

    if (babTarget !== null) {
      dataArrayMapped = dataArrayMapped.filter(item => item.bab === babTarget);
    }

    window.sesiGoiAktifN5.seluruhData = dataArrayMapped;
    const simpanan = localStorage.getItem(`hafalan_n5_${sheetName}_bab_${babTarget || 'all'}`);
    window.sesiGoiAktifN5.idSudahHafal = simpanan ? JSON.parse(simpanan) : [];

    if (sheetName === 'N5_Bunpou' && babTarget === null) {
      window.sesiGoiAktifN5.modeTampilan = "buku";
      window.renderModeBukuN5();
    } else {
      window.bukaMenuPorsiHafalanN5();
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
    const res = await fetch(jsonUrl);
    if (!res.ok) {
      throw new Error(`Gagal fetch ${jsonUrl} (Status: ${res.status})`);
    }
    const semuaData = await res.json();

    if (semuaData && semuaData.length > 0) {
      localStorage.setItem(cacheKey, JSON.stringify(semuaData));
      olahDataKeSesi(semuaData);
    } else {
      alert("Materi kosong.");
      window.bukaModulN5();
    }
  } catch (err) {
    alert("Gagal memuat materi pembelajaran.");
    window.bukaModulN5();
  }
};

window.bukaModeBukuBunpouLangsungN5 = async function() {
  await window.ambilDataSheetN5('N5_Bunpou', 'Tata Bahasa N5', null);
  window.sesiGoiAktifN5.modeTampilan = "buku";
  window.renderModeBukuN5();
};

window.mulaiFlashcardBunpouBabLangsungN5 = async function(bab) {
  await window.ambilDataSheetN5('N5_Bunpou', `Tata Bahasa N5 (Bab ${bab})`, bab);
  window.sesiGoiAktifN5.modelLihatSudahHafal = false;
  window.sesiGoiAktifN5.antreanHafal = [...window.sesiGoiAktifN5.seluruhData];
  window.sesiGoiAktifN5.indeksSekarang = 0;
  window.sesiGoiAktifN5.isFlipped = false;
  window.sesiGoiAktifN5.modeTampilan = "flashcard";
  window.renderLayarBelajarN5();
};

window.bukaModeBukuKotobaLangsungN5 = async function() {
  await window.ambilDataSheetN5('N5_Kotoba', 'Kosakata Minna 1', null);
  window.sesiGoiAktifN5.modeTampilan = "buku";
  window.renderModeBukuN5();
};

window.pilihBabKotobaMinnaN5Direct = async function(bab) {
  await window.ambilDataSheetN5('N5_Kotoba', `Kosakata Minna 1 (Bab ${bab})`, bab);
};

window.bukaMenuPorsiHafalanN5 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  window.sesiGoiAktifN5.modelLihatSudahHafal = false;

  const belumHafal = window.sesiGoiAktifN5.seluruhData.filter(
    item => !window.sesiGoiAktifN5.idSudahHafal.includes(item.uid)
  ).length;

  let tombolKembaliAksi = "window.bukaModulN5()";
  let tampilkanTombolModeBuku = true;

  if (window.sesiGoiAktifN5.kategori === 'N5_Kotoba') {
    if (window.sesiGoiAktifN5.babTerpilih !== null) {
      tombolKembaliAksi = "window.bukaPilihanBabKotobaN5()";
      tampilkanTombolModeBuku = false;
    } else {
      tombolKembaliAksi = "window.bukaPilihanBabKotobaN5()";
    }
  } else if (window.sesiGoiAktifN5.kategori === 'N5_Bunpou') {
    tombolKembaliAksi = "window.bukaPilihanBabBunpouN5()";
  }

  const tombolBukuHtml = tampilkanTombolModeBuku ? `
    <div class="mb-5">
      <div onclick="window.gantiModeTampilanN5('buku')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between gap-3 shadow-sm group">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition">
            ${SVG_ICONS_N5.book}
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
        <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">${window.sesiGoiAktifN5.judul}</span>
      </div>

      ${tombolBukuHtml}

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
        <button onclick="window.mulaiSesiHafalanN5(10)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">10</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
        </button>
        <button onclick="window.mulaiSesiHafalanN5(20)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">20</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
        </button>
        <button onclick="window.mulaiSesiHafalanN5(50)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">50</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
        </button>
        <button onclick="window.mulaiSesiHafalanN5('semua')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
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
          <input type="number" id="input-custom-porsi-n5" min="1" max="${belumHafal || 1}" placeholder="15" onkeydown="if(event.key==='Enter') window.mulaiCustomPorsiN5()" class="w-full sm:w-28 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-center focus:outline-none focus:border-sky-500 transition shadow-inner">
          <button onclick="window.mulaiCustomPorsiN5()" class="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition shadow-sm whitespace-nowrap">
            Mulai →
          </button>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
};

window.mulaiCustomPorsiN5 = function() {
  const input = document.getElementById("input-custom-porsi-n5");
  if (!input) return;
  const nilai = parseInt(input.value, 10);
  if (isNaN(nilai) || nilai <= 0) {
    alert("Masukkan angka yang pas!");
    return;
  }
  window.mulaiSesiHafalanN5(nilai);
};

window.mulaiSesiHafalanN5 = function(jumlah) {
  window.sesiGoiAktifN5.modelLihatSudahHafal = false;

  let kandidat = window.sesiGoiAktifN5.seluruhData.filter(
    item => !window.sesiGoiAktifN5.idSudahHafal.includes(item.uid)
  );
  kandidat = kandidat.sort(() => Math.random() - 0.5);

  if (jumlah !== "semua") {
    kandidat = kandidat.slice(0, jumlah);
  }

  if (kandidat.length === 0) {
    kandidat = window.sesiGoiAktifN5.seluruhData;
  }

  window.sesiGoiAktifN5.modeTampilan = "flashcard";
  window.sesiGoiAktifN5.antreanHafal = kandidat;
  window.sesiGoiAktifN5.indeksSekarang = 0;
  window.sesiGoiAktifN5.isFlipped = false;
  window.sesiGoiAktifN5.sembunyikanKanji = false;
  window.sesiGoiAktifN5.sembunyikanBaca = false;
  window.sesiGoiAktifN5.sembunyikanArti = false;
  window.renderLayarBelajarN5();
};

window.gantiModeTampilanN5 = function(mode) {
  window.sesiGoiAktifN5.modeTampilan = mode;
  window.sesiGoiAktifN5.modelLihatSudahHafal = false;
  if (mode === "buku") {
    window.renderModeBukuN5();
  } else {
    window.renderLayarBelajarN5();
  }
};

window.renderModeBukuN5 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const keyword = (window.sesiGoiAktifN5.pencarianBuku || "").trim().toLowerCase();
  const kategori = window.sesiGoiAktifN5.kategori;
  const isBunpou = kategori === "N5_Bunpou";
  const isKanji = kategori === "N5_Kanji";
  const isKotoba = !isBunpou && !isKanji;
  const babAktif = window.sesiGoiAktifN5.babTerpilih;

  let dataset = window.sesiGoiAktifN5.seluruhData;

  if (babAktif !== null && (isBunpou || kategori === 'N5_Kotoba')) {
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
      const sudahHafal = window.sesiGoiAktifN5.idSudahHafal.includes(item.uid);

      if (isKanji) {
        const isBlind = window.sesiGoiAktifN5.bukuKanjiBlindMode;
        const isFlipped = window.sesiGoiAktifN5.bukuFlippedItems[item.uid] || false;
        const sembunyikanInfo = isBlind && !isFlipped;

        daftarHtml += `
          <div onclick="window.toggleFlipBukuKanjiN5('${item.uid}')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-sky-500/50 transition select-none cursor-pointer relative">
            <div class="flex items-start justify-between gap-1">
              <span class="text-xs font-mono font-bold text-slate-500">#${item.serialNumber}</span>
              <div class="flex items-center gap-1">
                <button onclick="event.stopPropagation(); window.putarSuaraJepangN5('${item.kanji}')" class="p-1 rounded-lg text-slate-400 hover:text-sky-400 transition" title="Dengarkan Suara">
                  ${SVG_ICONS_N5.sound}
                </button>
                <button onclick="event.stopPropagation(); window.toggleTandaHafalN5('${item.uid}')" class="p-1 rounded-lg border transition ${sudahHafal ? 'bg-emerald-500 text-white border-emerald-500' : 'text-slate-500 border-slate-700 hover:text-white'}">
                  ${SVG_ICONS_N5.check}
                </button>
              </div>
            </div>
            <div class="my-2 text-center">
              <span class="text-3xl font-black text-slate-900 dark:text-white block">${item.kanji}</span>
              <span class="text-xs font-mono font-bold text-sky-400 block mt-1 transition ${sembunyikanInfo ? 'filter blur-sm select-none' : ''}">${item.baca}</span>
            </div>
            <div>
              <span class="text-xs font-medium text-slate-700 dark:text-slate-300 block line-clamp-1 transition ${sembunyikanInfo ? 'filter blur-sm select-none' : ''}">${item.arti}</span>
              ${item.contoh ? `
                <button onclick="event.stopPropagation(); window.bukaModalContohN5('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}')" class="mt-2 text-[10px] font-bold text-sky-400 hover:underline inline-flex items-center gap-1">
                  ${SVG_ICONS_N5.chat} <span>Contoh</span>
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
                    ${window.renderFuriganaHtmlN5(item.kanji)}
                  </h4>
                  <p class="text-xs font-mono text-sky-400 font-semibold mt-0.5 leading-[2.0]">
                    ${window.renderFuriganaHtmlN5(item.baca)}
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-1.5 shrink-0">
                <button onclick="window.putarSuaraJepangN5('${item.kanji}')" class="p-1.5 rounded-xl border border-slate-700 text-slate-400 hover:text-sky-400 transition" title="Dengarkan Suara">
                  ${SVG_ICONS_N5.sound}
                </button>
                <button onclick="window.toggleTandaHafalN5('${item.uid}')" class="text-xs px-2.5 py-1 rounded-xl font-bold border transition shrink-0 ${sudahHafal ? 'bg-emerald-500 text-white border-emerald-500' : 'text-slate-400 border-slate-700 hover:text-white'}">
                  ${sudahHafal ? '✓ Hafal' : 'Tandai'}
                </button>
              </div>
            </div>
            <div class="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
              <p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-relaxed">${item.arti}</p>
            </div>
            ${item.contoh ? `
              <div class="text-xs space-y-1 pt-1">
                <p class="text-slate-900 dark:text-slate-100 font-medium leading-[2.4]">
                  ${window.renderFuriganaHtmlN5(item.contoh)}
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
                  <span class="text-base font-black text-slate-900 dark:text-white cursor-pointer transition select-none ${window.sesiGoiAktifN5.bukuSembunyiKanji ? 'blur-md' : ''}" onclick="this.classList.toggle('blur-md')">${item.kanji}</span>
                  <span class="text-xs font-mono text-sky-400 font-semibold cursor-pointer transition select-none ${window.sesiGoiAktifN5.bukuSembunyiBaca ? 'blur-sm' : ''}" onclick="this.classList.toggle('blur-sm')">${item.baca}</span>
                </div>
                <p class="text-xs text-slate-400 truncate mt-0.5 cursor-pointer transition select-none ${window.sesiGoiAktifN5.bukuSembunyiArti ? 'blur-sm' : ''}" onclick="this.classList.toggle('blur-sm')">${item.arti}</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <button onclick="window.putarSuaraJepangN5('${item.kanji}')" class="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition" title="Dengar Suara">
                ${SVG_ICONS_N5.sound}
              </button>
              ${item.contoh ? `
                <button onclick="window.bukaModalContohN5('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}')" class="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition" title="Lihat Contoh">
                  ${SVG_ICONS_N5.chat}
                </button>
              ` : ''}
              <button onclick="window.toggleTandaHafalN5('${item.uid}')" class="p-1.5 rounded-lg border transition ${sudahHafal ? 'bg-emerald-500 text-white border-emerald-500' : 'text-slate-400 border-slate-700 hover:text-white'}">
                ${SVG_ICONS_N5.check}
              </button>
            </div>
          </div>
        `;
      }
    });
  }

  let pillFilterHtml = "";
  if (isBunpou || kategori === 'N5_Kotoba') {
    const babArray = [null, ...Array.from({ length: 25 }, (_, i) => i + 1)];
    pillFilterHtml = `
      <div class="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none no-scrollbar">
        ${babArray.map(b => {
          const isActive = babAktif === b;
          const label = b === null ? 'Semua Bab' : `Bab ${b}`;
          return `
            <button onclick="window.sesiGoiAktifN5.babTerpilih = ${b}; window.renderModeBukuN5();" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${isActive ? 'bg-sky-500 border-sky-500 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-200'}">
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
        <button onclick="window.sesiGoiAktifN5.bukuSembunyiKanji = !window.sesiGoiAktifN5.bukuSembunyiKanji; window.renderModeBukuN5();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN5.bukuSembunyiKanji ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          ${window.sesiGoiAktifN5.bukuSembunyiKanji ? 'Buka Kanji' : 'Tutup Kanji'}
        </button>
        <button onclick="window.sesiGoiAktifN5.bukuSembunyiBaca = !window.sesiGoiAktifN5.bukuSembunyiBaca; window.renderModeBukuN5();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN5.bukuSembunyiBaca ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          ${window.sesiGoiAktifN5.bukuSembunyiBaca ? 'Buka Furigana' : 'Tutup Furigana'}
        </button>
        <button onclick="window.sesiGoiAktifN5.bukuSembunyiArti = !window.sesiGoiAktifN5.bukuSembunyiArti; window.renderModeBukuN5();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN5.bukuSembunyiArti ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          ${window.sesiGoiAktifN5.bukuSembunyiArti ? 'Buka Arti' : 'Tutup Arti'}
        </button>
      </div>
    `;
  }

  let tombolKembaliBuku = `<button onclick="window.bukaMenuPorsiHafalanN5()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-200 font-bold text-xs">← Porsi</button>`;
  if (isBunpou) {
    tombolKembaliBuku = `<button onclick="window.bukaPilihanBabBunpouN5()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-200 font-bold text-xs">← Menu</button>`;
  } else if (kategori === 'N5_Kotoba') {
    tombolKembaliBuku = `<button onclick="window.bukaPilihanBabKotobaN5()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-200 font-bold text-xs">← Menu</button>`;
  }

  const gridClass = isKanji ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5" : (isBunpou ? "space-y-3" : "grid grid-cols-1 sm:grid-cols-2 gap-2");

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-4xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4 gap-2">
        <div class="flex items-center gap-1.5 min-w-0">
          ${tombolKembaliBuku}
          <span class="px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold truncate max-w-[160px]">${window.sesiGoiAktifN5.judul}</span>
        </div>

        <button onclick="window.mulaiSesiHafalanN5(10)" class="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5 shrink-0 whitespace-nowrap">
          ${SVG_ICONS_N5.flashcard} <span>Flashcard</span>
        </button>
      </div>

      <div class="flex items-center gap-2 mb-2">
        <input type="text" id="input-cari-buku-n5" placeholder="Cari nomor (#1), kanji, pola, atau arti..." value="${window.sesiGoiAktifN5.pencarianBuku}" oninput="window.sesiGoiAktifN5.pencarianBuku = this.value; window.renderModeBukuN5();" class="w-full px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition shadow-inner">
        ${isKanji ? `
          <button onclick="window.toggleBlindModeKanjiN5()" title="Sembunyikan Furigana & Arti" class="h-10 w-10 shrink-0 rounded-2xl border flex items-center justify-center transition shadow-inner ${window.sesiGoiAktifN5.bukuKanjiBlindMode ? 'bg-sky-500 border-sky-500 text-white' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-white'}">
            ${window.sesiGoiAktifN5.bukuKanjiBlindMode ? SVG_ICONS_N5.eyeClosed : SVG_ICONS_N5.eyeOpen}
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

  const inputCari = document.getElementById("input-cari-buku-n5");
  if (inputCari && window.sesiGoiAktifN5.pencarianBuku) {
    inputCari.focus();
    const len = inputCari.value.length;
    inputCari.setSelectionRange(len, len);
  }
};

window.toggleFlipBukuKanjiN5 = function(uid) {
  if (!window.sesiGoiAktifN5.bukuKanjiBlindMode) return;
  window.sesiGoiAktifN5.bukuFlippedItems[uid] = !window.sesiGoiAktifN5.bukuFlippedItems[uid];
  window.renderModeBukuN5();
};

window.toggleBlindModeKanjiN5 = function() {
  window.sesiGoiAktifN5.bukuKanjiBlindMode = !window.sesiGoiAktifN5.bukuKanjiBlindMode;
  window.sesiGoiAktifN5.bukuFlippedItems = {};
  window.renderModeBukuN5();
};

window.renderLayarBelajarN5 = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const listTampil = window.sesiGoiAktifN5.modelLihatSudahHafal 
    ? window.sesiGoiAktifN5.seluruhData.filter(item => window.sesiGoiAktifN5.idSudahHafal.includes(item.uid))
    : window.sesiGoiAktifN5.antreanHafal;

  const total = listTampil.length;
  const item = listTampil[window.sesiGoiAktifN5.indeksSekarang];

  if (!item || total === 0) {
    display.innerHTML = `
      <div class="text-center py-16 space-y-3 max-w-sm mx-auto px-2 pb-16">
        <span class="text-4xl block font-black text-sky-400">COMPLETE</span>
        <h4 class="text-lg font-black text-slate-900 dark:text-white">Target Sesi Tuntas!</h4>
        <p class="text-xs text-slate-400">Seluruh target materi N5 pada sesi ini telah selesai dipelajari.</p>
        <div class="pt-3 flex items-center justify-center gap-2">
          <button onclick="window.sesiGoiAktifN5.modelLihatSudahHafal = false; window.bukaMenuPorsiHafalanN5()" class="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md transition">
            + Porsi Baru
          </button>
          <button onclick="window.gantiModeTampilanN5('buku')" class="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-300 font-bold text-xs transition">
            Mode Buku
          </button>
        </div>
      </div>
    `;
    return;
  }

  const sudahDihafal = window.sesiGoiAktifN5.idSudahHafal.includes(item.uid);
  const kategori = window.sesiGoiAktifN5.kategori;

  let tombolSelesaiAksi = "window.bukaMenuPorsiHafalanN5()";
  if (kategori === 'N5_Bunpou') {
    tombolSelesaiAksi = "window.bukaPilihanBabBunpouN5()";
  } else if (kategori === 'N5_Kotoba') {
    tombolSelesaiAksi = "window.bukaPilihanBabKotobaN5()";
  }

  const topHeader = `
    <div class="border-b border-slate-200 dark:border-slate-800 pb-2.5 mb-3 space-y-2">
      <div class="flex items-center justify-between">
        <button onclick="${tombolSelesaiAksi}" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition text-xs">
          ← Selesai
        </button>
        <button onclick="window.gantiModeTampilanN5('buku')" class="px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500 hover:text-white text-sky-400 font-bold transition text-xs border border-sky-500/20 inline-flex items-center gap-1.5 whitespace-nowrap">
          ${SVG_ICONS_N5.book} <span>Mode Buku</span>
        </button>
      </div>

      <div class="flex items-center justify-between text-xs pt-0.5">
        <button onclick="window.toggleLihatSudahHafalN5()" class="px-2.5 py-1 rounded-lg text-[10px] font-bold border transition flex items-center gap-1.5 ${window.sesiGoiAktifN5.modelLihatSudahHafal ? 'bg-amber-500/15 border-amber-500/40 text-amber-400 hover:bg-amber-500/25' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-white'}">
          <span>${window.sesiGoiAktifN5.modelLihatSudahHafal ? '← Belum Hafal' : 'Lihat Hafal'}</span>
          <span class="px-1.5 py-0.2 rounded bg-black/20 text-[9px] font-mono">
            ${window.sesiGoiAktifN5.modelLihatSudahHafal ? window.sesiGoiAktifN5.antreanHafal.length : window.sesiGoiAktifN5.idSudahHafal.length}
          </span>
        </button>
        <span class="font-mono font-bold text-slate-400">${window.sesiGoiAktifN5.indeksSekarang + 1} / ${total}</span>
      </div>
    </div>
  `;

  const bottomNav = `
    <div class="flex items-center gap-2 pt-2">
      <button onclick="window.gantiKartuN5(-1)" title="Kartu Sebelumnya (Shortcut: ← Panah Kiri / A)" class="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition text-xs shadow-sm">
        ◀
      </button>
      <button onclick="window.toggleTandaHafalN5('${item.uid}')" title="Tandai Hafal (Shortcut: M)" class="flex-1 py-3 rounded-2xl font-bold text-xs transition shadow-sm flex items-center justify-center gap-1.5 ${sudahDihafal ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white text-slate-700 dark:text-slate-300'}">
        ${SVG_ICONS_N5.check}
        <span>${sudahDihafal ? 'Sudah Ditandai Hafal' : 'Tandai Hafal'}</span>
      </button>
      <button onclick="window.gantiKartuN5(1)" title="Kartu Berikutnya (Shortcut: → Panah Kanan / D)" class="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition text-xs shadow-sm">
        ▶
      </button>
    </div>
  `;

  if (kategori === "N5_Bunpou") {
    display.innerHTML = `
      <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
        ${topHeader}
        <div class="p-6 lg:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4 text-left">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <span class="text-xs font-bold text-sky-400">Bab ${item.bab || '1-25'} - Minna no Nihongo 1</span>
            <span class="text-xs font-mono font-bold text-slate-400">#${item.serialNumber}</span>
          </div>

          <div>
            <div class="flex items-center justify-between gap-2">
              <h2 class="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-[2.4] tracking-wide">
                ${window.renderFuriganaHtmlN5(item.kanji)}
              </h2>
              <button onclick="window.putarSuaraJepangN5('${item.kanji}')" class="p-2 rounded-xl bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition" title="Dengarkan Pengucapan">
                ${SVG_ICONS_N5.sound}
              </button>
            </div>
            <p class="text-xs font-mono text-sky-400 font-semibold mt-1 leading-[2.0]">
              ${window.renderFuriganaHtmlN5(item.baca)}
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
            <span class="text-[10px] font-bold text-slate-400 block mb-1">ARTI / MAKNA POLA:</span>
            <p class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">${item.arti}</p>
          </div>

          ${item.contoh ? `
            <div class="space-y-1.5 pt-1 border-t border-slate-200 dark:border-slate-800">
              <span class="text-[10px] font-bold text-slate-400 block">CONTOH KALIMAT:</span>
              <p class="text-sm text-slate-900 dark:text-slate-100 font-medium leading-[2.4]">
                ${window.renderFuriganaHtmlN5(item.contoh)}
              </p>
              <p class="text-xs text-slate-400 italic">${item.arti_contoh || ""}</p>
            </div>
          ` : ''}
        </div>
        ${bottomNav}
      </div>
    `;
    window.scrollTo(0, 0);
    return;
  }

  if (kategori === "N5_Kanji") {
    display.innerHTML = `
      <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
        ${topHeader}

        <div onclick="window.toggleFlipCardN5()" title="Klik untuk balik kartu (Shortcut: Spasi / Enter / ↑ / ↓)" class="p-6 lg:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center relative shadow-md min-h-[220px] lg:min-h-[280px] flex flex-col justify-center items-center cursor-pointer transition select-none hover:border-sky-500/60">
          <span class="absolute top-3.5 left-4 text-xs font-mono font-bold text-slate-500">#${item.serialNumber}</span>
          <button onclick="event.stopPropagation(); window.putarSuaraJepangN5('${(item.baca || item.kanji).replace(/'/g, "\\'")}')" class="absolute top-3.5 right-4 p-1.5 rounded-xl bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition" title="Dengarkan Pengucapan">
            ${SVG_ICONS_N5.sound}
          </button>

          <div class="${window.sesiGoiAktifN5.isFlipped ? 'hidden' : 'block'}">
            <h2 class="text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-wider">${item.kanji}</h2>
          </div>

          <div class="${window.sesiGoiAktifN5.isFlipped ? 'block' : 'hidden'} space-y-2">
            <div class="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">${item.kanji}</div>
            <div class="text-base font-bold text-sky-400 font-mono">${item.baca}</div>
            <div class="text-sm lg:text-base font-bold text-slate-700 dark:text-slate-200 max-w-md mx-auto pt-2 border-t border-slate-200 dark:border-slate-800">${item.arti}</div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-2 px-1">
          <span class="text-[10px] text-slate-400 font-medium">(Ketuk kartu untuk membalik)</span>
          ${item.contoh ? `
            <button onclick="window.bukaModalContohN5('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}')" class="px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500 hover:text-white text-sky-400 text-[10px] font-bold transition inline-flex items-center gap-1">
              ${SVG_ICONS_N5.chat} <span>Contoh</span>
            </button>
          ` : ''}
        </div>

        <div class="mt-2">${bottomNav}</div>
      </div>
    `;
    window.scrollTo(0, 0);
    return;
  }

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
      ${topHeader}
      <div class="p-6 lg:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center relative shadow-md min-h-[190px] flex flex-col justify-center items-center">
        <div class="absolute top-3.5 left-4 right-4 flex items-center justify-between">
          <span class="text-xs font-mono font-bold text-slate-500">#${item.serialNumber}</span>
          <button onclick="window.putarSuaraJepangN5('${(item.baca || item.kanji).replace(/'/g, "\\'")}')" class="p-1.5 rounded-xl bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition" title="Dengarkan">
            ${SVG_ICONS_N5.sound}
          </button>
        </div>

        <h2 class="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white transition cursor-pointer select-none mt-2 ${window.sesiGoiAktifN5.sembunyikanKanji ? 'blur-md filter' : ''}" onclick="this.classList.toggle('blur-md')">
          ${item.kanji}
        </h2>

        <p class="text-xs font-bold text-sky-400 mt-1.5 font-mono transition cursor-pointer select-none ${window.sesiGoiAktifN5.sembunyikanBaca ? 'blur-sm filter' : ''}" onclick="this.classList.toggle('blur-sm')">
          ${item.baca}
        </p>

        <div class="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 w-full max-w-xs">
          <p class="text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-200 transition cursor-pointer select-none ${window.sesiGoiAktifN5.sembunyikanArti ? 'blur-sm filter' : ''}" onclick="this.classList.toggle('blur-sm')">
            ${item.arti}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-1.5 mt-2.5">
        <button onclick="window.toggleSensorGoiN5('kanji')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN5.sembunyikanKanji ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          Kanji
        </button>
        <button onclick="window.toggleSensorGoiN5('baca')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN5.sembunyikanBaca ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          Furigana
        </button>
        <button onclick="window.toggleSensorGoiN5('arti')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${window.sesiGoiAktifN5.sembunyikanArti ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          Arti
        </button>
        <button onclick="if('${item.contoh ? 'ada' : ''}') window.bukaModalContohN5('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}'); else alert('Contoh belum tersedia');" class="h-9 px-1.5 rounded-xl border border-sky-500/30 text-sky-400 text-[10px] font-bold transition hover:bg-sky-500/20 flex items-center justify-center gap-1">
          ${SVG_ICONS_N5.chat}
          <span class="truncate">Contoh</span>
        </button>
      </div>

      <div class="mt-3">${bottomNav}</div>
    </div>
  `;
  window.scrollTo(0, 0);
};

window.gantiKartuN5 = function(arah) {
  const listTampil = window.sesiGoiAktifN5.modelLihatSudahHafal 
    ? window.sesiGoiAktifN5.seluruhData.filter(item => window.sesiGoiAktifN5.idSudahHafal.includes(item.uid))
    : window.sesiGoiAktifN5.antreanHafal;

  const total = listTampil.length;
  if (total === 0) return;

  window.sesiGoiAktifN5.isFlipped = false;
  let baru = window.sesiGoiAktifN5.indeksSekarang + arah;
  if (baru < 0) baru = 0;
  if (baru >= total) baru = total - 1;
  window.sesiGoiAktifN5.indeksSekarang = baru;
  window.renderLayarBelajarN5();
};

window.toggleTandaHafalN5 = function(uid) {
  const index = window.sesiGoiAktifN5.idSudahHafal.indexOf(uid);
  if (index > -1) {
    window.sesiGoiAktifN5.idSudahHafal.splice(index, 1);
  } else {
    window.sesiGoiAktifN5.idSudahHafal.push(uid);
  }

  const sheetName = window.sesiGoiAktifN5.kategori;
  const babTarget = window.sesiGoiAktifN5.babTerpilih;
  localStorage.setItem(
    `hafalan_n5_${sheetName}_bab_${babTarget || 'all'}`,
    JSON.stringify(window.sesiGoiAktifN5.idSudahHafal)
  );

  if (window.sesiGoiAktifN5.modeTampilan === "buku") {
    window.renderModeBukuN5();
  } else {
    window.renderLayarBelajarN5();
  }
};

window.toggleLihatSudahHafalN5 = function() {
  window.sesiGoiAktifN5.modelLihatSudahHafal = !window.sesiGoiAktifN5.modelLihatSudahHafal;
  window.sesiGoiAktifN5.indeksSekarang = 0;
  window.sesiGoiAktifN5.isFlipped = false;
  window.renderLayarBelajarN5();
};

window.toggleSensorGoiN5 = function(tipe) {
  if (tipe === 'kanji') window.sesiGoiAktifN5.sembunyikanKanji = !window.sesiGoiAktifN5.sembunyikanKanji;
  if (tipe === 'baca') window.sesiGoiAktifN5.sembunyikanBaca = !window.sesiGoiAktifN5.sembunyikanBaca;
  if (tipe === 'arti') window.sesiGoiAktifN5.sembunyikanArti = !window.sesiGoiAktifN5.sembunyikanArti;
  window.renderLayarBelajarN5();
};

window.bukaModalContohN5 = function(judul, contohEncoded, artiContohEncoded) {
  const modalLama = document.getElementById("modal-contoh-n5");
  if (modalLama) modalLama.remove();

  const contoh = decodeURIComponent(contohEncoded);
  const artiContoh = decodeURIComponent(artiContohEncoded);

  const modalHtml = `
    <div id="modal-contoh-n5" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
      <div class="bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-md p-6 space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xl font-black text-slate-900 dark:text-white">${judul}</span>
            <span class="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold">Contoh Kalimat</span>
          </div>
          <button onclick="document.getElementById('modal-contoh-n5').remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-400 hover:text-white transition">✕</button>
        </div>

        <div class="space-y-3 py-2">
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <div class="flex items-start justify-between gap-2">
              <p class="text-base font-bold text-slate-900 dark:text-white leading-[2.4]">
                ${window.renderFuriganaHtmlN5(contoh)}
              </p>
              <button onclick="window.putarSuaraJepangN5('${contoh.replace(/'/g, "\\'")}')" class="p-2 rounded-xl bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition shrink-0" title="Putar Suara">
                ${SVG_ICONS_N5.sound}
              </button>
            </div>
            <p class="text-xs text-slate-400 italic">${artiContoh}</p>
          </div>
        </div>

        <button onclick="document.getElementById('modal-contoh-n5').remove()" class="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-sky-500 hover:text-white transition">
          Tutup
        </button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

window.toggleFlipCardN5 = function() {
  window.sesiGoiAktifN5.isFlipped = !window.sesiGoiAktifN5.isFlipped;
  window.renderLayarBelajarN5();
};

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

  const modalContoh = document.getElementById("modal-contoh-n5");
  if (modalContoh) {
    if (e.key === 'Escape') {
      e.preventDefault();
      modalContoh.remove();
    }
    return;
  }

  if (!window.sesiGoiAktifN5 || window.sesiGoiAktifN5.modeTampilan !== 'flashcard') return;

  const key = e.key;

  if (key === '?' || (e.shiftKey && key === '/')) {
    e.preventDefault();
    if (typeof window.bukaModalShortcut === 'function') window.bukaModalShortcut();
    return;
  }

  if (key === 'ArrowRight' || key === 'd' || key === 'D') {
    e.preventDefault();
    window.gantiKartuN5(1);
    return;
  }

  if (key === 'ArrowLeft' || key === 'a' || key === 'A') {
    e.preventDefault();
    window.gantiKartuN5(-1);
    return;
  }

  if (key === ' ' || key === 'ArrowUp' || key === 'ArrowDown' || key === 'Enter') {
    e.preventDefault();
    window.toggleFlipCardN5();
    return;
  }

  if (key === '1') {
    e.preventDefault();
    if (typeof window.toggleSensorGoiN5 === 'function') window.toggleSensorGoiN5('kanji');
    return;
  }
  if (key === '2') {
    e.preventDefault();
    if (typeof window.toggleSensorGoiN5 === 'function') window.toggleSensorGoiN5('baca');
    return;
  }
  if (key === '3') {
    e.preventDefault();
    if (typeof window.toggleSensorGoiN5 === 'function') window.toggleSensorGoiN5('arti');
    return;
  }

  if (key === 'm' || key === 'M') {
    e.preventDefault();
    const listTampil = window.sesiGoiAktifN5.modelLihatSudahHafal 
      ? window.sesiGoiAktifN5.seluruhData.filter(item => window.sesiGoiAktifN5.idSudahHafal.includes(item.uid))
      : window.sesiGoiAktifN5.antreanHafal;
    const item = listTampil[window.sesiGoiAktifN5.indeksSekarang];
    if (item) {
      window.toggleTandaHafalN5(item.uid);
    }
    return;
  }

  if (key === 'p' || key === 'P') {
    e.preventDefault();
    const listTampil = window.sesiGoiAktifN5.modelLihatSudahHafal 
      ? window.sesiGoiAktifN5.seluruhData.filter(item => window.sesiGoiAktifN5.idSudahHafal.includes(item.uid))
      : window.sesiGoiAktifN5.antreanHafal;
    const item = listTampil[window.sesiGoiAktifN5.indeksSekarang];
    if (item) {
      const teksSuara = item.kanji || item.baca || '';
      if (teksSuara) window.putarSuaraJepangN5(teksSuara);
    }
    return;
  }

  if (key === 'Escape') {
    e.preventDefault();
    window.gantiModeTampilanN5('buku');
    return;
  }
});
