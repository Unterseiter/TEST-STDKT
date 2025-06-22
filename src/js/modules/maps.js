export function initMaps() {
  if (typeof ymaps === 'undefined') {
    console.error('Yandex Maps API не загружен!');
    return;
  }

  ymaps.ready(() => {
    const coordinates = [44.611245, 40.108364];

    const map = new ymaps.Map('yandex-map', {
      center: coordinates,
      zoom: 16,
      controls: ['zoomControl', 'fullscreenControl']
    });

    const marker = new ymaps.Placemark(coordinates, {
      balloonContent: 'г. Майкоп, ул. Транспортная, 5',
      hintContent: 'Нажмите для подробностей'
    }, {
      preset: 'islands#redIcon',
      iconColor: '#e74c3c'
    });

    map.geoObjects.add(marker);
    marker.balloon.open();
  });
}