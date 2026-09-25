const masterDataPendidikan = [
  {
    "Nama Instansi": "Universitas Terbuka",
    "Jurusan / Tingkat": "Ilmu Hukum",
    "Tahun": "",
    "Status": "Aktif"
  },
  {
    "Nama Instansi": "SMK Negeri Sukoharjo",
    "Jurusan / Tingkat": "Pendidikan Atas",
    "Tahun": "2021 - 2024",
    "Status": "Lulus"
  },
  {
    "Nama Instansi": "Mts Negeri 2 Pringsewu",
    "Jurusan / Tingkat": "Pendidikan Menengah",
    "Tahun": "2018 - 2021",
    "Status": "Lulus"
  },
  {
    "Nama Instansi": "MI Mathala'ul Anwar",
    "Jurusan / Tingkat": "Pendidikan Dasar",
    "Tahun": "2013 - 2018",
    "Status": "Lulus"
  },
  {
    "Nama Instansi": "TK Roudhotul Ilmi",
    "Jurusan / Tingkat": "Pendidikan Kanak",
    "Tahun": "2011 - 2013",
    "Status": "Lulus"
  }
];

const iconPendidikanPeta = {
  "TK Roudhotul Ilmi": `<svg class="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
  "MI Mathala'ul Anwar": `<svg class="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
  "Mts Negeri 2 Pringsewu": `<svg class="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
  "SMK Negeri Sukoharjo": `<svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>`,
  "Universitas Terbuka": `<svg class="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7"></path></svg>`
};

function renderTentang() {
  const container = document.getElementById('sec-tentang');
  if (!container) return;

  container.innerHTML = `
    <div class="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
      <span class="px-4 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 text-xs font-black uppercase tracking-wider inline-block">Tentang Saya</span>
      <h2 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">Refleksi Diri & Perjalanan</h2>
    </div>

    <div class="max-w-4xl mx-auto space-y-6">
      <div class="smooth-zoom-card p-8 sm:p-10 rounded-3xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 text-base sm:text-lg leading-relaxed cursor-default">
        <p>Nama saya <b>I'lal Jalalludin Syahputra</b>. Saat ini saya menjalani kehidupan di Jepang dan bekerja di bidang <b>poultry farming</b>, khususnya dalam lingkungan peternakan ayam. Pengalaman ini menjadi bagian penting dari perjalanan saya karena mengajarkan banyak hal tentang <i>discipline, responsibility, teamwork</i>, dan bagaimana pekerjaan sederhana sekalipun membutuhkan ketelitian dan konsistensi.</p>
        <p>Di sisi lain, saya memiliki background <b>Desain Komunikasi Visual (DKV)</b> yang membuat saya tetap dekat dengan dunia kreatif. <i>Graphic design, photography, visual communication</i>, hingga <i>digital content</i> menjadi beberapa bidang yang saya sukai dan terus saya kembangkan. Saya juga tertarik pada data processing, computer operation, dan pemanfaatan teknologi modern untuk membuat pekerjaan menjadi lebih efektif.</p>
        <p>Bagi saya, teknologi bukan sekadar sesuatu untuk digunakan, tetapi juga ruang untuk terus belajar. Saya mulai mengeksplorasi berbagai digital tools dan AI sebagai bagian dari daily workflow, baik untuk pekerjaan, kreativitas, maupun proses belajar.</p>
        <p>Selain bekerja dan mengembangkan skill, saya sedang menempuh pendidikan <b>Ilmu Hukum di Universitas Terbuka</b>. Saya melihat hukum sebagai bidang yang berbeda dari dunia kreatif dan peternakan yang saya jalani, tetapi justru dari perbedaan itulah saya mendapatkan perspektif baru.</p>
        <p>Perjalanan ini mungkin terlihat seperti kumpulan bidang yang berbeda—<i>poultry farming</i>, DKV, digital technology, Japanese language, dan law. Namun, semuanya menjadi bagian dari proses yang sama: terus belajar, mencoba hal baru, dan membangun kemampuan sedikit demi sedikit.</p>
      </div>

      <div class="smooth-zoom-card p-8 rounded-3xl bg-sky-50/70 dark:bg-sky-950/30 border-l-8 border-sky-500 border border-sky-100 dark:border-sky-900 text-slate-800 dark:text-slate-200 space-y-2 cursor-default">
        <p class="italic text-base sm:text-lg font-medium leading-relaxed">
          “hakikat hidup itu berkembang menurut kodrat iramanya masing-masing menuju kesempurnaan” dan kehidupan manusia yang melalui “tingkat ke tingkat”, sementara apa yang sebenarnya dicari manusia disebut telah tersimpan di dalam hati nuraninya.
        </p>
        <p class="text-xs font-black text-sky-600 dark:text-sky-400">— Persaudaraan Setia Hati Terate</p>
      </div>
    </div>

    <div class="space-y-6 pt-6">
      <div class="text-center space-y-2">
        <span class="px-4 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 text-xs font-black uppercase tracking-wider">Linimasa Akademik</span>
        <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Riwayat Pendidikan</h3>
      </div>
      <div class="space-y-4 max-w-3xl mx-auto" id="pendidikan-container"></div>
    </div>
  `;

  renderPendidikan(masterDataPendidikan);
}

function renderPendidikan(list) {
  const container = document.getElementById('pendidikan-container');
  if (!container || !list) return;

  container.innerHTML = list.map(p => {
    const namaInstansi = p['Nama Instansi'] || '';
    const jurusan = p['Jurusan / Tingkat'] || '';
    const tahunTeks = (p['Tahun'] || '').trim();
    const status = (p['Status'] || 'Lulus').trim();
    const isAktif = status.toLowerCase() === 'aktif';
    const iconSVG = iconPendidikanPeta[namaInstansi] || `<svg class="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path></svg>`;

    return `
      <div class="smooth-zoom-card p-4 sm:p-5 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3 cursor-default">
        <div class="flex items-center gap-3.5 min-w-0">
          <div class="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center font-bold shadow-sm shrink-0">
            ${iconSVG}
          </div>
          <div class="min-w-0">
            <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">${namaInstansi}</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 truncate">${jurusan}</p>
          </div>
        </div>

        <div class="text-right shrink-0 flex flex-col items-end justify-center">
          ${tahunTeks ? `<span class="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-tight whitespace-nowrap mb-1">${tahunTeks}</span>` : ''}
          <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full whitespace-nowrap ${isAktif ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}">
            ${status}
          </span>
        </div>
      </div>
    `;
  }).join('');
}