'use strict'
const userModel = require('./user')
module.exports = getAppiont

function getAppiont(req, res) {
    let email = req.query.email;
    userModel.find({email : email}, function (error, appointData) {
        if (error) { res.send(error, 'error') }
        else {
            
            res.send(appointData[0].appointments)
        }
    })
}