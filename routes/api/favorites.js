const express = require('express')
const router = express.Router()
const favoritesController = require('../../controllers/api/favorites');
//const bodyParser = require('body-parser')
//const jsonParser = bodyParser.json()
//const urlencodedParser = bodyParser.urlencoded({ extended: true })

// POST /api/favorites
router.post('/', favoritesController.create);

// GET .api/favorites
router.get('/', favoritesController.index)


module.exports = router