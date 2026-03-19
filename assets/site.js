const toggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const mainHeader = document.querySelector('header');
const isHomePage = document.body.classList.contains('home-page');

if (mainHeader) {
  const updateHeaderState = () => {
    if (!isHomePage) {
      mainHeader.classList.add('scrolled');
      return;
    }

    mainHeader.classList.toggle('scrolled', window.scrollY > 32);
  };

  updateHeaderState();
  if (isHomePage) {
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }
}

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearEl = document.getElementById('currentYear');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const revealSelectors = [
  '.badge',
  '.section-title',
  '.section-sub',
  '.hero-cta',
  '.hero-panel',
  '.card',
  '.service-group',
  '.contact-row',
  '.timeline article',
  '.cta-band'
];

const revealElements = document.querySelectorAll(revealSelectors.join(','));
if (revealElements.length > 0) {
  revealElements.forEach((el, index) => {
    el.classList.add('reveal');
    const delay = Math.min((index % 8) * 70, 420);
    el.style.setProperty('--delay', `${delay}ms`);
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}
