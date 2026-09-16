// eksplor/alquran.js - Modul Al-Qur'an Digital

let audioQariPlayer = null;
let modeBacaQurans = 'ayat';
let surahAktifData = null;

const masterSurahList = [
  { nomor: 1, nama_latin: "Al-Fatihah", nama: "الفاتحة", arti: "Pembukaan", jumlah_ayat: 7 },
  { nomor: 2, nama_latin: "Al-Baqarah", nama: "البقرة", arti: "Sapi Betina", jumlah_ayat: 286 },
  { nomor: 3, nama_latin: "Ali 'Imran", nama: "آل عمران", arti: "Keluarga Imran", jumlah_ayat: 200 },
  { nomor: 4, nama_latin: "An-Nisa'", nama: "النساء", arti: "Wanita", jumlah_ayat: 176 },
  { nomor: 5, nama_latin: "Al-Ma'idah", nama: "المائدة", arti: "Hidangan", jumlah_ayat: 120 },
  { nomor: 6, nama_latin: "Al-An'am", nama: "الأنعام", arti: "Binatang Ternak", jumlah_ayat: 165 },
  { nomor: 7, nama_latin: "Al-A'raf", nama: "الأعراف", arti: "Tempat Tertinggi", jumlah_ayat: 206 },
  { nomor: 8, nama_latin: "Al-Anfal", nama: "الأنفال", arti: "Rampasan Perang", jumlah_ayat: 75 },
  { nomor: 9, nama_latin: "At-Taubah", nama: "التوبة", arti: "Pengampunan", jumlah_ayat: 129 },
  { nomor: 10, nama_latin: "Yunus", nama: "يونس", arti: "Nabi Yunus", jumlah_ayat: 109 },
  { nomor: 11, nama_latin: "Hud", nama: "هود", arti: "Nabi Hud", jumlah_ayat: 123 },
  { nomor: 12, nama_latin: "Yusuf", nama: "يوسف", arti: "Nabi Yusuf", jumlah_ayat: 111 },
  { nomor: 13, nama_latin: "Ar-Ra'd", nama: "الرعد", arti: "Guruh", jumlah_ayat: 43 },
  { nomor: 14, nama_latin: "Ibrahim", nama: "إبراهيم", arti: "Nabi Ibrahim", jumlah_ayat: 52 },
  { nomor: 15, nama_latin: "Al-Hijr", nama: "الحجر", arti: "Bukit Hijr", jumlah_ayat: 99 },
  { nomor: 16, nama_latin: "An-Nahl", nama: "النحل", arti: "Lebah", jumlah_ayat: 128 },
  { nomor: 17, nama_latin: "Al-Isra'", nama: "الإسراء", arti: "Perjalanan Malam", jumlah_ayat: 111 },
  { nomor: 18, nama_latin: "Al-Kahf", nama: "الكهف", arti: "Gua", jumlah_ayat: 110 },
  { nomor: 19, nama_latin: "Maryam", nama: "مريم", arti: "Maryam", jumlah_ayat: 98 },
  { nomor: 20, nama_latin: "Taha", nama: "طه", arti: "Taha", jumlah_ayat: 135 },
  { nomor: 21, nama_latin: "Al-Anbiya'", nama: "الأنبياء", arti: "Para Nabi", jumlah_ayat: 112 },
  { nomor: 22, nama_latin: "Al-Hajj", nama: "الحج", arti: "Haji", jumlah_ayat: 78 },
  { nomor: 23, nama_latin: "Al-Mu'minun", nama: "المؤمنون", arti: "Orang Mukmin", jumlah_ayat: 118 },
  { nomor: 24, nama_latin: "An-Nur", nama: "النور", arti: "Cahaya", jumlah_ayat: 64 },
  { nomor: 25, nama_latin: "Al-Furqan", nama: "الفرقان", arti: "Pembeda", jumlah_ayat: 77 },
  { nomor: 26, nama_latin: "Asy-Syu'ara'", nama: "الشعراء", arti: "Penyair", jumlah_ayat: 227 },
  { nomor: 27, nama_latin: "An-Naml", nama: "النمل", arti: "Semut", jumlah_ayat: 93 },
  { nomor: 28, nama_latin: "Al-Qasas", nama: "القصص", arti: "Kisah-Kisah", jumlah_ayat: 88 },
  { nomor: 29, nama_latin: "Al-'Ankabut", nama: "العنكبوت", arti: "Laba-Laba", jumlah_ayat: 69 },
  { nomor: 30, nama_latin: "Ar-Rum", nama: "الروم", arti: "Bangsa Romawi", jumlah_ayat: 60 },
  { nomor: 31, nama_latin: "Luqman", nama: "لقمان", arti: "Keluarga Luqman", jumlah_ayat: 34 },
  { nomor: 32, nama_latin: "As-Sajdah", nama: "السجدة", arti: "Sujud", jumlah_ayat: 30 },
  { nomor: 33, nama_latin: "Al-Ahzab", nama: "الأحزاب", arti: "Golongan Bersekutu", jumlah_ayat: 73 },
  { nomor: 34, nama_latin: "Saba'", nama: "سبأ", arti: "Kaum Saba'", jumlah_ayat: 54 },
  { nomor: 35, nama_latin: "Fatir", nama: "فاطر", arti: "Pencipta", jumlah_ayat: 45 },
  { nomor: 36, nama_latin: "Yasin", nama: "يس", arti: "Yasin", jumlah_ayat: 83 },
  { nomor: 37, nama_latin: "As-Saffat", nama: "الصافات", arti: "Barisan-Barisan", jumlah_ayat: 182 },
  { nomor: 38, nama_latin: "Sad", nama: "ص", arti: "Sad", jumlah_ayat: 88 },
  { nomor: 39, nama_latin: "Az-Zumar", nama: "الزمر", arti: "Rombongan", jumlah_ayat: 75 },
  { nomor: 40, nama_latin: "Gafir", nama: "غافر", arti: "Maha Pengampun", jumlah_ayat: 85 },
  { nomor: 41, nama_latin: "Fussilat", nama: "فصلت", arti: "Dijelaskan", jumlah_ayat: 54 },
  { nomor: 42, nama_latin: "Asy-Syura", nama: "الشورى", arti: "Musyawarah", jumlah_ayat: 53 },
  { nomor: 43, nama_latin: "Az-Zukhruf", nama: "الزخرف", arti: "Perhiasan", jumlah_ayat: 89 },
  { nomor: 44, nama_latin: "Ad-Dukhan", nama: "الدخان", arti: "Kabut", jumlah_ayat: 59 },
  { nomor: 45, nama_latin: "Al-Jasiyah", nama: "الجاثية", arti: "Yang Berlutut", jumlah_ayat: 37 },
  { nomor: 46, nama_latin: "Al-Ahqaf", nama: "الأحقاف", arti: "Bukit Pasir", jumlah_ayat: 35 },
  { nomor: 47, nama_latin: "Muhammad", nama: "محمد", arti: "Nabi Muhammad", jumlah_ayat: 38 },
  { nomor: 48, nama_latin: "Al-Fath", nama: "الفتح", arti: "Kemenangan", jumlah_ayat: 29 },
  { nomor: 49, nama_latin: "Al-Hujurat", nama: "الحجرات", arti: "Kamar-Kamar", jumlah_ayat: 18 },
  { nomor: 50, nama_latin: "Qaf", nama: "ق", arti: "Qaf", jumlah_ayat: 45 },
  { nomor: 51, nama_latin: "Az-Zariyat", nama: "الذاريات", arti: "Angin Menerbangkan", jumlah_ayat: 60 },
  { nomor: 52, nama_latin: "At-Tur", nama: "الطور", arti: "Bukit Tursina", jumlah_ayat: 49 },
  { nomor: 53, nama_latin: "An-Najm", nama: "النجم", arti: "Bintang", jumlah_ayat: 62 },
  { nomor: 54, nama_latin: "Al-Qamar", nama: "القمر", arti: "Bulan", jumlah_ayat: 55 },
  { nomor: 55, nama_latin: "Ar-Rahman", nama: "الرحمن", arti: "Maha Pemurah", jumlah_ayat: 78 },
  { nomor: 56, nama_latin: "Al-Waqi'ah", nama: "الواقعة", arti: "Hari Kiamat", jumlah_ayat: 96 },
  { nomor: 57, nama_latin: "Al-Hadid", nama: "الحديد", arti: "Besi", jumlah_ayat: 29 },
  { nomor: 58, nama_latin: "Al-Mujadilah", nama: "المجادلة", arti: "Gugatan", jumlah_ayat: 22 },
  { nomor: 59, nama_latin: "Al-Hasyr", nama: "الحشر", arti: "Pengusiran", jumlah_ayat: 24 },
  { nomor: 60, nama_latin: "Al-Mumtahanah", nama: "الممتحنة", arti: "Wanita Diuji", jumlah_ayat: 13 },
  { nomor: 61, nama_latin: "As-Saff", nama: "الصف", arti: "Barisan", jumlah_ayat: 14 },
  { nomor: 62, nama_latin: "Al-Jumu'ah", nama: "الجمعة", arti: "Hari Jumat", jumlah_ayat: 11 },
  { nomor: 63, nama_latin: "Al-Munafiqun", nama: "المنافقون", arti: "Orang Munafik", jumlah_ayat: 11 },
  { nomor: 64, nama_latin: "At-Tagabun", nama: "التغابن", arti: "Hari Ditampakkan", jumlah_ayat: 18 },
  { nomor: 65, nama_latin: "At-Talaq", nama: "الطلاق", arti: "Perceraian", jumlah_ayat: 12 },
  { nomor: 66, nama_latin: "At-Tahrim", nama: "التحريم", arti: "Pengharaman", jumlah_ayat: 12 },
  { nomor: 67, nama_latin: "Al-Mulk", nama: "الملك", arti: "Kerajaan", jumlah_ayat: 30 },
  { nomor: 68, nama_latin: "Al-Qalam", nama: "القلم", arti: "Pena", jumlah_ayat: 52 },
  { nomor: 69, nama_latin: "Al-Haqqah", nama: "الحاقة", arti: "Hari Kiamat Pasti", jumlah_ayat: 52 },
  { nomor: 70, nama_latin: "Al-Ma'arij", nama: "المعارج", arti: "Tempat Naik", jumlah_ayat: 44 },
  { nomor: 71, nama_latin: "Nuh", nama: "نوح", arti: "Nabi Nuh", jumlah_ayat: 28 },
  { nomor: 72, nama_latin: "Al-Jinn", nama: "الجن", arti: "Jin", jumlah_ayat: 28 },
  { nomor: 73, nama_latin: "Al-Muzzammil", nama: "المزمل", arti: "Orang Berselimut", jumlah_ayat: 20 },
  { nomor: 74, nama_latin: "Al-Muddassir", nama: "المدثر", arti: "Orang Berkemul", jumlah_ayat: 56 },
  { nomor: 75, nama_latin: "Al-Qiyamah", nama: "القيامة", arti: "Hari Berbangkit", jumlah_ayat: 40 },
  { nomor: 76, nama_latin: "Al-Insan", nama: "الإنسان", arti: "Manusia", jumlah_ayat: 31 },
  { nomor: 77, nama_latin: "Al-Mursalat", nama: "المرسلات", arti: "Malaikat Dikirim", jumlah_ayat: 50 },
  { nomor: 78, nama_latin: "An-Naba'", nama: "النبأ", arti: "Berita Besar", jumlah_ayat: 40 },
  { nomor: 79, nama_latin: "An-Nazi'at", nama: "النازعات", arti: "Malaikat Mencabut", jumlah_ayat: 46 },
  { nomor: 80, nama_latin: "'Abasa", nama: "عبس", arti: "Bermuka Masam", jumlah_ayat: 42 },
  { nomor: 81, nama_latin: "At-Takwir", nama: "التكوير", arti: "Menggulung", jumlah_ayat: 29 },
  { nomor: 82, nama_latin: "Al-Infitar", nama: "الانفطار", arti: "Terbelah", jumlah_ayat: 19 },
  { nomor: 83, nama_latin: "Al-Mutaffifin", nama: "المطففين", arti: "Orang Curang", jumlah_ayat: 36 },
  { nomor: 84, nama_latin: "Al-Insyiqaq", nama: "الانشقاق", arti: "Terbelah", jumlah_ayat: 25 },
  { nomor: 85, nama_latin: "Al-Buruj", nama: "البروج", arti: "Gugusan Bintang", jumlah_ayat: 22 },
  { nomor: 86, nama_latin: "At-Tariq", nama: "الطارق", arti: "Yang Datang Malam", jumlah_ayat: 17 },
  { nomor: 87, nama_latin: "Al-A'la", nama: "الأعلى", arti: "Maha Tinggi", jumlah_ayat: 19 },
  { nomor: 88, nama_latin: "Al-Gasyiyah", nama: "الغاشية", arti: "Hari Pembalasan", jumlah_ayat: 26 },
  { nomor: 89, nama_latin: "Al-Fajr", nama: "الفجر", arti: "Fajar", jumlah_ayat: 30 },
  { nomor: 90, nama_latin: "Al-Balad", nama: "البلد", arti: "Negeri", jumlah_ayat: 20 },
  { nomor: 91, nama_latin: "Asy-Syams", nama: "الشمس", arti: "Matahari", jumlah_ayat: 15 },
  { nomor: 92, nama_latin: "Al-Lail", nama: "الليل", arti: "Malam", jumlah_ayat: 21 },
  { nomor: 93, nama_latin: "Ad-Duha", nama: "الضحى", arti: "Waktu Duha", jumlah_ayat: 11 },
  { nomor: 94, nama_latin: "Asy-Syarh", nama: "الشرح", arti: "Kelapangan", jumlah_ayat: 8 },
  { nomor: 95, nama_latin: "At-Tin", nama: "التين", arti: "Buah Tin", jumlah_ayat: 8 },
  { nomor: 96, nama_latin: "Al-'Alaq", nama: "العلق", arti: "Segumpal Darah", jumlah_ayat: 19 },
  { nomor: 97, nama_latin: "Al-Qadr", nama: "القدر", arti: "Kemuliaan", jumlah_ayat: 5 },
  { nomor: 98, nama_latin: "Al-Bayyinah", nama: "البينة", arti: "Bukti Nyata", jumlah_ayat: 8 },
  { nomor: 99, nama_latin: "Az-Zalzalah", nama: "الزلزلة", arti: "Keguncangan", jumlah_ayat: 8 },
  { nomor: 100, nama_latin: "Al-'Adiyat", nama: "العاديات", arti: "Kuda Perang", jumlah_ayat: 11 },
  { nomor: 101, nama_latin: "Al-Qari'ah", nama: "القارعة", arti: "Hari Kiamat", jumlah_ayat: 11 },
  { nomor: 102, nama_latin: "At-Takasur", nama: "التكاثر", arti: "Bermegah-Megahan", jumlah_ayat: 8 },
  { nomor: 103, nama_latin: "Al-'Asr", nama: "العصر", arti: "Masa", jumlah_ayat: 3 },
  { nomor: 104, nama_latin: "Al-Humazah", nama: "الهمزة", arti: "Pengumpat", jumlah_ayat: 9 },
  { nomor: 105, nama_latin: "Al-Fil", nama: "الفيل", arti: "Gajah", jumlah_ayat: 5 },
  { nomor: 106, nama_latin: "Quraisy", nama: "قريش", arti: "Suku Quraisy", jumlah_ayat: 4 },
  { nomor: 107, nama_latin: "Al-Ma'un", nama: "الماعون", arti: "Barang Berguna", jumlah_ayat: 7 },
  { nomor: 108, nama_latin: "Al-Kausar", nama: "الكوثر", arti: "Nikmat Banyak", jumlah_ayat: 3 },
  { nomor: 109, nama_latin: "Al-Kafirun", nama: "الكافرون", arti: "Orang Kafir", jumlah_ayat: 6 },
  { nomor: 110, nama_latin: "An-Nasr", nama: "النصر", arti: "Pertolongan", jumlah_ayat: 3 },
  { nomor: 111, nama_latin: "Al-Lahab", nama: "اللهب", arti: "Gejolak Api", jumlah_ayat: 5 },
  { nomor: 112, nama_latin: "Al-Ikhlas", nama: "الإخلاص", arti: "Keesaan Allah", jumlah_ayat: 4 },
  { nomor: 113, nama_latin: "Al-Falaq", nama: "الفلق", arti: "Waktu Subuh", jumlah_ayat: 5 },
  { nomor: 114, nama_latin: "An-Nas", nama: "الناس", arti: "Manusia", jumlah_ayat: 6 }
];

