const getMarsRoverPhoto = require("../../use_cases/mars_rover/mars_rover_service");

async function handlePostForMarsRover(req, res) {
    try {
        const userId = req.body.userId;
        const userName = req.body.userName;
        const apiKey = req.body.apiKey;

        console.log(userId, userName);

        const marsPhotoImage = await getMarsRoverPhoto(apiKey);
        marsPhotoImage.data.pipe(res);
    } catch (error) {
        res.status(500).send("Ups, something went wrong: " + error.message);
    }
}

module.exports = handlePostForMarsRover;