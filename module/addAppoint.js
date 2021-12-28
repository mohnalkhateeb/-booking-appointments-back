'use strict'
const userModel = require('./user')
module.exports = addappoint

function addappoint(req, res) {
    let { email, name, buyername , buyeremail, date , approval } = req.body
    userModel.find({ email: email }, function (error, appointData) {
        if (error) { res.send(error, 'error') }
        else {
            appointData[0].appointments.push({
                buyername: buyername,
                buyeremail: buyeremail,
                date: date,
                approval : approval
            })

            appointData[0].save()
            res.send(appointData[0].appointments)
        }
    })
}