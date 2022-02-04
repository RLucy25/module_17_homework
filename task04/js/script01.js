const btn = document.querySelector('.btn-answer');
const answer = document.querySelector('.answer');

btn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

    fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${lat}&long=${lng}`) //фетч работает на промисах
    .then((response) => {               
        const result = response.json();   
        return result;
    })
        .then ((data) => {
            function displayResult(data) {
                const dispresult = `
                <p>Ваша временная зона: ${data.timezone}</p>
                <p>Ваша дата и время: ${data.date_time_txt}</p>
                `
                answer.innerHTML = dispresult;
            }
            displayResult(data);
        });
        
    });
});