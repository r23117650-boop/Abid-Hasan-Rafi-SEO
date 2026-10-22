(() => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const progress = document.getElementById('progress');
  const updateProgress = () => {
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // A blank email placeholder is intentionally not activated; add your email in index.html before launch.
  const emailLink = document.querySelector('.email-link');
  if (emailLink) emailLink.addEventListener('click', event => {
    if (!emailLink.getAttribute('href') || emailLink.getAttribute('href') === 'mailto:') {
      event.preventDefault();
      alert('Please add your email address to this link in index.html before publishing.');
    }
  });
})();
