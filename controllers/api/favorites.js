const Favorite = require('../../models/favorite')

module.exports = {
    create,
    index,
    remove
}

async function create(req, res) {
    try {
        console.log('REQ.BODY = ' + req.body)
        const favorite = await Favorite.create(req.body)
        console.log('controller is working')

        console.log(favorite)
        res.json(favorite)
    } catch (err) {
        console.log('error is in controller')
        res.status(400).json(err)
        
    }
}

async function index(req, res) {
    try {
        const favorites = await Favorite.find({})
        res.status(200).json(favorites)
    } catch (err) {
        console.log('error is in controller')
        res.status(400).json(err)
    }
}

async function remove(req, res) {
    try {
        const favorites = await Favorite.findOneAndDelete({id: req.params.id})
        res.status(200).json(favorites)
    } catch (err) {
        console.log('error is in controller')
        res.status(400).json(err)
    }
}


