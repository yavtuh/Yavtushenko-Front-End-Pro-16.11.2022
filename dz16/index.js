const result = document.querySelector('#result');
const button = document.querySelector('.api');
const url = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

button.addEventListener('click', function (e) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return response.json().then(error => {
                result.innerHTML = error
                throw error
            })
        })
        .then((response) => {
            result.innerHTML = `Місто:  ${response.name} </br> `+
                `Температура:  ${response.main.temp}  </br> `+
                `Тиск:  ${response.main.pressure} </br> `+
                `Опис:  ${response.weather[0].description} </br> `+
                `Вологість:  ${response.main.humidity} </br> `+
                `Швидкість вітру:  ${response.wind.speed} </br> `+
                `Напрям у градусах:  ${response.wind.deg} </br> `+
                `Іконка: <img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"></br>`;
        })
})
