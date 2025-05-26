// === script.js untuk Neo Nefos Movement ===

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const heroLogo = document.querySelector('.hero-logo-container');
  const headerLogo = document.getElementById('header-logo');

  // Toggle visible header saat scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('visible');
      heroLogo.style.opacity = '0';
      headerLogo.classList.add('fade-in');
    } else {
      header.classList.remove('visible');
      heroLogo.style.opacity = '1';
      headerLogo.classList.remove('fade-in');
    }
  });

  // Optional: Hover event untuk aksesibilitas yang lebih luas
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const dropdown = item.querySelector('.dropdown-box');
      if (dropdown) dropdown.style.display = 'flex';
    });
    item.addEventListener('mouseleave', () => {
      const dropdown = item.querySelector('.dropdown-box');
      if (dropdown) dropdown.style.display = 'none';
    });
  });

  // Ticker dinamis bisa diatur di sini
  const tickerText = document.getElementById('ticker-text');
  if (tickerText) {
    tickerText.innerHTML += ' Bersama Kita Bangun Ekosistem Mandala •';
  }
});
