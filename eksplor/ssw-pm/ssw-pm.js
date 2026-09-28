(function () {
  'use strict';

  // Icons
  const ICONS = {
    materi: `<svg class="w-5 h-5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
    kotoba: `<svg class="w-5 h-5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`,
    latihan: `<svg class="w-5 h-5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>`,
    rumus: `<svg class="w-5 h-5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`,
    book: `<svg class="w-5 h-5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
    chat: `<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>`,
    sound: `<svg class="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>`,
    check: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>`,
    close: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>`,
    arrowLeft: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>`,
    arrowRight: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>`,
    skip: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>`,
    search: `<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`,
    timer: `<svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    award: `<svg class="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>`,
    alert: `<svg class="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`,
    warningSm: `<svg class="w-4 h-4 text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`,
    lightbulb: `<svg class="w-3.5 h-3.5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`,
    clipboard: `<svg class="w-3.5 h-3.5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>`,
    clipboardRose: `<svg class="w-3.5 h-3.5 text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>`,
    info: `<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
  };

  // State
  window.stateSSW = {
    view: 'hub', // 'hub', 'materi', 'kotoba', 'latihan', 'rumus'
    dataMateri: null,
    dataKotoba: [],
    dataSoal: [],

    // Kotoba
    kotoba: {
      subView: 'menu', // 'menu', 'porsi', 'flashcard', 'buku'
      babFilter: 0,
      porsiTarget: 10,
      daftarFlashcard: [],
      filterHafal: 'semua',
      pencarian: '',
      indeksFlashcard: 0,
      isFlipped: false,
      sembunyiKanji: false,
      sembunyiBaca: false,
      sembunyiArti: false,
      modelLihatSudahHafal: false,
      limitBuku: 60,
      idHafal: JSON.parse(localStorage.getItem('ssw_pm_kotoba_hafal') || '[]')
    },

    // Latihan
    latihan: {
      tahap: 'persiapan', // 'persiapan', 'main', 'selesai'
      paketFilter: 'semua',
      babFilter: 0,
      jumlahTarget: 20,
      modeKustom: false,
      kustomJumlah: 20,
      pakaiTimer: true,
      waktuPerSoal: 30,
      sisaWaktu: 30,
      timerId: null,
      daftarSoal: [],
      indeksSoal: 0,
      jawabanUser: {},
      skor: 0
    },

    // Materi
    materi: {
      babAktif: 1,
      babSelesai: JSON.parse(localStorage.getItem('ssw_pm_bab_selesai') || '[]')
    }
  };

  // Audio
  window.bicaraJepangSSW = function (teks) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = String(teks).replace(/<[^>]*>/g, '').replace(/[\[\]\(\)]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  // Furigana Helper
  window.renderFuriganaSSW = function (text) {
    if (!text) return "";
    let parsed = String(text);
    parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)[(（\[]([ぁ-んァ-ヶー]+)[)）\]]/g, '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] sm:text-[10px] text-sky-400 font-sans tracking-tight font-bold leading-none">$2</rt></ruby>');
    return parsed;
  };

  // Data Loader
  async function pastikanDataTersedia() {
    const s = window.stateSSW;
    const promises = [];

    if (!s.dataMateri) {
      promises.push(
        fetch('/eksplor/ssw-pm/data/materi.json')
          .then(res => res.json())
          .then(data => { s.dataMateri = data; })
          .catch(() => {
            if (window.DATA_SSW_MATERI) s.dataMateri = window.DATA_SSW_MATERI;
          })
      );
    }

    if (!s.dataKotoba || s.dataKotoba.length === 0) {
      promises.push(
        fetch('/eksplor/ssw-pm/data/kotoba.json')
          .then(res => res.json())
          .then(data => { s.dataKotoba = data; })
          .catch(() => {
            if (window.DATA_SSW_KOTOBA) s.dataKotoba = window.DATA_SSW_KOTOBA;
          })
      );
    }

    if (!s.dataSoal || s.dataSoal.length === 0) {
      promises.push(
        fetch('/eksplor/ssw-pm/data/soal.json')
          .then(res => res.json())
          .then(data => { s.dataSoal = data; })
          .catch(() => {
            if (window.DATA_SSW_SOAL) s.dataSoal = window.DATA_SSW_SOAL;
          })
      );
    }

    await Promise.all(promises);
  }

  // Router
  window.bukaModulSSW = async function () {
    window.stateSSW.view = 'hub';
    window.renderSSW();
    await pastikanDataTersedia();
    window.renderSSW();
  };

  window.bukaMenuSSW = function (targetView, opsi = null) {
    window.stateSSW.view = targetView;
    if (targetView === 'kotoba') {
      if (opsi !== null) {
        window.stateSSW.kotoba.babFilter = opsi;
        window.stateSSW.kotoba.subView = 'flashcard';
        window.stateSSW.kotoba.indeksFlashcard = 0;
        window.stateSSW.kotoba.isFlipped = false;
        window.stateSSW.kotoba.modelLihatSudahHafal = false;
      } else {
        window.stateSSW.kotoba.subView = 'menu';
      }
    }
    if (targetView === 'materi' && opsi !== null) {
      window.stateSSW.materi.babAktif = opsi;
    }
    if (targetView === 'latihan') {
      window.stateSSW.latihan.tahap = 'persiapan';
      clearInterval(window.stateSSW.latihan.timerId);
    }
    window.renderSSW();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.renderSSW = function () {
    const root = document.getElementById('eksplor-detail-display');
    if (!root) return;

    const v = window.stateSSW.view;
    if (v === 'hub') {
      root.innerHTML = viewHub();
    } else if (v === 'materi') {
      root.innerHTML = viewMateri();
    } else if (v === 'kotoba') {
      root.innerHTML = viewKotoba();
    } else if (v === 'latihan') {
      root.innerHTML = viewLatihan();
    } else if (v === 'rumus') {
      root.innerHTML = viewRumus();
    }
  };

    // Hub View
    function viewHub() {
    const s = window.stateSSW;
    const totalKotoba = (s.dataKotoba || []).length || 1190;
    const totalSoal = (s.dataSoal || []).length || 223;

    return `
      <div class="w-full max-w-4xl mx-auto px-1 pb-16 space-y-8 animate-in fade-in duration-200">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 gap-2">
          <a href="/eksplor/" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm shrink-0 whitespace-nowrap">
            ${ICONS.arrowLeft} <span>Kembali ke Eksplor</span>
          </a>
          <span class="px-3.5 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wide shrink-0 whitespace-nowrap">
            SSW 1 飲食料品製造業
          </span>
        </div>

        <div class="text-center space-y-2">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Modul SSW <span class="text-sky-400">Pengolahan Makanan</span>
          </h2>
          <p class="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            Kurikulum resmi OTAFF revisi terbaru, ${totalKotoba} master kosakata teknis pabrik, dan ${totalSoal} latihan simulasi ujian.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div onclick="window.bukaMenuSSW('materi')" class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
            <div>
              <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
                ${ICONS.materi}
              </div>
              <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Materi Belajar</h4>
              <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Kurikulum 5 Bab: Sanitasi, HACCP, Pengendalian Bahaya, K3, dan SOP Manufaktur.
              </p>
            </div>
            <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition">Buka Materi →</span>
          </div>

          <div onclick="window.bukaMenuSSW('kotoba')" class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
            <div>
              <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
                ${ICONS.kotoba}
              </div>
              <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Kosakata (Kotoba)</h4>
              <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                ${totalKotoba} Kosakata teknis industri makanan dan istilah ujian. Mode Flashcard & Buku.
              </p>
            </div>
            <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition">Buka Kotoba →</span>
          </div>

          <div onclick="window.bukaMenuSSW('latihan')" class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
            <div>
              <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
                ${ICONS.latihan}
              </div>
              <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Latihan Soal</h4>
              <p class="text-xs text-slate-400 mt-1.5 leading-relaxed">
                ${totalSoal} Soal simulasi ujian Tokutei Ginou dengan pilihan ganda A/B/C/D & pembahasan.
              </p>
            </div>
            <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition">Mulai Latihan →</span>
          </div>
        </div>

        <div onclick="window.bukaMenuSSW('rumus')" class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between group shadow-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition">
              ${ICONS.rumus}
            </div>
            <div>
              <h5 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Rumus & Hitungan Produksi</h5>
              <p class="text-xs text-slate-400 mt-0.5">Kalkulator pengenceran klorin (NaClO), yield rate, defect rate, & jam mesin.</p>
            </div>
          </div>
          <span class="text-xs font-bold text-sky-400 shrink-0 inline-flex items-center gap-1 group-hover:translate-x-1 transition">Buka Rumus →</span>
        </div>
      </div>
    `;
  }

    // Kotoba View
    window.bukaKotobaMenuSSW = function () {
    window.stateSSW.kotoba.subView = 'menu';
    window.renderSSW();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.bukaModeBukuSSW = function () {
    window.stateSSW.kotoba.subView = 'buku';
    window.renderSSW();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.pilihBabKotobaSSW = function (bab) {
    const k = window.stateSSW.kotoba;
    k.babFilter = bab;
    k.subView = 'porsi';
    window.renderSSW();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.mulaiFlashcardPorsiSSW = function (porsi) {
    const k = window.stateSSW.kotoba;
    const all = window.stateSSW.dataKotoba || [];
    let pool = all.filter(item => k.babFilter === 0 || item.bab === k.babFilter);
    if (pool.length === 0) pool = all.slice();

    const belumHafal = pool.filter(item => !k.idHafal.includes(item.id));
    const sudahHafal = pool.filter(item => k.idHafal.includes(item.id));
    const targetPool = belumHafal.length > 0 ? [...belumHafal, ...sudahHafal] : pool;

    const count = porsi === 'semua' ? targetPool.length : Math.min(parseInt(porsi) || 10, targetPool.length);
    k.porsiTarget = count;
    k.daftarFlashcard = targetPool.slice(0, count);
    k.indeksFlashcard = 0;
    k.modelLihatSudahHafal = false;
    k.subView = 'flashcard';
    window.renderSSW();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.mulaiCustomPorsiSSW = function () {
    const el = document.getElementById('input-custom-porsi-ssw');
    const val = parseInt(el ? el.value : '10') || 10;
    window.mulaiFlashcardPorsiSSW(val);
  };

  window.toggleLihatSudahHafalSSW = function () {
    const k = window.stateSSW.kotoba;
    const all = window.stateSSW.dataKotoba || [];
    let pool = all.filter(item => k.babFilter === 0 || item.bab === k.babFilter);
    k.modelLihatSudahHafal = !k.modelLihatSudahHafal;
    if (k.modelLihatSudahHafal) {
      k.daftarFlashcard = pool.filter(item => k.idHafal.includes(item.id));
    } else {
      const belum = pool.filter(item => !k.idHafal.includes(item.id));
      k.daftarFlashcard = belum.length > 0 ? belum.slice(0, k.porsiTarget || 10) : pool.slice(0, k.porsiTarget || 10);
    }
    k.indeksFlashcard = 0;
    window.renderSSW();
  };

  window.gantiKartuFlashcardSSW = function (arah) {
    const k = window.stateSSW.kotoba;
    const list = k.daftarFlashcard || [];
    if (list.length === 0) return;
    let nextIdx = k.indeksFlashcard + arah;
    if (nextIdx < 0) nextIdx = list.length - 1;
    if (nextIdx >= list.length) nextIdx = 0;
    k.indeksFlashcard = nextIdx;
    window.renderSSW();
  };

  window.toggleFlipCardSSW = function () {
    const k = window.stateSSW.kotoba;
    k.sembunyiArti = !k.sembunyiArti;
    window.renderSSW();
  };

  window.toggleTandaHafalSSW = function (id) {
    let list = window.stateSSW.kotoba.idHafal;
    if (list.includes(id)) {
      list = list.filter(x => x !== id);
    } else {
      list.push(id);
    }
    window.stateSSW.kotoba.idHafal = list;
    localStorage.setItem('ssw_pm_kotoba_hafal', JSON.stringify(list));
    window.renderSSW();
  };

  window.toggleSensorKotobaSSW = function (tipe) {
    const k = window.stateSSW.kotoba;
    if (tipe === 'kanji') k.sembunyiKanji = !k.sembunyiKanji;
    if (tipe === 'baca') k.sembunyiBaca = !k.sembunyiBaca;
    if (tipe === 'arti') k.sembunyiArti = !k.sembunyiArti;
    window.renderSSW();
  };

  window.bukaModalContohSSW = function (item) {
    if (!item) return;
    const modalExisting = document.getElementById('ssw-modal-contoh');
    if (modalExisting) modalExisting.remove();

    const contoh = item.contoh || `${item.kanji}を使って作業を行います。`;
    const arti = item.arti_contoh || `Melakukan pekerjaan dengan cermat menggunakan ${item.arti}.`;
    const cleanTTS = String(contoh).replace(/\[[^\]]+\]/g, '').replace(/<[^>]+>/g, '').trim();
    const renderedContoh = window.renderFuriganaSSW(contoh);

    const furiItem = item.furigana ? `<rt class="text-[9px] sm:text-[10px] text-sky-400 font-bold">${item.furigana}</rt>` : '';
    const rubyItem = `<ruby class="font-bold text-slate-900 dark:text-white text-base">${item.kanji}${furiItem}</ruby>`;

    const modalHtml = `
      <div id="ssw-modal-contoh" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-lg p-5 sm:p-6 space-y-4 shadow-2xl">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-black px-2.5 py-0.5 rounded-lg bg-sky-500/10 text-sky-400 inline-flex items-center gap-1">
                ${ICONS.chat} <span>Contoh Penggunaan</span>
              </span>
              <span class="text-xs font-bold text-slate-400 font-mono">#${item.id}</span>
            </div>
            <button onclick="document.getElementById('ssw-modal-contoh').remove()" class="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition">
              ${ICONS.close}
            </button>
          </div>

          <div class="space-y-3.5">
            <div class="inline-flex items-center flex-wrap gap-2 px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/20">
              <span class="text-[10px] font-bold uppercase tracking-wider text-sky-400">Kosakata:</span>
              <span class="inline-flex items-center gap-1.5">${rubyItem}</span>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">(${item.arti})</span>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-start justify-between gap-3">
              <div class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-[2.8] sm:leading-[3] tracking-wide break-words flex-1">
                ${renderedContoh}
              </div>
              <button onclick="window.bicaraJepangSSW('${cleanTTS.replace(/'/g, "\\'")}')" class="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition shrink-0 shadow-sm mt-1" title="Dengarkan Suara">
                ${ICONS.sound}
              </button>
            </div>

            <div class="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Arti Bahasa Indonesia:</span>
              <p class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed">${arti}</p>
            </div>
          </div>

          <button onclick="document.getElementById('ssw-modal-contoh').remove()" class="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition shadow-md shadow-sky-500/20">
            Tutup
          </button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  };

  window.bukaModalSkemaSSW = function () {
    const modalExisting = document.getElementById('ssw-modal-skema');
    if (modalExisting) modalExisting.remove();

    const modalHtml = `
      <div id="ssw-modal-skema" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150" onclick="if(event.target === this) this.remove()">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
          
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 p-4 sm:p-5 shrink-0">
            <div class="flex items-center gap-2.5">
              <span class="w-9 h-9 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                ${ICONS.info}
              </span>
              <div>
                <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">Skema & Informasi Ujian Resmi SSW PM</h3>
                <p class="text-[11px] text-slate-400">Pengolahan Makanan (飲食料品製造業 特定技能1号 技能測定試験)</p>
              </div>
            </div>
            <button onclick="document.getElementById('ssw-modal-skema').remove()" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition shrink-0">
              ${ICONS.close}
            </button>
          </div>

          <div class="p-4 sm:p-6 overflow-y-auto space-y-5 custom-scroll text-xs">
            
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-center space-y-0.5">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Soal</span>
                <span class="text-lg font-black text-sky-500">40 Soal</span>
                <span class="text-[10px] text-slate-500 dark:text-slate-400 block">Pilihan Ganda CBT</span>
              </div>
              <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-center space-y-0.5">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Waktu Ujian</span>
                <span class="text-lg font-black text-amber-500">80 Menit</span>
                <span class="text-[10px] text-slate-500 dark:text-slate-400 block">±2 Menit / Soal</span>
              </div>
              <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-center space-y-0.5">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Passing Grade</span>
                <span class="text-lg font-black text-emerald-500">Min. 65%</span>
                <span class="text-[10px] text-slate-500 dark:text-slate-400 block">Benar ≥ 26 Soal</span>
              </div>
              <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-center space-y-0.5">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Bahasa Ujian</span>
                <span class="text-lg font-black text-purple-400">Furigana</span>
                <span class="text-[10px] text-slate-500 dark:text-slate-400 block">Ada Bacaan Kanji</span>
              </div>
            </div>

            <div class="space-y-3">
              <h4 class="text-xs font-black uppercase tracking-wider text-slate-400">Pembagian Komposisi Soal</h4>
              
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                <div class="flex items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded-lg bg-sky-500/10 text-sky-400 font-bold text-[11px]">1. 学科試験</span>
                    <span class="font-bold text-slate-900 dark:text-white text-xs">Ujian Teori & Pengetahuan</span>
                  </div>
                  <span class="text-[11px] font-extrabold text-sky-400">± 30 Soal</span>
                </div>
                <ul class="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  <li class="flex items-start gap-1.5">
                    <span class="text-sky-400 shrink-0 mt-0.5 font-bold">•</span>
                    <span><b>Sanitasi Umum & HACCP:</b> Kebersihan diri, 7 prinsip HACCP, bakteri/virus penyebab keracunan makanan (Salmonella, Norovirus, Campylobacter, dll.), dan batas suhu bahaya 10°C–60°C.</span>
                  </li>
                  <li class="flex items-start gap-1.5">
                    <span class="text-sky-400 shrink-0 mt-0.5 font-bold">•</span>
                    <span><b>Keselamatan Kerja & KYT:</b> Penerapan 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke), Kiken Yochi Training (analisis bahaya), APD, dan aturan pakaian kerja pabrik.</span>
                  </li>
                  <li class="flex items-start gap-1.5">
                    <span class="text-sky-400 shrink-0 mt-0.5 font-bold">•</span>
                    <span><b>Manajemen Operasional Pabrik:</b> Penanganan 7 bahan alergen wajib, pencegahan kontaminasi silang, penerimaan bahan baku, dan rotasi stok FIFO.</span>
                  </li>
                </ul>
              </div>

              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                <div class="flex items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded-lg bg-amber-500/10 text-amber-500 dark:text-amber-400 font-bold text-[11px]">2. 実技試験</span>
                    <span class="font-bold text-slate-900 dark:text-white text-xs">Ujian Praktek Tertulis (Kasus)</span>
                  </div>
                  <span class="text-[11px] font-extrabold text-amber-500 dark:text-amber-400">± 10 Soal</span>
                </div>
                <ul class="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  <li class="flex items-start gap-1.5">
                    <span class="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5 font-bold">•</span>
                    <span><b>Studi Kasus Bergambar:</b> Menganalisis gambar situasi di area kerja pabrik untuk menemukan tindakan tidak aman atau potensi bahaya kerja.</span>
                  </li>
                  <li class="flex items-start gap-1.5">
                    <span class="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5 font-bold">•</span>
                    <span><b>1–2 Soal Hitungan Produksi:</b> Menguji salah satu dari 4 rumus pabrik (pengenceran klorin disinfektan, rasio <i>yield rate</i>, <i>defect rate</i>, atau kapasitas jam operasi).</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 space-y-2">
              <h4 class="text-xs font-black text-sky-400 flex items-center gap-1.5">
                ${ICONS.lightbulb} <span>Strategi Sukses Ujian OTAFF</span>
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                <div class="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800">
                  <b class="text-slate-900 dark:text-white block mb-0.5">1. Perhatikan Kata Kunci Soal</b>
                  Pastikan membaca apakah soal meminta pilihan yang <b>Benar (正しい)</b> atau yang <b>Salah / Tidak Tepat (誤っている / 不適切)</b>.
                </div>
                <div class="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800">
                  <b class="text-slate-900 dark:text-white block mb-0.5">2. Alokasikan Waktu 2 Menit/Soal</b>
                  Dengan 80 menit untuk 40 soal, jika ada soal yang membingungkan segera lewati dan kerjakan yang lebih mudah terlebih dahulu.
                </div>
                <div class="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800">
                  <b class="text-slate-900 dark:text-white block mb-0.5">3. Kuasai Istilah Kotoba</b>
                  Hafalkan kosakata spesifik seperti <i>Datsuryū</i> (melepas pakaian), <i>Sakkin</i> (sterilisasi), <i>Bishōbutsu</i> (mikroorganisme).
                </div>
                <div class="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800">
                  <b class="text-slate-900 dark:text-white block mb-0.5">4. Kuasai Rumus Produksi</b>
                  Kuasai logika matematika 4 rumus pabrik di menu Kalkulator Produksi agar bisa mengamankan poin hitungan tanpa panik.
                </div>
              </div>
            </div>

          </div>

          <div class="border-t border-slate-200 dark:border-slate-800 p-4 sm:p-5 bg-slate-50/50 dark:bg-slate-900/50 shrink-0 flex items-center justify-end gap-2">
            <button onclick="document.getElementById('ssw-modal-skema').remove()" class="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition shadow-md shadow-sky-500/20">
              Mengerti & Siap Simulasi
            </button>
          </div>

        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  };

  window.muatLebihBanyakKotobaSSW = function () {
    window.stateSSW.kotoba.limitBuku = (window.stateSSW.kotoba.limitBuku || 60) + 60;
    window.renderSSW();
  };

  function getKotobaTerfilter() {
    const data = window.stateSSW.dataKotoba || [];
    const k = window.stateSSW.kotoba;
    return data.filter(item => {
      if (k.babFilter !== 0 && item.bab !== k.babFilter) return false;
      const hafal = k.idHafal.includes(item.id);
      if (k.filterHafal === 'hafal' && !hafal) return false;
      if (k.filterHafal === 'belum' && hafal) return false;
      if (k.pencarian) {
        const q = k.pencarian.toLowerCase().trim();
        const cocokan = (item.kanji && item.kanji.toLowerCase().includes(q)) ||
                        (item.furigana && item.furigana.toLowerCase().includes(q)) ||
                        (item.romaji && item.romaji.toLowerCase().includes(q)) ||
                        (item.arti && item.arti.toLowerCase().includes(q)) ||
                        (item.sources && item.sources.some(s => s.toLowerCase().includes(q)));
        if (!cocokan) return false;
      }
      return true;
    });
  }

  function viewKotoba() {
    const k = window.stateSSW.kotoba;
    if (k.subView === 'menu') return renderKotobaMenu();
    if (k.subView === 'porsi') return renderKotobaPorsi();
    if (k.subView === 'flashcard') return renderKotobaFlashcard();
    return renderKotobaBuku();
  }

  function renderKotobaMenu() {
    return `
      <div class="w-full max-w-md lg:max-w-3xl mx-auto px-1 pb-16 animate-in fade-in duration-150">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
          <button onclick="window.bukaMenuSSW('hub')" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
            <span>←</span> <span>Kembali</span>
          </button>
          <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">SSW Pengolahan Makanan</span>
        </div>

        <div onclick="window.bukaModeBukuSSW()" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group mb-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition">
              ${ICONS.book}
            </div>
            <div>
              <h4 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Mode Buku</h4>
              <p class="text-[11px] text-slate-400">Semua Bab 1 - 5</p>
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
          ${[1, 2, 3, 4, 5].map(b => `
            <div onclick="window.pilihBabKotobaSSW(${b})" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group">
              <div>
                <h4 class="text-xs font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Bab ${b}</h4>
              </div>
              <span class="text-xs font-bold text-sky-400">Pilih →</span>
            </div>
          `).join('')}
          <div onclick="window.pilihBabKotobaSSW(0)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between shadow-sm group">
            <div>
              <h4 class="text-xs font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Semua Bab</h4>
            </div>
            <span class="text-xs font-bold text-sky-400">Pilih →</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderKotobaPorsi() {
    const k = window.stateSSW.kotoba;
    const all = window.stateSSW.dataKotoba || [];
    const pool = all.filter(item => k.babFilter === 0 || item.bab === k.babFilter);
    const belumHafal = pool.filter(item => !k.idHafal.includes(item.id)).length;
    const babTitle = k.babFilter === 0 ? 'Semua Bab (1-5)' : `Bab ${k.babFilter}`;

    return `
      <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16 animate-in fade-in duration-150">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
          <button onclick="window.bukaKotobaMenuSSW()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
            <span>←</span> <span>Kembali</span>
          </button>
          <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">${babTitle}</span>
        </div>

        <div class="mb-5">
          <div onclick="window.bukaModeBukuSSW()" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between gap-3 shadow-sm group">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition">
                ${ICONS.book}
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

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
          <button onclick="window.mulaiFlashcardPorsiSSW(10)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
            <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">10</span>
            <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
          </button>
          <button onclick="window.mulaiFlashcardPorsiSSW(20)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
            <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">20</span>
            <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
          </button>
          <button onclick="window.mulaiFlashcardPorsiSSW(50)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
            <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">50</span>
            <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
          </button>
          <button onclick="window.mulaiFlashcardPorsiSSW('semua')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
            <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">Semua</span>
            <span class="text-[10px] text-slate-400 mt-0.5 block">${belumHafal} Belum Hafal</span>
          </button>
        </div>

        <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div class="text-center sm:text-left">
            <h4 class="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap">Atur Jumlah Bebas</h4>
            <p class="text-[10px] text-slate-400 whitespace-nowrap">Ketik porsi materi sesi ini.</p>
          </div>
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <input type="number" id="input-custom-porsi-ssw" min="1" max="${pool.length || 1}" placeholder="15" onkeydown="if(event.key==='Enter') window.mulaiCustomPorsiSSW()" class="w-full sm:w-28 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-center focus:outline-none focus:border-sky-500 transition shadow-inner">
            <button onclick="window.mulaiCustomPorsiSSW()" class="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition shadow-sm whitespace-nowrap">
              Mulai →
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderKotobaFlashcard() {
    const k = window.stateSSW.kotoba;
    const list = k.daftarFlashcard || [];

    if (list.length === 0) {
      return `
        <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16 text-center space-y-4">
          <div class="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center mx-auto">
              ${ICONS.award}
            </div>
            <h4 class="text-lg font-black text-slate-900 dark:text-white">Target Sesi Tuntas!</h4>
            <p class="text-xs text-slate-400">Seluruh target materi pada sesi ini telah dipelajari.</p>
            <div class="pt-3 flex items-center justify-center gap-2">
              <button onclick="window.pilihBabKotobaSSW(window.stateSSW.kotoba.babFilter)" class="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md transition">
                + Porsi Baru
              </button>
              <button onclick="window.bukaModeBukuSSW()" class="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-300 font-bold text-xs transition">
                Mode Buku
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const curr = list[k.indeksFlashcard] || list[0];
    const isHafal = k.idHafal.includes(curr.id);

    return `
      <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16 animate-in fade-in duration-150">
        <div class="border-b border-slate-200 dark:border-slate-800 pb-2.5 mb-3 space-y-2">
          <div class="flex items-center justify-between">
            <button onclick="window.pilihBabKotobaSSW(window.stateSSW.kotoba.babFilter)" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition text-xs">
              ← Selesai
            </button>
            <button onclick="window.bukaModeBukuSSW()" class="px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500 hover:text-white text-sky-400 font-bold transition text-xs border border-sky-500/20 inline-flex items-center gap-1.5 whitespace-nowrap">
              ${ICONS.book} <span>Mode Buku</span>
            </button>
          </div>

          <div class="flex items-center justify-between text-xs pt-0.5">
            <button onclick="window.toggleLihatSudahHafalSSW()" class="px-2.5 py-1 rounded-lg text-[10px] font-bold border transition flex items-center gap-1.5 ${k.modelLihatSudahHafal ? 'bg-sky-500/15 border-sky-500/40 text-sky-400 hover:bg-sky-500/25' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-white'}">
              <span>${k.modelLihatSudahHafal ? '← Belum Hafal' : 'Lihat Sudah Hafal'}</span>
              <span class="px-1.5 py-0.2 rounded bg-black/20 text-[9px] font-mono">
                ${k.modelLihatSudahHafal ? list.length : k.idHafal.length}
              </span>
            </button>
            <span class="font-mono font-bold text-slate-400">${k.indeksFlashcard + 1} / ${list.length}</span>
          </div>
        </div>

        <div onclick="window.toggleFlipCardSSW()" class="p-6 lg:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center relative shadow-md min-h-[190px] flex flex-col justify-center items-center cursor-pointer select-none group transition hover:border-sky-500/40">
          <span class="absolute top-3.5 left-4 text-xs font-mono font-bold text-slate-500">#${curr.id}</span>

          <button onclick="event.stopPropagation(); window.bicaraJepangSSW('${curr.kanji.replace(/'/g, "\\'")}')" class="absolute top-3.5 right-4 p-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition" title="Dengarkan Suara">
            ${ICONS.sound}
          </button>

          <h2 class="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white transition ${k.sembunyiKanji ? 'blur-md filter' : ''}">
            ${curr.kanji}
          </h2>

          <p class="text-xs font-bold text-sky-400 mt-1.5 font-mono transition ${k.sembunyiBaca ? 'blur-sm filter' : ''}">
            ${curr.furigana}
          </p>

          <div class="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 w-full max-w-xs">
            <p class="text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-200 transition ${k.sembunyiArti ? 'blur-sm filter' : ''}">
              ${curr.arti}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-1.5 mt-2.5">
          <button onclick="window.toggleSensorKotobaSSW('kanji')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${k.sembunyiKanji ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
            <span>Kanji</span>
          </button>
          <button onclick="window.toggleSensorKotobaSSW('baca')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${k.sembunyiBaca ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
            <span>Furigana</span>
          </button>
          <button onclick="window.toggleSensorKotobaSSW('arti')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${k.sembunyiArti ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
            <span>Arti</span>
          </button>
          <button onclick="window.bukaModalContohSSW(window.stateSSW.kotoba.daftarFlashcard[window.stateSSW.kotoba.indeksFlashcard])" class="h-9 px-2 rounded-xl border border-sky-500/30 text-sky-400 text-[11px] font-bold transition hover:bg-sky-500/20 flex items-center justify-center gap-1.5">
            ${ICONS.chat}
            <span>Contoh</span>
          </button>
        </div>

        <div class="flex items-center gap-2 pt-3">
          <button onclick="window.gantiKartuFlashcardSSW(-1)" class="w-12 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition shadow-sm flex items-center justify-center shrink-0">
            ${ICONS.arrowLeft}
          </button>
          <button onclick="window.toggleTandaHafalSSW(${curr.id})" class="flex-1 h-11 rounded-2xl font-bold text-xs transition shadow-sm flex items-center justify-center gap-1.5 ${isHafal ? 'bg-sky-500 hover:bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-300'}">
            ${ICONS.check}
            <span>${isHafal ? 'Sudah Ditandai Hafal' : 'Tandai Hafal'}</span>
          </button>
          <button onclick="window.gantiKartuFlashcardSSW(1)" class="w-12 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition shadow-sm flex items-center justify-center shrink-0">
            ${ICONS.arrowRight}
          </button>
        </div>
      </div>
    `;
  }

  function renderKotobaBuku() {
    const k = window.stateSSW.kotoba;
    const allData = window.stateSSW.dataKotoba || [];
    const list = getKotobaTerfilter();
    const limit = k.limitBuku || 60;
    const itemsToShow = list.slice(0, limit);

    return `
      <div class="w-full max-w-4xl mx-auto px-1 pb-16 space-y-5 animate-in fade-in duration-150">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 gap-2">
          <button onclick="window.bukaKotobaMenuSSW()" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm shrink-0 whitespace-nowrap">
            <span>←</span> <span>Kembali</span>
          </button>
          <span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wide shrink-0 whitespace-nowrap">
            Mode Buku (${list.length})
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div class="md:col-span-8 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button onclick="window.stateSSW.kotoba.babFilter = 0; window.renderSSW();" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${k.babFilter === 0 ? 'bg-sky-500 border-sky-500 text-white' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-200'}">
              Semua (${allData.length})
            </button>
            ${[1, 2, 3, 4, 5].map(b => `
              <button onclick="window.stateSSW.kotoba.babFilter = ${b}; window.renderSSW();" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${k.babFilter === b ? 'bg-sky-500 border-sky-500 text-white' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-200'}">
                Bab ${b}
              </button>
            `).join('')}
          </div>

          <div class="md:col-span-4 relative">
            <input type="text" value="${k.pencarian}" oninput="window.stateSSW.kotoba.pencarian = event.target.value; window.renderSSW();" placeholder="Cari kanji, furigana, arti..." class="w-full px-3.5 py-1.5 pl-9 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium focus:outline-none focus:border-sky-500 transition">
            <div class="absolute left-3 top-2">${ICONS.search}</div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-1.5">
          <button onclick="window.stateSSW.kotoba.sembunyiKanji = !window.stateSSW.kotoba.sembunyiKanji; window.renderSSW();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${k.sembunyiKanji ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
            ${k.sembunyiKanji ? 'Buka Kanji' : 'Tutup Kanji'}
          </button>
          <button onclick="window.stateSSW.kotoba.sembunyiBaca = !window.stateSSW.kotoba.sembunyiBaca; window.renderSSW();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${k.sembunyiBaca ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
            ${k.sembunyiBaca ? 'Buka Furigana' : 'Tutup Furigana'}
          </button>
          <button onclick="window.stateSSW.kotoba.sembunyiArti = !window.stateSSW.kotoba.sembunyiArti; window.renderSSW();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${k.sembunyiArti ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
            ${k.sembunyiArti ? 'Buka Arti' : 'Tutup Arti'}
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${itemsToShow.map(item => {
            const isHafal = k.idHafal.includes(item.id);
            return `
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border ${isHafal ? 'border-sky-500/40' : 'border-slate-200 dark:border-slate-800'} flex items-center justify-between gap-3 hover:border-sky-500/50 transition">
                <div class="flex items-center gap-3 min-w-0">
                  <span class="text-[11px] font-mono font-bold text-slate-400 w-8 shrink-0">#${item.id}</span>
                  <div class="truncate">
                    <div class="flex items-baseline gap-2">
                      <span class="text-base font-black text-slate-900 dark:text-white cursor-pointer select-none ${k.sembunyiKanji ? 'blur-md' : ''}" onclick="this.classList.toggle('blur-md')">${item.kanji}</span>
                      <span class="text-xs font-mono text-sky-400 font-semibold cursor-pointer select-none ${k.sembunyiBaca ? 'blur-sm' : ''}" onclick="this.classList.toggle('blur-sm')">${item.furigana}</span>
                    </div>
                    <p class="text-xs text-slate-400 truncate mt-0.5 cursor-pointer select-none ${k.sembunyiArti ? 'blur-sm' : ''}" onclick="this.classList.toggle('blur-sm')">${item.arti}</p>
                  </div>
                </div>

                <div class="flex items-center gap-1.5 shrink-0">
                  <button onclick="window.bicaraJepangSSW('${item.kanji}')" class="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition" title="Dengarkan Suara">
                    ${ICONS.sound}
                  </button>
                  <button onclick="window.toggleTandaHafalSSW(${item.id})" class="p-1.5 rounded-lg border transition ${isHafal ? 'bg-sky-500 text-white border-sky-500' : 'text-slate-400 border-slate-700 hover:text-white'}">
                    ${ICONS.check}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        ${list.length > limit ? `
          <div class="text-center pt-3">
            <button onclick="window.muatLebihBanyakKotobaSSW()" class="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-black text-xs transition shadow-sm active:scale-95">
              Muat Lebih Banyak (${itemsToShow.length} dari ${list.length})
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

    // Latihan View
    window.setFilterPaketSSW = function (p) {
    window.stateSSW.latihan.paketFilter = p;
    window.renderSSW();
  };

  window.setJumlahTargetSSW = function (jml) {
    window.stateSSW.latihan.modeKustom = false;
    window.stateSSW.latihan.jumlahTarget = jml;
    window.renderSSW();
  };

  window.aktifkanModeKustomSSW = function () {
    window.stateSSW.latihan.modeKustom = true;
    window.renderSSW();
  };

  window.setJumlahKustomSSW = function (val) {
    const num = parseInt(val) || 1;
    window.stateSSW.latihan.kustomJumlah = num;
  };

  window.mulaiSesiLatihanSSW = function () {
    const lat = window.stateSSW.latihan;
    const allSoal = window.stateSSW.dataSoal || [];

    let pool = allSoal.filter(item => {
      if (lat.paketFilter !== 'semua' && item.paket !== lat.paketFilter) return false;
      return true;
    });

    if (pool.length === 0) pool = allSoal.slice();

    const shuffled = pool.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    let targetCount = pool.length;
    if (lat.modeKustom) {
      targetCount = Math.min(Math.max(1, parseInt(lat.kustomJumlah) || 10), pool.length);
    } else if (lat.jumlahTarget !== 'semua') {
      targetCount = Math.min(parseInt(lat.jumlahTarget) || 20, pool.length);
    }

    lat.daftarSoal = shuffled.slice(0, targetCount);
    lat.indeksSoal = 0;
    lat.jawabanUser = {};
    lat.skor = 0;
    lat.tahap = 'main';

    mulaiSoalAktifSSW();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function mulaiSoalAktifSSW() {
    const lat = window.stateSSW.latihan;
    clearInterval(lat.timerId);

    const curr = lat.daftarSoal[lat.indeksSoal];
    const sudahDijawab = curr && lat.jawabanUser[curr.id_soal] !== undefined;

    if (lat.pakaiTimer && !sudahDijawab) {
      lat.sisaWaktu = lat.waktuPerSoal;
      lat.timerId = setInterval(() => {
        lat.sisaWaktu--;
        const el = document.getElementById('ssw-timer-text');
        const bar = document.getElementById('ssw-timer-bar');
        if (el) el.innerText = `${lat.sisaWaktu}s`;
        if (bar) bar.style.width = `${(lat.sisaWaktu / lat.waktuPerSoal) * 100}%`;
        if (lat.sisaWaktu <= 0) {
          clearInterval(lat.timerId);
          window.skipSoalSSW();
        }
      }, 1000);
    }

    window.renderSSW();
  }

  window.pilihJawabanLatihanSSW = function (pilihanIdx) {
    const lat = window.stateSSW.latihan;
    const curr = lat.daftarSoal[lat.indeksSoal];
    if (!curr) return;
    if (lat.jawabanUser[curr.id_soal] !== undefined && lat.jawabanUser[curr.id_soal] !== 'skip') return;

    clearInterval(lat.timerId);
    lat.jawabanUser[curr.id_soal] = pilihanIdx;

    if (pilihanIdx === curr.kunci) {
      lat.skor++;
    }

    window.renderSSW();
  };

  window.kembaliSoalSSW = function () {
    const lat = window.stateSSW.latihan;
    if (lat.indeksSoal > 0) {
      lat.indeksSoal--;
      mulaiSoalAktifSSW();
    }
  };

  window.skipSoalSSW = function () {
    const lat = window.stateSSW.latihan;
    const curr = lat.daftarSoal[lat.indeksSoal];
    if (!curr) return;
    clearInterval(lat.timerId);

    if (lat.jawabanUser[curr.id_soal] === undefined) {
      lat.jawabanUser[curr.id_soal] = 'skip';
    }

    window.lanjutSoalLatihanSSW();
  };

  window.lanjutSoalLatihanSSW = function () {
    const lat = window.stateSSW.latihan;
    if (lat.indeksSoal < lat.daftarSoal.length - 1) {
      lat.indeksSoal++;
      mulaiSoalAktifSSW();
    } else {
      clearInterval(lat.timerId);
      lat.tahap = 'selesai';
      window.renderSSW();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  window.ulangLatihanSSW = function () {
    clearInterval(window.stateSSW.latihan.timerId);
    window.stateSSW.latihan.tahap = 'persiapan';
    window.renderSSW();
  };

  function viewLatihan() {
    const lat = window.stateSSW.latihan;
    const allSoal = window.stateSSW.dataSoal || [];

    if (lat.tahap === 'persiapan') {
      const uniquePaket = [...new Set(allSoal.map(s => s.paket))].filter(Boolean);
      uniquePaket.sort((a, b) => {
        if (a === 'Simulasi') return -1;
        if (b === 'Simulasi') return 1;
        if (a === 'PawPaw') return 1;
        if (b === 'PawPaw') return -1;
        return a.localeCompare(b, undefined, { numeric: true });
      });

      const daftarPaket = ['semua', ...uniquePaket];
      const pool = allSoal.filter(item => lat.paketFilter === 'semua' || item.paket === lat.paketFilter);
      const poolCount = pool.length;

      return `
        <div class="w-full max-w-2xl mx-auto px-1 pb-16 space-y-6 animate-in fade-in duration-200">
          <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 gap-2">
            <button onclick="window.bukaMenuSSW('hub')" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm shrink-0 whitespace-nowrap">
              ${ICONS.arrowLeft} <span>Kembali</span>
            </button>
            <div class="flex items-center gap-2 shrink-0">
              <button type="button" onclick="window.bukaModalSkemaSSW()" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-xs font-bold transition flex items-center gap-1.5 shadow-sm shrink-0 whitespace-nowrap">
                ${ICONS.info} <span>Skema Ujian</span>
              </button>
              <span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wide shrink-0 whitespace-nowrap">
                Simulasi Ujian
              </span>
            </div>
          </div>

          <div class="text-center space-y-1">
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Pengaturan Simulasi Ujian</h3>
            <p class="text-xs text-slate-400">Pilih paket, jumlah soal, dan aktifkan timer untuk simulasi standar.</p>
          </div>

          <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 shadow-sm">
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-300">Pilih Paket Soal:</label>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                ${daftarPaket.map(p => {
                  const count = p === 'semua' ? allSoal.length : allSoal.filter(s => s.paket === p).length;
                  const label = p === 'semua' ? `Semua Paket (${count})` : `${p} (${count})`;
                  const isActive = lat.paketFilter === p;
                  return `
                    <button type="button" onclick="window.setFilterPaketSSW('${p}')" class="p-2.5 rounded-xl border text-xs font-bold transition text-left truncate ${isActive ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-200'}">
                      ${label}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-300">Jumlah Soal:</label>
              <div class="grid grid-cols-5 gap-2">
                ${[10, 20, 30, 'semua'].map(jml => {
                  const isActive = !lat.modeKustom && String(lat.jumlahTarget) === String(jml);
                  const label = jml === 'semua' ? 'Semua' : jml;
                  return `
                    <button type="button" onclick="window.setJumlahTargetSSW('${jml}')" class="py-2.5 rounded-xl border text-xs font-bold text-center transition ${isActive ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-200'}">
                      ${label}
                    </button>
                  `;
                }).join('')}
                <button type="button" onclick="window.aktifkanModeKustomSSW()" class="py-2.5 rounded-xl border text-xs font-bold text-center transition ${lat.modeKustom ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-200'}">
                  Kustom
                </button>
              </div>

              ${lat.modeKustom ? `
                <div class="mt-2.5 p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-3 animate-in fade-in duration-150">
                  <div>
                    <span class="text-xs font-bold text-slate-900 dark:text-white block">Jumlah Soal Kustom</span>
                    <span class="text-[10px] text-slate-400">Tentukan jumlah soal yang ingin dikerjakan (1 - ${poolCount})</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <input type="number" min="1" max="${poolCount}" value="${lat.kustomJumlah || 15}" oninput="window.setJumlahKustomSSW(this.value)" class="w-20 px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-black text-center focus:outline-none focus:border-sky-500 transition">
                    <span class="text-xs font-bold text-slate-400">Soal</span>
                  </div>
                </div>
              ` : ''}
            </div>

            <div class="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
              <div>
                <span class="text-xs font-bold text-slate-200 block">Timer Per Soal</span>
                <span class="text-[11px] text-slate-400">30 detik per butir soal (standar ujian)</span>
              </div>
              <button type="button" onclick="window.stateSSW.latihan.pakaiTimer = !window.stateSSW.latihan.pakaiTimer; window.renderSSW();" class="px-3.5 py-1.5 rounded-xl border text-xs font-bold transition ${lat.pakaiTimer ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
                ${lat.pakaiTimer ? 'Aktif (30s)' : 'Nonaktif'}
              </button>
            </div>

            <button type="button" onclick="window.mulaiSesiLatihanSSW()" class="w-full py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-black transition shadow-md active:scale-95 flex items-center justify-center gap-2">
              <span>Mulai Simulasi Sekarang</span> ${ICONS.arrowRight}
            </button>
          </div>
        </div>
      `;
    }

    if (lat.tahap === 'main') {
      const curr = lat.daftarSoal[lat.indeksSoal];
      if (!curr) return '';

      const progress = ((lat.indeksSoal + 1) / lat.daftarSoal.length) * 100;
      const sudahDijawab = lat.jawabanUser[curr.id_soal] !== undefined;
      const userChoice = lat.jawabanUser[curr.id_soal];
      const isSkipped = userChoice === 'skip';
      const labelOpsi = ['A', 'B', 'C', 'D'];

      return `
        <div class="w-full max-w-2xl mx-auto px-1 pb-16 space-y-5 animate-in fade-in duration-150">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-lg bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20">
                  ${curr.paket}
                </span>
                <span class="text-slate-400 font-bold">
                  Soal <span class="text-white font-black">${lat.indeksSoal + 1}</span> dari <span class="text-white font-black">${lat.daftarSoal.length}</span>
                </span>
              </div>
              <button onclick="window.ulangLatihanSSW()" class="text-slate-400 hover:text-rose-400 font-bold text-xs flex items-center gap-1 transition">
                ${ICONS.close} <span>Batal</span>
              </button>
            </div>

            <div class="space-y-1">
              <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full bg-sky-500 transition-all duration-300" style="width: ${progress}%"></div>
              </div>
              ${lat.pakaiTimer && !sudahDijawab ? `
                <div class="w-full h-0.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden">
                  <div id="ssw-timer-bar" class="h-full bg-sky-400 transition-all duration-1000" style="width: 100%"></div>
                </div>
              ` : ''}
            </div>

            <div class="flex items-center justify-between pt-0.5">
              ${lat.pakaiTimer ? `
                <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  ${ICONS.timer}
                  <span id="ssw-timer-text" class="text-sky-400 font-mono font-black text-xs">${lat.sisaWaktu}s</span>
                </div>
              ` : '<div></div>'}

              <div class="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/80 p-0.5 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0 ml-auto">
                <button 
                  type="button" 
                  onclick="window.kembaliSoalSSW()" 
                  ${lat.indeksSoal === 0 ? 'disabled' : ''} 
                  class="w-8 h-8 rounded-lg ${lat.indeksSoal === 0 ? 'bg-sky-500/5 text-sky-400/25 border border-sky-500/10 cursor-not-allowed' : 'bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-white border border-sky-500/20 active:scale-95 transition'} flex items-center justify-center shrink-0"
                  title="Kembali ke soal sebelumnya"
                >
                  ${ICONS.arrowLeft}
                </button>

                <button 
                  type="button" 
                  onclick="window.skipSoalSSW()" 
                  class="w-8 h-8 rounded-lg bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-white border border-sky-500/20 flex items-center justify-center shrink-0 transition active:scale-95"
                  title="Lewati soal ini"
                >
                  ${ICONS.arrowRight}
                </button>
              </div>
            </div>
          </div>

          <div class="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 shadow-sm">
            <div class="flex items-start justify-between gap-3">
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-[2.6] tracking-wide">
                ${curr.pertanyaan}
              </h3>
              <button onclick="window.bicaraJepangSSW('${(curr.pertanyaan_polos || '').replace(/'/g, "\\'")}')" class="p-2.5 rounded-2xl bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition shrink-0" title="Dengarkan Soal">
                ${ICONS.sound}
              </button>
            </div>

            <div class="grid grid-cols-1 gap-2.5 pt-2">
              ${curr.pilihan.map((p, idx) => {
                let btnStyle = "bg-white dark:bg-cardDark border-slate-200 dark:border-slate-800 hover:border-sky-500 text-slate-800 dark:text-slate-200";
                let badgeStyle = "bg-slate-100 dark:bg-slate-800 text-slate-400";

                if (sudahDijawab) {
                  if (idx === curr.kunci) {
                    btnStyle = "bg-sky-500/15 border-sky-500 text-sky-400 font-black";
                    badgeStyle = "bg-sky-500 text-white font-black";
                  } else if (idx === userChoice) {
                    btnStyle = "bg-rose-500/10 border-rose-500 text-rose-400 font-bold";
                    badgeStyle = "bg-rose-500 text-white";
                  } else {
                    btnStyle = "opacity-50 border-slate-200 dark:border-slate-800 text-slate-400";
                  }
                }

                return `
                  <button onclick="window.pilihJawabanLatihanSSW(${idx})" ${sudahDijawab ? 'disabled' : ''} class="p-4 rounded-2xl border text-left flex items-center gap-3 transition ${btnStyle}">
                    <span class="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${badgeStyle}">
                      ${labelOpsi[idx]}
                    </span>
                    <span class="text-xs sm:text-sm leading-relaxed">${p}</span>
                  </button>
                `;
              }).join('')}
            </div>

            ${sudahDijawab ? `
              <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2 animate-in fade-in duration-150">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-black uppercase tracking-wider ${isSkipped ? 'text-sky-400' : (userChoice === curr.kunci ? 'text-sky-400' : 'text-rose-400')}">
                    ${isSkipped ? 'Soal Dilewati' : (userChoice === curr.kunci ? 'Jawaban Benar' : 'Jawaban Kurang Tepat')}
                  </span>
                  <span class="text-xs text-slate-400 font-bold">• Kunci: ${labelOpsi[curr.kunci]}</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">${curr.pembahasan}</p>
                <div class="pt-2">
                  <button onclick="window.lanjutSoalLatihanSSW()" class="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-black transition shadow-sm flex items-center gap-1.5 ml-auto">
                    <span>${lat.indeksSoal < lat.daftarSoal.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Evaluasi'}</span>
                    ${ICONS.arrowRight}
                  </button>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    if (lat.tahap === 'selesai') {
      const totalSoal = lat.daftarSoal.length;
      const dilewatiCount = Object.values(lat.jawabanUser).filter(j => j === 'skip').length;
      const benarCount = lat.skor;
      const salahCount = Math.max(0, totalSoal - benarCount - dilewatiCount);
      const persen = totalSoal > 0 ? Math.round((benarCount / totalSoal) * 100) : 0;
      const isLulus = persen >= 60;

      return `
        <div class="w-full max-w-lg mx-auto px-1 pb-16 space-y-6 text-center animate-in fade-in duration-200">
          <div class="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 shadow-sm">
            <div class="w-16 h-16 rounded-2xl ${isLulus ? 'bg-sky-500/10 text-sky-400' : 'bg-rose-500/10 text-rose-400'} flex items-center justify-center mx-auto">
              ${isLulus ? ICONS.award : ICONS.alert}
            </div>

            <div class="space-y-1">
              <span class="text-xs font-bold uppercase tracking-wider ${isLulus ? 'text-sky-400' : 'text-rose-400'}">
                ${isLulus ? '合格 • LULUS STANDAR KELULUSAN' : '不合格 • BELUM MEMENUHI PASSING GRADE'}
              </span>
              <h3 class="text-3xl font-black text-slate-900 dark:text-white">Skor Akhir: ${persen}%</h3>
              <p class="text-xs text-slate-400">
                Benar ${benarCount} dari total ${totalSoal} soal (Passing Grade: 60%).
              </p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <span class="text-[10px] text-slate-400 font-bold block">Total Soal</span>
                <span class="text-lg font-black text-slate-200">${totalSoal}</span>
              </div>
              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <span class="text-[10px] text-slate-400 font-bold block">Benar</span>
                <span class="text-lg font-black text-sky-400">${benarCount}</span>
              </div>
              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <span class="text-[10px] text-slate-400 font-bold block">Salah</span>
                <span class="text-lg font-black text-rose-400">${salahCount}</span>
              </div>
              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                <span class="text-[10px] text-slate-400 font-bold block">Dilewati</span>
                <span class="text-lg font-black text-sky-300">${dilewatiCount}</span>
              </div>
            </div>

            <div class="pt-4 flex flex-col sm:flex-row items-center gap-2.5">
              <button onclick="window.ulangLatihanSSW()" class="w-full py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-black transition shadow-sm">
                Ulangi Simulasi
              </button>
              <button onclick="window.bukaMenuSSW('hub')" class="w-full py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold transition">
                Kembali ke Menu SSW
              </button>
            </div>
          </div>
        </div>
      `;
    }
  }

    // Materi View
    function renderSubBabContent(sub) {
    let html = '';

    // 1.1 Konten Utama (3 Prinsip)
    if (sub.konten_utama && Array.isArray(sub.konten_utama)) {
      html += `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          ${sub.konten_utama.map((item, idx) => {
            const jpPrinsip = item.prinsip_jp || item.prinsip || '';
            const idPrinsip = item.prinsip_id || '';
            const jpPenjelasan = item.penjelasan_jp || '';
            const idPenjelasan = item.penjelasan_id || item.penjelasan || '';
            const actions = item.tindakan_kunci || [];

            return `
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 flex flex-col justify-between space-y-4 shadow-sm hover:border-sky-500/30 transition">
                <div class="space-y-2.5">
                  <div class="flex items-start gap-2.5">
                    <span class="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
                    <div>
                      <h5 class="text-sm font-black text-slate-900 dark:text-white leading-[2.6]">${window.renderFuriganaSSW(jpPrinsip)}</h5>
                      ${idPrinsip ? `<p class="text-[11px] font-bold text-sky-400 mt-0.5">${idPrinsip}</p>` : ''}
                    </div>
                  </div>
                  ${jpPenjelasan ? `<p class="text-xs text-slate-800 dark:text-slate-200 leading-[2.4] font-medium">${window.renderFuriganaSSW(jpPenjelasan)}</p>` : ''}
                  <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${idPenjelasan}</p>
                </div>
                ${actions.length ? `
                  <div class="pt-3 border-t border-slate-100 dark:border-slate-700/50 space-y-2">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">Tindakan Kunci (具体的な行動):</span>
                    <ul class="space-y-2 text-xs">
                      ${actions.map(tk => {
                        const tkJp = typeof tk === 'object' ? tk.jp : '';
                        const tkId = typeof tk === 'object' ? tk.id : tk;
                        return `
                          <li class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 space-y-1">
                            ${tkJp ? `<div class="font-bold text-slate-900 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(tkJp)}</div>` : ''}
                            <div class="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">${tkId}</div>
                          </li>
                        `;
                      }).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // 1.2 Klasifikasi Bakteri & Virus
    if (sub.klasifikasi && Array.isArray(sub.klasifikasi)) {
      html += `
        <div class="space-y-5 pt-2">
          ${sub.klasifikasi.map(kat => `
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                <h5 class="text-xs font-black uppercase tracking-wider text-sky-400">${window.renderFuriganaSSW(kat.kategori)}</h5>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                ${(kat.bakteri || []).map(b => `
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-2.5 shadow-sm hover:border-sky-500/30 transition">
                    <h6 class="text-sm font-black text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700/50 pb-2 leading-[2.5]">${window.renderFuriganaSSW(b.nama)}</h6>
                    
                    ${b.sumber_jp || b.sumber ? `
                      <div class="space-y-0.5 text-xs">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Sumber Penularan:</span>
                        ${b.sumber_jp ? `<p class="font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(b.sumber_jp)}</p>` : ''}
                        <p class="text-slate-500 dark:text-slate-400 text-[11px]">${b.sumber_id || b.sumber}</p>
                      </div>
                    ` : ''}

                    ${b.gejala_jp || b.gejala ? `
                      <div class="space-y-0.5 text-xs">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">Gejala Utama:</span>
                        ${b.gejala_jp ? `<p class="font-bold text-amber-300 leading-[2.4]">${window.renderFuriganaSSW(b.gejala_jp)}</p>` : ''}
                        <p class="text-slate-500 dark:text-slate-400 text-[11px]">${b.gejala_id || b.gejala}</p>
                      </div>
                    ` : ''}

                    ${b.sifat_jp || b.sifat ? `
                      <div class="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs space-y-1">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">Karakter & Sifat:</span>
                        ${b.sifat_jp ? `<p class="font-bold text-sky-200 leading-[2.4]">${window.renderFuriganaSSW(b.sifat_jp)}</p>` : ''}
                        <p class="text-slate-400 text-[11px]">${b.sifat_id || b.sifat}</p>
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 1.3 Aturan Pakaian Kerja & Cuci Tangan 7 Langkah
    if (sub.aturan_pakaian_kerja || sub.prosedur_cuci_tangan_7_langkah) {
      html += `
        <div class="space-y-4 pt-2">
          ${sub.aturan_pakaian_kerja ? `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-3 shadow-sm">
              <h5 class="text-xs font-black uppercase tracking-wider text-sky-400">Aturan Pakaian Kerja (身だしなみのルール)</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                ${sub.aturan_pakaian_kerja.map(apk => {
                  const jp = typeof apk === 'object' ? apk.jp : '';
                  const id = typeof apk === 'object' ? apk.id : apk;
                  return `
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 space-y-1">
                      <div class="flex items-start gap-2">
                        <span class="text-sky-400 shrink-0 mt-0.5">${ICONS.check}</span>
                        <div class="space-y-0.5">
                          ${jp ? `<div class="text-xs font-bold text-slate-900 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(jp)}</div>` : ''}
                          <div class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">${id}</div>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          ${sub.prosedur_cuci_tangan_7_langkah ? `
            <div class="space-y-2.5">
              <h5 class="text-xs font-black uppercase tracking-wider text-sky-400">SOP 7 Langkah Mencuci Tangan Higienis (手洗い手順)</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${sub.prosedur_cuci_tangan_7_langkah.map((pct, idx) => {
                  const langkah = typeof pct === 'object' ? (pct.langkah || `Langkah ${idx+1}`) : `Langkah ${idx+1}`;
                  const jp = typeof pct === 'object' ? pct.jp : '';
                  const id = typeof pct === 'object' ? pct.id : pct;
                  return `
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-1.5 shadow-sm">
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-400 inline-block">${langkah}</span>
                      ${jp ? `<div class="text-xs font-bold text-slate-900 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(jp)}</div>` : ''}
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">${id}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }

    // 2.1 Definisi HACCP & Perbedaan Sistem
    if (sub.definisi || sub.perbedaan_sistem) {
      const defJp = typeof sub.definisi === 'object' ? sub.definisi.jp : '';
      const defId = typeof sub.definisi === 'object' ? sub.definisi.id : sub.definisi;

      html += `
        <div class="space-y-3.5 pt-2">
          ${sub.definisi ? `
            <div class="p-5 rounded-2xl bg-sky-500/10 border border-sky-500/20 space-y-2">
              <span class="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">Definisi Resmi HACCP:</span>
              ${defJp ? `<p class="text-xs sm:text-sm font-bold text-sky-200 leading-[2.6]">${window.renderFuriganaSSW(defJp)}</p>` : ''}
              <p class="text-xs text-sky-300/90 leading-relaxed">${defId}</p>
            </div>
          ` : ''}
          ${sub.perbedaan_sistem ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              ${['konvensional', 'sistem_haccp'].map(key => {
                const item = sub.perbedaan_sistem[key];
                if (!item) return '';
                const isHaccp = key === 'sistem_haccp';
                const judul = item.judul || (isHaccp ? 'Sistem HACCP Terpadu' : 'Sistem Konvensional');
                const jp = item.jp || '';
                const id = item.id || (typeof item === 'string' ? item : '');
                return `
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border ${isHaccp ? 'border-sky-500/40 bg-sky-500/5' : 'border-slate-200 dark:border-slate-700/60'} space-y-2 shadow-sm">
                    <span class="text-[10px] font-bold uppercase tracking-wider ${isHaccp ? 'text-sky-400' : 'text-slate-400'}">${judul}:</span>
                    ${jp ? `<p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(jp)}</p>` : ''}
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${id}</p>
                  </div>
                `;
              }).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    // 2.2 Tiga Jenis Bahaya
    if (sub.jenis_bahaya && Array.isArray(sub.jenis_bahaya)) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          ${sub.jenis_bahaya.map((jb, idx) => `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-2.5 shadow-sm">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-400 font-bold text-xs flex items-center justify-center shrink-0">${idx + 1}</span>
                <h5 class="text-xs font-black text-slate-900 dark:text-white">${window.renderFuriganaSSW(jb.tipe)}</h5>
              </div>
              ${jb.jp ? `<div class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(jb.jp)}</div>` : ''}
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${jb.id || jb.contoh}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 2.3 Kelompok Proses Produksi
    if (sub.kelompok_proses && Array.isArray(sub.kelompok_proses)) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          ${sub.kelompok_proses.map(kp => `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-3 shadow-sm flex flex-col justify-between">
              <div class="space-y-2">
                <h5 class="text-xs font-black text-sky-400 border-b border-slate-100 dark:border-slate-700/50 pb-2">${window.renderFuriganaSSW(kp.grup)}</h5>
                ${kp.deskripsi_jp ? `<p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(kp.deskripsi_jp)}</p>` : ''}
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${kp.deskripsi_id || kp.deskripsi_proses}</p>
                <div class="text-xs text-slate-400 pt-1">
                  <span class="font-bold text-slate-300">Contoh:</span> ${kp.contoh || kp.contoh_produk}
                </div>
              </div>
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/40 text-xs space-y-1">
                <span class="text-[10px] font-bold text-sky-400 block uppercase">Fokus Kontrol:</span>
                ${kp.fokus_jp ? `<div class="font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(kp.fokus_jp)}</div>` : ''}
                <div class="text-slate-500 dark:text-slate-400 text-[11px]">${kp.fokus_id || kp.fokus_manajemen}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 2.4 Elemen Kunci (CCP, CL, Monitoring)
    if (sub.elemen_kunci && Array.isArray(sub.elemen_kunci)) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
          ${sub.elemen_kunci.map(ek => `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-2 shadow-sm flex flex-col justify-between">
              <div class="space-y-1.5">
                <h5 class="text-xs font-black text-sky-400 leading-[2.4] border-b border-slate-100 dark:border-slate-700/50 pb-1.5">${window.renderFuriganaSSW(ek.istilah)}</h5>
                ${ek.jp ? `<p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(ek.jp)}</p>` : ''}
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${ek.id || ek.fokus}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 3.1 Rentang Suhu & Zona Bahaya
    if (sub.rentang_suhu) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          ${Object.keys(sub.rentang_suhu).map((key) => {
            const item = sub.rentang_suhu[key];
            const isDanger = key === 'zona_suhu_bahaya';
            const title = typeof item === 'object' ? item.judul : key.replace(/_/g, ' ').toUpperCase();
            const jp = typeof item === 'object' ? item.jp : '';
            const id = typeof item === 'object' ? item.id : item;

            return `
              <div class="p-5 rounded-2xl ${isDanger ? 'bg-rose-500/10 border-rose-500/20' : 'bg-sky-500/10 border-sky-500/20'} border space-y-2 shadow-sm">
                <span class="text-[10px] font-bold uppercase tracking-wider ${isDanger ? 'text-rose-400' : 'text-sky-400'}">${title}</span>
                ${jp ? `<p class="text-xs font-bold ${isDanger ? 'text-rose-200' : 'text-sky-200'} leading-[2.4]">${window.renderFuriganaSSW(jp)}</p>` : ''}
                <p class="text-xs ${isDanger ? 'text-rose-300/80' : 'text-sky-300/80'} leading-relaxed">${id}</p>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // 3.2 Tindakan Pencegahan Kontaminasi Silang
    if (sub.tindakan_pencegahan && Array.isArray(sub.tindakan_pencegahan)) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          ${sub.tindakan_pencegahan.map(tp => `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-2 shadow-sm">
              <h5 class="text-xs font-black text-sky-400 border-b border-slate-100 dark:border-slate-700/50 pb-1.5">${window.renderFuriganaSSW(tp.aspek)}</h5>
              ${tp.jp ? `<p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(tp.jp)}</p>` : ''}
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${tp.id || tp.detail}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 3.3 Penanganan Alergen
    if (sub.tujuh_bahan_alergen_wajib_label || sub.aturan_manajemen) {
      const aturanJp = typeof sub.aturan_manajemen === 'object' ? sub.aturan_manajemen.jp : '';
      const aturanId = typeof sub.aturan_manajemen === 'object' ? sub.aturan_manajemen.id : sub.aturan_manajemen;

      html += `
        <div class="space-y-3.5 pt-2">
          ${sub.tujuh_bahan_alergen_wajib_label ? `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-3 shadow-sm">
              <span class="text-[10px] font-bold uppercase tracking-wider text-sky-400">8 Bahan Alergen Wajib Cantum Label (特定原材料):</span>
              <div class="flex flex-wrap gap-2.5">
                ${sub.tujuh_bahan_alergen_wajib_label.map(al => {
                  const kanji = typeof al === 'object' ? al.kanji : al;
                  const nama = typeof al === 'object' ? al.nama : al;
                  return `
                    <div class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 space-y-0.5">
                      <div class="font-bold leading-[2.4]">${window.renderFuriganaSSW(kanji)}</div>
                      <div class="text-[10px] text-slate-400 font-medium">${nama}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
          ${sub.aturan_manajemen ? `
            <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1">
              <span class="font-bold uppercase tracking-wider text-amber-400 text-[10px] block">Standar Manajemen Alergen:</span>
              ${aturanJp ? `<p class="font-bold text-amber-200 leading-[2.4]">${window.renderFuriganaSSW(aturanJp)}</p>` : ''}
              <p class="text-amber-300/80 leading-relaxed">${aturanId}</p>
            </div>
          ` : ''}
        </div>
      `;
    }

    // 3.4 Metode Pembersihan (CIP / COP / Disinfeksi)
    if (sub.metode_pembersihan && Array.isArray(sub.metode_pembersihan)) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          ${sub.metode_pembersihan.map(mp => {
            const nama = typeof mp === 'object' ? mp.nama : (mp.split ? mp.split(':')[0] : '');
            const jp = typeof mp === 'object' ? mp.jp : '';
            const id = typeof mp === 'object' ? mp.id : (mp.split ? mp.split(':').slice(1).join(':') : mp);

            return `
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-2 shadow-sm">
                <h5 class="text-xs font-black text-sky-400 border-b border-slate-100 dark:border-slate-700/50 pb-1.5">${window.renderFuriganaSSW(nama)}</h5>
                ${jp ? `<p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(jp)}</p>` : ''}
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${id}</p>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // 4.1 Budaya 5S
    if (sub.langkah_5s && Array.isArray(sub.langkah_5s)) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
          ${sub.langkah_5s.map(ls => {
            const huruf = ls.huruf || '';
            const namaJp = ls.nama_jp || ls.istilah || '';
            const defJp = ls.definisi_jp || '';
            const defId = ls.definisi_id || ls.definisi || '';

            return `
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-2 shadow-sm flex flex-col justify-between">
                <div class="space-y-1">
                  ${huruf ? `<span class="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-400 font-bold text-xs flex items-center justify-center">${huruf}</span>` : ''}
                  <h5 class="text-xs font-black text-slate-900 dark:text-white leading-[2.4]">${window.renderFuriganaSSW(namaJp)}</h5>
                  ${defJp ? `<p class="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-[2.3]">${window.renderFuriganaSSW(defJp)}</p>` : ''}
                </div>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pt-1 border-t border-slate-100 dark:border-slate-700/50">${defId}</p>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // 4.2 Jenis Kecelakaan Kerja
    if (sub.jenis_kecelakaan && Array.isArray(sub.jenis_kecelakaan)) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          ${sub.jenis_kecelakaan.map(jk => {
            const nama = jk.nama_jp || jk.kecelakaan || '';
            const situasi = jk.situasi_jp || '';
            const pencegahanJp = jk.pencegahan_jp || '';
            const pencegahanId = jk.pencegahan_id || jk.pencegahan || '';

            return `
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-2.5 shadow-sm">
                <h5 class="text-xs font-black text-rose-400 leading-[2.4] border-b border-slate-100 dark:border-slate-700/50 pb-1.5">${window.renderFuriganaSSW(nama)}</h5>
                ${situasi ? `
                  <div class="text-xs space-y-0.5">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Kondisi Bahaya:</span>
                    <p class="font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(situasi)}</p>
                  </div>
                ` : ''}
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs space-y-1">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">Pencegahan:</span>
                  ${pencegahanJp ? `<p class="font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(pencegahanJp)}</p>` : ''}
                  <p class="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">${pencegahanId}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // 4.3 Standar APD & Tindakan Darurat
    if (sub.standar_apd || sub.tindakan_darurat) {
      const daruratJp = typeof sub.tindakan_darurat === 'object' ? sub.tindakan_darurat.jp : '';
      const daruratId = typeof sub.tindakan_darurat === 'object' ? sub.tindakan_darurat.id : sub.tindakan_darurat;

      html += `
        <div class="space-y-4 pt-2">
          ${sub.standar_apd ? `
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-3 shadow-sm">
              <span class="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">Standar APD Khusus Pabrik (保護具の着用):</span>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                ${sub.standar_apd.map(apd => {
                  const alat = typeof apd === 'object' ? apd.alat_jp : apd;
                  const fungsiJp = typeof apd === 'object' ? apd.fungsi_jp : '';
                  const fungsiId = typeof apd === 'object' ? apd.fungsi_id : '';

                  return `
                    <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
                      <h6 class="text-xs font-black text-sky-400 leading-[2.4]">${window.renderFuriganaSSW(alat)}</h6>
                      ${fungsiJp ? `<p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(fungsiJp)}</p>` : ''}
                      ${fungsiId ? `<p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">${fungsiId}</p>` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          ${sub.tindakan_darurat ? `
            <div class="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-1.5 shadow-sm">
              <span class="text-[10px] font-bold uppercase tracking-wider text-rose-400 block">Tindakan Keadaan Darurat (非常事態の対応):</span>
              ${daruratJp ? `<p class="text-xs sm:text-sm font-bold text-rose-200 leading-[2.6]">${window.renderFuriganaSSW(daruratJp)}</p>` : ''}
              <p class="text-xs text-rose-300/80 leading-relaxed">${daruratId}</p>
            </div>
          ` : ''}
        </div>
      `;
    }

    // 5.1 Ho-Ren-So
    if (sub.pilar_komunikasi && Array.isArray(sub.pilar_komunikasi)) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
          ${sub.pilar_komunikasi.map(pk => {
            const defJp = pk.definisi_jp || '';
            const defId = pk.definisi_id || pk.penjelasan || '';
            const poinJp = pk.poin_kunci_jp || '';
            const poinId = pk.poin_kunci_id || '';

            return `
              <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-3 shadow-sm flex flex-col justify-between">
                <div class="space-y-2">
                  <h5 class="text-xs font-black text-sky-400 border-b border-slate-100 dark:border-slate-700/50 pb-1.5 leading-[2.4]">${window.renderFuriganaSSW(pk.elemen)}</h5>
                  ${defJp ? `<p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(defJp)}</p>` : ''}
                  <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${defId}</p>
                </div>
                ${poinJp || poinId ? `
                  <div class="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs space-y-1">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">Poin Kunci:</span>
                    ${poinJp ? `<p class="font-bold text-sky-200 leading-[2.4]">${window.renderFuriganaSSW(poinJp)}</p>` : ''}
                    ${poinId ? `<p class="text-slate-400 text-[11px]">${poinId}</p>` : ''}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // 5.2 Aturan Operasional & SOP
    if (sub.aturan_operasional && Array.isArray(sub.aturan_operasional)) {
      html += `
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-3 pt-2 shadow-sm">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">Prosedur Operasional Pabrik & Kepatuhan SOP:</span>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${sub.aturan_operasional.map(ao => {
              const jp = typeof ao === 'object' ? ao.jp : '';
              const id = typeof ao === 'object' ? ao.id : ao;

              return `
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 space-y-1">
                  ${jp ? `<div class="text-xs font-bold text-slate-900 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(jp)}</div>` : ''}
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">${id}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // 5.3 Konsep 5M
    if (sub.konsep_5m && Array.isArray(sub.konsep_5m)) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
          ${sub.konsep_5m.map(m => {
            const faktor = typeof m === 'object' ? m.faktor : (m.split ? m.split(':')[0] : '');
            const jp = typeof m === 'object' ? m.jp : '';
            const id = typeof m === 'object' ? m.id : (m.split ? m.split(':').slice(1).join(':') : m);

            return `
              <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 space-y-2 shadow-sm flex flex-col justify-between">
                <div class="space-y-1.5">
                  <h5 class="text-xs font-black text-sky-400 leading-[2.4]">${window.renderFuriganaSSW(faktor)}</h5>
                  ${jp ? `<p class="text-[11px] font-bold text-slate-800 dark:text-slate-200 leading-[2.4]">${window.renderFuriganaSSW(jp)}</p>` : ''}
                </div>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pt-1.5 border-t border-slate-100 dark:border-slate-700/50">${id}</p>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Fallback if ringkasan_materi or poin_kunci exist
    if (sub.ringkasan_materi) {
      html += `<p class="text-xs text-slate-300 leading-relaxed pt-2">${window.renderFuriganaSSW(sub.ringkasan_materi)}</p>`;
    }
    if (sub.poin_kunci && Array.isArray(sub.poin_kunci)) {
      html += `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          ${sub.poin_kunci.map(pk => `
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-300 flex items-start gap-2 shadow-sm">
              <span class="text-sky-400 font-bold">•</span>
              <span class="leading-[2.4]">${window.renderFuriganaSSW(pk)}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    return html;
  }

  function viewMateri() {
    const s = window.stateSSW;
    const mat = s.dataMateri;
    if (!mat || !mat.kurikulum_detail) {
      return `<div class="p-16 text-center text-slate-400 text-xs">Memuat materi kurikulum...</div>`;
    }

    const babList = mat.kurikulum_detail;
    const babAktifNum = s.materi.babAktif;
    const babData = babList.find(b => b.bab === babAktifNum) || babList[0];

    const matchJp = (babData.judul_bab || '').match(/\(([^)]+)\)/);
    const jpTitle = matchJp ? matchJp[1] : '';
    const idTitle = (babData.judul_bab || '').replace(/\s*\([^)]+\)/, '').trim();

    return `
      <div class="w-full max-w-4xl mx-auto px-1 pb-16 space-y-6 animate-in fade-in duration-200">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 gap-2">
          <button onclick="window.bukaMenuSSW('hub')" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm shrink-0 whitespace-nowrap">
            ${ICONS.arrowLeft} <span>Kembali</span>
          </button>
          <span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wide shrink-0 whitespace-nowrap">
            Kurikulum OTAFF 5.0
          </span>
        </div>

        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          ${babList.map(b => `
            <button onclick="window.stateSSW.materi.babAktif = ${b.bab}; window.renderSSW();" class="px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${b.bab === babAktifNum ? 'bg-sky-500 border-sky-500 text-white shadow-sm' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-200'}">
              Bab ${b.bab}
            </button>
          `).join('')}
        </div>

        <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
          <div class="flex items-center gap-2 text-xs font-bold text-sky-400 flex-wrap">
            <span>BAB ${babData.bab}</span>
            ${jpTitle ? `<span>•</span><span class="leading-[2.4]">${window.renderFuriganaSSW(jpTitle)}</span>` : ''}
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">${idTitle || babData.judul_bab}</h2>
          <p class="text-xs text-slate-400 leading-relaxed">${babData.deskripsi || ''}</p>
        </div>

        <div class="space-y-4">
          ${(babData.sub_bab || []).map(sub => `
            <div class="p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 space-y-3.5">
              <div class="flex items-start gap-2.5">
                <span class="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 font-mono text-xs font-bold text-sky-400 shrink-0 mt-0.5">${sub.id_sub}</span>
                <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-[2.6]">${window.renderFuriganaSSW(sub.judul_sub)}</h4>
              </div>
              ${renderSubBabContent(sub)}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

    // Rumus View
    function viewRumus() {
    return `
      <div class="w-full max-w-4xl mx-auto px-1 pb-16 space-y-6 animate-in fade-in duration-200">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 gap-2">
          <button onclick="window.bukaMenuSSW('hub')" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm shrink-0 whitespace-nowrap">
            ${ICONS.arrowLeft} <span>Kembali</span>
          </button>
          <span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wide shrink-0 whitespace-nowrap">
            Kalkulator Produksi
          </span>
        </div>

        <div class="text-center space-y-1">
          <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Rumus & Kalkulator Hitungan</h3>
          <p class="text-xs text-slate-400">Praktekkan rumus hitungan pabrik dengan istilah resmi berfurigana standar ujian OTAFF.</p>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-sky-500/10 border border-sky-500/20 space-y-2 text-left shadow-sm">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">${ICONS.lightbulb}</span>
            <h4 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">Panduan Pemula: Cara Mudah Paham Hitungan Pabrik</h4>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Di ujian resmi OTAFF, biasanya hanya muncul <b>1 sampai 2 soal hitungan</b>. Rumus matematikanya matematika dasar (perkalian, pembagian, dan persentase). Agar orang awam tidak bingung, setiap rumus di bawah ini dilengkapi dengan <b>rumus bahasa Indonesia</b>, <b>kamus arti istilah Jepang</b>, <b>studi kasus soal cerita</b>, dan <b>kalkulator interaktif</b>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between shadow-sm">
            <div class="space-y-4">
              <div>
                <span class="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">Rumus 01</span>
                <h4 class="text-sm font-black text-slate-900 dark:text-white mt-1 leading-[2.6]">
                  ${window.renderFuriganaSSW("塩素[えんそ]希釈[きしゃく]計算[けいさん]（次亜塩素酸[じあえんそさん]ナトリウム）")}
                </h4>
                <p class="text-xs text-slate-400 mt-0.5">Menghitung takaran cairan klorin untuk membuat air disinfektan pencuci sayur atau peralatan.</p>
              </div>

              <div class="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-xs space-y-3">
                <div>
                  <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">Rumus Resmi OTAFF (Bahasa Jepang):</span>
                  <div class="font-bold text-slate-800 dark:text-slate-200 leading-[2.6] text-[11px] sm:text-xs">
                    ${window.renderFuriganaSSW("必要[ひつよう]薬剤量[やくざいりょう](mL) = (目標[もくひょう]容量[ようりょう](L) × 目標[もくひょう]濃度[のうど](ppm)) ÷ (原液[げんえき]濃度[のうど](%) × 10)")}
                  </div>
                </div>

                <div class="pt-2.5 border-t border-sky-500/20">
                  <span class="text-[10px] font-bold text-sky-400/90 uppercase tracking-wider block mb-0.5">Rumus Bahasa Indonesia (Arti Awam):</span>
                  <div class="font-bold text-slate-700 dark:text-slate-200 text-[11px] sm:text-xs leading-relaxed">
                    Takaran Klorin (mL) = (Volume Target Air (L) × Target Kadar (ppm)) ÷ (Kadar Stok Klorin (%) × 10)
                  </div>
                </div>

                <div class="pt-2 border-t border-sky-500/15 space-y-1">
                  <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Arti Istilah Rumus:</span>
                  <div class="grid grid-cols-1 gap-1 text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                    <div>• <b class="text-slate-900 dark:text-white">必要薬剤量</b> : Jumlah cairan klorin yang harus dituangkan (satuan mL)</div>
                    <div>• <b class="text-slate-900 dark:text-white">目標容量</b> : Banyaknya air dalam wadah/bak cuci (satuan Liter)</div>
                    <div>• <b class="text-slate-900 dark:text-white">目標濃度</b> : Tingkat kepekatan larutan yang diinginkan (satuan ppm)</div>
                    <div>• <b class="text-slate-900 dark:text-white">原液濃度</b> : Konsentrasi klorin botol stok pabrik (biasanya 6% atau 12%)</div>
                    <div>• <b class="text-slate-900 dark:text-white">Angka 10</b> : Angka konversi tetap standar perhitungan OTAFF</div>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1.5">
                <div class="flex items-center gap-1.5 font-bold text-sky-400 text-[11px]">
                  ${ICONS.clipboard} <span>Contoh Kasus Nyata di Ujian:</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  "Pabrik ingin menyiapkan bak air <b>100 Liter</b> berkadar <b>200 ppm</b> untuk mencuci sayuran. Jika tersedia cairan klorin stok <b>6%</b>, berapa mL klorin yang dituangkan?"
                </p>
                <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[10px] pt-0.5">
                  <b>Logika Awam:</b> Kalikan kapasitas air dengan ppm target, lalu bagi dengan (persentase klorin × 10). <br>
                  Hitungan: <code>(100 × 200) ÷ (6 × 10) = 20.000 ÷ 60 = 333,3 mL</code>.
                </p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="text-[11px] font-bold text-slate-400 block mb-1 leading-[2.2]">
                    ${window.renderFuriganaSSW("目標[もくひょう]容量[ようりょう]")} (Volume Target - Liter):
                  </label>
                  <input type="number" id="calc-vol" value="100" oninput="window.hitungKlorin()" class="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white">
                </div>
                <div>
                  <label class="text-[11px] font-bold text-slate-400 block mb-1 leading-[2.2]">
                    ${window.renderFuriganaSSW("目標[もくひょう]濃度[のうど]")} (Target Konsentrasi - ppm):
                  </label>
                  <input type="number" id="calc-ppm" value="200" oninput="window.hitungKlorin()" class="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white">
                </div>
                <div>
                  <label class="text-[11px] font-bold text-slate-400 block mb-1 leading-[2.2]">
                    ${window.renderFuriganaSSW("原液[げんえき]濃度[のうど]")} (Konsentrasi Stok Klorin - %):
                  </label>
                  <input type="number" id="calc-stok" value="6" oninput="window.hitungKlorin()" class="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white">
                </div>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-center space-y-0.5 mt-2">
              <span class="text-[11px] font-bold text-sky-400 block leading-[2.2]">
                ${window.renderFuriganaSSW("必要[ひつよう]薬剤量[やくざいりょう]")} (Takaran Klorin Dituang):
              </span>
              <span id="calc-res-klorin" class="text-2xl font-black text-sky-400">333.3 mL</span>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between shadow-sm">
            <div class="space-y-4">
              <div>
                <span class="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">Rumus 02</span>
                <h4 class="text-sm font-black text-slate-900 dark:text-white mt-1 leading-[2.6]">
                  ${window.renderFuriganaSSW("歩留[ぶど]まり計算[けいさん] (Yield Rate)")}
                </h4>
                <p class="text-xs text-slate-400 mt-0.5">Persentase daging/produk bersih yang bisa dijual setelah dipisahkan dari tulang, kulit, atau kotoran.</p>
              </div>

              <div class="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-xs space-y-3">
                <div>
                  <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">Rumus Resmi OTAFF (Bahasa Jepang):</span>
                  <div class="font-bold text-slate-800 dark:text-slate-200 leading-[2.6] text-[11px] sm:text-xs">
                    ${window.renderFuriganaSSW("歩留[ぶど]まり(%) = (製品[せいひん]重量[じゅうりょう] ÷ 原料[げんりょう]重量[じゅうりょう]) × 100")}
                  </div>
                </div>

                <div class="pt-2.5 border-t border-sky-500/20">
                  <span class="text-[10px] font-bold text-sky-400/90 uppercase tracking-wider block mb-0.5">Rumus Bahasa Indonesia (Arti Awam):</span>
                  <div class="font-bold text-slate-700 dark:text-slate-200 text-[11px] sm:text-xs leading-relaxed">
                    Yield / Rendemen (%) = (Berat Produk Jadi (kg/g) ÷ Berat Bahan Baku Mentah (kg/g)) × 100%
                  </div>
                </div>

                <div class="pt-2 border-t border-sky-500/15 space-y-1">
                  <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Arti Istilah Rumus:</span>
                  <div class="grid grid-cols-1 gap-1 text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                    <div>• <b class="text-slate-900 dark:text-white">歩留まり</b> : Tingkat rendemen / efisiensi hasil panen bersih (satuan %)</div>
                    <div>• <b class="text-slate-900 dark:text-white">製品重量</b> : Bobot bersih produk jadi yang siap dikemas/dijual (kg atau gram)</div>
                    <div>• <b class="text-slate-900 dark:text-white">原料重量</b> : Bobot kotor awal bahan mentah saat dibeli (kg atau gram)</div>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1.5">
                <div class="flex items-center gap-1.5 font-bold text-sky-400 text-[11px]">
                  ${ICONS.clipboard} <span>Contoh Kasus Nyata di Ujian:</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  "Pabrik membeli <b>100 kg</b> ikan utuh. Setelah kepala, insang, dan isi perut dibuang, didapatkan <b>85 kg</b> daging ikan bersih. Berapa persentase Yield (歩留まり)?"
                </p>
                <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[10px] pt-0.5">
                  <b>Logika Awam:</b> Bandingkan berat produk bersih dengan bahan mentah awal, lalu kalikan 100%. <br>
                  Hitungan: <code>(85 ÷ 100) × 100% = 85%</code>.
                </p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="text-[11px] font-bold text-slate-400 block mb-1 leading-[2.2]">
                    ${window.renderFuriganaSSW("製品[せいひん]重量[じゅうりょう]")} (Bobot Bersih Jadi - kg):
                  </label>
                  <input type="number" id="calc-jadi" value="85" oninput="window.hitungYield()" class="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white">
                </div>
                <div>
                  <label class="text-[11px] font-bold text-slate-400 block mb-1 leading-[2.2]">
                    ${window.renderFuriganaSSW("原料[げんりょう]重量[じゅうりょう]")} (Bobot Bahan Mentah - kg):
                  </label>
                  <input type="number" id="calc-mentah" value="100" oninput="window.hitungYield()" class="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white">
                </div>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-center space-y-0.5 mt-2">
              <span class="text-[11px] font-bold text-sky-400 block leading-[2.2]">
                ${window.renderFuriganaSSW("歩留[ぶど]まり")} (Persentase Efisiensi Bahan):
              </span>
              <span id="calc-res-yield" class="text-2xl font-black text-sky-400">85.0%</span>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between shadow-sm">
            <div class="space-y-4">
              <div>
                <span class="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider">Rumus 03</span>
                <h4 class="text-sm font-black text-slate-900 dark:text-white mt-1 leading-[2.6]">
                  ${window.renderFuriganaSSW("不良品率[ふりょうひんりつ]計算[けいさん] (Defect Rate)")}
                </h4>
                <p class="text-xs text-slate-400 mt-0.5">Persentase produk yang rusak atau tidak lolos sortir dari total produk yang dibuat.</p>
              </div>

              <div class="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs space-y-3">
                <div>
                  <span class="text-[10px] font-bold text-rose-400 uppercase tracking-wider block mb-1">Rumus Resmi OTAFF (Bahasa Jepang):</span>
                  <div class="font-bold text-slate-800 dark:text-slate-200 leading-[2.6] text-[11px] sm:text-xs">
                    ${window.renderFuriganaSSW("不良品率[ふりょうひんりつ](%) = (不良品数[ふりょうひんすう] ÷ 総生産数[そうせいさんすう]) × 100")}
                  </div>
                </div>

                <div class="pt-2.5 border-t border-rose-500/20">
                  <span class="text-[10px] font-bold text-rose-400/90 uppercase tracking-wider block mb-0.5">Rumus Bahasa Indonesia (Arti Awam):</span>
                  <div class="font-bold text-slate-700 dark:text-slate-200 text-[11px] sm:text-xs leading-relaxed">
                    Tingkat Produk Cacat (%) = (Jumlah Produk Cacat/Reject ÷ Total Seluruh Produksi) × 100%
                  </div>
                </div>

                <div class="pt-2 border-t border-rose-500/15 space-y-1">
                  <span class="text-[10px] font-bold text-rose-300 uppercase tracking-wider block">Arti Istilah Rumus:</span>
                  <div class="grid grid-cols-1 gap-1 text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                    <div>• <b class="text-slate-900 dark:text-white">不良品率</b> : Persentase tingkat cacat / reject dari lini produksi (satuan %)</div>
                    <div>• <b class="text-slate-900 dark:text-white">不良品数</b> : Jumlah barang yang rusak/tidak lolos standar sortir (satuan pcs)</div>
                    <div>• <b class="text-slate-900 dark:text-white">総生産数</b> : Total keseluruhan barang yang diproduksi pada periode itu (satuan pcs)</div>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1.5">
                <div class="flex items-center gap-1.5 font-bold text-rose-400 text-[11px]">
                  ${ICONS.clipboardRose} <span>Contoh Kasus Nyata di Ujian:</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  "Pabrik memproduksi <b>1.000 kaleng</b> jus buah. Setelah melewati sensor dan sortir manual, ditemukan <b>15 kaleng</b> penyok. Berapa tingkat cacat (不良品率)?"
                </p>
                <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[10px] pt-0.5">
                  <b>Logika Awam:</b> Jumlah barang reject dibagi total barang produksi, lalu dikali 100%. <br>
                  Hitungan: <code>(15 ÷ 1.000) × 100% = 1,5%</code>.
                </p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="text-[11px] font-bold text-slate-400 block mb-1 leading-[2.2]">
                    ${window.renderFuriganaSSW("不良品数[ふりょうひんすう]")} (Jumlah Produk Cacat - pcs):
                  </label>
                  <input type="number" id="calc-cacat" value="15" oninput="window.hitungDefect()" class="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white">
                </div>
                <div>
                  <label class="text-[11px] font-bold text-slate-400 block mb-1 leading-[2.2]">
                    ${window.renderFuriganaSSW("総生産数[そうせいさんすう]")} (Total Seluruh Produksi - pcs):
                  </label>
                  <input type="number" id="calc-total-prod" value="1000" oninput="window.hitungDefect()" class="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white">
                </div>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center space-y-0.5 mt-2">
              <span class="text-[11px] font-bold text-rose-400 block leading-[2.2]">
                ${window.renderFuriganaSSW("不良品率[ふりょうひんりつ]")} (Tingkat Kerusakan):
              </span>
              <span id="calc-res-defect" class="text-2xl font-black text-rose-400">1.50%</span>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between shadow-sm">
            <div class="space-y-4">
              <div>
                <span class="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">Rumus 04</span>
                <h4 class="text-sm font-black text-slate-900 dark:text-white mt-1 leading-[2.6]">
                  ${window.renderFuriganaSSW("所要時間[しょようじかん]計算[けいさん] (Estimasi Jam Operasi)")}
                </h4>
                <p class="text-xs text-slate-400 mt-0.5">Menghitung berapa jam mesin lini harus beroperasi untuk menyelesaikan target pesanan harian.</p>
              </div>

              <div class="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-xs space-y-3">
                <div>
                  <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">Rumus Resmi OTAFF (Bahasa Jepang):</span>
                  <div class="font-bold text-slate-800 dark:text-slate-200 leading-[2.6] text-[11px] sm:text-xs">
                    ${window.renderFuriganaSSW("所要時間[しょようじかん](時間[じかん]) = 目標生産量[もくひょうせいさんりょう] ÷ 時間当[じかんあ]たり能力[のうりょく]")}
                  </div>
                </div>

                <div class="pt-2.5 border-t border-sky-500/20">
                  <span class="text-[10px] font-bold text-sky-400/90 uppercase tracking-wider block mb-0.5">Rumus Bahasa Indonesia (Arti Awam):</span>
                  <div class="font-bold text-slate-700 dark:text-slate-200 text-[11px] sm:text-xs leading-relaxed">
                    Waktu Operasi (Jam) = Target Jumlah Pesanan ÷ Kecepatan Produksi Mesin Per Jam
                  </div>
                </div>

                <div class="pt-2 border-t border-sky-500/15 space-y-1">
                  <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Arti Istilah Rumus:</span>
                  <div class="grid grid-cols-1 gap-1 text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                    <div>• <b class="text-slate-900 dark:text-white">所要時間</b> : Total durasi jam yang dibutuhkan mesin untuk beroperasi (satuan Jam)</div>
                    <div>• <b class="text-slate-900 dark:text-white">目標生産量</b> : Target kuantitas pesanan yang wajib diselesaikan (satuan pcs/unit)</div>
                    <div>• <b class="text-slate-900 dark:text-white">時間当たり能力</b> : Kapasitas kecepatan mesin menghasilkan produk tiap 1 jam (pcs/jam)</div>
                  </div>
                </div>
              </div>

              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1.5">
                <div class="flex items-center gap-1.5 font-bold text-sky-400 text-[11px]">
                  ${ICONS.clipboard} <span>Contoh Kasus Nyata di Ujian:</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                  "Pabrik menerima pesanan <b>5.000 bento</b>. Mesin packaging mampu membungkus <b>800 bento per jam</b>. Berapa jam waktu operasi yang dibutuhkan?"
                </p>
                <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[10px] pt-0.5">
                  <b>Logika Awam:</b> Jumlah target pesanan dibagi kecepatan per jam. <br>
                  Hitungan: <code>5.000 ÷ 800 = 6,25 jam (6 jam 15 menit)</code>.
                </p>
              </div>

              <div class="space-y-3">
                <div>
                  <label class="text-[11px] font-bold text-slate-400 block mb-1 leading-[2.2]">
                    ${window.renderFuriganaSSW("目標生産量[もくひょうせいさんりょう]")} (Target Pesanan - pcs):
                  </label>
                  <input type="number" id="calc-target-pcs" value="5000" oninput="window.hitungKapasitas()" class="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white">
                </div>
                <div>
                  <label class="text-[11px] font-bold text-slate-400 block mb-1 leading-[2.2]">
                    ${window.renderFuriganaSSW("時間当[じかんあ]たり能力[のうりょく]")} (Kecepatan Mesin - pcs/jam):
                  </label>
                  <input type="number" id="calc-kapasitas-jam" value="800" oninput="window.hitungKapasitas()" class="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white">
                </div>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-center space-y-0.5 mt-2">
              <span class="text-[11px] font-bold text-sky-400 block leading-[2.2]">
                ${window.renderFuriganaSSW("所要時間[しょようじかん]")} (Total Waktu Operasi):
              </span>
              <span id="calc-res-kapasitas" class="text-2xl font-black text-sky-400">6.25 Jam</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.hitungKlorin = function () {
    const vol = parseFloat(document.getElementById('calc-vol').value) || 0;
    const ppm = parseFloat(document.getElementById('calc-ppm').value) || 0;
    const stok = parseFloat(document.getElementById('calc-stok').value) || 1;
    const stokPpm = stok * 10000;
    const ml = (vol * ppm / stokPpm) * 1000;
    const el = document.getElementById('calc-res-klorin');
    if (el) el.innerText = `${ml.toFixed(1)} mL`;
  };

  window.hitungYield = function () {
    const jadi = parseFloat(document.getElementById('calc-jadi').value) || 0;
    const mentah = parseFloat(document.getElementById('calc-mentah').value) || 1;
    const rate = (jadi / mentah) * 100;
    const el = document.getElementById('calc-res-yield');
    if (el) el.innerText = `${rate.toFixed(1)}%`;
  };

  window.hitungDefect = function () {
    const cacat = parseFloat(document.getElementById('calc-cacat').value) || 0;
    const total = parseFloat(document.getElementById('calc-total-prod').value) || 1;
    const rate = (cacat / total) * 100;
    const el = document.getElementById('calc-res-defect');
    if (el) el.innerText = `${rate.toFixed(2)}%`;
  };

  window.hitungKapasitas = function () {
    const target = parseFloat(document.getElementById('calc-target-pcs').value) || 0;
    const kap = parseFloat(document.getElementById('calc-kapasitas-jam').value) || 1;
    const jam = target / kap;
    const el = document.getElementById('calc-res-kapasitas');
    if (el) el.innerText = `${jam.toFixed(2)} Jam`;
  };

  // Keyboard Shortcuts
  window.addEventListener('keydown', function (e) {
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable)) {
      if (e.key === 'Escape') activeEl.blur();
      return;
    }

    const modalShortcut = document.getElementById('modal-shortcut');
    if (modalShortcut && !modalShortcut.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (typeof window.tutupModalShortcut === 'function') window.tutupModalShortcut();
      }
      return;
    }

    const modalContoh = document.getElementById('ssw-modal-contoh');
    if (modalContoh) {
      if (e.key === 'Escape') {
        e.preventDefault();
        modalContoh.remove();
      }
      return;
    }

    const modalSkema = document.getElementById('ssw-modal-skema');
    if (modalSkema) {
      if (e.key === 'Escape') {
        e.preventDefault();
        modalSkema.remove();
      }
      return;
    }

    const modalAnon = document.getElementById('modal-anon');
    if (modalAnon && !modalAnon.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (typeof window.tutupModalAnon === 'function') window.tutupModalAnon();
      }
      return;
    }

    const key = e.key;
    const lower = key.toLowerCase();

    if (key === '?' || (e.shiftKey && (key === '/' || e.code === 'Slash'))) {
      e.preventDefault();
      if (typeof window.bukaModalShortcut === 'function') window.bukaModalShortcut();
      return;
    }

    const s = window.stateSSW;
    if (!s) return;

    // View HUB
    if (s.view === 'hub') {
      if (key === '1' || lower === 'm') {
        e.preventDefault();
        window.bukaMenuSSW('materi');
        return;
      }
      if (key === '2' || lower === 'k') {
        e.preventDefault();
        window.bukaMenuSSW('kotoba');
        return;
      }
      if (key === '3' || lower === 'l') {
        e.preventDefault();
        window.bukaMenuSSW('latihan');
        return;
      }
      if (key === '4' || lower === 'r') {
        e.preventDefault();
        window.bukaMenuSSW('rumus');
        return;
      }
      return;
    }

    // View MATERI
    if (s.view === 'materi') {
      if (key === 'Escape') {
        e.preventDefault();
        window.bukaMenuSSW('hub');
        return;
      }
      if (['1', '2', '3', '4', '5'].includes(key)) {
        e.preventDefault();
        window.stateSSW.materi.babAktif = Number(key);
        window.renderSSW();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (key === 'ArrowRight' || lower === 'd') {
        e.preventDefault();
        if (window.stateSSW.materi.babAktif < 5) {
          window.stateSSW.materi.babAktif++;
          window.renderSSW();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
      if (key === 'ArrowLeft' || lower === 'a') {
        e.preventDefault();
        if (window.stateSSW.materi.babAktif > 1) {
          window.stateSSW.materi.babAktif--;
          window.renderSSW();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
      return;
    }

    // View KOTOBA
    if (s.view === 'kotoba') {
      const k = s.kotoba;
      if (k.subView === 'menu') {
        if (key === 'Escape') {
          e.preventDefault();
          window.bukaMenuSSW('hub');
          return;
        }
        if (lower === 'b') {
          e.preventDefault();
          window.bukaModeBukuSSW();
          return;
        }
        if (['1', '2', '3', '4', '5'].includes(key)) {
          e.preventDefault();
          window.pilihBabKotobaSSW(Number(key));
          return;
        }
        if (key === '0' || lower === 's') {
          e.preventDefault();
          window.pilihBabKotobaSSW(0);
          return;
        }
      } else if (k.subView === 'porsi') {
        if (key === 'Escape') {
          e.preventDefault();
          window.bukaKotobaMenuSSW();
          return;
        }
        if (lower === 'b') {
          e.preventDefault();
          window.bukaModeBukuSSW();
          return;
        }
        if (key === '1') {
          e.preventDefault();
          window.mulaiFlashcardPorsiSSW(10);
          return;
        }
        if (key === '2') {
          e.preventDefault();
          window.mulaiFlashcardPorsiSSW(20);
          return;
        }
        if (key === '3') {
          e.preventDefault();
          window.mulaiFlashcardPorsiSSW(50);
          return;
        }
        if (key === '4' || lower === 's') {
          e.preventDefault();
          window.mulaiFlashcardPorsiSSW('semua');
          return;
        }
      } else if (k.subView === 'flashcard') {
        const list = k.daftarFlashcard || [];
        const curr = list[k.indeksFlashcard];

        if (key === 'Escape') {
          e.preventDefault();
          window.pilihBabKotobaSSW(k.babFilter);
          return;
        }
        if (lower === 'b') {
          e.preventDefault();
          window.bukaModeBukuSSW();
          return;
        }
        if (key === 'ArrowRight' || lower === 'd') {
          e.preventDefault();
          window.gantiKartuFlashcardSSW(1);
          return;
        }
        if (key === 'ArrowLeft' || lower === 'a') {
          e.preventDefault();
          window.gantiKartuFlashcardSSW(-1);
          return;
        }
        if (key === ' ' || key === 'Enter' || key === 'ArrowUp' || key === 'ArrowDown') {
          e.preventDefault();
          window.toggleFlipCardSSW();
          return;
        }
        if (key === '1') {
          e.preventDefault();
          window.toggleSensorKotobaSSW('kanji');
          return;
        }
        if (key === '2') {
          e.preventDefault();
          window.toggleSensorKotobaSSW('baca');
          return;
        }
        if (key === '3') {
          e.preventDefault();
          window.toggleSensorKotobaSSW('arti');
          return;
        }
        if (lower === 'c' && curr) {
          e.preventDefault();
          window.bukaModalContohSSW(curr);
          return;
        }
        if ((lower === 'p' || lower === 's') && curr) {
          e.preventDefault();
          window.bicaraJepangSSW(curr.kanji);
          return;
        }
        if (lower === 'm' && curr) {
          e.preventDefault();
          window.toggleTandaHafalSSW(curr.id);
          return;
        }
        if (lower === 'h') {
          e.preventDefault();
          window.toggleLihatSudahHafalSSW();
          return;
        }
      } else if (k.subView === 'buku') {
        if (key === 'Escape') {
          e.preventDefault();
          window.bukaKotobaMenuSSW();
          return;
        }
        if (['1', '2', '3', '4', '5'].includes(key)) {
          e.preventDefault();
          window.stateSSW.kotoba.babFilter = Number(key);
          window.renderSSW();
          return;
        }
        if (key === '0') {
          e.preventDefault();
          window.stateSSW.kotoba.babFilter = 0;
          window.renderSSW();
          return;
        }
      }
      return;
    }

    // View LATIHAN
    if (s.view === 'latihan') {
      const lat = s.latihan;
      if (lat.tahap === 'persiapan') {
        if (key === 'Escape') {
          e.preventDefault();
          window.bukaMenuSSW('hub');
          return;
        }
        if (key === 'Enter') {
          e.preventDefault();
          window.mulaiSesiLatihanSSW();
          return;
        }
        if (key === '1') {
          e.preventDefault();
          window.setJumlahTargetSSW(10);
          return;
        }
        if (key === '2') {
          e.preventDefault();
          window.setJumlahTargetSSW(20);
          return;
        }
        if (key === '3') {
          e.preventDefault();
          window.setJumlahTargetSSW(30);
          return;
        }
        if (key === '4') {
          e.preventDefault();
          window.setJumlahTargetSSW('semua');
          return;
        }
      } else if (lat.tahap === 'main') {
        const curr = lat.daftarSoal[lat.indeksSoal];
        if (!curr) return;
        const sudahDijawab = lat.jawabanUser[curr.id_soal] !== undefined;

        if (key === 'Escape') {
          e.preventDefault();
          window.bukaMenuSSW('hub');
          return;
        }

        if (key === 'ArrowLeft') {
          e.preventDefault();
          window.kembaliSoalSSW();
          return;
        }

        if (key === 'ArrowRight') {
          e.preventDefault();
          if (sudahDijawab) {
            window.lanjutSoalLatihanSSW();
          } else {
            window.skipSoalSSW();
          }
          return;
        }

        if ((key === 'Enter' || key === ' ') && sudahDijawab) {
          e.preventDefault();
          window.lanjutSoalLatihanSSW();
          return;
        }

        if (!sudahDijawab) {
          if (lower === 'a' || key === '1') {
            e.preventDefault();
            window.pilihJawabanLatihanSSW(0);
            return;
          }
          if (lower === 'b' || key === '2') {
            e.preventDefault();
            window.pilihJawabanLatihanSSW(1);
            return;
          }
          if (lower === 'c' || key === '3') {
            e.preventDefault();
            window.pilihJawabanLatihanSSW(2);
            return;
          }
          if (lower === 'd' || key === '4') {
            e.preventDefault();
            window.pilihJawabanLatihanSSW(3);
            return;
          }
        }

        if (lower === 'p') {
          e.preventDefault();
          window.bicaraJepangSSW(curr.pertanyaan_polos || '');
          return;
        }
      } else if (lat.tahap === 'selesai') {
        if (key === 'Escape') {
          e.preventDefault();
          window.bukaMenuSSW('hub');
          return;
        }
        if (key === 'Enter' || key === ' ' || lower === 'r') {
          e.preventDefault();
          window.ulangLatihanSSW();
          return;
        }
      }
      return;
    }

    // View RUMUS
    if (s.view === 'rumus') {
      if (key === 'Escape') {
        e.preventDefault();
        window.bukaMenuSSW('hub');
        return;
      }
    }
  });

})();
