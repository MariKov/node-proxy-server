const getMarsRoverPhoto = require("../../use_cases/mars_rover/mars_rover_service");

async function handlePostForMarsRover(req, res, next) {
    try {
        const marsPhotoImageUrl = await getMarsRoverPhoto(req.body.apiKey);
        res.render('mars_rover/mars_rover_photo.njk', {marsPhotoImageUrl});
    } catch (error) {
        next(error)
    }
}

async function handleGetForMarsRover(req, res) {
    try {
        res.render('mars_rover/user_form.njk')
    } catch (error) {
        next(error)
    }
}

module.exports = {handleGetForMarsRover, handlePostForMarsRover};