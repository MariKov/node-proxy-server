const getMeteors = require("../../use_cases/meteors/meteors_service");
const {isDate, formatDate, formatBoolean, formatNumber} = require("../../utils/formatters");

async function handleGetMeteors(req, res) {
    try {
        const start_date = isDate(req.query.start) ? formatDate(req.query.start) : formatDate(new Date());
        const end_date = isDate(req.query.end) ? formatDate(req.query.end) : undefined;

        const is_dangerous = formatBoolean(req.query['were-dangerous-meteors']);
        const count = formatNumber(req.query.count);

        const meteors = await getMeteors(start_date, end_date, is_dangerous, count);
        res.render('meteors_view.njk', {meteors});
    } catch (error) {
        res.status(500).send("Ups, something went wrong: " + error.message);
    }
}

module.exports = handleGetMeteors;