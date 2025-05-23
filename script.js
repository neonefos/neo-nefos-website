/**
 * NEO NEFOS MOVEMENT - MAIN SCRIPT
 * Fitur Utama:
 * 1. Video Rotator
 * 2. Lazy Loading
 * 3. Service Worker Registration
 * 4. Dynamic Ticker
 */

// ==================== VIDEO ROTATOR ====================
const videos = [
  "img/hero-1.webm",
  "img/hero-2.webm", 
  "img/hero-3.webm",
  "img/hero-4.webm",
  "img/hero-5.webm"
];

const videoElement = document.getElementById('bgVideo');
let currentVideo = 0;

function rotateVideo() {
  currentVideo = (currentVideo + 1) % videos.length;
  videoElement.src = videos[currentVideo];
  videoElement.load();
  
  // Preload next video
  const nextVideo = new Video();
  nextVideo.src = videos[(currentVideo + 1) % videos.length];
}

// Rotate every 30 seconds
const videoInterval = setInterval(rotateVideo, 30000);

// Pause rotation when tab is inactive
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearInterval(videoInterval);
  } else {
    videoInterval = setInterval(rotateVideo, 30000);
  }
});

// ==================== LAZY LOADING ====================
const lazyLoad = () => {
  const lazyMedia = document.querySelectorAll('[loading="lazy"]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        if (element.tagName === 'IMG') {
          element.src = element.dataset.src;
        }
        observer.unobserve(element);
      }
    });
  });

  lazyMedia.forEach(media => observer.observe(media));
};

document.addEventListener('DOMContentLoaded', lazyLoad);

// ==================== SERVICE WORKER ====================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

// ==================== DYNAMIC TICKER ====================
async function loadTickerContent() {
  try {
    const response = await fetch('https://api.example.com/ticker');
    const data = await response.json();
    
    const ticker = document.querySelector('.ticker marquee');
    ticker.innerHTML = data.messages.map(msg => 
      `<span class="ticker-item">${msg.text}</span>`
    ).join(' • ');
    
  } catch (error) {
    console.error('Failed to load ticker:', error);
    // Fallback to default content
    document.querySelector('.ticker marquee').innerHTML = 
      '#BersamaNefos • Solidaritas Global South • Seni Pembebasan';
  }
}

// Initialize all features
function init() {
  lazyLoad();
  loadTickerContent();
}

window.onload = init;
