function getNamaTabelSupabase(sheetName) {
  const map = {
    'N3_Kanji': 'n3_kanji',
    'N3_Bunpou': 'n3_bunpou',
    'N3_Kata_Kerja': 'n3_kata_kerja',
    'N3_Kata_Benda': 'n3_kata_benda',
    'N3_Sifat_I': 'n3_sifat_i',
    'N3_Sifat_Na': 'n3_sifat_na'
  };
  return map[sheetName] || sheetName.toLowerCase();
}

function pastikanSupabaseClient() {
  if (!window.supabaseClient && window.supabase) {
    window.supabaseClient = window.supabase.createClient(
      "https://maleqbfrpboaqeqshsiy.supabase.co",
      "sb_publishable_SU0DyB9xAoM8wtUVWe30Ew_cfYg_8TG"
    );
  }
}

window.sesiGoiAktif = {
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
  filterMingguBunpou: 1,
  bukuSembunyiKanji: false,
  bukuSembunyiBaca: false,
  bukuSembunyiArti: false,
  bukuKanjiBlindMode: false,
  bukuFlippedItems: {}
};

const SVG_ICONS = {
  kanji: `<svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>`,
  book: `<svg class="w-5 h-5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
  vocab: `<svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`,
  chat: `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>`,
  flashcard: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
  check: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>`,
  eyeOpen: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
  eyeClosed: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path></svg>`
};

function aturVisibilitasNavigasiMobile(sembunyikan) {
  const bottomNav = document.getElementById("bottom-navbar-mobile");
  const ambientAudio = document.getElementById("ambient-audio-widget");

  if (sembunyikan) {
    if (bottomNav) bottomNav.style.display = "none";
    if (ambientAudio) ambientAudio.style.display = "none";
  } else {
    if (bottomNav) bottomNav.style.display = "";
    if (ambientAudio) ambientAudio.style.display = "";
  }
}

window.renderFuriganaHtml = function(text) {
  if (!text) return "";
  let parsed = String(text);

  parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)\[([^\x00-\x7F]+?)\]/g, 
    '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>'
  );

  parsed = parsed.replace(/([一-龯々仝〆〇ヶ]+)\(([^\x00-\x7F]+?)\)/g, 
    '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>'
  );

  parsed = parsed.replace(/\[([^\x00-\x7F]+?)\]\(([\u3040-\u309F\u30A0-\u30FF]+?)\)/g, 
    '<ruby class="mx-0.5 font-bold">$1<rt class="text-[9px] text-sky-400 font-sans tracking-tight font-normal select-none leading-none">$2</rt></ruby>'
  );

  return parsed;
};


window.bukaModulN3 = function() {
  aturVisibilitasNavigasiMobile(true);

  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  display.classList.remove("hidden");
  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-4xl mx-auto px-1 pb-16 transition-all">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
        <a href="/eksplor/" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali ke Eksplor</span>
        </a>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wide">JLPT N3</span>
      </div>

      <div class="text-center space-y-2 mb-8">
        <h3 class="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-snug">
          Modul Persiapan <span class="whitespace-nowrap">JLPT N3</span>
        </h3>
        <p class="text-xs lg:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
          Materi ini saya rancang sebagai <i>personal study notes</i> buat persiapan ujian, hopefully might be useful for others too.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
        <div onclick="window.ambilDataSheet('N3_Kanji', 'Kanji N3')" class="p-5 lg:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
              ${SVG_ICONS.kanji}
            </div>
            <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Kanji N3</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">311 karakter esensial frekuensi tinggi dari bank soal 2010–2025.</p>
          </div>
          <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1">Buka Kanji →</span>
        </div>

        <div onclick="window.ambilDataSheet('N3_Bunpou', 'Tata Bahasa')" class="p-5 lg:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
              ${SVG_ICONS.book}
            </div>
            <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Tata Bahasa (Bunpou)</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">Rangkuman kurikulum Somatome dengan bedah rumus & target mingguan.</p>
          </div>
          <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1">Buka Bunpou →</span>
        </div>

        <div onclick="window.bukaHalamanMenuGoi()" class="p-5 lg:p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 hover:border-sky-500 cursor-pointer transition text-left group shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition">
              ${SVG_ICONS.vocab}
            </div>
            <h4 class="text-base font-black text-slate-900 dark:text-white group-hover:text-sky-400 transition">Kosakata (Kotoba)</h4>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">Pilah kosakata: kata kerja, benda, serta adjektiva sifat-i & sifat-na.</p>
          </div>
          <span class="mt-4 text-xs text-sky-400 font-bold inline-flex items-center gap-1">Pilih Golongan →</span>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
};


window.bukaHalamanMenuGoi = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-3xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
        <button onclick="window.bukaModulN3()" class="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali ke Menu Utama</span>
        </button>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">Kotoba N3</span>
      </div>

      <div class="text-center space-y-1 mb-6">
        <h3 class="text-xl lg:text-2xl font-black text-slate-900 dark:text-white">Pilih Golongan Kosakata</h3>
        <p class="text-xs text-slate-400">Pilih rumpun kosakata yang mau kamu prioritaskan.</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div onclick="window.ambilDataSheet('N3_Kata_Kerja', 'Kata Kerja')" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition text-center shadow-sm">
          <h4 class="text-sm font-black text-slate-900 dark:text-white">Kata Kerja</h4>
          <span class="text-[11px] text-sky-400 font-bold block mt-1">動詞 (Doushi)</span>
        </div>
        <div onclick="window.ambilDataSheet('N3_Kata_Benda', 'Kata Benda')" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition text-center shadow-sm">
          <h4 class="text-sm font-black text-slate-900 dark:text-white">Kata Benda</h4>
          <span class="text-[11px] text-sky-400 font-bold block mt-1">名詞 (Meishi)</span>
        </div>
        <div onclick="window.ambilDataSheet('N3_Sifat_I', 'Kata Sifat-i')" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition text-center shadow-sm">
          <h4 class="text-sm font-black text-slate-900 dark:text-white">Kata Sifat-i</h4>
          <span class="text-[11px] text-sky-400 font-bold block mt-1">い形容詞</span>
        </div>
        <div onclick="window.ambilDataSheet('N3_Sifat_Na', 'Kata Sifat-na')" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition text-center shadow-sm">
          <h4 class="text-sm font-black text-slate-900 dark:text-white">Kata Sifat-na</h4>
          <span class="text-[11px] text-sky-400 font-bold block mt-1">な形容詞</span>
        </div>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
};


window.ambilDataSheet = async function(sheetName, judul) {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  pastikanSupabaseClient();
  const cacheKey = `cache_n3_${sheetName}`;
  const dataCache = localStorage.getItem(cacheKey);
  const namaTabel = getNamaTabelSupabase(sheetName);

  const olahDataKeSesi = (dataArray) => {
    window.sesiGoiAktif.kategori = sheetName;
    window.sesiGoiAktif.judul = judul;
    window.sesiGoiAktif.isFlipped = false;
    window.sesiGoiAktif.modeTampilan = "flashcard";
    window.sesiGoiAktif.pencarianBuku = "";
    window.sesiGoiAktif.filterMingguBunpou = 1;
    window.sesiGoiAktif.bukuFlippedItems = {};
    
    
    window.sesiGoiAktif.seluruhData = dataArray.map((item, idx) => ({
      serialNumber: idx + 1,
      uid: item.ID || item.id || `${sheetName}_${idx + 1}`,
      minggu: Math.floor(idx / 22) + 1,
      kanji: item.Kanji || item.kanji || item.Pola || item.pola || item.Kosakata || item.kosakata || "-",
      baca: item.Hiragana || item.hiragana || item.Cara_Baca || item.cara_baca || item.Rumus || item.rumus || "-",
      arti: item.Arti || item.arti || item.Makna || item.makna || "-",
      contoh: item.Contoh_Kalimat || item.contoh_kalimat || item.Contoh || item.contoh || "",
      arti_contoh: item.Arti_Contoh || item.arti_contoh || ""
    }));

    const simpanan = localStorage.getItem(`hafalan_${sheetName}`);
    window.sesiGoiAktif.idSudahHafal = simpanan ? JSON.parse(simpanan) : [];

    window.bukaMenuPorsiHafalan();
  };

  
  if (dataCache) {
    try {
      const parsed = JSON.parse(dataCache);
      if (parsed && Array.isArray(parsed) && parsed.length > 0) {
        olahDataKeSesi(parsed);

        if (window.supabaseClient) {
          window.supabaseClient
            .from(namaTabel)
            .select('*')
            .then(({ data }) => {
              if (data && data.length > 0) {
                localStorage.setItem(cacheKey, JSON.stringify(data));
              }
            })
            .catch(() => {});
        }
        return;
      }
    } catch (e) {
      console.error("Gagal membaca cache lokal:", e);
    }
  }

  
  display.innerHTML = `
    <div class="w-full max-w-md mx-auto py-24 text-center space-y-4">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-2 border-sky-400 border-t-transparent"></div>
      <p class="text-xs text-slate-300 font-bold">Menyiapkan materi ${judul}...</p>
    </div>
  `;

  try {
    if (!window.supabaseClient) {
      throw new Error("Supabase client belum terpasang.");
    }

    const { data, error } = await window.supabaseClient
      .from(namaTabel)
      .select('*');

    if (error) throw error;

    if (data && data.length > 0) {
      localStorage.setItem(cacheKey, JSON.stringify(data));
      olahDataKeSesi(data);
    } else {
      alert("Materi belum berhasil dimuat.");
      window.bukaModulN3();
    }
  } catch (err) {
    console.error(err);
    alert("Koneksi gagal saat memuat materi dari Supabase.");
    window.bukaModulN3();
  }
};


window.bukaMenuPorsiHafalan = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const belumHafal = window.sesiGoiAktif.seluruhData.filter(
    item => !window.sesiGoiAktif.idSudahHafal.includes(item.uid)
  ).length;

  const isBunpou = window.sesiGoiAktif.kategori === "N3_Bunpou";

  let bodyPorsiHtml = "";

  if (isBunpou) {
    bodyPorsiHtml = `
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
        ${[1, 2, 3, 4, 5, 6].map(m => `
          <button onclick="window.mulaiSesiMingguanBunpou(${m})" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
            <span class="text-sm font-black text-sky-400 group-hover:scale-105 transition block">Minggu ke-${m}</span>
            <span class="text-[10px] text-slate-400 mt-0.5 block">Target Somatome</span>
          </button>
        `).join("")}
      </div>
    `;
  } else {
    bodyPorsiHtml = `
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
        <button onclick="window.mulaiSesiHafalan(10)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">10</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
        </button>
        <button onclick="window.mulaiSesiHafalan(20)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">20</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
        </button>
        <button onclick="window.mulaiSesiHafalan(50)" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">50</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">Item</span>
        </button>
        <button onclick="window.mulaiSesiHafalan('semua')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 font-bold text-center transition group shadow-sm">
          <span class="text-xl font-black text-sky-400 group-hover:scale-105 transition block">Semua</span>
          <span class="text-[10px] text-slate-400 mt-0.5 block">${belumHafal} Item</span>
        </button>
      </div>

      <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
        <div class="text-center sm:text-left">
          <h4 class="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap">Atur Jumlah Bebas</h4>
          <p class="text-[10px] text-slate-400 whitespace-nowrap">Ketik porsi materi yang mau dipelajari sesi ini.</p>
        </div>
        <div class="flex items-center gap-2 w-full sm:w-auto">
          <input type="number" id="input-custom-porsi" min="1" max="${belumHafal || 1}" placeholder="15" onkeydown="if(event.key==='Enter') window.mulaiCustomPorsi()" class="w-full sm:w-28 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-center focus:outline-none focus:border-sky-500 transition shadow-inner">
          <button onclick="window.mulaiCustomPorsi()" class="px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition shadow-sm whitespace-nowrap">
            Mulai →
          </button>
        </div>
      </div>
    `;
  }

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-5">
        <button onclick="${window.sesiGoiAktif.kategori.startsWith('N3_Kata_') || window.sesiGoiAktif.kategori.startsWith('N3_Sifat_') ? 'window.bukaHalamanMenuGoi()' : 'window.bukaModulN3()'}" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition flex items-center gap-1.5 text-xs shadow-sm">
          <span>←</span> <span>Kembali</span>
        </button>
        <span class="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold whitespace-nowrap">${window.sesiGoiAktif.judul}</span>
      </div>

      <div class="mb-5">
        <div onclick="window.gantiModeTampilan('buku')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 cursor-pointer transition flex items-center justify-between gap-3 shadow-sm group">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition">
              ${SVG_ICONS.book}
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

      ${bodyPorsiHtml}
    </div>
  `;
  window.scrollTo(0, 0);
};

