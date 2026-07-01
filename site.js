// Shared behaviour across every NM Gaming page
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link based on current file name
  const current = location.pathname.split('/').pop() || 'home.html';
  document.querySelectorAll('.nm-navbar .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });

  // Collapse mobile navbar after a link is tapped
  const navCollapse = document.querySelector('.navbar-collapse');
  if (navCollapse) {
    navCollapse.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      });
    });
  }

  // Fade-up reveal on scroll for elements marked .reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('fade-up');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }
});
