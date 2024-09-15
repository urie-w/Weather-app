const searchButton = document.querySelector("button");
const cityInput = document.querySelector("#city");
const weatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temperature");
const weatherInfo = document.querySelector("#weather-info");
const hourlyWeather = document.querySelector("#hourly-weather");
const forecast = document.querySelector("#forecast");
const searchHistory = document.querySelector("#search-history");
const API_Key = "8bf6ed7b44msh01e68ae90efda05p1bb526jsn55a396da0415";
const API_Host = "open-weather13.p.rapidapi.com";

const apiKey = 'd61d7b0618ab7129bcdb918e68cf678f'

//elements for current weather
const city = document.querySelector("#city");
const temp = document.querySelector("#temperture");
//const tempTxt = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const firstIcon = document.querySelector("#first-icon");
const date = document.querySelector("#date");

//Get weather data from API
const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
    method: 'GET',
	headers: {
        'x-rapidapi-key': '8bf6ed7b44msh01e68ae90efda05p1bb526jsn55a396da0415',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};


function getCurrentWeather() {
    let cityName = city.value
    console.log("City Name:", cityName);
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(currentUrl) 
        .then(res => res.json())
        .then(data => {
            console.log('Current Weather Data:', data);
          
            city.textContent = data.name;
            temp.textContent = `Temp: ${data.main.temp}`;
          //  tempTxt.textContent = `Temp: ${data.main.temp}`;
         //   temp.innerHTML = `Temp: ${data.main.temp}`;
            wind.textContent = `Wind: ${data.wind.speed}`;
            humidity.textContent = `Humidity: ${data.main.humidity}`;
            data.textContent = dayjs(data.dt * 1000).format('MM/DD/YYYY');
            const icon = document.createElement("img");
            firstIcon.innerHTML = "";
            firstIcon.appendChild(icon);
            icon.alt = "Weather Icon";
            icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(err => console.log(err));
}


//Function to get forecast data from api
function getForecast() {
    let cityName = cityInput.value.trim();
    const forecastUrl =`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

    fetch(forecastUrl)
    .then(res => res.json())
    .then(data => {
        console.log('Forecast Data:', data);
   
        // Select data for 5 day forecast
        const selectData = [
            data.list[0],
            data.list[8],
            data.list[16],
            data.list[24],
            data.list[32],
        ];

        // console.log('Select Data', selectData);

        // takes data from selectData and fills values in forecast cards
        for (let i = 0; i < selectData.length; i++) {
        const dateElem = document.querySelector(`#date${i}`);
        const iconElem = document.querySelector(`#icon${i}`);
        const tempElem = document.querySelector(`#temp${i}`);
        const humidityElem = document.querySelector(`#humidity${i}`);
        const windElem = document.querySelector(`#wind${i}`);

        //Update forecast date
        date.textContent = dayjs(selectData[i].dt * 1000).format('MM/DD/YYYY');

        //Update temp, wind, and humidity
        // const icon = document.createElement("img");
        // iconElem.innerHTML = "";
        // iconElem.appendChild(icon);
        // icon.alt = "Weather Icon";
        // icon.src = `http://openweathermap.org/img/w/${selectData[i].weather[0].icon}.png`;
        tempElem.textContent = `Temperature: ${selectData[i].main.temp}°F`;
        humidityElem.textContent = `Humidity: ${selectData[i].main.humidity}%`;
        windElem.textContent = `Wind: ${selectData[i].wind.speed}MPH`;
        }
    })
    .catch(err => console.log(err));
}

// Store and load search history
function saveCityHistory(cityName) {
    const cities = JSON.parse(localStorage.getItem('cities')) || [];

    // No duplicates
    if (!cities.includes(cityName)) {
        cities.push(cityName);
        localStorage.setItem('cities', JSON.stringify(cities));
        loadSearchHistory();
    }
}

// Load saved cities and make buttons
function loadSearchHistory() {
    const savedCities = JSON.parse(localStorage.getItem('cities')) || [];

    searchHistory.innerHTML = "";

// Creates buttons for each city
for (let i = 0; i < savedCities.length; i++) {
    let cityBtn = document.createElement("button");
    cityBtn.textContent = savedCities[i];
  cityBtn.classList.add("history-btn");

  //Add event listener to handle the click
  cityBtn.addEventListener("click", function(event) {
        cityInput.value = event.target.textContent;
        getCurrentWeather();
        getForecast();
    });

    searchHistory.appendChild(cityBtn);
}
}
//Event listener for search
searchButton.addEventListener('click', function () {
    const cityName = cityInput.value.trim();

    // Proceed if input isn't empty
    if (cityName) {
        saveCityHistory(cityName);
        getCurrentWeather();
        getForecast();
    }
});

// //Event listener for search history
// const cities = JSON.parse(localStorage.getItem('city')) || [];
// cities.push(cityInput.value);
// localStorage.setItem('city', JSON.stringify(cities));
// loadSearchHistory();

// //Display search history
// function loadSearchHistory () {
//  const savedCities = JSON.parse(localStorage.getItem('city')) || [];
//  searchHistory.innerHTML = "";

//  for (let i = 0; i < savedCities.length; i++) {
//     let cityBtn = document.createElement("button");
//     cityBtn.textContent = savedCities[i];
//     cityBtn.addEventListener("click", function(event) {
//         console.log(event.target.textContent);
//         cityInput.value = event.target.textContent;
//         getCurrentWeather();
//         getForecast();
//     });
//     searchHistory.appendChild(cityBtn);
//     }
// }

//load search history
loadSearchHistory();