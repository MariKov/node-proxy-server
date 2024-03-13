require('dotenv').config();
const express = require('express');
const fetchAsteroids = require('./controller')

const app = express();

app.get('/hi', async (req, res) => {
    try {
        const startDate = req.query.start??"2000-12-20";
        const endDate = req.query.end??"2000-12-20";
        const asteroids = await fetchAsteroids(startDate, endDate);
        res.json(asteroids);
    } catch (error) {
        res.status(500);
        res.send("Error fetching responce from NASA");
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