async function bukaAlquranDigital() {
  hentikanAudioQari();
  const display = document.getElementById('eksplor-detail-display');
  display.classList.remove('hidden');
  display.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-5">
        <h3 class="text-xl font-black">Al-Qur'an Digital 30 Juz</h3>
        <button onclick="tutupDisplayEksplor()" class="text-xs font-bold px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800">Tutup</button>
      </div>
      <input type="text" id="quran-search-input" oninput="filterDaftarSurah()" placeholder="Cari surah (misal: Yasin, Al-Kahf)..." class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-sky-500">
      <div id="quran-grid-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-h-[540px] overflow-y-auto p-1"></div>
    </div>
  `;
  display.scrollIntoView({ behavior: 'smooth' });
  renderDaftarSurah(masterSurahList);
}

function filterDaftarSurah() {
  const keyword = document.getElementById('quran-search-input').value.toLowerCase();
  const filtered = masterSurahList.filter(s => s.nama_latin.toLowerCase().includes(keyword) || s.arti.toLowerCase().includes(keyword) || String(s.nomor).includes(keyword));
  renderDaftarSurah(filtered);
}

function renderDaftarSurah(list) {
  const grid = document.getElementById('quran-grid-container');
  if (!grid) return;
  grid.innerHTML = list.map(s => `
    <div onclick="bacaDetailSurah(${s.nomor})" class="smooth-zoom-card p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 cursor-pointer flex items-center justify-between shadow-sm">
      <div class="flex items-center gap-3">
        <span class="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-500 text-xs font-black flex items-center justify-center">${s.nomor}</span>
        <div><h4 class="text-sm font-bold">${s.nama_latin}</h4><p class="text-[11px] text-slate-400">${s.arti} • ${s.jumlah_ayat} Ayat</p></div>
      </div>
      <span class="mushaf-font text-2xl">${s.nama}</span>
    </div>
  `).join('');
}

async function bacaDetailSurah(nomor) {
  hentikanAudioQari();
  const display = document.getElementById('eksplor-detail-display');
  display.innerHTML = `<div class="py-16 text-center"><div class="w-9 h-9 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto"></div><p class="text-sm font-bold text-slate-500 mt-3">Menyiapkan surah & audio...</p></div>`;
  try {
    let res = await fetch(`https://api.quran.gading.dev/surah/${nomor}`);
    let json = await res.json();
    surahAktifData = json.data;
    renderHalamanBacaSurah();
  } catch (e) {
    display.innerHTML = `<p class="text-xs text-rose-500 text-center py-6">Gagal memuat surah. Periksa koneksi internet.</p>`;
  }
}

