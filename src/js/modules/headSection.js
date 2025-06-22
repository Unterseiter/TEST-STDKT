export function initHeadSection() {
  const section = document.querySelector('.section-head');
  if (!section) return;

  const firstColumn = section.querySelector('.section-head__first-column');

  const updateFirstColumnPosition = () => {
    const sectionRect = section.getBoundingClientRect();
    const moveDistance = Math.min(Math.max(-sectionRect.top / window.innerHeight * 650, 0), 400);
    firstColumn.style.transform = `translateY(${moveDistance}px)`;
  };

  window.addEventListener('scroll', updateFirstColumnPosition);
  updateFirstColumnPosition();
}