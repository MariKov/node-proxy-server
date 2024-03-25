const mapAsteroids = require("./meteors_transformer");
const {fetchAsteroids} = require("../../repository/nasa_api");
const ErrorFactory = require("../../exceptions/error_factory");

async function getMeteors(startDate, endDate, isDangerous, count) {
    try {
        const asteroids = await fetchAsteroids(startDate, endDate);
        return mapAsteroids(asteroids, filterPredicate(isDangerous), count);
    } catch (error) {
        throw ErrorFactory.createUnexpectedError(error.message);
    }
}

function filterPredicate(isDangerous){
    return meteor => isDangerous !== undefined
        ? meteor.is_potentially_hazardous_asteroid === isDangerous
        : true;
}

module.exports = getMeteors;