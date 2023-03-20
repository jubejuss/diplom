const heroBanner = document.querySelector('.hero-banner');

window.addEventListener('scroll', function () {
  const scrollPosition = window.pageYOffset;
  heroBanner.style.opacity = 1 - scrollPosition / heroBanner.offsetHeight;
});
