const express = require('express')
const router = express.Router()
const favoritesController = require('../../controllers/api/favorites');

// POST /api/goals
router.post('/',  favoritesController.create);




module.exports = router;