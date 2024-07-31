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
    fetch(`https://rapidapi.com/worldapi/api/open-weather13/playground/apiendpoint_d15cd885-e8e5-49e7-b94b-588c41687aa1`);
}