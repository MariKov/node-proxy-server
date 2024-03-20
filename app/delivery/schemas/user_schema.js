const joi = require('joi');

const userSchema = joi.object({
    userId: joi.string().uuid({ version: 'uuidv4' }).required(),
    userName: joi.string().required(),
    apiKey: joi.string().length(40).required()
});

module.exports = userSchema;