const mongoose = require('mongoose')
const { Schema } = mongoose

const bikeSchema = new Schema({
    bikeId: String
})

mongoose.model('bikes', bikeSchema)