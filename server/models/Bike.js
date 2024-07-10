const mongoose = require('mongoose')
const { Schema } = mongoose

const bikeSchema = new Schema({
    Id: String, 
    brand: String, 
    model: String
})

mongoose.model('bike', bikeSchema)