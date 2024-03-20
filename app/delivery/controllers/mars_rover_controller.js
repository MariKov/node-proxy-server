const getMarsRoverPhoto = require("../../use_cases/mars_rover/mars_rover_service");

async function handlePostForMarsRover(req, res) {
    try {
        console.log(req.body.userId, req.body.userName);

        const marsPhotoImageUrl = await getMarsRoverPhoto(req.body.apiKey);
        res.render('mars_rover/mars_rover_photo.njk', {marsPhotoImageUrl});
    } catch (error) {
        res.status(500).send("Ups, something went wrong: " + error.message);
    }
}

async function handleGetForMarsRover(req, res) {
    try {
        res.render('mars_rover/user_form.njk')
    } catch (error) {
        res.status(500).send("Ups, something went wrong: " + error.message);
    }
}

module.exports = {handleGetForMarsRover, handlePostForMarsRover};