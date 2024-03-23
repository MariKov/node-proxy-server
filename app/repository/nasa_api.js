const axios = require('axios');
const config = require('config');
const ErrorFactory = require("../exceptions/error_factory");

async function fetchAsteroids(startDate, endDate) {
    try {
        const url = config.get('nasaClient.baseUrl') + config.get('nasaClient.asteroidsPath');
        const response = await axios.get(url, {
            params: {
                start_date: startDate,
                end_date: endDate,
                api_key: config.get('nasaClient.apiKey')
            }});
        return response.data;
    } catch (error) {
        throw ErrorFactory.createNasaApiError(error);
    }
}

async function fetchMarsRoverPhotos(apiKey) {
    try {
        const url = config.get('nasaClient.baseUrl') + config.get('nasaClient.marsPhotosPath');
        const response = await axios.get(url, {
            params: {
                sol: 1000,
                api_key: apiKey
            }});
        return response.data;
    } catch (error) {
        throw ErrorFactory.createNasaApiError(error);
    }
}

module.exports = {fetchAsteroids, fetchMarsRoverPhotos};