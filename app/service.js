const axios = require('axios');

async function fetchAsteroids(startDate, endDate) {
    try {
        const url = appendAuth(`${process.env.URL}?start_date=${startDate}&end_date=${endDate}`)
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data: ', error);
        throw error;
    }
}

function appendAuth(url){
    return `${url}&api_key=${process.env.API_KEY}`
}


module.exports = fetchAsteroids;