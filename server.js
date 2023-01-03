// REQUIRE MODULES:
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const morgan = require ('morgan')
//const bodyParser = require('body-parser')

// REQUIRE AND CONFIG DOTENV:
require('dotenv').config()

// CONNECT TO DATABASE:
require('./config/database')

const app = express()

// MIDDLEWARE:
app.use(morgan('dev'))
app.use(express.json())
//app.use(bodyParser.json())

// MOUNT MIDDLEWARE:
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))
//app.use(require('./config/checkToken'))

// MOUNT API ROUTES:
app.use('/api/favorites', require('./routes/api/favorites'))


// CATCH ALL ROUTE:
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


// CONNECT TO PORT:
const PORT = process.env.PORT || 3001

app.listen(PORT, function () {
    console.log(`Express app is running on port ${PORT}`)
})
