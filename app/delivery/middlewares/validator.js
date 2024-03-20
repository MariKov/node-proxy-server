const validateQueryParams = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.query);
    if (error) {
        res.status(400).json({error: error.details[0].message});
    } else {
        next();
    }
};

const validateRequestBody = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.body);
    if (error) {
        res.status(400).json({error: error.details[0].message});
    } else {
        next();
    }
};

module.exports = { validateQueryParams, validateRequestBody};