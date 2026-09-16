// eksplor/tugas.js - Modul Berkas Studi & Tugas Kuliah

function bukaTugasKuliah() {
  hentikanAudioQari();
  const display = document.getElementById('eksplor-detail-display');
  display.classList.remove('hidden');
  display.innerHTML = `
    <div class="flex justify-between border-b pb-4"><h3 class="font-bold text-lg">Arsip Berkas Studi Hukum</h3><button onclick="tutupDisplayEksplor()" class="text-xs">Tutup</button></div>
    <div class="grid gap-3 pt-3">
      ${localDB.tugas.map(t => `
        <div class="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
          <div>
            <h4 class="font-bold text-sm">${t['Judul Makalah / Tugas']}</h4>
            <p class="text-xs text-slate-400">${t['Mata Kuliah']} • ${t.Semester}</p>
          </div>
          <a href="${t['Link PDF Drive']}" target="_blank" class="px-4 py-2 bg-sky-500 text-white text-xs font-bold rounded-xl shadow-sm">Unduh PDF</a>
        </div>
      `).join('')}
    </div>
  `;
  display.scrollIntoView({ behavior: 'smooth' });
}