window.mulaiSesiMingguanBunpou = function(mingguKe) {
  const materiMinggu = window.sesiGoiAktif.seluruhData.filter(item => item.minggu === mingguKe);
  if (materiMinggu.length === 0) {
    alert(`Materi Minggu ke-${mingguKe} belum tersedia.`);
    return;
  }
  window.sesiGoiAktif.modeTampilan = "flashcard";
  window.sesiGoiAktif.antreanHafal = materiMinggu;
  window.sesiGoiAktif.indeksSekarang = 0;
  window.sesiGoiAktif.modelLihatSudahHafal = false;
  window.sesiGoiAktif.isFlipped = false;
  window.renderLayarBelajar();
};

window.mulaiCustomPorsi = function() {
  const input = document.getElementById("input-custom-porsi");
  if (!input) return;
  const nilai = parseInt(input.value, 10);
  if (isNaN(nilai) || nilai <= 0) {
    alert("Masukkan angka yang pas!");
    return;
  }
  window.mulaiSesiHafalan(nilai);
};


window.mulaiSesiHafalan = function(jumlah) {
  let kandidat = window.sesiGoiAktif.seluruhData.filter(
    item => !window.sesiGoiAktif.idSudahHafal.includes(item.uid)
  );
  kandidat = kandidat.sort(() => Math.random() - 0.5);

  if (jumlah !== "semua") {
    kandidat = kandidat.slice(0, jumlah);
  }

  if (kandidat.length === 0) {
    alert("Semua materi di bagian ini sudah ditandai hafal!");
    return;
  }

  window.sesiGoiAktif.modeTampilan = "flashcard";
  window.sesiGoiAktif.antreanHafal = kandidat;
  window.sesiGoiAktif.indeksSekarang = 0;
  window.sesiGoiAktif.modelLihatSudahHafal = false;
  window.sesiGoiAktif.isFlipped = false;
  window.renderLayarBelajar();
};

