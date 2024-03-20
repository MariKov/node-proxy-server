const express = require('express');
const handleGetMeteors = require("../controllers/meteor_controller");
const handlePostForMarsRover = require("../controllers/mars_rover_controller");
const userSchema = require("../schemas/user_schema");
const meteorsQuerySchema = require("../schemas/meteors_query_schema");
const {validateQueryParams, validateRequestBody} = require("../middlewares/validator")
const formatDates = require("../middlewares/meteor_query_formatter")
const router = express.Router();

router.get('/meteors', validateQueryParams(meteorsQuerySchema), formatDates(), handleGetMeteors);
router.post('/marsPhoto', validateRequestBody(userSchema), handlePostForMarsRover);

module.exports = router;