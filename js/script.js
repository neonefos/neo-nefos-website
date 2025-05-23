// ===== VIDEO ROTATOR =====
const videos = [
  { webm: '/img/hero-1.webm', mp4: '/img/hero-1.mp4' },
  { webm: '/img/hero-2.webm', mp4: '/img/hero-2.mp4' },
  { webm: '/img/hero-3.webm', mp4: '/img/hero-3.mp4' },
  { webm: '/img/hero-4.webm', mp4: '/img/hero-4.mp4' },
  { webm: '/img/hero-5.webm', mp4: '/img/hero-5.mp4' }
];

const videoElement = document.getElementById('bgVideo');
const fallbackImage = document.getElementById('videoFallback');
let currentVideo = 0;

function loadVideo() {
  const video = videos[currentVideo];
  videoElement.innerHTML = '';

  const webmSource = document.createElement('source');
  webmSource.src = video.webm;
  webmSource.type = 'video/webm';

  const mp4Source = document.createElement('source');
  mp4Source.src = video.mp4;
  mp4Source.type = 'video/mp4';

  videoElement.appendChild(webmSource);
  videoElement.appendChild(mp4Source);
  videoElement.load();

  videoElement.play().catch(e => {
    console.error('Autoplay blocked:', e);
    fallbackImage.style.display = 'block';
  });
}

function rotateVideo() {
  currentVideo = (currentVideo + 1) % videos.length;
  loadVideo();

  // Preload next video
  const nextVideo = document.createElement('video');
  const next = videos[(currentVideo + 1) % videos.length];
  nextVideo.src = next.webm;
}

// ===== DYNAMIC TICKER (Google Sheets versi) =====
async function updateTicker() {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTMKd71tirLvjqXyQ34fHLYITCkFl0AE2axtQ2VkIBWByg-aP-R2ELdWhRUSwg3X9iJQ1aGhEx_zAMk/gviz/tq?tqx=out:json";

  try {
    const response = await fetch(SHEET_URL);
    const text = await response.text();
    const json = JSON.parse(text.substr(47).slice(0, -2));
    const rows = json.table.rows;
    const messages = rows.map(r => r.c[0]?.v).filter(Boolean);

    const ticker = document.querySelector('.ticker marquee');
    ticker.innerHTML = messages.map(msg => 
      `<span class="ticker-item">${msg}</span>`).join(' • ');
  } catch (error) {
    console.error("Ticker gagal dimuat:", error);
    document.querySelector('.ticker marquee').innerHTML = 
      '#BersamaNefos • Solidaritas Global South • Seni Pembebasan';
  }
}

// ===== SERVICE WORKER (PWA) =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.error('SW failed:', err));
  });
}

// ===== INITIALIZE ALL =====
document.addEventListener('DOMContentLoaded', () => {
  loadVideo();
  setInterval(rotateVideo, 30000);
  updateTicker();
});
