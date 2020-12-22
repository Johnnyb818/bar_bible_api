const mongoose = require('mongoose')

const drinkSchema = mongoose.Schema({
    name: {type: String, required: true},
    img: String,
    spirit: String,
    mixer1: String,
    mixer2: String,
    mixer3: String,
    mixer4: String,
    mixer5: String,
    mixer6: String,
    mixer7: String,
    mixer8: String,
    mixer9: String,
    garnish: String,
    instructions: String,
})

module.exports = mongoose.model('Drink', drinkSchema)