function renderHalamanBacaSurah() {
  const display = document.getElementById('eksplor-detail-display');
  const data = surahAktifData;
  const audioUrl = (data.audio && data.audio.primary) ? data.audio.primary : `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${data.number}.mp3`;

  display.innerHTML = `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <button onclick="bukaAlquranDigital()" class="text-xs font-bold text-sky-500 mb-2">← Kembali ke Daftar Surah</button>
          <h3 class="text-2xl font-black">${data.name.transliteration.id} (${data.name.short})</h3>
          <p class="text-xs text-slate-400 mt-1">${data.revelation.id} • ${data.numberOfVerses} Ayat</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <button onclick="toggleQariAudio('${audioUrl}')" id="btn-qari-audio" class="px-4 py-2.5 rounded-xl bg-sky-500 text-white text-xs font-bold shadow-sm">▶ Putar Murottal</button>
          <div class="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex gap-1 border border-slate-200 dark:border-slate-700 text-xs font-bold">
            <button onclick="ubahModeBacaQuran('ayat')" class="px-3.5 py-1.5 rounded-lg transition ${modeBacaQurans === 'ayat' ? 'bg-white dark:bg-cardDark text-sky-500 shadow-sm' : 'text-slate-500'}">Mode Ayat</button>
            <button onclick="ubahModeBacaQuran('buku')" class="px-3.5 py-1.5 rounded-lg transition ${modeBacaQurans === 'buku' ? 'bg-white dark:bg-cardDark text-sky-500 shadow-sm' : 'text-slate-500'}">Mode Mushaf Buku</button>
          </div>
          <button onclick="tutupDisplayEksplor()" class="text-xs font-bold px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">Tutup</button>
        </div>
      </div>
      <div id="quran-read-body">
        ${modeBacaQurans === 'ayat' ? renderModeAyat(data) : renderModeBuku(data)}
      </div>
    </div>
  `;
  display.scrollIntoView({ behavior: 'smooth' });
}

