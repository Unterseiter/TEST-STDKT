import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export function initPopularSlider() {
  const slider = document.querySelector('.sectionPopular__swiper');
  if (!slider) return;

  const swiper = new Swiper(slider, {
    modules: [Navigation, Autoplay],
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.sectionPopular__button--next',
      prevEl: '.sectionPopular__button--prev',
      disabledClass: 'sectionPopular__button--disabled'
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 15 },
      480: { slidesPerView: 1.5, spaceBetween: 20 },
      640: { slidesPerView: 2, spaceBetween: 25 },
      768: { slidesPerView: 2.5, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
      1280: { slidesPerView: 4.3, spaceBetween: 50 }
    },
    on: {
      init: updateNavigationButtons,
      slideChange: updateNavigationButtons,
      reachEnd: swiper => swiper.navigation.nextEl.classList.add('sectionPopular__button--disabled'),
      reachBeginning: swiper => swiper.navigation.prevEl.classList.add('sectionPopular__button--disabled')
    }
  });

  function updateNavigationButtons(swiper) {
    swiper.navigation.nextEl.classList.toggle('sectionPopular__button--disabled', swiper.isEnd);
    swiper.navigation.prevEl.classList.toggle('sectionPopular__button--disabled', swiper.isBeginning);
  }

  // Оптимизированные обработчики наведения
  const items = document.querySelectorAll('.sectionPopular__item');
  items.forEach(item => {
    const originalImg = item.querySelector('.sectionPopular__itemImage');
    const leftCopy = item.querySelector('.image-copy--left');
    const rightCopy = item.querySelector('.image-copy--right');

    item.addEventListener('mouseenter', () => {
      originalImg.style.transform = 'scale(1.02)';
      [leftCopy, rightCopy].forEach((el, i) => {
        el.style.opacity = '1';
        el.style.transform = `translateX(${i ? 20 : -20}px) rotate(${i ? 45 : -45}deg) scale(0.8)`;
      });
    });

    item.addEventListener('mouseleave', () => {
      originalImg.style.transform = 'scale(1)';
      [leftCopy, rightCopy].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(0) rotate(0)';
      });
    });
  });
}