import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function initRecipesSlider() {
  const slider = document.querySelector('.sectionRecipe__swiper');
  if (!slider) return;

  const swiper = new Swiper(slider, {
    modules: [Navigation],
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 20,
    navigation: {
      nextEl: '.sectionRecipe__button--next',
      prevEl: '.sectionRecipe__button--prev',
      disabledClass: 'sectionRecipe__button--disabled'
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

  // Обработка кнопок категорий
  const categoryButtons = document.querySelectorAll('.sectionRecipe__category');
  categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
}