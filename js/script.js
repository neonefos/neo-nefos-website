// === script.js untuk Neo Nefos ===

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const heroLogo = document.querySelector('.hero-logo-container');
  const logoSmall = document.getElementById('header-logo');

  // Fungsi saat scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      if (heroLogo) {
        heroLogo.style.opacity = '0';
        heroLogo.style.transform = 'scale(0.95)';
      }
    } else {
      header.classList.remove('scrolled');
      if (heroLogo) {
        heroLogo.style.opacity = '1';
        heroLogo.style.transform = 'scale(1)';
      }
    }
  });
});
