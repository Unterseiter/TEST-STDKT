import '../src/styles/main.scss';
import Swiper from 'swiper';
import 'swiper/css';

const initPopularSwiper = () => {
    new Swiper('.sectionPopular__swiper', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: false,
        navigation: {
            nextEl: '.sectionPopular__button--next',
            prevEl: '.sectionPopular__button--prev',
            disabledClass: 'sectionPopular__button--disabled'
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', initPopularSwiper);