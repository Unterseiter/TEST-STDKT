import '../src/styles/main.scss';
import Swiper from 'swiper';
import 'swiper/css';

class Carousel {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelector('.carousel__container');
        this.items = Array.from(container.querySelectorAll('.carousel-item'));
        this.currentIndex = 0;
        this.itemWidth = this.items[0].offsetWidth + 20; // включая gap

        this.initEvents();
    }

    initEvents() {
        this.container.querySelector('.carousel__button--prev')
            .addEventListener('click', () => this.move(-1));
        
        this.container.querySelector('.carousel__button--next')
            .addEventListener('click', () => this.move(1));
    }

    move(direction) {
        this.currentIndex = Math.max(
            0, 
            Math.min(this.currentIndex + direction, this.items.length - 3)
        );
        
        this.slides.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`;
    }
}

// Инициализация карусели
new Carousel(document.querySelector('.carousel'));