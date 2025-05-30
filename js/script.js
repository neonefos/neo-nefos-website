 /**
 * Script untuk Header Neo Nefos
 * Mengatur:
 * 1. Efek scroll header
 * 2. Toggle menu mobile
 * 3. Interaksi submenu
 */

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.main-header');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  // ===== Efek Scroll Header =====
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // ===== Toggle Menu Mobile =====
  mobileToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navList.classList.toggle('mobile-active');
    
    // Tambahkan/remove overflow hidden pada body
    if (navList.classList.contains('mobile-active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // ===== Submenu untuk Touch Devices =====
  const navItems = document.querySelectorAll('.nav-item');
  
  // Untuk perangkat touch, tambahkan class 'touch' ke body
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    document.body.classList.add('touch');
    
    // Toggle submenu saat item di-tap
    navItems.forEach(item => {
      if (item.querySelector('.submenu')) {
        const link = item.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
          if (window.innerWidth <= 992) { // Hanya di mobile
            e.preventDefault();
            const submenu = item.querySelector('.submenu');
            
            // Tutup semua submenu yang terbuka
            document.querySelectorAll('.submenu').forEach(menu => {
              if (menu !== submenu) {
                menu.style.display = 'none';
              }
            });
            
            // Toggle submenu saat ini
            if (submenu.style.display === 'block') {
              submenu.style.display = 'none';
            } else {
              submenu.style.display = 'block';
            }
          }
        });
      }
    });
  } else {
    document.body.classList.add('no-touch');
  }
  
  // Tutup menu mobile saat mengklik link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 992) {
        mobileToggle.classList.remove('active');
        navList.classList.remove('mobile-active');
        document.body.style.overflow = '';
      }
    });
  });
});
// Atur z-index untuk elemen yang bertumpuk
window.addEventListener('load', function() {
  const header = document.querySelector('.main-header');
  const heroLogo = document.querySelector('.hero-logo-container');
  const hero = document.querySelector('.hero');
  
  header.style.zIndex = '1000';
  heroLogo.style.zIndex = '900';
  hero.style.zIndex = '800';
  
  // Pastikan video hero dimulai
  const bgVideo = document.getElementById('bgVideo');
  bgVideo.play().catch(e => console.log('Autoplay prevented:', e));
});
