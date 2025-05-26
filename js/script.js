// === script.js untuk Neo Nefos Movement ===

// Fungsi scroll header dan logo besar
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  const heroLogo = document.querySelector('.hero-logo-container');

  if (window.scrollY > 50) {
    header.classList.add('visible');
    if (heroLogo) heroLogo.style.opacity = '0';
  } else {
    header.classList.remove('visible');
    if (heroLogo) heroLogo.style.opacity = '1';
  }
});
// Deteksi scroll untuk header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 100);
});
// Fungsi ticker isi dinamis
window.addEventListener('DOMContentLoaded', () => {
  const ticker = document.querySelector('.ticker-text span');
  if (ticker) {
    ticker.textContent = '#BersamaNefos • Seni Melawan Ketimpangan • Solidaritas Global South • ';
  }
});

// (OPSIONAL) Preload video loop berurutan
const bgVideo = document.getElementById('bgVideo');
if (bgVideo) {
  const sources = [
    'assets/video/hero-1.webm',
    'assets/video/hero-2.webm',
    'assets/video/hero-3.webm',
    'assets/video/hero-4.webm',
    'assets/video/hero-5.webm'
  ];
  let current = 0;

  bgVideo.src = sources[current];
  bgVideo.load();

  bgVideo.addEventListener('ended', () => {
    current = (current + 1) % sources.length;
    bgVideo.src = sources[current];
    bgVideo.load();
    bgVideo.play();
  });
}

// Fungsi dropdown tetap smooth (jika pakai JS fallback di mobile)
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(drop => {
  drop.addEventListener('mouseenter', () => {
    const box = drop.querySelector('.dropdown-box');
    if (box) box.style.display = 'flex';
  });
  drop.addEventListener('mouseleave', () => {
    const box = drop.querySelector('.dropdown-box');
    if (box) box.style.display = 'none';
  });
});
