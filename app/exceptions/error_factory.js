const BaseError = require('./base_error');

class ErrorFactory {
    static createValidationError(message) {
        return new BaseError( "Invalid input: " + message, 400);
    }

    static createNasaApiError(error) {
        return new BaseError("NASA API error: " + error.message, error.code);
    }

    static createUnexpectedError(message) {
        return new BaseError("Ups, something went wrong: " + message, 500);
    }
}

module.exports = ErrorFactory;