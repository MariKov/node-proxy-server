const getMeteors = require("../../use_cases/meteors/meteors_service");

async function handleGetMeteors(req, res) {
    try {
        const meteors = await getMeteors(
            req.query.start, req.query.end,
            req.query['were-dangerous-meteors'], req.query.count);
        res.render('meteors/meteors_view.njk', {meteors});
    } catch (error) {
        res.status(500).send("Ups, something went wrong: " + error.message);
    }
}

module.exports = handleGetMeteors;