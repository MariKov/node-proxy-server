function handleError (error, req, res, next) {
    res.status(error.statusCode).render("error.njk", {message: error.message});
}

module.exports = handleError;