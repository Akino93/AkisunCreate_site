const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#main-nav');

if (navToggle && nav) {
  const mobileNav = window.matchMedia('(max-width: 900px)');
  const isOpen = () => navToggle.getAttribute('aria-expanded') === 'true';

  const syncToggleLabel = () => {
    navToggle.setAttribute('aria-label', isOpen() ? 'メニューを閉じる' : 'メニューを開く');
  };

  const closeNav = ({ restoreFocus = false } = {}) => {
    navToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    syncToggleLabel();

    if (restoreFocus && mobileNav.matches) {
      navToggle.focus();
    }
  };

  const openNav = () => {
    navToggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('is-open');
    syncToggleLabel();
  };

  syncToggleLabel();

  navToggle.addEventListener('click', () => {
    if (isOpen()) {
      closeNav();
    } else {
      openNav();
    }
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeNav());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen() && mobileNav.matches) {
      event.preventDefault();
      closeNav({ restoreFocus: true });
    }
  });

  document.addEventListener('pointerdown', (event) => {
    if (!isOpen() || !mobileNav.matches) return;
    if (nav.contains(event.target) || navToggle.contains(event.target)) return;
    closeNav();
  });

  mobileNav.addEventListener('change', (event) => {
    if (!event.matches) closeNav();
  });
}
