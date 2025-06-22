// import '../src/styles/main.scss';
// import Inputmask from 'inputmask';
// import Swiper from 'swiper';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
// import Lenis from '@studio-freight/lenis';

// const lenis = new Lenis({ smooth: true });

// // Элемент, где скролл должен быть обычным
// const noSmoothScrollBlock = document.querySelector('.sectionMap');

// // Отключаем Lenis при входе в блок
// noSmoothScrollBlock.addEventListener('mouseenter', () => {
//   lenis.stop();
// });

// // Включаем обратно при выходе
// noSmoothScrollBlock.addEventListener('mouseleave', () => {
//   lenis.start();
// });

// // Обязательный RAF-цикл
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

//                 //                                                                      HEADER
                
// const phoneInputs = document.querySelectorAll('.phone-mask');
// const im = new Inputmask('+7 (999) 999-99-99');
// im.mask(phoneInputs);

// document.querySelector('.contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const form = e.target;
//     const successMessage = form.querySelector('.success-message');
//     successMessage.classList.add('visible');

//     setTimeout(function() {
//       successMessage.style.display = 'flex';
//       form.reset();
      
//       setTimeout(function() {
//         successMessage.style.display = 'none';
//         successMessage.classList.remove('visible');
//       }, 3000);
//     }, 500);
//   });

//   ymaps.ready(init);
    
//     function init() {
//         // Создание карты
//         const map = new ymaps.Map('map', {
//             center: [44.611245, 40.108364], // Координаты Майкопа
//             zoom: 15,
//             controls: ['zoomControl']
//         });

//         // Добавление маркера
//         const marker = new ymaps.Placemark([44.611245, 40.108364], {
//             hintContent: 'Молкомбинат Адыгейский',
//             balloonContent: 'г. Майкоп, ул. Транспортная, 5'
//         }, {
//             preset: 'islands#redDotIcon'
//         });

//         map.geoObjects.add(marker);
//     }

