import Lenis from '@studio-freight/lenis';

export function initLenis() {
  const lenis = new Lenis({ smooth: true });
  const noSmoothScrollBlock = document.querySelector('.sectionMap');

  if (noSmoothScrollBlock) {
    noSmoothScrollBlock.addEventListener('mouseenter', () => lenis.stop());
    noSmoothScrollBlock.addEventListener('mouseleave', () => lenis.start());
  }

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}