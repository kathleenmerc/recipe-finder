const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = new Schema({
    title: {type: String}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Favorite", favoriteSchema)