const axios = require('axios');
const config = require('config');

async function fetchAsteroids(startDate, endDate) {
    try {
        const response = await axios.get(config.get('nasaClient.url'), {
            params: {
                start_date: startDate,
                end_date: endDate,
                api_key: config.get('nasaClient.apiKey'),
            }});
        return response.data;
    } catch (error) {
        console.error('Error fetching response from NASA: ', error);
        throw error;
    }
}

module.exports = fetchAsteroids;