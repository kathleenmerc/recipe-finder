const Favorite = require('../../models/favorite')

module.exports = {
    create,
    index,
    remove,
    edit
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
        //console.log('req params userId is here in controllers')
        //console.log(req.params.userId)
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
        const favorites = await Favorite.findOneAndDelete({ id: req.params.id })
        res.status(200).json(favorites)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function edit(req, res) {
    try {
        console.log('i am in the edit controller')
        console.log(req.body)
        // req.body.cooked = req.body.cooked === "on" ? true : false
        // req.body.userId = req.params.userId
        const updatedFavorite = await Favorite.findOneAndUpdate(req.body.userId, req.body);
        res.status(200).json(updatedFavorite)
    } catch (err) {
        console.log('edit controller is not working')
        res.status(400).send({ msg: err.message })
    }
};

