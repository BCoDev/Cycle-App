const mongoose = require('mongoose')
const { Schema } = mongoose

const bikeSchema = new Schema({
    brand: String, 
    model: String
})

mongoose.model('bike', bikeSchema)