const moment = require("moment");

function isDate(input_date) {
    return input_date && moment(input_date).isValid();
}

function formatDate(input_date) {
    return moment(input_date).format('YYYY-MM-DD');
}

function formatBoolean(input) {
    return typeof input === "boolean"
        ? input
        : input === "true"
            ? true
            : input === "false" ?
                false
                : undefined;
}

function formatNumber(input) {
    const number = Number(input);
    return Number.isFinite(number) ? number : undefined;
}

module.exports = {isDate, formatDate, formatBoolean, formatNumber};