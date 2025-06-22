export function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const burger = header.querySelector('.header__burger');
  const nav = header.querySelector('.header__nav');
  const overlay = header.querySelector('.header__overlay');
  const siteWrapper = document.querySelector('.site-wrapper');

  let lastScrollPosition = window.pageYOffset;
  const scrollThreshold = 100;

  const updateHeaderStyles = () => {
    const currentScrollPosition = window.pageYOffset;

    header.classList.toggle('header--scrolled', currentScrollPosition >= 10);

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > scrollThreshold) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }

    lastScrollPosition = currentScrollPosition;
  };

  const toggleMenu = () => {
    const isActive = burger.classList.toggle('header__burger--active');
    nav.classList.toggle('header__nav--active', isActive);
    overlay.classList.toggle('header__overlay--active', isActive);
    siteWrapper.classList.toggle('site-wrapper--dimmed', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  };

  const closeMenu = () => {
    burger.classList.remove('header__burger--active');
    nav.classList.remove('header__nav--active');
    overlay.classList.remove('header__overlay--active');
    siteWrapper.classList.remove('site-wrapper--dimmed');
    document.body.style.overflow = '';
  };

  updateHeaderStyles();

  burger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);
  window.addEventListener('scroll', updateHeaderStyles);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });
}