function ubahModeBacaQuran(mode) {
  modeBacaQurans = mode;
  renderHalamanBacaSurah();
}

function renderModeAyat(data) {
  return `
    <div class="space-y-6 max-h-[620px] overflow-y-auto pr-2">
      ${data.verses.map(v => `
        <div class="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
          <span class="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-black text-xs">${v.number.inSurah}</span>
          <p class="text-right text-3xl mushaf-font leading-[3.2rem]">${v.text.arab}</p>
          <p class="text-sm text-sky-600 dark:text-sky-400 font-semibold">${v.text.transliteration.en}</p>
          <p class="text-sm text-slate-500 italic">${v.translation.id}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderModeBuku(data) {
  return `
    <div class="p-8 sm:p-14 rounded-3xl bg-[#fefcf8] dark:bg-slate-900/90 border-2 border-amber-200/50 dark:border-slate-800 max-h-[640px] overflow-y-auto space-y-8 shadow-inner">
      <div class="text-center pb-6 border-b border-amber-200/60 dark:border-slate-800">
        <p class="text-3xl sm:text-4xl mushaf-font text-slate-800 dark:text-slate-200 leading-[3.5rem]">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
      </div>
      <div class="text-right text-2xl sm:text-3xl mushaf-font text-slate-900 dark:text-slate-100 leading-[3.8rem] text-justify" dir="rtl">
        ${data.verses.map(v => `
          <span class="inline leading-[3.8rem]">${v.text.arab}</span>
          <span class="inline-flex items-center justify-center w-8 h-8 text-[11px] font-sans font-black text-amber-700 dark:text-sky-400 border border-amber-500/50 dark:border-sky-400/50 rounded-full mx-2 align-middle select-none bg-amber-50 dark:bg-slate-800">﴿${v.number.inSurah}﴾</span>
        `).join('')}
      </div>
    </div>
  `;
}

function toggleQariAudio(url) {
  if (!audioQariPlayer) { audioQariPlayer = new Audio(url); }
  if (audioQariPlayer.paused) { audioQariPlayer.play(); document.getElementById('btn-qari-audio').innerText = "❚❚ Jeda Murottal"; }
  else { audioQariPlayer.pause(); document.getElementById('btn-qari-audio').innerText = "▶ Lanjut Murottal"; }
}

function hentikanAudioQari() {
  if (audioQariPlayer) { audioQariPlayer.pause(); audioQariPlayer.currentTime = 0; audioQariPlayer = null; }
}