const express = require('express');
const getMeteors = require("../use_cases/meteors_service");
const router = express.Router();

router.get('/meteors', async (req, res) => {
    try {
        const default_date = "2000-01-01";
        const start_date = req.query.start ?? default_date;
        const end_date = req.query.end ?? start_date;

        const meteors = await getMeteors(start_date, end_date);
        res.status(200).json(meteors);
    } catch (error) {
        res.status(500).send("Ups, something went wrong: " + error.message);
    }
});

module.exports = router;