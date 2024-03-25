const getMeteors = require("../../use_cases/meteors/meteors_service");

async function handleGetMeteors(req, res, next) {
    try {
        const meteors = await getMeteors(
            req.query.start, req.query.end,
            req.query['were-dangerous-meteors'], req.query.count);
        res.render('meteors/meteors_view.njk', {meteors});
    } catch (error) {
        next(error);
    }
}

module.exports = handleGetMeteors;