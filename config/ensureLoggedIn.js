// MIDDLEWARE TO ENSURE USER IS LOGGED IN FOR SPECIFIC REQUESTS/ROUTES:

module.exports = function (req, res, next) {
    if (!req.user) return res.status(401).json('Unable to access. Please log in.')
    next()
} 