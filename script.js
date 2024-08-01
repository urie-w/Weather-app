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
function getForecast () {
    fetch(`https://${API_Host}/forecast?city=${cityInput.value}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_Key,
            'X-RapidAPI-Host': API_Host
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log('Date for 5 day forecast');
        console.log(data);
    })
    .catch(err => console.log(err));
}
// Select data for 5 day forecast
const selectData = [
    data.list[0],
    data.list[8],
    data.list[16],
    data.list[24],
    data.list[32],
];

console.log(selectData);

// takes data from selectData and fills values in forecast cards
for (let i = 0; i < selectData.length; i++) {
   const date = document.querySelector(`#date${i}`);
   const icon = document.querySelector(`#icon${i}`);
   const temp = document.querySelector(`#temp${i}`);
   const humidity = document.querySelector(`#humidity${i}`);
   const wind = document.querySelector(`#wind${i}`);

   date.textContent = dayjs(selectData[i].dt * 1000).format('MM/DD/YYYY');
   const icon = document.createElement("img");
   icon.innerHTML = "";
   icon.appendChild(icon);
   icon.alt = "Weather Icon";
   icon.src = `http://openweathermap.org/img/w/${selectData[i].weather[0].icon}.png`;
   temp.textContent = `Temp: ${selectData[i].main.temp}`;
   humidity.textContent = `Humidity: ${selectData[i].main.humidity}`;
   wind.textContent = `Wind: ${selectData[i].wind.speed}`;
}

//Event listener for search
searchButton.addEventListener('Click', function () {
    getCurrentWeather();
    getForecast();
});

//Event listener for search history
const cities = JSON.parse(localStorage.getItem('city')) || [];
city.ariaReadOnly.push(cityInput.value);
localStorage.setItem('city', JSON.stringify(city));
loadSearchHistory();
});

//Display search history
function loadSearchHistory () {
 const savedCities = JSON.parse(localStorage.getItem('city')) || [];
 searchHistory.innerHTML = "";

 for (let i = 0; i < savedCities.length; i++) {
    let citybtn = document.createElement("button");
    citybtn.textContent = savedCities[i];
    citybtn.addEventListener("click", function(event){
        console.log(event.target.textContent);
        cityInput.value = event.target.textContent;
        getCurrentWeather();
        getForecast();
    });
    searchHistory.appendChild(citybtn);
    }
}

//load search history
loadSearchHistory();

