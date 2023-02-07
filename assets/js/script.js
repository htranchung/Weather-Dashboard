var buttonSearch = document.getElementById('search');
var city = document.getElementById('cityDisplay');
var temp = document.getElementById('temp');
var windSpeed = document.getElementById('wind');
var humidity = document.getElementById('humidity');
var temp2 = document.getElementById('temp2');
var windSpeed2 = document.getElementById('wind2');
var humidity2 = document.getElementById('humidity2');
var temp3 = document.getElementById('temp3');
var windSpeed3 = document.getElementById('wind3');
var humidity3 = document.getElementById('humidity3');
var temp4 = document.getElementById('temp4');
var windSpeed4 = document.getElementById('wind4');
var humidity4 = document.getElementById('humidity4');
var temp5 = document.getElementById('temp5');
var windSpeed5 = document.getElementById('wind5');
var humidity5 = document.getElementById('humidity5');
var date = document.getElementById('date');
var date2 = document.getElementById('date2');
var date3 = document.getElementById('date3');
var date4 = document.getElementById('date4');
var date5 = document.getElementById('date5');

var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
var requestedUrl2 = "&units=imperial&appid=c5935e4ad5a1b68a18a6b42b8d1e71ea";


buttonSearch.addEventListener("click", function (event) {
    event.preventDefault();
    var inputCityName = document.getElementById('cityName').value;
    fetch(requestUrl + inputCityName + requestedUrl2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        city.textContent = data.city.name;
        date.textContent = data.list[2].dt_txt
        temp.textContent = data.list[2].main.temp + '°F';
        windSpeed.textContent = data.list[2].wind.speed + ' MPH';
        humidity.textContent = data.list[2].main.humidity + ' %';
        document.getElementById('icon').src ="http://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + '.png';

        date2.textContent = data.list[10].dt_txt
        temp2.textContent = data.list[10].main.temp + '°F';
        windSpeed2.textContent = data.list[10].wind.speed + ' MPH';
        humidity2.textContent = data.list[10].main.humidity + ' %';
        document.getElementById('icon2').src ="http://openweathermap.org/img/wn/" + data.list[10].weather[0].icon + '.png';

        date3.textContent = data.list[18].dt_txt
        temp3.textContent = data.list[18].main.temp + '°F';
        windSpeed3.textContent = data.list[18].wind.speed + ' MPH';
        humidity3.textContent = data.list[18].main.humidity + ' %';
        document.getElementById('icon3').src ="http://openweathermap.org/img/wn/" + data.list[18].weather[0].icon + '.png';

        date4.textContent = data.list[26].dt_txt
        temp4.textContent = data.list[26].main.temp + '°F';
        windSpeed4.textContent = data.list[26].wind.speed + ' MPH';
        humidity4.textContent = data.list[26].main.humidity + ' %';
        document.getElementById('icon4').src ="http://openweathermap.org/img/wn/" + data.list[26].weather[0].icon + '.png';

        date5.textContent = data.list[34].dt_txt
        temp5.textContent = data.list[34].main.temp + '°F';
        windSpeed5.textContent = data.list[34].wind.speed + ' MPH';
        humidity5.textContent = data.list[34].main.humidity + ' %';
        document.getElementById('icon5').src ="http://openweathermap.org/img/wn/" + data.list[34].weather[0].icon + '.png';
    })
    document.getElementById('searchForm').reset();
})

