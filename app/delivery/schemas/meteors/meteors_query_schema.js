const joi = require('joi');
const {isDate} = require("../../../utils/formatters");

const dateValidation = () => {
    return joi.string()
        .custom((value, helpers) =>
            (isDate(value)) ? value : helpers.error(value + " is not a date"))
        .message("The date in YYYY-MM-DD format is expected")
};

const userSchema = joi.object({
    start: dateValidation().default(new Date()),
    end: dateValidation(),
    count: joi.number().integer().min(1),
    'were-dangerous-meteors': joi.boolean()
});

module.exports = userSchema;