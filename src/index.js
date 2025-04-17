import '../src/styles/main.scss';
import Swiper from 'swiper';
import 'swiper/css';

const initPopularSwiper = () => {
    new Swiper('.sectionPopular__carousel', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: false,
        navigation: {
            nextEl: '.sectionPopular__carousel__nav--next',
            prevEl: '.sectionPopular__carousel__nav--prev',
            disabledClass: 'sectionPopular__carousel__nav--disabled'
        },
        breakpoints: {
            768: {
                spaceBetween: 30,
                slidesPerView: 2
            },
            1024: {
                spaceBetween: 40,
                slidesPerView: 3
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', initPopularSwiper);