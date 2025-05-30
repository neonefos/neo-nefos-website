document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navList.classList.toggle('active');
  });
  
  // Header Scroll Effect
  const header = document.querySelector('.main-header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
      document.querySelector('.header-logo').style.height = '30px';
    } else {
      header.classList.remove('scrolled');
      document.querySelector('.header-logo').style.height = '40px';
    }
  });
  
  // Video Fallback
  const heroVideo = document.querySelector('.hero-video');
  heroVideo.play().catch(e => {
    console.log('Autoplay prevented, showing fallback');
    heroVideo.poster = 'assets/image/hero/fallback.webp';
  });
});
