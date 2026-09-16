// Variabel penyimpan data artikel aktif
let dataBlogAktif = [];

// Render kartu catatan sesuai struktur database asli
function renderCatatan(daftarArtikel = null) {
  const container = document.getElementById('wadah-catatan') || document.querySelector('#sec-blog .grid');
  if (!container) return;

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

  container.innerHTML = list.map((item, index) => {
    // Membaca kunci asli dari script.js / Google Sheets
    const judul = item["Judul Artikel"] || item.judul || "Tanpa Judul";
    const kategori = item["Kategori"] || item.kategori || "Catatan";
    const tanggal = item["Tanggal"] || item.tanggal || "";
    const cuplikan = item["Ringkasan Cuplikan"] || item.cuplikan || "";

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
        <button onclick="bukaModalBlog(${index})" class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors">
          Baca Selengkapnya <span>→</span>
        </button>
      </div>
    `;
  }).join('');
}

// Buka modal baca isi artikel
function bukaModalBlog(index) {
  const modal = document.getElementById('modal-reader');
  if (!modal) return;

  const item = dataBlogAktif[index];
  if (!item) return;

  const judul = item["Judul Artikel"] || item.judul || "Tanpa Judul";
  const kategori = item["Kategori"] || item.kategori || "Catatan";
  const tanggal = item["Tanggal"] || item.tanggal || "";
  const isi = item["Isi Lengkap Artikel"] || item.isi || item["Ringkasan Cuplikan"] || "";
  const link = item["SumberURL"] || item.linkSumber || "";

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

// Tutup modal
function tutupModalBlog() {
  const modal = document.getElementById('modal-reader');
  if (modal) modal.classList.add('hidden');
}

// Fitur pencarian artikel
function cariCatatan() {
  const input = document.getElementById('input-cari-blog') || document.querySelector('#sec-blog input');
  if (!input) return;

  const query = input.value.toLowerCase();
  const listSumber = (typeof localDB !== 'undefined' && localDB.blog) ? localDB.blog : dataBlogAktif;

  const hasilFilter = listSumber.filter(item => {
    const judul = (item["Judul Artikel"] || item.judul || "").toLowerCase();
    const cuplikan = (item["Ringkasan Cuplikan"] || item.cuplikan || "").toLowerCase();
    const kat = (item["Kategori"] || item.kategori || "").toLowerCase();
    return judul.includes(query) || cuplikan.includes(query) || kat.includes(query);
  });

  renderCatatan(hasilFilter);
}
