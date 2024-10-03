fetch('/api/tmdb/movie/popular')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the data here
    })
    .catch(error => console.error('Error:', error));
