const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    create,
    login,
    checkToken
}

// ADD NEW USER TO DATABASE AND CREATE JWT TOKEN:
async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        res.status(400).json(err)
    }
}

// LOG IN USER:
async function login(req, res) {
    try {
        // Find the user by finding username in database:
        const user = await User.findOne({ username: req.body.username })

        // If user does not exist, then throw error:
        if (!user) throw new Error("Username does not exist")

        // Comparing the inputted password to the hashed password in the database:
        const match = await bcrypt.compare(req.body.password, user.password)

        // If the passwords do not match, then throw error:
        if (!match) throw new Error("Passwords do not match")

        // If the username and password match, then create a new token:
        res.json(createJWT(user))

    } catch (err) {
        res.status(400).json(err)
    }
}


function checkToken(req, res) {
    console.log('req.user', req.user)
    console.log('req.exp', req.exp)
    res.json(req.exp)
}


// HELPER FUNCTIONS:

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24hr' }
    )
}