'use strict'
const userModel = require('./user')
module.exports = deleteAppoint

function deleteAppoint(req, res) {
    console.log(req.params)
    console.log(req.query)
    console.log(req.params.bookId)
    let email = req.query.email
    let index = Number(req.params.Id)
    userModel.find({ email: email }, function (error, appointData) {
        if (error) { res.send(error, 'error') }
        else {
            let deletAppointArr = appointData[0].appointments.filter((appoint,idx)=>{
                if(index != idx) return appoint
            })
            appointData[0].appointments = deletAppointArr
            appointData[0].save()
            res.send(appointData[0].appointments)
        }
    })
}