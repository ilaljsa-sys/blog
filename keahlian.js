// pages/keahlian.js - Modul Stack & Keahlian

function renderKeahlian() {
  const container = document.getElementById('sec-skills');
  if (!container) return;

  container.innerHTML = `
    <div class="text-center max-w-3xl mx-auto space-y-3">
      <span class="px-4 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 text-xs font-black uppercase tracking-wider">Keahlian</span>
      <h2 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">Teknologi & Perangkat Lunak</h2>
      <p class="text-base text-slate-600 dark:text-slate-400">Peralatan desain grafis, produktivitas, dan otomasi instrumen.</p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
      <div class="skill-card smooth-zoom-card p-6 sm:p-7 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 group cursor-pointer shadow-sm">
        <svg class="w-10 h-10 text-sky-500 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 0C5.388 0 0 5.388 0 12.012s5.388 12.012 12.012 12.012c6.624 0 12.012-5.388 12.012-12.012S18.636 0 12.012 0zm3.882 17.518c-1.393.596-3.08.621-4.484.072-2.18-.853-3.642-3.132-3.642-5.679 0-3.324 2.536-6.046 5.86-6.046 1.83 0 3.447.818 4.542 2.115l-1.637 1.487c-.742-.878-1.782-1.428-2.905-1.428-2.146 0-3.791 1.764-3.791 3.872 0 1.631.961 3.107 2.404 3.694.978.398 2.176.365 3.15-.098l.503 1.991z"/></svg>
        <span class="text-sm font-bold text-slate-800 dark:text-slate-200">Canva</span>
      </div>
      <div class="skill-card smooth-zoom-card p-6 sm:p-7 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 group cursor-pointer shadow-sm">
        <svg class="w-10 h-10 text-emerald-500 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07c-2.83-.48-5-2.94-5-5.93s2.17-5.45 5-5.93V4h2v1.07c2.83.48 5 2.94 5 5.93s-2.17 5.45-5 5.93zM12 6.5C9.51 6.5 7.5 8.51 7.5 11s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5S14.49 6.5 12 6.5z"/></svg>
        <span class="text-sm font-bold text-slate-800 dark:text-slate-200">CorelDraw</span>
      </div>
      <div class="skill-card smooth-zoom-card p-6 sm:p-7 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 group cursor-pointer shadow-sm">
        <svg class="w-10 h-10 text-blue-500 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24V3H0zm18.9 14.3c-.6.4-1.4.6-2.4.6-1.5 0-2.6-.5-3.3-1.4-.7-.9-1.1-2.2-1.1-3.9 0-1.8.4-3.1 1.2-4 .8-.9 1.9-1.3 3.3-1.3 1 0 1.7.2 2.3.5v2.1c-.6-.4-1.3-.6-2-.6-1.6 0-2.4 1.1-2.4 3.3 0 1.2.2 2.1.6 2.6.4.6 1 .8 1.8.8.7 0 1.4-.2 2-.5v2.3zM9.4 8.7H7.3v8.6H5.2V6.6h4.2c1.4 0 2.4.3 3.1 1 .7.6 1 1.5 1 2.6 0 1.2-.4 2.1-1.1 2.8-.7.7-1.8 1.1-3 1.1V8.7zm0-0.3c.7 0 1.2-.1 1.5-.4.3-.3.5-.7.5-1.3 0-.6-.2-1-.5-1.3-.3-.3-.8-.4-1.5-.4H7.3v3.4h2.1z"/></svg>
        <span class="text-sm font-bold text-slate-800 dark:text-slate-200">Photoshop</span>
      </div>
      <div class="skill-card smooth-zoom-card p-6 sm:p-7 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 group cursor-pointer shadow-sm">
        <svg class="w-10 h-10 text-amber-500 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24V3H0zm10.7 14.3H8.5l-.8-2.6H4.3l-.8 2.6H1.3l3.8-10.7h2.2l3.4 10.7zm6.9 0h-2.1v-7.3h2.1v7.3zm-.1-8.7h-1.9V6.6h1.9v2zM6 9.8l-1.3 4h2.5L6 9.8z"/></svg>
        <span class="text-sm font-bold text-slate-800 dark:text-slate-200">Illustrator</span>
      </div>
      <div class="skill-card smooth-zoom-card p-6 sm:p-7 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 group cursor-pointer shadow-sm">
        <svg class="w-10 h-10 text-slate-800 dark:text-slate-200 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        <span class="text-sm font-bold text-slate-800 dark:text-slate-200">GitHub</span>
      </div>
      <div class="skill-card smooth-zoom-card p-6 sm:p-7 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 group cursor-pointer shadow-sm">
        <svg class="w-10 h-10 text-emerald-500 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c4.142 0 7.5 3.358 7.5 7.5S16.142 19.5 12 19.5 4.5 16.142 4.5 12 7.858 4.5 12 4.5zm-1.5 3v6l5.25 3.15.75-1.23-4.5-2.67V7.5h-1.5z"/></svg>
        <span class="text-sm font-bold text-slate-800 dark:text-slate-200">Google Workspace</span>
      </div>
      <div class="skill-card smooth-zoom-card p-6 sm:p-7 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 group cursor-pointer shadow-sm">
        <svg class="w-10 h-10 text-amber-600 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M21.5 2h-19C1.1 2 0 3.1 0 4.5v15C0 20.9 1.1 22 2.5 22h19c1.4 0 2.5-1.1 2.5-2.5v-15C24 3.1 22.9 2 21.5 2zm-10 16.5H5.8l-1.3-9h3l.7 6.3.8-6.3h2.5v9zm6.5 0h-2.5v-6.5h-1.8v-2.5h6.1v2.5H18v6.5z"/></svg>
        <span class="text-sm font-bold text-slate-800 dark:text-slate-200">Microsoft Office</span>
      </div>
      <div class="skill-card smooth-zoom-card p-6 sm:p-7 rounded-2xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 group cursor-pointer shadow-sm">
        <svg class="w-10 h-10 text-sky-400 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
        <span class="text-sm font-bold text-slate-800 dark:text-slate-200">Tailwind CSS</span>
      </div>
    </div>
  `;
}