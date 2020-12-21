const mongoose = require('mongoose')

const drinkSchema = mongoose.Schema({
    name: {type: String, required: true},
    img: String,
})

module.exports = mongoose.model('Drink', drinkSchema)