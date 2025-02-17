// Update the API URL for Embed.su TV shows
const apiUrl = 'https://embed.su/list/tv.json'; // Replace with the actual Embed.su TV shows API endpoint

async function fetchTVShows() {
    try {
        const response = await fetch(apiUrl); // Fetch TV shows from the API
        const data = await response.json();
        displayTVShows(data); // Adjust based on the actual response structure from Embed.su
    } catch (error) {
        console.error('Error fetching TV shows:', error);
    }
}

function displayTVShows(tvShows) {
    const container = document.getElementById('tvshow-container');
    container.innerHTML = ''; // Clear previous content
    tvShows.forEach(show => {
        const showElement = document.createElement('div');
        showElement.innerHTML = `<h2>${show.title}</h2><p>${show.description}</p>`; // Adjust based on Embed.su response
        container.appendChild(showElement);
    });
}

// Call the fetchTVShows function to load TV shows on page load
fetchTVShows(); 