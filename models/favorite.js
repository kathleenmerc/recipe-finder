const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = new Schema({
    title: {type: String},
    image: {type: String},
    id: {type: Number},
    spoonacularSourceUrl: {type: String}
    },
    {
        timestamps: true
    }
)

const Favorite = mongoose.model("Favorite", favoriteSchema)
module.exports = Favorite