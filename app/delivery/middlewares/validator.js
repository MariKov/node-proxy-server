const ErrorFactory = require("../../exceptions/error_factory");

const validateQueryParams = (schema) =>
    (req, res, next) => validate(schema, req.query, next);

const validateRequestBody = (schema) =>
    (req, res, next) => validate(schema, req.body, next);

function validate(schema, input, next){
    const {error} = schema.validate(input);
    if (error) {
        throw ErrorFactory.createValidationError(error.message);
    }
    next();
}

module.exports = { validateQueryParams, validateRequestBody};