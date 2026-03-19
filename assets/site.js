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
