const wsUri = "wss://ws.ifelse.io";
const chatOutput = document.querySelector(".chat-messages-task05");
const input = document.querySelector(".input-task05");
const sendBtn = document.querySelector(".button-send-task05");
    
let socket = new WebSocket(wsUri);
        
socket.onmessage = (event) => {
    writeToChat(event.data, true);
}

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
}
    
function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
}

const locationBtn = document.querySelector('.button-location-task05');

const error = () => {
    let messageHTML = `<div class="location">Невозможно получить ваше местоположение</div>`;
    chatOutput.innerHTML += messageHTML;
}

const sucess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    let messageHTML = `<div class="location">Широта: ${latitude}, Долгота: ${longitude}<br>
    <a href= "https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">
    Ваше положение на карте</a></div>`;
    chatOutput.innerHTML += messageHTML;
}

locationBtn.addEventListener ('click', () => {
    if (!navigator.geolocation) {       // Проверка поддерживает ли браузер пользователя геолокацию
        let messageHTML = `<div class="location">Ваш браузер не поддерживает геолокацию</div>`;
        chatOutput.innerHTML += messageHTML;
    }   else  {
        navigator.geolocation.getCurrentPosition(sucess, error);
    }
})