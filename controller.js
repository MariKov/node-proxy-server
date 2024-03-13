const axios = require('axios');

async function fetchAsteroids(startDate, endDate) {
    try {
        const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.API_KEY}`
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data: ', error);
        throw error;
    }
}

module.exports = fetchAsteroids;