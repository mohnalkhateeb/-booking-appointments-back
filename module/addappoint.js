'use strict'
const userModel = require('./user')
module.exports = addAppoint

function addAppoint(req, res) {
    let { email, buyername , buyeremail, date, time, aproval } = req.body
    console.log(req.body);
    userModel.find({ email: email }, function (error, appointData) {
        if (error) { res.send(error, 'error') }
        else {
            appointData[0].appointments.push({
                buyername: buyername,
                buyeremail: buyeremail,
                date: date,
                time :time,
                aproval : aproval
            })

            appointData[0].save()
            res.send(appointData[0].appointments)
        }
    })
}