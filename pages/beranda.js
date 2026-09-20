// pages/beranda.js - Modul Halaman Beranda Mandiri

// 1. DATA PROFIL BERANDA MANDIRI
const dataProfilBeranda = { 
  nama_lengkap: "I'lal Jalalludin Syahputra", 
  teks_ketik: "Mahasiswa Hukum, Japanese Learner, Livestock Farm", 
  quote: "Kebodohan bukan ketika seseorang belum mengetahui, melainkan ketika ia menutup telinga karena terlalu yakin bahwa dirinya telah mengetahui."
};

function renderBeranda(profil) {
  const container = document.getElementById('sec-beranda');
  if (!container) return;

  const data = profil || dataProfilBeranda;

  container.innerHTML = `
    <div class="w-full flex flex-col-reverse lg:flex-row items-center justify-between beranda-container-grid">
      <div class="space-y-6 max-w-2xl text-center lg:text-left">
        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
          <div class="flex items-center gap-2.5">
            <a href="https://www.instagram.com/ilaljsa_" target="_blank" class="w-9 h-9 rounded-xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-sky-500 transition shadow-sm">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://x.com/ilaljsa_" target="_blank" class="w-9 h-9 rounded-xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-sky-500 transition shadow-sm">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.threads.com/@ilaljsa_" target="_blank" class="w-9 h-9 rounded-xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-sky-500 transition shadow-sm">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24C5.454 24 0 18.634 0 12.012 0 5.39 5.454 0 12.186 0c6.643 0 11.966 5.224 12.184 11.836h-2.673c-.21-5.184-4.372-9.25-9.511-9.25-5.32 0-9.61 4.298-9.61 9.426 0 5.128 4.29 9.426 9.61 9.426 3.652 0 6.83-2.052 8.39-5.068l2.33 1.344C20.89 21.24 16.828 24 12.186 24zm4.184-11.836c0-2.31-1.874-4.185-4.184-4.185-2.31 0-4.185 1.875-4.185 4.185s1.875 4.184 4.185 4.184c1.155 0 2.198-.47 2.955-1.226l1.888 1.888c-1.242 1.242-2.95 2.01-4.843 2.01-3.79 0-6.857-3.067-6.857-6.856s3.067-6.857 6.857-6.857 6.856 3.067 6.856 6.857h-2.672z"/></svg>
            </a>
          </div>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400 text-xs font-bold tracking-wide">
            <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            Personal Space & Notes
          </div>
        </div>

        <h1 id="hero-nama" class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">${data.nama_lengkap}</h1>
        <div class="text-xl font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center lg:justify-start gap-2 h-8">
          <span class="text-slate-400 font-normal text-base">Fokus:</span>
          <span id="typewriter-text" class="text-sky-600 dark:text-sky-400 font-extrabold"></span>
          <span class="cursor-blink bg-sky-500 h-6"></span>
        </div>

        <div class="relative group">
          <div class="absolute -inset-1.5 bg-gradient-to-r from-sky-500/35 via-blue-600/25 to-sky-400/35 rounded-3xl blur-xl animate-moving-glow -z-10"></div>
          <div class="p-6 rounded-2xl bg-white/95 dark:bg-cardDark/95 border-l-4 border-sky-500 border border-slate-200 dark:border-slate-800 text-base shadow-md space-y-2 backdrop-blur-sm">
            <p class="italic leading-relaxed">"<span id="hero-quote">${data.quote}</span>"</p>
            <p class="text-xs font-black text-sky-600 dark:text-sky-400 text-left pt-1">— I'lal Jalalludin Syahputra</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
          <button onclick="pindahTabByName('catatan')" class="px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-sm shadow-lg shadow-sky-500/25 transition active:scale-95">Jelajahi Catatan →</button>
          <button onclick="pindahTabByName('tentang')" class="px-7 py-3.5 rounded-xl bg-white dark:bg-cardDark border border-slate-200 dark:border-slate-800 font-bold text-sm transition shadow-sm">Perjalanan & Linimasa</button>
        </div>
      </div>

      <div class="relative flex items-center justify-center">
        <div class="absolute w-80 h-80 sm:w-96 sm:h-96 bg-sky-500/30 dark:bg-sky-500/25 blur-[90px] rounded-full pointer-events-none -z-10 animate-moving-glow"></div>
        <div class="animate-slow-float eka-avatar-box" id="avatarBox">
          <div class="eka-avatar-wrapper">
            <img id="hero-avatar" src="https://i.postimg.cc/rwY03HQz/ga-ada-bacgrond.png" alt="Avatar Utama" class="eka-img-base">
            <img id="spideyImg" src="https://i.postimg.cc/Kv0R3VXs/Spiderman-pas.png" alt="Spiderman" class="eka-img-spidey">
          </div>
        </div>
      </div>
    </div>
  `;

  inisialisasiAvatarHover();
  
  // Mesin tik otomatis memanggil data fokus miliknya sendiri
  mulaiTypewriter(data.teks_ketik.split(', '));
}

