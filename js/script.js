// === script.js ===

// Scroll untuk header dinamis
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  const heroLogo = document.querySelector('.hero-logo-container');
  const headerLogo = document.getElementById('header-logo');

  if (window.scrollY > 50) {
    if (header) header.classList.add('visible');
    if (heroLogo) heroLogo.classList.add('fade-out');
    if (headerLogo) headerLogo.classList.add('fade-in');
  } else {
    if (header) header.classList.remove('visible');
    if (heroLogo) heroLogo.classList.remove('fade-out');
    if (headerLogo) headerLogo.classList.remove('fade-in');
  }
});

// Hover dropdown
document.querySelectorAll('.dropdown').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const box = item.querySelector('.dropdown-box');
    if (box) box.style.display = 'flex';
  });
  item.addEventListener('mouseleave', () => {
    const box = item.querySelector('.dropdown-box');
    if (box) box.style.display = 'none';
  });
});
