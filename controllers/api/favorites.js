const Favorite = require('../../models/favorite')

module.exports = {
    create,
    index,
    remove
}

async function create(req, res) {
    try {
        const favorite = await Favorite.create(req.body)
        console.log(favorite)
        res.json(favorite)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function index(req, res) {
    try {
        console.log('look in here')
        console.log('req params userId is here in controllers')
        console.log(req.params.userId)
        req.body.userId = req.params.userId
        //look up docs, filter
        const favorites = await Favorite.find({ userId: req.body.userId })
        res.status(200).json(favorites)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function remove(req, res) {
    try {
        req.body.userId = req.params.userId
        const favorites = await Favorite.findOneAndDelete({ id: req.body.userId })
        res.status(200).json(favorites)
    } catch (err) {
        res.status(400).json(err)
    }
}