window.gantiModeTampilan = function(mode) {
  window.sesiGoiAktif.modeTampilan = mode;
  if (mode === "buku") {
    window.renderModeBuku();
  } else {
    window.renderLayarBelajar();
  }
};


window.renderModeBuku = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const keyword = (window.sesiGoiAktif.pencarianBuku || "").trim().toLowerCase();
  const kategori = window.sesiGoiAktif.kategori;
  const isBunpou = kategori === "N3_Bunpou";
  const isKanji = kategori === "N3_Kanji";
  const isKotoba = !isBunpou && !isKanji;

  let dataset = window.sesiGoiAktif.seluruhData;

  if (isBunpou && !keyword) {
    dataset = dataset.filter(item => item.minggu === window.sesiGoiAktif.filterMingguBunpou);
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
    daftarHtml = `
      <div class="py-16 text-center text-slate-400 text-xs col-span-full">
        Tidak ada data yang cocok dengan kata kunci atau nomor "<b>${keyword}</b>".
      </div>
    `;
  } else {
    dataTerfilter.forEach(item => {
      const sudahHafal = window.sesiGoiAktif.idSudahHafal.includes(item.uid);

      if (isKanji) {
        const isBlind = window.sesiGoiAktif.bukuKanjiBlindMode;
        const isFlipped = window.sesiGoiAktif.bukuFlippedItems[item.uid] || false;
        const sembunyikanInfo = isBlind && !isFlipped;

        daftarHtml += `
          <div onclick="window.toggleFlipBukuKanji('${item.uid}')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-sky-500/50 transition select-none cursor-pointer relative">
            <div class="flex items-start justify-between gap-1">
              <span class="text-xs font-mono font-bold text-slate-500">#${item.serialNumber}</span>
              <button onclick="event.stopPropagation(); window.toggleTandaHafal('${item.uid}')" class="p-1 rounded-lg border transition ${sudahHafal ? 'bg-emerald-500 text-white border-emerald-500' : 'text-slate-500 border-slate-700 hover:text-white'}">
                ${SVG_ICONS.check}
              </button>
            </div>
            <div class="my-2 text-center">
              <span class="text-3xl font-black text-slate-900 dark:text-white block">${item.kanji}</span>
              <span class="text-xs font-mono font-bold text-sky-400 block mt-1 transition ${sembunyikanInfo ? 'filter blur-sm select-none' : ''}">${item.baca}</span>
            </div>
            <div>
              <span class="text-xs font-medium text-slate-700 dark:text-slate-300 block line-clamp-1 transition ${sembunyikanInfo ? 'filter blur-sm select-none' : ''}">${item.arti}</span>
              ${item.contoh ? `
                <button onclick="event.stopPropagation(); window.bukaModalContoh('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}')" class="mt-2 text-[10px] font-bold text-sky-400 hover:underline inline-flex items-center gap-1">
                  ${SVG_ICONS.chat} <span>Contoh</span>
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
                    ${window.renderFuriganaHtml(item.kanji)}
                  </h4>
                  <p class="text-xs font-mono text-sky-400 font-semibold mt-0.5 leading-[2.0]">
                    ${window.renderFuriganaHtml(item.baca)}
                  </p>
                </div>
              </div>
              <button onclick="window.toggleTandaHafal('${item.uid}')" class="text-xs px-2.5 py-1 rounded-xl font-bold border transition shrink-0 ${sudahHafal ? 'bg-emerald-500 text-white border-emerald-500' : 'text-slate-400 border-slate-700 hover:text-white'}">
                ${sudahHafal ? '✓ Hafal' : 'Tandai'}
              </button>
            </div>
            <div class="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
              <p class="text-xs font-bold text-slate-800 dark:text-slate-200 leading-relaxed">${item.arti}</p>
            </div>
            ${item.contoh ? `
              <div class="text-xs space-y-1 pt-1">
                <p class="text-slate-900 dark:text-slate-100 font-medium leading-[2.4]">
                  ${window.renderFuriganaHtml(item.contoh)}
                </p>
                <p class="text-slate-400 text-[11px] italic">${item.arti_contoh}</p>
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
                  <span class="text-base font-black text-slate-900 dark:text-white cursor-pointer transition select-none ${window.sesiGoiAktif.bukuSembunyiKanji ? 'blur-md' : ''}" onclick="this.classList.toggle('blur-md')">${item.kanji}</span>
                  <span class="text-xs font-mono text-sky-400 font-semibold cursor-pointer transition select-none ${window.sesiGoiAktif.bukuSembunyiBaca ? 'blur-sm' : ''}" onclick="this.classList.toggle('blur-sm')">${item.baca}</span>
                </div>
                <p class="text-xs text-slate-400 truncate mt-0.5 cursor-pointer transition select-none ${window.sesiGoiAktif.bukuSembunyiArti ? 'blur-sm' : ''}" onclick="this.classList.toggle('blur-sm')">${item.arti}</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              ${item.contoh ? `
                <button onclick="window.bukaModalContoh('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}')" class="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition" title="Lihat Contoh">
                  ${SVG_ICONS.chat}
                </button>
              ` : ''}
              <button onclick="window.toggleTandaHafal('${item.uid}')" class="p-1.5 rounded-lg border transition ${sudahHafal ? 'bg-emerald-500 text-white border-emerald-500' : 'text-slate-400 border-slate-700 hover:text-white'}">
                ${SVG_ICONS.check}
              </button>
            </div>
          </div>
        `;
      }
    });
  }

  let tombolMataKanjiHtml = "";
  if (isKanji) {
    tombolMataKanjiHtml = `
      <button onclick="window.toggleBlindModeKanji()" title="${window.sesiGoiAktif.bukuKanjiBlindMode ? 'Tampilkan Semua' : 'Sembunyikan Furigana & Arti'}" class="h-10 w-10 shrink-0 rounded-2xl border flex items-center justify-center transition shadow-inner ${window.sesiGoiAktif.bukuKanjiBlindMode ? 'bg-sky-500 border-sky-500 text-white' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-white'}">
        ${window.sesiGoiAktif.bukuKanjiBlindMode ? SVG_ICONS.eyeClosed : SVG_ICONS.eyeOpen}
      </button>
    `;
  }

  let kontrolTambahanBukuHtml = "";
  if (isKotoba) {
    kontrolTambahanBukuHtml = `
      <div class="grid grid-cols-3 gap-1.5 mb-3">
        <button onclick="window.sesiGoiAktif.bukuSembunyiKanji = !window.sesiGoiAktif.bukuSembunyiKanji; window.renderModeBuku();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${window.sesiGoiAktif.bukuSembunyiKanji ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          ${window.sesiGoiAktif.bukuSembunyiKanji ? 'Buka Kanji' : 'Tutup Kanji'}
        </button>
        <button onclick="window.sesiGoiAktif.bukuSembunyiBaca = !window.sesiGoiAktif.bukuSembunyiBaca; window.renderModeBuku();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${window.sesiGoiAktif.bukuSembunyiBaca ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          ${window.sesiGoiAktif.bukuSembunyiBaca ? 'Buka Furigana' : 'Tutup Furigana'}
        </button>
        <button onclick="window.sesiGoiAktif.bukuSembunyiArti = !window.sesiGoiAktif.bukuSembunyiArti; window.renderModeBuku();" class="h-8 rounded-xl border text-[10px] font-bold transition flex items-center justify-center ${window.sesiGoiAktif.bukuSembunyiArti ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          ${window.sesiGoiAktif.bukuSembunyiArti ? 'Buka Arti' : 'Tutup Arti'}
        </button>
      </div>
    `;
  } else if (isBunpou && !keyword) {
    kontrolTambahanBukuHtml = `
      <div class="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
        ${[1, 2, 3, 4, 5, 6].map(m => `
          <button onclick="window.sesiGoiAktif.filterMingguBunpou = ${m}; window.renderModeBuku();" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${window.sesiGoiAktif.filterMingguBunpou === m ? 'bg-sky-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-white'}">
            Minggu ke-${m}
          </button>
        `).join("")}
      </div>
    `;
  }

  const gridClass = isKanji
    ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5"
    : (isBunpou ? "space-y-3" : "grid grid-cols-1 sm:grid-cols-2 gap-2");

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-4xl mx-auto px-1 pb-16">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4 gap-2">
        <div class="flex items-center gap-1.5 min-w-0">
          <button onclick="window.bukaMenuPorsiHafalan()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition text-xs shrink-0">
            ← Porsi
          </button>
          <span class="px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold truncate max-w-[140px]">${window.sesiGoiAktif.judul}</span>
        </div>

        <button onclick="window.mulaiSesiHafalan(10)" class="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5 shrink-0 whitespace-nowrap">
          ${SVG_ICONS.flashcard} <span>Flashcard</span>
        </button>
      </div>

      <div class="flex items-center gap-2 mb-3">
        <input type="text" id="input-cari-buku" placeholder="Cari nomor (#1), kanji, atau arti..." value="${window.sesiGoiAktif.pencarianBuku}" oninput="window.sesiGoiAktif.pencarianBuku = this.value; window.renderModeBuku();" class="w-full px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition shadow-inner">
        ${tombolMataKanjiHtml}
      </div>

      ${kontrolTambahanBukuHtml}

      <div class="${gridClass}">
        ${daftarHtml}
      </div>
    </div>
  `;
 
  const inputCari = document.getElementById("input-cari-buku");
  if (inputCari && window.sesiGoiAktif.pencarianBuku) {
    inputCari.focus();
    const len = inputCari.value.length;
    inputCari.setSelectionRange(len, len);
  }
};

window.toggleFlipBukuKanji = function(uid) {
  if (!window.sesiGoiAktif.bukuKanjiBlindMode) return;
  window.sesiGoiAktif.bukuFlippedItems[uid] = !window.sesiGoiAktif.bukuFlippedItems[uid];
  window.renderModeBuku();
};

window.toggleBlindModeKanji = function() {
  window.sesiGoiAktif.bukuKanjiBlindMode = !window.sesiGoiAktif.bukuKanjiBlindMode;
  window.sesiGoiAktif.bukuFlippedItems = {};
  window.renderModeBuku();
};


window.renderLayarBelajar = function() {
  const display = document.getElementById("eksplor-detail-display");
  if (!display) return;

  const listTampil = window.sesiGoiAktif.modelLihatSudahHafal 
    ? window.sesiGoiAktif.seluruhData.filter(item => window.sesiGoiAktif.idSudahHafal.includes(item.uid))
    : window.sesiGoiAktif.antreanHafal;

  const total = listTampil.length;
  const item = listTampil[window.sesiGoiAktif.indeksSekarang];

  if (!item || total === 0) {
    display.innerHTML = `
      <div class="text-center py-16 space-y-3 max-w-sm mx-auto px-2 pb-16">
        <span class="text-4xl block font-black text-sky-400">COMPLETE</span>
        <h4 class="text-lg font-black text-slate-900 dark:text-white">Target Sesi Tuntas!</h4>
        <p class="text-xs text-slate-400">Seluruh target materi pada sesi ini telah dipelajari.</p>
        <div class="pt-3 flex items-center justify-center gap-2">
          <button onclick="window.bukaMenuPorsiHafalan()" class="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md transition">
            + Porsi Baru
          </button>
          <button onclick="window.gantiModeTampilan('buku')" class="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-300 font-bold text-xs transition">
            Mode Buku
          </button>
        </div>
      </div>
    `;
    return;
  }

  const sudahDihafal = window.sesiGoiAktif.idSudahHafal.includes(item.uid);
  const kategori = window.sesiGoiAktif.kategori;

  const topHeader = `
    <div class="border-b border-slate-200 dark:border-slate-800 pb-2.5 mb-3 space-y-2">
      <div class="flex items-center justify-between">
        <button onclick="window.bukaMenuPorsiHafalan()" class="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-700 dark:text-slate-200 font-bold transition text-xs">
          ← Selesai
        </button>
        <button onclick="window.gantiModeTampilan('buku')" class="px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500 hover:text-white text-sky-400 font-bold transition text-xs border border-sky-500/20 inline-flex items-center gap-1.5 whitespace-nowrap">
          ${SVG_ICONS.book} <span>Mode Buku</span>
        </button>
      </div>

      <div class="flex items-center justify-between text-xs pt-0.5">
        <button onclick="window.toggleLihatSudahHafal()" class="px-2.5 py-1 rounded-lg text-[10px] font-bold border transition flex items-center gap-1.5 ${window.sesiGoiAktif.modelLihatSudahHafal ? 'bg-amber-500/15 border-amber-500/40 text-amber-400 hover:bg-amber-500/25' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-white'}">
          <span>${window.sesiGoiAktif.modelLihatSudahHafal ? '← Balik ke Belum Hafal' : 'Lihat Sudah Hafal'}</span>
          <span class="px-1.5 py-0.2 rounded bg-black/20 text-[9px] font-mono">
            ${window.sesiGoiAktif.modelLihatSudahHafal ? window.sesiGoiAktif.antreanHafal.length : window.sesiGoiAktif.idSudahHafal.length}
          </span>
        </button>
        <span class="font-mono font-bold text-slate-400">${window.sesiGoiAktif.indeksSekarang + 1} / ${total}</span>
      </div>
    </div>
  `;

  const bottomNav = `
    <div class="flex items-center gap-2 pt-2">
      <button onclick="window.gantiKartu(-1)" class="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition text-xs shadow-sm">
        ◀
      </button>
      <button onclick="window.toggleTandaHafal('${item.uid}')" class="flex-1 py-3 rounded-2xl font-bold text-xs transition shadow-sm flex items-center justify-center gap-1.5 ${sudahDihafal ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white text-slate-700 dark:text-slate-300'}">
        ${SVG_ICONS.check}
        <span>${sudahDihafal ? 'Sudah Ditandai Hafal' : 'Tandai Hafal'}</span>
      </button>
      <button onclick="window.gantiKartu(1)" class="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition text-xs shadow-sm">
        ▶
      </button>
    </div>
  `;

  if (kategori === "N3_Kanji") {
    display.innerHTML = `
      <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
        ${topHeader}
        
        <div onclick="window.toggleFlipCard()" class="p-6 lg:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center relative shadow-md min-h-[220px] lg:min-h-[280px] flex flex-col justify-center items-center cursor-pointer transition select-none hover:border-sky-500/60">
          <span class="absolute top-3.5 left-4 text-xs font-mono font-bold text-slate-500">#${item.serialNumber}</span>

          <div class="${window.sesiGoiAktif.isFlipped ? 'hidden' : 'block'}">
            <h2 class="text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-wider">${item.kanji}</h2>
          </div>

          <div class="${window.sesiGoiAktif.isFlipped ? 'block' : 'hidden'} space-y-2">
            <div class="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">${item.kanji}</div>
            <div class="text-base font-bold text-sky-400 font-mono">${item.baca}</div>
            <div class="text-sm lg:text-base font-bold text-slate-700 dark:text-slate-200 max-w-md mx-auto pt-2 border-t border-slate-200 dark:border-slate-800">${item.arti}</div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-2 px-1">
          <span class="text-[10px] text-slate-400 font-medium">(Ketuk kartu untuk membalik)</span>
          ${item.contoh ? `
            <button onclick="window.bukaModalContoh('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}')" class="px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500 hover:text-white text-sky-400 text-[10px] font-bold transition inline-flex items-center gap-1">
              ${SVG_ICONS.chat} <span>Contoh</span>
            </button>
          ` : ''}
        </div>

        <div class="mt-2">${bottomNav}</div>
      </div>
    `;
    return;
  }

  if (kategori === "N3_Bunpou") {
    display.innerHTML = `
      <div class="w-full max-w-md lg:max-w-3xl mx-auto px-1 pb-16">
        ${topHeader}
        <div class="p-5 lg:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left relative shadow-md space-y-4">
          <div class="flex items-start justify-between">
            <div>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono">Minggu ${item.minggu} • Somatome</span>
              <h2 class="text-xl lg:text-2xl font-black text-slate-900 dark:text-white mt-1.5 leading-[2.5] tracking-wide">
                ${window.renderFuriganaHtml(item.kanji)}
              </h2>
              <p class="text-xs font-semibold text-sky-400 font-mono mt-0.5 leading-[2.0]">
                ${window.renderFuriganaHtml(item.baca)}
              </p>
            </div>
            <span class="text-xs font-mono font-bold text-slate-500">#${item.serialNumber}</span>
          </div>

          <div class="p-3.5 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Makna Pola</p>
            <p class="text-xs lg:text-sm font-bold text-slate-800 dark:text-slate-100 leading-relaxed">${item.arti}</p>
          </div>

          ${item.contoh ? `
            <div class="p-3.5 rounded-2xl bg-sky-500/5 border border-sky-500/15 space-y-1">
              <span class="text-[9px] font-bold text-sky-400 uppercase tracking-wider">Contoh Kalimat</span>
              <p class="text-xs lg:text-sm font-medium text-slate-900 dark:text-slate-100 leading-[2.5] tracking-wide">
                ${window.renderFuriganaHtml(item.contoh)}
              </p>
              <p class="text-[11px] text-slate-400 italic">${item.arti_contoh || ""}</p>
            </div>
          ` : ''}
        </div>
        <div class="mt-3">${bottomNav}</div>
      </div>
    `;
    return;
  }

  display.innerHTML = `
    <div class="w-full max-w-md lg:max-w-2xl mx-auto px-1 pb-16">
      ${topHeader}

      <div class="p-6 lg:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center relative shadow-md min-h-[190px] flex flex-col justify-center items-center">
        <span class="absolute top-3.5 left-4 text-xs font-mono font-bold text-slate-500">#${item.serialNumber}</span>

        <h2 class="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white transition cursor-pointer select-none ${window.sesiGoiAktif.sembunyikanKanji ? 'blur-md filter' : ''}" onclick="this.classList.toggle('blur-md')">
          ${item.kanji}
        </h2>

        <p class="text-xs font-bold text-sky-400 mt-1.5 font-mono transition cursor-pointer select-none ${window.sesiGoiAktif.sembunyikanBaca ? 'blur-sm filter' : ''}" onclick="this.classList.toggle('blur-sm')">
          ${item.baca}
        </p>

        <div class="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 w-full max-w-xs">
          <p class="text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-200 transition cursor-pointer select-none ${window.sesiGoiAktif.sembunyikanArti ? 'blur-sm filter' : ''}" onclick="this.classList.toggle('blur-sm')">
            ${item.arti}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-1.5 mt-2.5">
        <button onclick="window.toggleSensorGoi('kanji')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${window.sesiGoiAktif.sembunyikanKanji ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          Kanji
        </button>
        <button onclick="window.toggleSensorGoi('baca')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${window.sesiGoiAktif.sembunyikanBaca ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          Furigana
        </button>
        <button onclick="window.toggleSensorGoi('arti')" class="h-9 rounded-xl border text-[11px] font-bold transition flex items-center justify-center ${window.sesiGoiAktif.sembunyikanArti ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'}">
          Arti
        </button>
        <button onclick="if('${item.contoh}') window.bukaModalContoh('${item.kanji}', '${encodeURIComponent(item.contoh)}', '${encodeURIComponent(item.arti_contoh)}'); else alert('Contoh belum tersedia');" class="h-9 px-1.5 rounded-xl border border-sky-500/30 text-sky-400 text-[10px] font-bold transition hover:bg-sky-500 hover:text-white flex items-center justify-center gap-1">
          ${SVG_ICONS.chat}
          <span class="truncate">Contoh</span>
        </button>
      </div>

      <div class="mt-3">${bottomNav}</div>
    </div>
  `;
};


window.bukaModalContoh = function(judul, contohEncoded, artiEncoded) {
  const contoh = decodeURIComponent(contohEncoded);
  const arti = decodeURIComponent(artiEncoded);

  const modalExisting = document.getElementById("n3-modal-contoh");
  if (modalExisting) modalExisting.remove();

  const modalHtml = `
    <div id="n3-modal-contoh" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-lg p-6 space-y-4 shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xs font-black px-2.5 py-0.5 rounded-lg bg-sky-500/10 text-sky-400 inline-flex items-center gap-1">
              ${SVG_ICONS.chat} <span>Contoh Penggunaan</span>
            </span>
            <span class="text-base font-black text-slate-900 dark:text-white">${judul}</span>
          </div>
          <button onclick="document.getElementById('n3-modal-contoh').remove()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm">✕</button>
        </div>

        <div class="space-y-3 py-2">
          <p class="text-base font-medium text-slate-800 dark:text-slate-100 leading-[2.5] tracking-wide">
            ${window.renderFuriganaHtml(contoh)}
          </p>
          <p class="text-xs text-slate-400 italic pt-2 border-t border-slate-100 dark:border-slate-800/80">
            ${arti || "Tidak ada terjemahan."}
          </p>
        </div>

        <button onclick="document.getElementById('n3-modal-contoh').remove()" class="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-sm transition">
          Tutup
        </button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
};


