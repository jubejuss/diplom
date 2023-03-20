window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrollPercentage =
    window.scrollY / (header.offsetHeight - window.innerHeight);
  header.style.opacity = 1 - scrollPercentage;
});
