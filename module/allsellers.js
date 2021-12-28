'use strict'
const userModel = require('./user')
module.exports = allseller

function allseller(req, res) {
    userModel.find({}, function (error, appointData) {
        if (error) { res.send(error, 'error') }
        else {
            
            res.send(appointData)
        }
    })
}