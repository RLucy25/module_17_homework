const button021 = document.getElementById('button021');
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');

button021.addEventListener('click', () => {

    answer1.innerHTML = `<p>Размеры данного экрана - ширина: ${document.documentElement.clientWidth}, высота: ${document.documentElement.clientHeight}.</p>`;
  
    const error = () => {
        answer2.innerHTML = 'Невозможно получить ваше местоположение';
      }
  
    if (!navigator.geolocation) {
        answer2.innerHTML = `<p>Ваш браузер не поддерживает геолокацию.</p>`;

    }   else  {
        function success(position) {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            answer2.innerHTML = `<p>Ваше местоположение - широта: ${lat}, долгота: ${lng}.<p>`;
        };
    }
    navigator.geolocation.getCurrentPosition(success, error);
});