const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#main-nav');

if (navToggle && nav) {
  const closeNav = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
}
