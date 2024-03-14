const mapAsteroids = require("./meteors_mapper");
const fetchAsteroids = require("../repository/nasa_api")

async function getMeteors(startDate, endDate) {
    try {
        const asteroids = await fetchAsteroids(startDate, endDate);
        return mapAsteroids(asteroids);
    } catch (error) {
        console.error('Ups, something went wrong: ', error);
        throw error;
    }
}

module.exports = getMeteors;