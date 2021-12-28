'use strict'
const userModel = require('./user')
module.exports = updateColor

function updateColor(req, res) {
    let { email, title, imageUrl, dateCreated } = req.body
    // let email = req.query.email
    let index = Number(req.params.Id)
    userModel.findOne({ email: email }, function (error, colorData) {
        if (error) { res.send(error, 'error') }
        else {
            colorData.color.splice(index,1,{
                title: title,
                imageUrl: imageUrl,
                dateCreated: dateCreated
            })

            colorData.save()
            res.send(colorData.color)
        }
    })
}