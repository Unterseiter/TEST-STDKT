import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function initHitsSlider() {
  const slider = document.querySelector('.sectionHit__swiper');
  if (!slider) return;

  const swiper = new Swiper(slider, {
    modules: [Navigation],
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 20,
    navigation: {
      nextEl: '.sectionHit__button--next',
      prevEl: '.sectionHit__button--prev',
      disabledClass: 'sectionHit__button--disabled'
    },
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 15 },
      480: { slidesPerView: 1.5, spaceBetween: 20 },
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 2.5, spaceBetween: 25 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 4, spaceBetween: 40 }
    }
  });

  // Упрощенные обработчики наведения
  document.querySelectorAll('.sectionHit__product').forEach(product => {
    product.addEventListener('mouseenter', () => {
      product.querySelector('.sectionHit__gost-image').style.opacity = '1';
      product.querySelector('.sectionHit__bg-cloud').style.cssText = 'opacity: 1; transform: scale(1.1); background-color: rgba(118, 183, 42, 0.1)';
      product.querySelector('.sectionHit__product-image').style.transform = 'scale(1.05)';
    });

    product.addEventListener('mouseleave', () => {
      product.querySelector('.sectionHit__gost-image').style.opacity = '0';
      product.querySelector('.sectionHit__bg-cloud').style.cssText = 'opacity: 0; transform: scale(1); background-color: transparent';
      product.querySelector('.sectionHit__product-image').style.transform = 'scale(1)';
    });
  });
}