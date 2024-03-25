const moment = require("moment");

function isDate(input_date) {
    return input_date && moment(input_date).isValid();
}

function formatDate(input_date) {
    return input_date ? moment(input_date).format('YYYY-MM-DD') : input_date;
}

function formatBoolean(input) {
    return typeof input === "boolean" ? input : input === "true";
}

module.exports = {isDate, formatDate, formatBoolean};