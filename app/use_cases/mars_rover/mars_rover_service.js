const {fetchMarsRoverPhotos} = require("../../repository/nasa_api")

async function getMarsRoverPhoto(apiKey) {
    try {
        const marsPhotos = await fetchMarsRoverPhotos(apiKey);
        return marsPhotos.photos[0].img_src;
    } catch (error) {
        console.error('Ups, something went wrong: ', error);
        throw error;
    }
}

module.exports = getMarsRoverPhoto;