const getMeteors = require("../../use_cases/meteors_service");
const moment = require('moment');

async function handleGetMeteors(req, res) {
    try {
        const start_date = isDate(req.query.start) ? formatDate(req.query.start) : formatDate(new Date());
        const end_date = isDate(req.query.end) ? formatDate(req.query.end) : undefined;

        const meteors = await getMeteors(start_date, end_date);
        res.status(200).json(meteors);
    } catch (error) {
        res.status(500).send("Ups, something went wrong: " + error.message);
    }
}

function isDate(input_date){
    return input_date && moment(input_date).isValid();
}
function formatDate(input_date){
    return moment(input_date).format('YYYY-MM-DD');
}

module.exports = handleGetMeteors;