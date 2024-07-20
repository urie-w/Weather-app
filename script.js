// Get Api
const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8bf6ed7b44msh01e68ae90efda05p1bb526jsn55a396da0415',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

// Responses to different results
async function fetchData() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not found');
        }
        const result = await response.json();

// Link data to html page

        document.getElementById('city').textContent = result.city;
        document.getElementById('state').textContent = result.state;
        document.getElementById('temperature').textContent = result.temperature;
        document.getElementById('condition').textContent = result.condition;

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}