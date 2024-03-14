require('dotenv').config();
const express = require('express');
const fetchAsteroids = require('../service')

const app = express();

app.get('/meteors', async (req, res) => {
    try {
        const startDate = req.query.start??"2000-12-20";
        const endDate = req.query.end??startDate;
        const asteroids = await fetchAsteroids(startDate, endDate);
        res.status(200).json(asteroids);
    } catch (error) {
        res.status(500).send("Error fetching responce from NASA");
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
