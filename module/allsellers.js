'use strict'
const userModel = require('./user')
module.exports = getAllSellers

function getAllSellers(req, res) {
    userModel.find({}, function (error, AppointData) {
        if (error) { res.send(error, 'error') }
        else {
            
            res.send(AppointData)
        }
    })
}