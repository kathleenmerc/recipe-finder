const Favorite = require('../../models/favorite')

module.exports = {
    create,
    index,
    remove,
    edit
}

async function create(req, res) {
    try {
        // console.log(req.body.userId)
        const favorite = await Favorite.create(req.body)
        console.log(favorite)
        res.json(favorite)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function index(req, res) {
    try {
        // Filter index by finding only favorites with the same current user._id:
        const favorites = await Favorite.find({ userId: req.user._id })
        res.status(200).json(favorites)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function remove(req, res) {
    try {
        // Filter by finding spoonacular id:
        console.log('PARAMS ID HERE')
        console.log(req.params.id)
        const favorites = await Favorite.findByIdAndDelete(req.params.id)
        res.status(200).json(favorites)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function edit(req, res) {
    try {
        console.log("BODY HERE")
        console.log(req.body)
        console.log('PARAMS HERE')
        console.log(req.params)
        
        // Filter by finding specific object._id:
        const updatedFavorite = await Favorite.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        res.status(200).json(updatedFavorite)
    } catch (err) {
        res.status(400).send({ msg: err.message })
    }
};

