'use strict'
const userModel = require('./user')
module.exports = updateAppoint
function updateAppoint(req, res) {
    let { email, buyername, buyeremail, date,time, aproval } = req.body
    // let email = req.query.email
    let index = Number(req.params.Id)
    userModel.findOne({ email: email }, function (error, appointData) {
        if (error) { res.send(error, 'error') }
        else {

            appointData.appointments.splice(index, 1, {
                buyername: buyername,
                buyeremail: buyeremail,
                date: date,
                time : time,
                aproval: aproval
            })

            appointData.save()
            res.send(appointData.appointments)
        }
    })
}