window.toggleFlipCard = function() {
  window.sesiGoiAktif.isFlipped = !window.sesiGoiAktif.isFlipped;
  window.renderLayarBelajar();
};

window.gantiKartu = function(arah) {
  const listTampil = window.sesiGoiAktif.modelLihatSudahHafal 
    ? window.sesiGoiAktif.seluruhData.filter(item => window.sesiGoiAktif.idSudahHafal.includes(item.uid))
    : window.sesiGoiAktif.antreanHafal;

  window.sesiGoiAktif.indeksSekarang += arah;
  if (window.sesiGoiAktif.indeksSekarang < 0) window.sesiGoiAktif.indeksSekarang = 0;
  if (window.sesiGoiAktif.indeksSekarang >= listTampil.length) window.sesiGoiAktif.indeksSekarang = listTampil.length - 1;
  window.sesiGoiAktif.isFlipped = false;
  window.renderLayarBelajar();
};

window.toggleSensorGoi = function(tipe) {
  if (tipe === 'kanji') window.sesiGoiAktif.sembunyikanKanji = !window.sesiGoiAktif.sembunyikanKanji;
  if (tipe === 'baca') window.sesiGoiAktif.sembunyikanBaca = !window.sesiGoiAktif.sembunyikanBaca;
  if (tipe === 'arti') window.sesiGoiAktif.sembunyikanArti = !window.sesiGoiAktif.sembunyikanArti;
  window.renderLayarBelajar();
};

