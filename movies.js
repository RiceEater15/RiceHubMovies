// Update the API URL for Embed.su
const apiUrl = 'https://embed.su/list/movie.json'; // Replace with the actual Embed.su API endpoint

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl); // Adjusted to match Embed.su API
        const data = await response.json();
        displayMovies(data); // Adjust based on the actual response structure from Embed.su
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function displayMovies(movies) {
    const container = document.getElementById('movie-container');
    container.innerHTML = ''; // Clear previous content
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `<h2>${movie.title}</h2><p>${movie.description}</p>`; // Adjust based on Embed.su response
        container.appendChild(movieElement);
    });
}

// Call the fetchMovies function to load movies on page load
fetchMovies();
