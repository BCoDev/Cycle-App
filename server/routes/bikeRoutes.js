const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Bike = mongoose.model('bikes')

module.exports = app => {
    app.post('api/bikes', requireLogin, (req, res) => {
        const { id, brand, model } = req.body

        const bike = new Bike({
            id, 
            brand, 
            model
        })
    })
}