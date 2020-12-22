const mongoose = require('mongoose')

const syrupSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    description2: String,
    description3: String,
})

module.exports = mongoose.model('Syrup', syrupSchema)