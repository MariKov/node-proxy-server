const {fetchMarsRoverPhotos} = require("../../repository/nasa_api")
const ErrorFactory = require("../../exceptions/error_factory");

async function getMarsRoverPhoto(apiKey) {
    try {
        const marsPhotos = await fetchMarsRoverPhotos(apiKey);
        return marsPhotos.photos[0].img_src;
    } catch (error) {
        throw ErrorFactory.createUnexpectedError(error.message);
    }
}

module.exports = getMarsRoverPhoto;