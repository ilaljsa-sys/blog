// pages/catatan.js - Modul Blog & Catatan

function renderCatatan() {
  const container = document.getElementById('sec-blog');
  if (!container) return;

  container.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
      <div>
        <span class="px-4 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 text-xs font-black uppercase tracking-wider">Artikel & Catatan</span>
        <h2 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-2">Pikiran, Gagasan, & Esai</h2>
      </div>
      <input type="text" id="blog-search" oninput="cariBlog()" placeholder="Cari artikel..." class="w-full sm:w-80 bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-sky-500 shadow-sm">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" id="blog-container"></div>
  `;

  renderBlogCards(localDB.blog);
}

function renderBlogCards(list) {
  const blogBox = document.getElementById('blog-container');
  if (!blogBox || !list) return;
  blogBox.innerHTML = list.map((b, idx) => `
    <article onclick="bukaModalBlog(${idx})" class="smooth-zoom-card p-6 rounded-3xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 cursor-pointer group flex flex-col justify-between shadow-sm hover:border-sky-500 transition duration-300 space-y-4">
      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 font-bold">${b.Kategori}</span>
          <span class="text-slate-400">${b.Tanggal}</span>
        </div>
        <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-sky-500 transition leading-snug">${b['Judul Artikel']}</h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2">${b['Ringkasan Cuplikan']}</p>
      </div>
      <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-sky-500">
        <span>Baca Selengkapnya</span>
        <span class="group-hover:translate-x-1 transition">→</span>
      </div>
    </article>
  `).join('');
}

function cariBlog() {
  const q = document.getElementById('blog-search').value.toLowerCase();
  const hasil = localDB.blog.filter(b => b['Judul Artikel'].toLowerCase().includes(q) || b['Ringkasan Cuplikan'].toLowerCase().includes(q));
  renderBlogCards(hasil);
}

function bukaModalBlog(idx) {
  const b = localDB.blog[idx];
  if (!b) return;
  document.getElementById('modal-cat').innerText = b.Kategori;
  document.getElementById('modal-tgl').innerText = b.Tanggal;
  document.getElementById('modal-judul').innerText = b['Judul Artikel'];
  document.getElementById('modal-isi').innerText = b['Isi Lengkap Artikel'] || b['Ringkasan Cuplikan'];
  const sumberEl = document.getElementById('modal-sumber');
  if (b.SumberURL) {
    sumberEl.innerHTML = `Referensi: <a href="${b.SumberURL}" target="_blank" class="text-sky-500 underline font-semibold ml-1">${b.SumberURL}</a>`;
  } else {
    sumberEl.innerHTML = "";
  }
  document.getElementById('modal-reader').classList.remove('hidden');
}

function tutupModal() { 
  document.getElementById('modal-reader').classList.add('hidden'); 
}