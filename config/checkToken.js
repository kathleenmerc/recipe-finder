const jwt = require('jsonwebtoken')


module.exports = function (req, res, next) {
    // Retrieve the token from the Authorization header from the HTTP request:
    // Or retrive the token from where it is being sent a query string parameter:
    let token = req.get('Authorization') || req.query.token

    // If there is a token, then remove 'Bearer' so only the token is in the header:
    if (token) {
        token = token.replace('Bearer ', '')

        // Use the verify method to check if the token is valid and has not expired:
        jwt.verify(token, process.env.SECRET, function (err, decoded) {

            // Set req.user to null if there is an error, else req.user is decoded:
            req.user = err ? null : decoded.user

            // Set req.exp to null if there is an error, else req.exp is the date:
            req.exp = err ? null : new Date(decoded.exp * 1000)

            // Middleware continues to next function:
            return next()
        })
    } else {
        // If no token was sent in the request, req.user is null:
        req.user = null
        return next()
    }
}