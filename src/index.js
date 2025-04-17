import Inputmask from 'inputmask';
import '../src/styles/main.scss';
import Swiper from 'swiper';
import 'swiper/css';

const initPopularSwiper = () => {
    new Swiper('.sectionPopular__swiper', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        navigation: {
            nextEl: '.sectionPopular__button--next',
            prevEl: '.sectionPopular__button--prev',
            disabledClass: 'sectionPopular__button--disabled'
        },
        breakpoints: {
            640: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 30
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', initPopularSwiper);


const phoneInputs = document.querySelectorAll('.phone-mask');
const im = new Inputmask('+7 (999) 999-99-99');
im.mask(phoneInputs);

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const successMessage = form.querySelector('.success-message');
    successMessage.classList.add('visible');

    setTimeout(function() {
      successMessage.style.display = 'flex';
      form.reset();
      
      setTimeout(function() {
        successMessage.style.display = 'none';
        successMessage.classList.remove('visible');
      }, 3000);
    }, 500);
  });

  ymaps.ready(init);
    
    function init() {
        // Создание карты
        const map = new ymaps.Map('map', {
            center: [44.611245, 40.108364], // Координаты Майкопа
            zoom: 15,
            controls: ['zoomControl']
        });

        // Добавление маркера
        const marker = new ymaps.Placemark([44.611245, 40.108364], {
            hintContent: 'Молкомбинат Адыгейский',
            balloonContent: 'г. Майкоп, ул. Транспортная, 5'
        }, {
            preset: 'islands#redDotIcon'
        });

        map.geoObjects.add(marker);
    }

    // Ожидание полной загрузки API
document.addEventListener('DOMContentLoaded', () => {
    // Проверка наличия объекта ymaps
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(initMap);
    } else {
        console.error('Yandex Maps API не загружен!');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(initMap);
    } else {
        console.error('Yandex Maps API не загружен!');
    }
});

function initMap() {
    const coordinates = [44.611245, 40.108364];

    // Создаем карту
    const map = new ymaps.Map('yandex-map', {
        center: coordinates,
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl']
    });

    // Создаем маркер
    const marker = new ymaps.Placemark(coordinates, {
        balloonContent: 'г. Майкоп, ул. Транспортная, 5',
        hintContent: 'Нажмите для подробностей'
    }, {
        preset: 'islands#redIcon',
        iconColor: '#e74c3c'
    });

    // Добавляем маркер на карту
    map.geoObjects.add(marker);
    
    // Открываем балун автоматически
    marker.balloon.open();
}
