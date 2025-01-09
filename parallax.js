window.addEventListener('scroll', function() {
  const parallaxBackground = document.querySelector('.parallax-background');
  const scrollPosition = window.pageYOffset;

  // Adjust background position based on scroll
  parallaxBackground.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
