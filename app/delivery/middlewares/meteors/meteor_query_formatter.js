const {formatDate, formatBoolean} = require("../../../utils/formatters");

const formatDates = () => (req, res, next) => {
    req.query.start = formatDate(req.query.start);
    req.query.end = formatDate(req.query.end);
    req.query['were-dangerous-meteors'] = formatBoolean(req.query['were-dangerous-meteors']);
    next();
};

module.exports = formatDates;