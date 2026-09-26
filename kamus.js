(function () {
  const _kToken = () => {
    try {
      const customKey = localStorage.getItem('kamus_custom_api_key');
      if (customKey && customKey.trim().length > 15) return customKey.trim();
      return window.atob("=ElY2MmcKpEUIRHdVRDWrFlSPlnWnpVWPJzZXhneKFWOzNVbzgleWVUTlZGT24kU4IWQuEVQ".split("").reverse().join(""));
    } catch (e) {
      return "";
    }
  };

  try {
    if (localStorage.getItem('kamus_gemini_api_key')) {
      localStorage.removeItem('kamus_gemini_api_key');
    }
  } catch (e) { }

  const ROMAJI_MAP = {
    kya: 'きゃ', kyu: 'きゅ', kyo: 'きょ', sha: 'しゃ', shu: 'しゅ', sho: 'しょ',
    cha: 'ちゃ', chu: 'ちゅ', cho: 'ちょ', nya: 'にゃ', nyu: 'にゅ', nyo: 'にょ',
    hya: 'ひゃ', hyu: 'ひゅ', hyo: 'ひょ', mya: 'みゃ', myu: 'みゅ', myo: 'みょ',
    rya: 'りゃ', ryu: 'りゅ', ryo: 'りょ', gya: 'ぎゃ', gyu: 'ぎゅ', gyo: 'ぎょ',
    ja: 'じゃ', ju: 'じゅ', jo: 'じょ', bya: 'びゃ', byu: 'びゅ', byo: 'びょ',
    pya: 'ぴゃ', pyu: 'ぴゅ', pyo: 'ぴょ', ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ',
    sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ', ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と',
    na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の', ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ',
    ma: 'ま', mi: 'み', mu: 'む', me: 'me', mo: 'も', ya: 'や', yu: 'ゆ', yo: 'よ',
    ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ', wa: 'わ', wo: 'を', nn: 'ん', n: 'ん',
    ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご', za: 'ざ', ji: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ',
    da: 'だ', di: 'ぢ', du: 'づ', de: 'で', do: 'ど', ba: 'ば', bi: 'び', bu: 'ぶ', be: 'べ', bo: 'ぼ',
    pa: 'ぱ', pi: 'ぴ', pu: 'ぷ', pe: 'ぺ', po: 'ぽ', a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お'
  };

  function romajiKeHiragana(text) {
    if (!text) return "";
    let str = text.toLowerCase();
    let res = "";
    let i = 0;
    while (i < str.length) {
      if (i + 1 < str.length && str[i] === str[i + 1] && !"aeiouyn".includes(str[i])) {
        res += "っ";
        i++;
        continue;
      }
      let match = false;
      for (let len of [3, 2, 1]) {
        if (i + len <= str.length) {
          const chunk = str.substring(i, i + len);
          if (ROMAJI_MAP[chunk]) {
            res += ROMAJI_MAP[chunk];
            i += len;
            match = true;
            break;
          }
        }
      }
      if (!match) {
        res += str[i];
        i++;
      }
    }
    return res;
  }

  let LOCAL_KOTOBA = null;
  let LOCAL_BUNPOU = null;
  let LOCAL_KANJI = null;
  const HASIL_CACHE = new Map();

  async function muatDataLokalKamus() {
    if (!LOCAL_KOTOBA) {
      try {
        const r = await fetch('/eksplor/n5/data/kotoba.json');
        if (r.ok) LOCAL_KOTOBA = await r.json();
      } catch (e) { }
    }
    if (!LOCAL_BUNPOU) {
      try {
        const r = await fetch('/eksplor/n5/data/bunpou.json');
        if (r.ok) LOCAL_BUNPOU = await r.json();
      } catch (e) { }
    }
    if (!LOCAL_KANJI) {
      try {
        const r = await fetch('/eksplor/n5/data/kanji.json');
        if (r.ok) LOCAL_KANJI = await r.json();
      } catch (e) { }
    }
  }
  muatDataLokalKamus();

  function cariDiDatabaseLokal(query) {
    if (!query) return null;
    const qLower = query.toLowerCase().trim();
    if (HASIL_CACHE.has(qLower)) {
      return HASIL_CACHE.get(qLower);
    }
    try {
      const stored = localStorage.getItem('kamus_c_' + qLower);
      if (stored) {
        const parsed = JSON.parse(stored);
        HASIL_CACHE.set(qLower, parsed);
        return parsed;
      }
    } catch (e) { }

    const qHira = romajiKeHiragana(qLower);

    if (LOCAL_KOTOBA && LOCAL_KOTOBA.length > 0) {
      const exactKotoba = LOCAL_KOTOBA.find(k =>
        (k.kanji && k.kanji.toLowerCase() === qLower) ||
        (k.baca && k.baca === qHira) ||
        (k.arti && k.arti.toLowerCase() === qLower)
      );
      if (exactKotoba) {
        const res = {
          judul: exactKotoba.kanji || exactKotoba.baca,
          bacaan: exactKotoba.baca || "",
          romaji: "",
          golongan: exactKotoba.jenis || "Kosakata Minna no Nihongo",
          arti_utama: exactKotoba.arti,
          penjelasan: `Kosakata dari materi Minna no Nihongo Bab ${exactKotoba.bab || 'N5'}.`,
          rumus: "",
          sumber: 'Database Lokal',
          contoh_kalimat: exactKotoba.contoh ? [{
            jepang: exactKotoba.contoh,
            arti: exactKotoba.arti_contoh || ""
          }] : []
        };
        HASIL_CACHE.set(qLower, res);
        return res;
      }
    }

    if (LOCAL_KANJI && LOCAL_KANJI.length > 0) {
      const exactKanji = LOCAL_KANJI.find(k =>
        (k.kanji && k.kanji.toLowerCase() === qLower) ||
        (k.baca && k.baca === qHira) ||
        (k.arti && k.arti.toLowerCase() === qLower)
      );
      if (exactKanji) {
        const res = {
          judul: exactKanji.kanji,
          bacaan: exactKanji.baca || "",
          romaji: "",
          golongan: "Kanji Dasar JLPT",
          arti_utama: exactKanji.arti,
          penjelasan: `Kanji JLPT dengan cara baca ${exactKanji.baca}.`,
          rumus: "",
          sumber: 'Database Lokal',
          contoh_kalimat: exactKanji.contoh ? [{
            jepang: exactKanji.contoh,
            arti: exactKanji.arti_contoh || ""
          }] : []
        };
        HASIL_CACHE.set(qLower, res);
        return res;
      }
    }

    if (LOCAL_BUNPOU && LOCAL_BUNPOU.length > 0) {
      const matchBunpou = LOCAL_BUNPOU.find(b =>
        (b.pola && (b.pola.toLowerCase() === qLower || b.pola.includes(qHira)))
      );
      if (matchBunpou) {
        const res = {
          judul: matchBunpou.pola,
          bacaan: matchBunpou.pola,
          romaji: "",
          golongan: `Pola Tata Bahasa Bab ${matchBunpou.bab || 'N5'}`,
          arti_utama: matchBunpou.arti,
          penjelasan: `Rumus: ${matchBunpou.rumus}`,
          rumus: matchBunpou.rumus,
          sumber: 'Database Lokal',
          contoh_kalimat: matchBunpou.contoh ? [{
            jepang: matchBunpou.contoh,
            arti: matchBunpou.arti_contoh || ""
          }] : []
        };
        HASIL_CACHE.set(qLower, res);
        return res;
      }
    }

    let stem = qHira;
    if (qHira.endsWith('ます')) stem = qHira.slice(0, -2);
    else if (qHira.endsWith('る') || qHira.endsWith('た') || qHira.endsWith('て')) stem = qHira.slice(0, -1);

    if (stem.length >= 2 && LOCAL_KOTOBA) {
      const stemKotoba = LOCAL_KOTOBA.find(k =>
        (k.baca && k.baca.startsWith(stem)) || (k.kanji && k.kanji.startsWith(stem))
      );
      if (stemKotoba) {
        const res = {
          judul: stemKotoba.kanji || stemKotoba.baca,
          bacaan: stemKotoba.baca || "",
          romaji: "",
          golongan: stemKotoba.jenis || "Kosakata Minna no Nihongo",
          arti_utama: stemKotoba.arti,
          penjelasan: `Kosakata dari materi Minna no Nihongo Bab ${stemKotoba.bab || 'N5'}.`,
          rumus: "",
          sumber: 'Database Lokal',
          contoh_kalimat: stemKotoba.contoh ? [{
            jepang: stemKotoba.contoh,
            arti: stemKotoba.arti_contoh || ""
          }] : []
        };
        HASIL_CACHE.set(qLower, res);
        return res;
      }
    }

    if (LOCAL_KOTOBA) {
      const artiKotoba = LOCAL_KOTOBA.find(k => {
        if (!k.arti) return false;
        const words = k.arti.toLowerCase().replace(/[(),/]/g, ' ').split(/\s+/);
        return words.includes(qLower) || k.arti.toLowerCase().startsWith(qLower);
      });
      if (artiKotoba) {
        const res = {
          judul: artiKotoba.kanji || artiKotoba.baca,
          bacaan: artiKotoba.baca || "",
          romaji: "",
          golongan: artiKotoba.jenis || "Kosakata Minna no Nihongo",
          arti_utama: artiKotoba.arti,
          penjelasan: `Kosakata dari materi Minna no Nihongo Bab ${artiKotoba.bab || 'N5'}.`,
          rumus: "",
          sumber: 'Database Lokal',
          contoh_kalimat: artiKotoba.contoh ? [{
            jepang: artiKotoba.contoh,
            arti: artiKotoba.arti_contoh || ""
          }] : []
        };
        HASIL_CACHE.set(qLower, res);
        return res;
      }
    }

    if (LOCAL_KANJI) {
      const artiKanji = LOCAL_KANJI.find(k => {
        if (!k.arti) return false;
        const words = k.arti.toLowerCase().replace(/[(),/]/g, ' ').split(/\s+/);
        return words.includes(qLower) || k.arti.toLowerCase().startsWith(qLower);
      });
      if (artiKanji) {
        const res = {
          judul: artiKanji.kanji,
          bacaan: artiKanji.baca || "",
          romaji: "",
          golongan: "Kanji Dasar JLPT",
          arti_utama: artiKanji.arti,
          penjelasan: `Kanji JLPT dengan cara baca ${artiKanji.baca}.`,
          rumus: "",
          sumber: 'Database Lokal',
          contoh_kalimat: artiKanji.contoh ? [{
            jepang: artiKanji.contoh,
            arti: artiKanji.arti_contoh || ""
          }] : []
        };
        HASIL_CACHE.set(qLower, res);
        return res;
      }
    }

    if (LOCAL_BUNPOU) {
      const matchBunpouArti = LOCAL_BUNPOU.find(b =>
        (b.arti && b.arti.toLowerCase().includes(qLower))
      );
      if (matchBunpouArti) {
        const res = {
          judul: matchBunpouArti.pola,
          bacaan: matchBunpouArti.pola,
          romaji: "",
          golongan: `Pola Tata Bahasa Bab ${matchBunpouArti.bab || 'N5'}`,
          arti_utama: matchBunpouArti.arti,
          penjelasan: `Rumus: ${matchBunpouArti.rumus}`,
          rumus: matchBunpouArti.rumus,
          sumber: 'Database Lokal',
          contoh_kalimat: matchBunpouArti.contoh ? [{
            jepang: matchBunpouArti.contoh,
            arti: matchBunpouArti.arti_contoh || ""
          }] : []
        };
        HASIL_CACHE.set(qLower, res);
        return res;
      }
    }

    return null;
  }

  const style = document.createElement('style');
  style.textContent = `
    #modal-kamus.hidden { display: none !important; }
    #modal-kamus:not(.hidden) { display: flex !important; }
    .kamus-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .kamus-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .kamus-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.2); border-radius: 9999px; }
    .kamus-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(148, 163, 184, 0.4); }
  `;
  document.head.appendChild(style);

  function pastikanModalKamusAda() {
    if (document.getElementById('modal-kamus')) return;
    if (!document.body) return;

    const modalHtml = `
      <div id="modal-kamus" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md hidden flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        <div class="bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
          
          <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Kamus Pintar</span>
                </h3>
                <p class="text-[11px] text-slate-400">Pencarian kosakata, kanji & tata bahasa</p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="window.tutupModalKamus()" class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-rose-500 hover:text-white text-slate-500 dark:text-slate-400 transition flex items-center justify-center font-bold text-sm" title="Tutup (Esc)">✕</button>
            </div>
          </div>

          <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 space-y-3">
            <div class="relative flex items-center">
              <div class="absolute left-4 pointer-events-none text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input 
                type="text" 
                id="input-kamus-query" 
                placeholder="Ketik kata (taberu, 食べる, ~te kara, makan, mobil)..."
                onkeydown="if(event.key==='Enter') window.prosesPencarianKamus()"
                class="w-full pl-11 pr-24 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 transition shadow-inner font-medium"
                autocomplete="off"
              >
              <button 
                onclick="window.prosesPencarianKamus()" 
                class="absolute right-2 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 active:scale-95 text-white font-bold text-xs transition shadow-sm flex items-center gap-1"
              >
                <span>Cari</span> <span>→</span>
              </button>
            </div>

            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none no-scrollbar text-[11px]">
              <span class="text-slate-400 shrink-0 font-medium">Contoh:</span>
              <button onclick="window.jalankanCariCepat('食べる')" class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-600 dark:text-slate-300 transition shrink-0">食べる</button>
              <button onclick="window.jalankanCariCepat('〜てから')" class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-600 dark:text-slate-300 transition shrink-0">〜てから</button>
              <button onclick="window.jalankanCariCepat('安心')" class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-600 dark:text-slate-300 transition shrink-0">安心</button>
              <button onclick="window.jalankanCariCepat('がっこう')" class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-600 dark:text-slate-300 transition shrink-0">がっこう</button>
              <button onclick="window.jalankanCariCepat('mobil')" class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-600 dark:text-slate-300 transition shrink-0">mobil</button>
            </div>
          </div>

          <div id="kamus-konten-hasil" class="p-4 sm:p-6 overflow-y-auto flex-1 kamus-scrollbar flex flex-col">
            <div id="kamus-state-awal" class="my-auto py-8 sm:py-10 flex flex-col items-center justify-center text-center">
              <div class="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3.5 shadow-sm">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div class="space-y-1.5 max-w-sm mx-auto">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Pencarian Bahasa Jepang Cepat & Lengkap</h4>
                <p class="text-xs text-slate-400 leading-relaxed px-2">
                  Cari kosakata, kanji, atau pola kalimat dalam tulisan Romaji, Hiragana, Kanji, maupun Bahasa Indonesia.
                </p>
              </div>

              <div id="kamus-riwayat-box" class="pt-5 w-full max-w-md mx-auto hidden text-left">
                <div class="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-2.5">
                  <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Riwayat Terakhir</span>
                  <button onclick="window.hapusSemuaRiwayatKamus()" class="text-[10px] text-slate-400 hover:text-rose-400 transition">Hapus Semua</button>
                </div>
                <div id="kamus-riwayat-list" class="flex flex-wrap gap-1.5"></div>
              </div>
            </div>

            <div id="kamus-state-loading" class="hidden my-auto py-12 flex flex-col items-center justify-center text-center space-y-3">
              <div class="inline-block animate-spin rounded-full h-8 w-8 border-2 border-sky-400 border-t-transparent"></div>
              <p class="text-xs text-slate-400 font-bold">Mencari arti kata...</p>
            </div>

            <div id="kamus-state-data" class="hidden space-y-4 w-full"></div>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    window.renderRiwayatKamus();
  }

  window.renderFuriganaKamus = function (text) {
    if (!text) return "";
    let parsed = String(text);
    parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)\[([^\x00-\x7F]+?)\]/g, '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>');
    parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)\(([^\x00-\x7F]+?)\)/g, '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>');
    return parsed;
  };

  window.putarSuaraKamus = function (text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const clean = String(text).replace(/\[.*?\]|\(.*?\)/g, '');
    const utter = new SpeechSynthesisUtterance(clean);
    utter.lang = 'ja-JP';
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  };

  window.bukaModalKamus = function (queryAwal) {
    pastikanModalKamusAda();
    const modal = document.getElementById('modal-kamus');
    if (modal) {
      modal.classList.remove('hidden');
      const input = document.getElementById('input-kamus-query');
      if (input) {
        if (queryAwal && typeof queryAwal === 'string' && queryAwal.trim().length > 0) {
          input.value = queryAwal.trim();
          window.prosesPencarianKamus();
        } else {
          input.value = '';
        }
        input.focus();
        input.select();
        requestAnimationFrame(() => {
          input.focus();
          input.select();
        });
        setTimeout(() => {
          input.focus();
          input.select();
        }, 50);
      }
      window.renderRiwayatKamus();
    }
  };

  window.tutupModalKamus = function () {
    const modal = document.getElementById('modal-kamus');
    if (modal) modal.classList.add('hidden');
  };

  window.toggleModalKamus = function (queryAwal) {
    pastikanModalKamusAda();
    const modal = document.getElementById('modal-kamus');
    if (modal && !modal.classList.contains('hidden')) {
      window.tutupModalKamus();
    } else {
      window.bukaModalKamus(queryAwal);
    }
  };

  window.jalankanCariCepat = function (kata) {
    const input = document.getElementById('input-kamus-query');
    if (input) {
      input.value = kata;
      window.prosesPencarianKamus();
    }
  };

  window.simpanRiwayatKamus = function (query) {
    if (!query) return;
    let list = JSON.parse(localStorage.getItem('kamus_riwayat_pencarian') || "[]");
    list = list.filter(item => item.toLowerCase() !== query.toLowerCase());
    list.unshift(query);
    if (list.length > 8) list = list.slice(0, 8);
    localStorage.setItem('kamus_riwayat_pencarian', JSON.stringify(list));
    window.renderRiwayatKamus();
  };

  window.renderRiwayatKamus = function () {
    const box = document.getElementById('kamus-riwayat-box');
    const listEl = document.getElementById('kamus-riwayat-list');

    const list = JSON.parse(localStorage.getItem('kamus_riwayat_pencarian') || "[]");

    if (!box || !listEl) return;
    if (list.length === 0) {
      box.classList.add('hidden');
      return;
    }

    box.classList.remove('hidden');
    listEl.innerHTML = list.map(item => `
      <button onclick="window.jalankanCariCepat('${item.replace(/'/g, "\\'")}')" class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-medium transition flex items-center gap-1.5 shadow-sm">
        <span>${item}</span>
      </button>
    `).join('');
  };

  window.hapusSemuaRiwayatKamus = function () {
    localStorage.removeItem('kamus_riwayat_pencarian');
    window.renderRiwayatKamus();
  };

  async function analisisKataKamus(query, apiKey) {
    const promptSystem = `Kamus Jepang ringkas & presisi.
Kata: "${query}".
Format JSON:
{
  "judul": "Kanji / bentuk asli",
  "bacaan": "Hiragana / Katakana",
  "romaji": "Romaji alfabet",
  "golongan": "Golongan kata",
  "arti_utama": "Arti bahasa Indonesia",
  "penjelasan": "Nuansa & konteks penggunaan singkat 1-2 kalimat",
  "rumus": "Rumus jika pola tata bahasa, kosongkan jika kata biasa",
  "contoh_kalimat": [
    {
      "jepang": "Contoh kalimat alami Kanji[furigana]",
      "arti": "Terjemahan Indonesia"
    }
  ]
}`;

    const models = ["gemini-3.5-flash-lite", "gemini-flash-latest"];
    for (const m of models) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 6500);
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${apiKey}`;
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            contents: [{ parts: [{ text: promptSystem }] }],
            generationConfig: {
              temperature: 0.1,
              maxOutputTokens: 380,
              responseMimeType: "application/json"
            }
          })
        });
        clearTimeout(timer);

        if (res.ok) {
          const json = await res.json();
          const rawText = json.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            const data = JSON.parse(rawText);
            try {
              localStorage.setItem('kamus_c_' + query.toLowerCase().trim(), JSON.stringify(data));
              HASIL_CACHE.set(query.toLowerCase().trim(), data);
            } catch (e) { }
            return data;
          }
        }
      } catch (e) { }
    }
    throw new Error("Pencarian AI sedang sibuk atau kuota habis. Silakan coba beberapa saat lagi.");
  }

  window.prosesPencarianKamus = async function () {
    pastikanModalKamusAda();
    const input = document.getElementById('input-kamus-query');
    const query = input ? input.value.trim() : "";
    if (!query) return;

    const stateAwal = document.getElementById('kamus-state-awal');
    const stateLoading = document.getElementById('kamus-state-loading');
    const stateData = document.getElementById('kamus-state-data');

    if (stateAwal) stateAwal.classList.add('hidden');
    if (stateData) stateData.classList.add('hidden');
    if (stateLoading) stateLoading.classList.remove('hidden');

    window.simpanRiwayatKamus(query);

    await muatDataLokalKamus();
    const hasilLokal = cariDiDatabaseLokal(query);
    if (hasilLokal) {
      renderHasilKamus(hasilLokal, query);
      return;
    }

    const apiKey = _kToken();
    if (!apiKey) {
      throw new Error("Kunci akses pencarian tidak tersedia.");
    }

    try {
      const data = await analisisKataKamus(query, apiKey);
      renderHasilKamus(data, query);
    } catch (err) {
      if (stateLoading) stateLoading.classList.add('hidden');
      if (stateData) {
        stateData.classList.remove('hidden');
        stateData.innerHTML = `
          <div class="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center space-y-3">
            <div class="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 mx-auto flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h4 class="text-sm font-bold text-rose-400">Gagal Memuat Hasil</h4>
            <p class="text-xs text-slate-400 max-w-sm mx-auto">${err.message}</p>
            <div class="pt-2">
              <button onclick="window.prosesPencarianKamus()" class="px-3.5 py-1.5 rounded-xl bg-slate-800 text-xs font-bold text-sky-400 hover:text-white hover:bg-slate-700 transition">
                Coba Lagi ➔
              </button>
            </div>
          </div>
        `;
      }
    }
  };

  function renderHasilKamus(data, queryAsli) {
    const stateLoading = document.getElementById('kamus-state-loading');
    const stateData = document.getElementById('kamus-state-data');

    if (stateLoading) stateLoading.classList.add('hidden');
    if (!stateData) return;

    stateData.classList.remove('hidden');

    const contohHtml = (data.contoh_kalimat || []).map((c, i) => `
      <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm">
        <div class="flex items-start justify-between gap-2">
          <p class="text-sm sm:text-base text-slate-900 dark:text-slate-100 font-medium leading-[2.5] tracking-wide">
            ${window.renderFuriganaKamus(c.jepang)}
          </p>
          <button onclick="window.putarSuaraKamus('${(c.jepang || '').replace(/'/g, "\\'")}')" class="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition shrink-0" title="Dengarkan Contoh">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
          </button>
        </div>
        <p class="text-xs text-slate-400 italic">${c.arti || ""}</p>
      </div>
    `).join('');

    stateData.innerHTML = `
      <div class="space-y-4">
        <div class="p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="flex items-baseline gap-2.5 flex-wrap">
                <h2 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">${data.judul || queryAsli}</h2>
                <span class="text-sm font-bold text-sky-400 font-mono">${data.bacaan || ""}</span>
                ${data.romaji ? `<span class="text-xs text-slate-400 font-mono">(${data.romaji})</span>` : ''}
              </div>
              ${data.golongan ? `
                <span class="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold">
                  ${data.golongan}
                </span>
              ` : ''}
              ${data.sumber ? `
                <span class="inline-flex items-center gap-1 mt-2 ml-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  <svg class="w-3 h-3 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  <span>${data.sumber}</span>
                </span>
              ` : ''}
            </div>

            <button onclick="window.putarSuaraKamus('${(data.judul || data.bacaan || queryAsli).replace(/'/g, "\\'")}')" class="p-2.5 rounded-2xl bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition shrink-0" title="Dengarkan Pengucapan">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
            </button>
          </div>

          <div class="p-4 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">ARTI / MAKNA:</span>
            <p class="text-base font-black text-slate-900 dark:text-white leading-relaxed">${data.arti_utama || "-"}</p>
          </div>

          ${data.rumus ? `
            <div class="p-3.5 rounded-2xl bg-sky-500/5 border border-sky-500/20 space-y-1">
              <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">RUMUS POLA:</span>
              <p class="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">${data.rumus}</p>
            </div>
          ` : ''}

          ${data.penjelasan ? `
            <div class="space-y-1 pt-1">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">PENJELASAN & NUANSA:</span>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${data.penjelasan}</p>
            </div>
          ` : ''}
        </div>

        ${contohHtml ? `
          <div class="space-y-2 pt-2">
            <div class="flex items-center gap-1.5 px-1">
              <span class="text-xs font-bold text-slate-900 dark:text-white">Contoh Penggunaan Kalimat</span>
            </div>
            ${contohHtml}
          </div>
        ` : ''}
      </div>
    `;
  }

  if (!window._kamusKeydownBound) {
    window._kamusKeydownBound = true;
    window.addEventListener('keydown', function (e) {
      const isCmdOrCtrl = !!(e.metaKey || e.ctrlKey);
      const isK = (e.key && (e.key === 'k' || e.key === 'K')) || e.code === 'KeyK' || e.keyCode === 75 || e.which === 75;
      if (isCmdOrCtrl && isK) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        const selectedText = window.getSelection ? window.getSelection().toString().trim() : '';
        window.toggleModalKamus(selectedText);
      } else if (e.key === 'Escape') {
        const modal = document.getElementById('modal-kamus');
        if (modal && !modal.classList.contains('hidden')) {
          e.preventDefault();
          window.tutupModalKamus();
        }
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pastikanModalKamusAda);
  } else {
    pastikanModalKamusAda();
  }
})();
