
'use strict'
const userModel = require('./user')
module.exports = getAllAppoints

function getAllAppoints(req, res) {
    let email = req.query.email
    userModel.find({ email: email }, function (error, AppointData) {
    if (error) { res.send(error, 'error') }
    else {
        res.send(AppointData[0])
    }
})
   
}