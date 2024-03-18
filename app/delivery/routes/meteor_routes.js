const express = require('express');
const handleGetMeteors = require("../controllers/meteor_controller");
const router = express.Router();

router.get('/meteors', handleGetMeteors);

module.exports = router;