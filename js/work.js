document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.work-section');
  let lastScrollPosition = window.scrollY;
  let currentActive = null;

  // Click handling
  sections.forEach(section => {
    section.querySelector('.section-header').addEventListener('click', () => {
      section.classList.toggle('active');
    });
  });

  // Scroll handling
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const viewportMiddle = scrollPosition + window.innerHeight / 2;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionMiddle = rect.top + scrollPosition + rect.height / 2;

      if (Math.abs(viewportMiddle - sectionMiddle) < 100) {
        if (currentActive && currentActive !== section && !currentActive.classList.contains('clicked')) {
          currentActive.classList.remove('active');
        }
        section.classList.add('active');
        currentActive = section;
      } else if (!section.classList.contains('clicked')) {
        section.classList.remove('active');
      }
    });

    lastScrollPosition = scrollPosition;
  }

  window.addEventListener('scroll', handleScroll);
});
