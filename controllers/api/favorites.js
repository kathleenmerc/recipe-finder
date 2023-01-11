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
        // console.log("REQ.BODY HERE")
        // console.log(req.body.objectId)
        // console.log('REQ.PARAMS.ID HERE')
        // console.log(req.params.id) // prints object id

        // Filter by finding specific object._id:
        const favorites = await Favorite.findByIdAndDelete(req.params.id)
        res.status(200).json(favorites)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function edit(req, res) {
    try {
        // console.log("REQ.BODY HERE")
        // console.log(req.body)
        // console.log('REQ.PARAMS.ID HERE')
        // console.log(req.params.id) // prints spoonacular id
        
        // Filter by finding specific object._id:
        const updatedFavorite = await Favorite.findByIdAndUpdate(req.body.objectId, req.body, { new: true });
        res.status(200).json(updatedFavorite)
    } catch (err) {
        res.status(400).send({ msg: err.message })
    }
};

