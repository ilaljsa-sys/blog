// pages/tentang.js - Mandiri (Data & Tampilan Riwayat Pendidikan)

// 1. DATA PENDIDIKAN MANDIRI
const dataPendidikanLokal = [
  {
    "Nama Instansi": "TK Roudhotul Ilmi",
    "Jurusan / Tingkat": "Pendidikan Kanak",
    "Tahun": "2011-2013",
    "Status": "Lulus"
  },
  {
    "Nama Instansi": "MI Mathala'ul Anwar",
    "Jurusan / Tingkat": "Pendidikan Dasar",
    "Tahun": "2013-2018",
    "Status": "Lulus"
  },
  {
    "Nama Instansi": "Mts Negeri 2 Pringsewu",
    "Jurusan / Tingkat": "Pendidikan Menengah",
    "Tahun": "2018-2021",
    "Status": "Lulus"
  },
  {
    "Nama Instansi": "SMK Negeri Sukoharjo",
    "Jurusan / Tingkat": "Pendidikan Atas (DKV)",
    "Tahun": "2021-2024",
    "Status": "Lulus"
  },
  {
    "Nama Instansi": "Universitas Terbuka",
    "Jurusan / Tingkat": "Ilmu Hukum • S1",
    "Tahun": "Aktif",
    "Status": "Aktif"
  }
];

// 2. FUNGSI RENDER TAMPILAN
function renderTentang() {
  const container = document.getElementById('wadah-pendidikan') || document.querySelector('#sec-tentang .space-y-4') || document.querySelector('#sec-tentang .grid');
  if (!container) return;

  container.innerHTML = dataPendidikanLokal.map(item => {
    const instansi = item["Nama Instansi"] || item.instansi || "Instansi";
    const tingkat = item["Jurusan / Tingkat"] || item.tingkat || item.jurusan || "-";
    const tahun = item["Tahun"] || item.tahun || "-";
    const status = item["Status"] || item.status || "Selesai";

    const isAktif = status.toLowerCase() === 'aktif';
    const badgeWarna = isAktif 
      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
      : 'bg-slate-800 text-slate-400 border-slate-700';

    return `
      <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-sky-500/40 transition-all flex items-center justify-between group">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            </svg>
          </div>
          <div>
            <h4 class="text-white font-bold text-base leading-snug">${instansi}</h4>
            <p class="text-slate-400 text-xs mt-0.5">${tingkat}</p>
          </div>
        </div>
        <div class="text-right">
          <div class="text-slate-300 font-semibold text-xs mb-1">${tahun}</div>
          <span class="inline-block px-2.5 py-0.5 text-[10px] font-bold rounded-full border ${badgeWarna}">
            ${status.toUpperCase()}
          </span>
        </div>
      </div>
    `;
  }).join('');
}

// 3. EKSEKUSI OTOMATIS SAAT HALAMAN SELESAI DIBUKA
document.addEventListener('DOMContentLoaded', () => {
  renderTentang();
});
