// Variabel penyimpan data artikel aktif
let dataBlogAktif = [];

// Fungsi render kartu-kartu artikel catatan
function renderCatatan(daftarArtikel = null) {
  const container = document.getElementById('wadah-catatan') || document.querySelector('#sec-blog .grid');
  if (!container) return;

  // Prioritaskan data yang dikirim, atau fallback ke localDB
  const list = daftarArtikel || (typeof localDB !== 'undefined' ? localDB.blog : []);
  dataBlogAktif = list;

  if (!list || list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 text-sm">
        Belum ada catatan yang tersedia.
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    // Penanganan fleksibel nama properti (localDB vs Google Sheets)
    const kategori = item.kategori || item.category || 'Catatan';
    const tanggal = item.tanggal || item.date || item.tgl || '';
    const judul = item.judul || item.title || 'Tanpa Judul';
    const cuplikan = item.cuplikan || item.snippet || item.ringkasan || item.deskripsi || '';
    const id = item.id !== undefined ? item.id : 0;

    return `
      <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/50 transition-all flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between text-xs mb-3">
            <span class="px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 font-medium">${kategori}</span>
            <span class="text-slate-400">${tanggal}</span>
          </div>
          <h3 class="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-sky-400 transition-colors">${judul}</h3>
          <p class="text-slate-300 text-sm line-clamp-3 leading-relaxed">${cuplikan}</p>
        </div>
        <button onclick="bukaModalBlog(${id})" class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors">
          Baca Selengkapnya <span>→</span>
        </button>
      </div>
    `;
  }).join('');
}

// Fungsi buka modal baca isi artikel lengkap
function bukaModalBlog(id) {
  const modal = document.getElementById('modal-reader');
  if (!modal) return;

  const item = dataBlogAktif.find(b => String(b.id) === String(id));
  if (!item) return;

  const kategori = item.kategori || item.category || 'Catatan';
  const tanggal = item.tanggal || item.date || item.tgl || '';
  const judul = item.judul || item.title || 'Tanpa Judul';
  const isi = item.isi || item.content || item.cuplikan || item.ringkasan || '';
  const link = item.linkSumber || item.link || '';

  const elKat = document.getElementById('modal-kategori');
  const elTgl = document.getElementById('modal-tgl');
  const elJdl = document.getElementById('modal-judul');
  const elIsi = document.getElementById('modal-isi');
  const elLink = document.getElementById('modal-link-sumber');

  if (elKat) elKat.innerText = kategori;
  if (elTgl) elTgl.innerText = tanggal;
  if (elJdl) elJdl.innerText = judul;
  if (elIsi) elIsi.innerHTML = isi.replace(/\n/g, '<br><br>');

  if (elLink) {
    if (link) {
      elLink.href = link;
      elLink.classList.remove('hidden');
    } else {
      elLink.classList.add('hidden');
    }
  }

  modal.classList.remove('hidden');
}

// Fungsi tutup modal reader
function tutupModalBlog() {
  const modal = document.getElementById('modal-reader');
  if (modal) modal.classList.add('hidden');
}

// Fungsi filter pencarian catatan
function cariCatatan() {
  const input = document.getElementById('input-cari-blog') || document.querySelector('#sec-blog input');
  if (!input) return;

  const query = input.value.toLowerCase();
  const listSumber = (typeof localDB !== 'undefined' && localDB.blog) ? localDB.blog : dataBlogAktif;

  const hasilFilter = listSumber.filter(item => {
    const judul = (item.judul || item.title || '').toLowerCase();
    const cuplikan = (item.cuplikan || item.snippet || item.ringkasan || '').toLowerCase();
    const kat = (item.kategori || item.category || '').toLowerCase();
    return judul.includes(query) || cuplikan.includes(query) || kat.includes(query);
  });

  renderCatatan(hasilFilter);
}
