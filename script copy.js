const hero = document.querySelector('.hero');
const fadeStart = 0;
const fadeEnd = window.innerHeight * 0.7; // 50% of the window height, it can be also value in px
const fadeRange = fadeEnd - fadeStart;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= fadeStart) {
    hero.style.opacity = 1;
  } else if (currentScroll >= fadeEnd) {
    hero.style.opacity = 0;
  } else {
    const opacity = 1 - (currentScroll - fadeStart) / fadeRange;
    hero.style.opacity = opacity.toFixed(2);
  }
});