function inisialisasiAvatarHover() {
  const avatarBox = document.getElementById('avatarBox');
  const spideyImg = document.getElementById('spideyImg');
  if (!avatarBox || !spideyImg) return;

  let isHovering = false;
  let autoInterval = null;
  let isSpideyVisible = false;

  function startIdleCrossfade() {
    spideyImg.style.webkitMaskImage = 'none';
    spideyImg.style.maskImage = 'none';
    spideyImg.style.transition = 'opacity 1.6s ease-in-out';
    
    if (autoInterval) clearInterval(autoInterval);
    autoInterval = setInterval(() => {
      if (!isHovering) {
        isSpideyVisible = !isSpideyVisible;
        spideyImg.style.opacity = isSpideyVisible ? "1" : "0";
      }
    }, 4000);
  }

  startIdleCrossfade();

  avatarBox.addEventListener('mouseenter', (e) => {
    isHovering = true;
    if (autoInterval) clearInterval(autoInterval);
    spideyImg.style.transition = 'none';
    spideyImg.style.opacity = '1';

    const rect = avatarBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const brushMask = `radial-gradient(circle 120px at ${x}px ${y}px, black 35%, rgba(0,0,0,0.5) 70%, transparent 100%)`;
    spideyImg.style.webkitMaskImage = brushMask;
    spideyImg.style.maskImage = brushMask;
  });

  avatarBox.addEventListener('mousemove', (e) => {
    if (!isHovering) return;
    const rect = avatarBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const brushMask = `radial-gradient(circle 120px at ${x}px ${y}px, black 35%, rgba(0,0,0,0.5) 70%, transparent 100%)`;
    spideyImg.style.webkitMaskImage = brushMask;
    spideyImg.style.maskImage = brushMask;
  });

  avatarBox.addEventListener('mouseleave', () => {
    isHovering = false;
    spideyImg.style.webkitMaskImage = 'none';
    spideyImg.style.maskImage = 'none';
    spideyImg.style.transition = 'opacity 0.8s ease-out';
    spideyImg.style.opacity = '0';
    isSpideyVisible = false;
    startIdleCrossfade();
  });
}

function mulaiTypewriter(words) {
  let wordIdx = 0, charIdx = 0, isDeleting = false;
  const el = document.getElementById('typewriter-text');
  if (!el) return;
  function type() {
    const current = words[wordIdx];
    if (isDeleting) { el.innerText = current.substring(0, charIdx - 1); charIdx--; } 
    else { el.innerText = current.substring(0, charIdx + 1); charIdx++; }
    let delay = isDeleting ? 60 : 140;
    if (!isDeleting && charIdx === current.length) { delay = 2500; isDeleting = true; }
    else if (isDeleting && charIdx === 0) { isDeleting = false; wordIdx = (wordIdx + 1) % words.length; delay = 600; }
    setTimeout(type, delay);
  }
  type();
}