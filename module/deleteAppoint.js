'use strict'
const userModel = require('./user')
module.exports = deleteappoint

function deleteappoint(req, res) {
    let email = req.query.email
    let index = Number(req.params.Id)
    userModel.find({ email: email }, function (error, appointData) {
        if (error) { res.send(error, 'error') }
        else {
            let deletAppointArr = appointData[0].appointements.filter((appoint,idx)=>{
                if(index != idx) return appoint
            })
            appointData[0].appointements = deletAppointArr
            appointData[0].save()
            res.send(appointData[0].appointements)
        }
    })
}