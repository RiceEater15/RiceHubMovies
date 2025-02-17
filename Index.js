const apiUrl = 'https://embed.su/list/movie.json'; // Replace with the actual Embed.su API endpoint

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl); 
        const data = await response.json();
        displayMovies(data); 
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function displayMovies(movies) {
    const container = document.getElementById('movie-container');
    container.innerHTML = ''; 
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `<h2>${movie.title}</h2><p>${movie.description}</p>`; // Adjust based on Embed.su response
        container.appendChild(movieElement);
    });
}

fetchMovies();
