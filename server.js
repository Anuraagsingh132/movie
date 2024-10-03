const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();

app.use(cors());

const TMDB_API_KEY = process.env.TMDB_API_KEY; // Load from environment variable
const TMDB_API_URL = 'https://api.themoviedb.org/3';

app.get('/api/tmdb/*', (req, res) => {
    const endpoint = req.params[0];
    const url = `${TMDB_API_URL}/${endpoint}?api_key=${TMDB_API_KEY}&${new URLSearchParams(req.query).toString()}`;

    request(url, (error, response, body) => {
        if (error) {
            return res.status(500).json({ error: 'Failed to fetch data from TMDB' });
        }
        res.json(JSON.parse(body));
    });
});

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
