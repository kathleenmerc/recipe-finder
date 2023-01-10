const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6


const userSchema = new Schema({
    username: { type: String, unique: true, trim: true, required: true },
    password: { type: String, trim: true, minLength: 7, required: true },
},
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password
                return ret
            }
        }
    }
)


// PRE-SAVE HOOK (MIDDLEWARE FUNCTION):
userSchema.pre('save', async function (next) {

    // If the password is not modified, it does not need to be hashed again:
    // 'this' refers to the user document: 
    if (!this.isModified('password')) return next()

    // Update the password with the computed hash:
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})


module.exports = mongoose.model('User', userSchema)