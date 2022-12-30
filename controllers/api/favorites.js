const Goal = require('../../models/favorite')

module.exports = {
    create
}

async function create(req, res) {
    try {

        const favorite = await Favorite.create(req.body)
        console.log('controller is working')

        console.log(favorite)
        res.json(favorite)
    } catch (err) {
        console.log('error is in controller')
        res.status(400).json(err)
        
    }
}


