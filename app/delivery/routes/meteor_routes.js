const express = require('express');
const handleGetMeteors = require("../controllers/meteor_controller");
const handlePostForMarsRover = require("../controllers/mars_rover_controller");
const router = express.Router();

router.get('/meteors', handleGetMeteors);
router.post('/marsPhoto', handlePostForMarsRover);

module.exports = router;