window.toggleTandaHafal = function(uid) {
  const idx = window.sesiGoiAktif.idSudahHafal.indexOf(uid);
  if (idx > -1) {
    window.sesiGoiAktif.idSudahHafal.splice(idx, 1);
  } else {
    window.sesiGoiAktif.idSudahHafal.push(uid);
  }
  localStorage.setItem(`hafalan_${window.sesiGoiAktif.kategori}`, JSON.stringify(window.sesiGoiAktif.idSudahHafal));
  
  if (window.sesiGoiAktif.modeTampilan === "buku") {
    window.renderModeBuku();
  } else {
    window.renderLayarBelajar();
  }
};

window.toggleLihatSudahHafal = function() {
  window.sesiGoiAktif.modelLihatSudahHafal = !window.sesiGoiAktif.modelLihatSudahHafal;
  window.sesiGoiAktif.indeksSekarang = 0;
  window.sesiGoiAktif.isFlipped = false;
  window.renderLayarBelajar();
};

window.tutupDisplayEksplor = function() {
  aturVisibilitasNavigasiMobile(false);
  window.location.href = "/eksplor/";
};

window.addEventListener("DOMContentLoaded", () => {
  pastikanSupabaseClient();
  const daftarSheetN3 = [
    "N3_Kanji",
    "N3_Bunpou",
    "N3_Kata_Kerja",
    "N3_Kata_Benda",
    "N3_Sifat_I",
    "N3_Sifat_Na"
  ];

  daftarSheetN3.forEach((sheetName, index) => {
    const cacheKey = `cache_n3_${sheetName}`;
    const namaTabel = getNamaTabelSupabase(sheetName);

    if (!localStorage.getItem(cacheKey) && window.supabaseClient) {
      setTimeout(() => {
        window.supabaseClient
          .from(namaTabel)
          .select('*')
          .then(({ data }) => {
            if (data && data.length > 0) {
              localStorage.setItem(cacheKey, JSON.stringify(data));
              console.log(`[Supabase Cache Ready] ${sheetName}`);
            }
          })
          .catch(() => {});
      }, index * 800);
    }
  });
});