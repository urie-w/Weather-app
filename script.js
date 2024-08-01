const searchButoon = document.querySelector("button");
const cityInput = document.querySelector("#city");
const WeatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temperature");
const weatherInfo = document.querySelector("#weather-info");
const hourlyWeather = document.querySelector("#hourly-weather");
const forecast = document.querySelector("#forecast");
const searchHistory = document.querySelector("#search-history");
const API_Key = "8bf6ed7b44msh01e68ae90efda05p1bb526jsn55a396da0415";
const API_Host = "worldapi.p.rapidapi.com";

//elements for current weather
const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const firstIcon = document.querySelector("#first-icon");
const date = document.querySelector("#date");

//Get weather data from API
function getCurrentWeather () {
    fetch(`https://${API_Host}/open-weather13?city=${cityInput.value}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_Key,
            'X-RapidAPI-Host': API_Host
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));
    city.textContent = data.name;
    temp.textContent = `Temp: ${data.main.temp}`;
    wind.textContent = `Wind: ${data.wind.speed}`;
    humidity.textContent = `Humidity: ${data.main.humidity}`;
    data.textContent = dayjs(data.dt * 1000).format('MM/DD/YYYY');
    const icon = document.createElement("img");
    firstIcon.innerHTML = "";
    firstIcon.appendChild(icon);
    icon.alt = "Weather Icon";
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
};

//Function to get forecast data from api
