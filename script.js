// // Get Api
// const url = 'https://open-weather13.p.rapidapi.com';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '8bf6ed7b44msh01e68ae90efda05p1bb526jsn55a396da0415',
//         'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
//     }
// };

// // Responses to different results
// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             throw new Error('Network response was not found');
//         }
//         const result = await response.json();

//         // Link data to html page

//         document.getElementById('city').textContent = result.city;
//         document.getElementById('state').textContent = result.state;
//         document.getElementById('temperature').textContent = result.temperature;
//         document.getElementById('condition').textContent = result.condition;

//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Fetch data when page loads up
// fetchData();

// // Fetch data whn search button is clicked

// document.getElementById('search-btn').addEventListener('click', function () {
//     const citySearch = document.getElementById('search-input').value.trim();
//     if (citySearch === "") {
//         alert('Please enter a city');
//     } else {
//         const newUrl = `https://open-weather13.p.rapidapi.com/city/${citySearch}/EN`;
//         fetchData(newUrl);
//     }
// })

// async function fetchUpdatedData(newUrl) {
//     try {
//         const response = await fetch(newUrl, options);
//         if (!response.ok) {
//             throw new Error('Network response was not found');
//         }
//         result = await response.json();

//         document.getElementById('city').textContent = result.city;
//         document.getElementById('state').textContent = result.state;
//         document.getElementById('temperature').textContent = result.temperature;
//         document.getElementById('condition').textContent = result.condition;

//     } catch (error) {
//         console.error('There was an issue finding the weather data', error);
//     }
// }