//     // Ожидание полной загрузки API
// document.addEventListener('DOMContentLoaded', () => {
//     // Проверка наличия объекта ymaps
//     if (typeof ymaps !== 'undefined') {
//         ymaps.ready(initMap);
//     } else {
//         console.error('Yandex Maps API не загружен!');
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     if (typeof ymaps !== 'undefined') {
//         ymaps.ready(initMap);
//     } else {
//         console.error('Yandex Maps API не загружен!');
//     }
// });

// function initMap() {
//     const coordinates = [44.611245, 40.108364];

//     // Создаем карту
//     const map = new ymaps.Map('yandex-map', {
//         center: coordinates,
//         zoom: 16,
//         controls: ['zoomControl', 'fullscreenControl']
//     });

//     // Создаем маркер
//     const marker = new ymaps.Placemark(coordinates, {
//         balloonContent: 'г. Майкоп, ул. Транспортная, 5',
//         hintContent: 'Нажмите для подробностей'
//     }, {
//         preset: 'islands#redIcon',
//         iconColor: '#e74c3c'
//     });

//     // Добавляем маркер на карту
//     map.geoObjects.add(marker);
    
//     // Открываем балун автоматически
//     marker.balloon.open();
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const header = document.querySelector('.header');
//     const burger = document.querySelector('.header__burger');
//     const nav = document.querySelector('.header__nav');
//     const overlay = document.querySelector('.header__overlay');
//     const siteWrapper = document.querySelector('.site-wrapper');
    
//     let lastScrollPosition = window.pageYOffset;
//     const scrollThreshold = 100;
  
//     function updateHeaderStyles() {
//       const currentScrollPosition = window.pageYOffset;
      
//       if (currentScrollPosition < 10) {
//         header.classList.remove('header--scrolled');
//       } else {
//         header.classList.add('header--scrolled');
//       }
      
//       if (currentScrollPosition > lastScrollPosition && currentScrollPosition > scrollThreshold) {
//         header.classList.add('header--hidden');
//       } else if (currentScrollPosition < lastScrollPosition) {
//         header.classList.remove('header--hidden');
//       }
      
//       lastScrollPosition = currentScrollPosition;
//     }
  
//     function toggleMenu() {
//       burger.classList.toggle('header__burger--active');
//       nav.classList.toggle('header__nav--active');
//       overlay.classList.toggle('header__overlay--active');
//       siteWrapper.classList.toggle('site-wrapper--dimmed');
      
//       // Блокировка скролла
//       document.body.style.overflow = nav.classList.contains('header__nav--active') ? 'hidden' : '';
//     }
  
//     function closeMenu() {
//       burger.classList.remove('header__burger--active');
//       nav.classList.remove('header__nav--active');
//       overlay.classList.remove('header__overlay--active');
//       siteWrapper.classList.remove('site-wrapper--dimmed');
//       document.body.style.overflow = '';
//     }
  
//     // Инициализация
//     updateHeaderStyles();
    
//     // Назначение обработчиков
//     burger.addEventListener('click', toggleMenu);
//     overlay.addEventListener('click', closeMenu);
//     window.addEventListener('scroll', updateHeaderStyles);
  
//     // Закрытие при ресайзе
//     window.addEventListener('resize', function() {
//       if (window.innerWidth > parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mobile-breakpoint'))) {
//         closeMenu();
//       }
//     });
//   });



// //                                                                                           HEAD

// document.addEventListener('DOMContentLoaded', function() {
//     const section = document.querySelector('.section-head');
//     const firstColumn = document.querySelector('.section-head__first-column');
    
//     function updateFirstColumnPosition() {
//         const sectionRect = section.getBoundingClientRect();
//         const scrollProgress = -sectionRect.top / window.innerHeight;
        
//         const moveDistance = Math.min(Math.max(scrollProgress * 650, 0), 400);
        
//         firstColumn.style.transform = `translateY(${moveDistance}px)`;
//     }
    
//     window.addEventListener('scroll', updateFirstColumnPosition);
//     updateFirstColumnPosition(); // Инициализация
// });

// //                                                                                           POPULAR

// document.addEventListener('DOMContentLoaded', function() {
//   // Инициализация Swiper
//   const popularSwiper = new Swiper('.sectionPopular__swiper', {
//     modules: [Navigation, Autoplay],
//       loop: false,
//       slidesPerView: 'auto',
//       centeredSlides: true,
//       spaceBetween: 30,
//       navigation: {
//         nextEl: '.sectionPopular__button--next',
//         prevEl: '.sectionPopular__button--prev',
//         disabledClass: 'sectionPopular__button--disabled'
//       },
//       breakpoints: {
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 15
//         },
//         480: {
//           slidesPerView: 1.5,
//           spaceBetween: 20
//         },
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 25
//         },
//         768: {
//           slidesPerView: 2.5,
//           spaceBetween: 30
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 40
//         },
//         1280: {
//           slidesPerView: 4.3,
//           spaceBetween: 50
//         }
//       },
//       on: {
//         init: function() {
//           updateNavigationButtons(this);
//         },
//         slideChange: function() {
//           updateNavigationButtons(this);
//         },
//         reachEnd: function() {
//           this.navigation.nextEl.classList.add('sectionPopular__button--disabled');
//         },
//         reachBeginning: function() {
//           this.navigation.prevEl.classList.add('sectionPopular__button--disabled');
//         }
//       }
//     });
    
//     function updateNavigationButtons(swiper) {
//       swiper.navigation.nextEl.classList.toggle('sectionPopular__button--disabled', swiper.isEnd);
//       swiper.navigation.prevEl.classList.toggle('sectionPopular__button--disabled', swiper.isBeginning);
//     }
  
//     // Оптимизация анимации при наведении
//     const items = document.querySelectorAll('.sectionPopular__item');
//     items.forEach(item => {
//       const imageWrapper = item.querySelector('.image-wrapper');
//       const originalImg = item.querySelector('.sectionPopular__itemImage');
//       const leftCopy = item.querySelector('.image-copy--left');
//       const rightCopy = item.querySelector('.image-copy--right');
      
//       item.addEventListener('mouseenter', () => {
//         originalImg.style.transform = 'scale(1.02)';
//         leftCopy.style.opacity = '1';
//         leftCopy.style.transform = 'translateX(-20px) rotate(-45deg) scale(0.8)';
//         rightCopy.style.opacity = '1';
//         rightCopy.style.transform = 'translateX(20px) rotate(45deg) scale(0.8)';
//       });
      
//       item.addEventListener('mouseleave', () => {
//         originalImg.style.transform = 'scale(1)';
//         leftCopy.style.opacity = '0';
//         leftCopy.style.transform = 'translateX(0) rotate(0)';
//         rightCopy.style.opacity = '0';
//         rightCopy.style.transform = 'translateX(0) rotate(0)';
//       });
//     });
//   });
  
//   //                                                                                           HITS
  
//   document.addEventListener('DOMContentLoaded', function() {
//     const hitSwiper = new Swiper('.sectionHit__swiper', {
//       modules: [Navigation],
//       loop: false,
//       slidesPerView: 'auto',
//       centeredSlides: false,
//       spaceBetween: 20,
//       navigation: {
//         nextEl: '.sectionHit__button--next',
//         prevEl: '.sectionHit__button--prev',
//         disabledClass: 'sectionHit__button--disabled'
//       },
//       breakpoints: {
//         320: {
//           slidesPerView: 1.2,
//           spaceBetween: 15
//         },
//         480: {
//           slidesPerView: 1.5,
//           spaceBetween: 20
//         },
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 20
//         },
//         768: {
//           slidesPerView: 2.5,
//           spaceBetween: 25
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 30
//         },
//         1280: {
//           slidesPerView: 4,
//           spaceBetween: 40
//         }
//       }
//     });
  
//     // Анимация при наведении
//     const products = document.querySelectorAll('.sectionHit__product');
//     products.forEach(product => {
//       product.addEventListener('mouseenter', () => {
//         const gostImage = product.querySelector('.sectionHit__gost-image');
//         const bgCloud = product.querySelector('.sectionHit__bg-cloud');
//         const productImage = product.querySelector('.sectionHit__product-image');
        
//         gostImage.style.opacity = '1';
//         bgCloud.style.opacity = '1';
//         bgCloud.style.transform = 'scale(1.1)';
//         bgCloud.style.backgroundColor = 'rgba(118, 183, 42, 0.1)';
//         productImage.style.transform = 'scale(1.05)';
//       });
      
//       product.addEventListener('mouseleave', () => {
//         const gostImage = product.querySelector('.sectionHit__gost-image');
//         const bgCloud = product.querySelector('.sectionHit__bg-cloud');
//         const productImage = product.querySelector('.sectionHit__product-image');
        
//         gostImage.style.opacity = '0';
//         bgCloud.style.opacity = '0';
//         bgCloud.style.transform = 'scale(1)';
//         bgCloud.style.backgroundColor = 'transparent';
//         productImage.style.transform = 'scale(1)';
//       });
//     });
//   });

//   //                                                                                           RECIPES

//   document.addEventListener('DOMContentLoaded', function() {
//     // Инициализация Swiper
//     const recipeSwiper = new Swiper('.sectionRecipe__swiper', {
//       modules: [Navigation],
//       loop: false,
//       slidesPerView: 'auto',
//       centeredSlides: false,
//       spaceBetween: 20,
//       navigation: {
//         nextEl: '.sectionRecipe__button--next',
//         prevEl: '.sectionRecipe__button--prev',
//         disabledClass: 'sectionRecipe__button--disabled'
//       },
//       breakpoints: {
//         320: {
//           slidesPerView: 1.2,
//           spaceBetween: 15
//         },
//         480: {
//           slidesPerView: 1.5,
//           spaceBetween: 20
//         },
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 20
//         },
//         768: {
//           slidesPerView: 2.5,
//           spaceBetween: 25
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 30
//         },
//         1280: {
//           slidesPerView: 4,
//           spaceBetween: 40
//         }
//       }
//     });
  
//     // Обработка кнопок категорий
//     const categoryButtons = document.querySelectorAll('.sectionRecipe__category');
//     categoryButtons.forEach(button => {
//       button.addEventListener('click', function() {
//         // Удаляем активный класс у всех кнопок
//         categoryButtons.forEach(btn => btn.classList.remove('active'));
//         // Добавляем активный класс текущей кнопке
//         this.classList.add('active');
        
//         // Здесь можно добавить логику фильтрации, если нужно
//         // const category = this.dataset.category;
//         // filterRecipes(category);
//       });
//     });
//   });