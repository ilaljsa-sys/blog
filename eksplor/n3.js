// eksplor/n3.js - Modul Pembelajaran N3

function bukaModulN3() {
  hentikanAudioQari();
  const display = document.getElementById('eksplor-detail-display');
  display.classList.remove('hidden');
  display.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <span class="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 text-xs font-bold">JLPT N3 Preparation</span>
          <h3 class="text-xl font-black mt-2">Modul Pembelajaran Mandiri N3</h3>
        </div>
        <button onclick="tutupDisplayEksplor()" class="text-xs font-bold px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800">Tutup</button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h4 class="text-base font-black text-sky-500">Flashcard Kanji Interaktif</h4>
          <div id="flashcard-box" onclick="balikFlashcard()" class="h-44 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center cursor-pointer p-4 select-none">
            <span id="fc-kanji" class="text-5xl font-black">準備</span>
            <span id="fc-arti" class="text-sm font-semibold text-slate-400 mt-3 hidden">じゅんび (Junbi) - Persiapan</span>
          </div>
          <p class="text-center text-[11px] text-slate-400">Klik kartu di atas untuk melihat cara baca dan artinya.</p>
        </div>

        <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <h4 class="text-base font-black text-sky-500">Ringkasan Tata Bahasa (Bunpou)</h4>
          <div class="space-y-3 text-xs">
            <div class="p-3.5 rounded-xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 space-y-1">
              <p class="font-bold text-sky-400">1. 〜 つい (Tsui)</p>
              <p class="text-slate-400">Menyatakan tindakan yang terjadi tanpa sengaja / refleks.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 space-y-1">
              <p class="font-bold text-sky-400">2. 〜 はずがない (Hazu ga nai)</p>
              <p class="text-slate-400">Menyatakan keyakinan kuat bahwa sesuatu tidak mungkin terjadi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  display.scrollIntoView({ behavior: 'smooth' });
}

function balikFlashcard() {
  const arti = document.getElementById('fc-arti');
  if (arti) arti.classList.toggle('hidden');
}

function tutupDisplayEksplor() {
  hentikanAudioQari();
  document.getElementById('eksplor-detail-display').classList.add('hidden');
}