const mongoose = require('mongoose')

const InputDataSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    itemType: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('InputData', InputDataSchema)