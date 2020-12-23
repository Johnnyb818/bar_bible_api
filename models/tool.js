const mongoose = require('mongoose')

const toolSchema = mongoose.Schema({
    name: {type: String, required: true},
    img: String,
    url: String,
    price: String,
    description: String,
})

module.exports = mongoose.model('Tool', toolSchema)