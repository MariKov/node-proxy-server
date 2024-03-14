const axios = require('axios');

async function fetchAsteroids(startDate, endDate) {
    try {
        const response = await axios.get(process.env.URL, {
            params: {
                start_date: startDate,
                end_date: endDate,
                api_key: process.env.API_KEY,
            }});
        return response.data;
    } catch (error) {
        console.error('Error fetching response from NASA: ', error);
        throw error;
    }
}

module.exports = fetchAsteroids;