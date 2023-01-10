const express = require('express')
const router = express.Router()
const favoritesController = require('../../controllers/api/favorites');
//const bodyParser = require('body-parser')
//const jsonParser = bodyParser.json()
//const urlencodedParser = bodyParser.urlencoded({ extended: true })


// GET /api/favorites
router.get('/', favoritesController.index)

// POST /api/favorites/add
router.post('/add', favoritesController.create);

// DELETE /api/favorites/:id/delete
router.delete('/:id/delete', favoritesController.remove)

// PUT /api/favorites/:id/update
router.put('/:id/update', favoritesController.edit);


module.exports = router