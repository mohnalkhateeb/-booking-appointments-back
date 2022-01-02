'use strict'
const mongoose = require("mongoose");
const AppointSchema = new mongoose.Schema({
            buyername:String,
            buyeremail: String,
            date: String,
            time : String,
            aproval : false
});

const userSchema = new mongoose.Schema({
    email: String,
    name : String,
    role : String,
    appointments : [AppointSchema]
})

// This creates our model from the above schema, using mongoose's model method
const userModel = mongoose.model('user', userSchema);

// Export the Article model
module.exports = userModel;