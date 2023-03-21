const header = document.querySelector('header');
const fadeStart = 0;
const fadeEnd = window.innerHeight * 0.7; // 70% of the window height
const fadeRange = fadeEnd - fadeStart;

function handleScroll() {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= fadeStart) {
    header.classList.remove('fade');
    header.style.opacity = 1;
    header.style.filter = 'blur(0)';
  } else if (currentScroll >= fadeEnd) {
    header.classList.add('fade');
  } else {
    const opacity = 1 - (currentScroll - fadeStart) / fadeRange;
    header.style.opacity = opacity.toFixed(2);
    const blur = 20 * (1 - opacity.toFixed(2));
    header.style.filter = `blur(${blur}px)`;
    header.classList.remove('fade');
  }
  requestAnimationFrame(handleScroll);
}

requestAnimationFrame(handleScroll);
