const mapAsteroids = require("./meteors_transformer");
const {fetchAsteroids} = require("../../repository/nasa_api");

async function getMeteors(startDate, endDate, isDangerous, count) {
    try {
        const asteroids = await fetchAsteroids(startDate, endDate);
        return mapAsteroids(asteroids, filterPredicate(isDangerous), count);
    } catch (error) {
        console.error('Ups, something went wrong: ', error);
        throw error;
    }
}

function filterPredicate(isDangerous){
    return meteor => isDangerous !== undefined
        ? meteor.is_potentially_hazardous_asteroid === isDangerous
        : true;
}

module.exports = getMeteors;