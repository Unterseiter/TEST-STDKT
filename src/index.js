import '../src/styles/main.scss';
import Inputmask from 'inputmask';

                //                                                                      HEADER
                
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

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const overlay = document.querySelector('.header__overlay');
    const siteWrapper = document.querySelector('.site-wrapper');
    
    let lastScrollPosition = window.pageYOffset;
    const scrollThreshold = 100;
  
    function updateHeaderStyles() {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition < 10) {
        header.classList.remove('header--scrolled');
      } else {
        header.classList.add('header--scrolled');
      }
      
      if (currentScrollPosition > lastScrollPosition && currentScrollPosition > scrollThreshold) {
        header.classList.add('header--hidden');
      } else if (currentScrollPosition < lastScrollPosition) {
        header.classList.remove('header--hidden');
      }
      
      lastScrollPosition = currentScrollPosition;
    }
  
    function toggleMenu() {
      burger.classList.toggle('header__burger--active');
      nav.classList.toggle('header__nav--active');
      overlay.classList.toggle('header__overlay--active');
      siteWrapper.classList.toggle('site-wrapper--dimmed');
      
      // Блокировка скролла
      document.body.style.overflow = nav.classList.contains('header__nav--active') ? 'hidden' : '';
    }
  
    function closeMenu() {
      burger.classList.remove('header__burger--active');
      nav.classList.remove('header__nav--active');
      overlay.classList.remove('header__overlay--active');
      siteWrapper.classList.remove('site-wrapper--dimmed');
      document.body.style.overflow = '';
    }
  
    // Инициализация
    updateHeaderStyles();
    
    // Назначение обработчиков
    burger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    window.addEventListener('scroll', updateHeaderStyles);
  
    // Закрытие при ресайзе
    window.addEventListener('resize', function() {
      if (window.innerWidth > parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mobile-breakpoint'))) {
        closeMenu();
      }
    });
  });



//                                                                                           HEAD

document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.section-head');
    const firstColumn = document.querySelector('.section-head__first-column');
    
    function updateFirstColumnPosition() {
      const sectionRect = section.getBoundingClientRect();
      const scrollProgress = -sectionRect.top / window.innerHeight;
      
      const moveDistance = Math.min(Math.max(scrollProgress * 650, 0), 400);
      
      firstColumn.style.transform = `translateY(${moveDistance}px)`;
    }
    
    window.addEventListener('scroll', updateFirstColumnPosition);
    updateFirstColumnPosition(); // Инициализация
  });