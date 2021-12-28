'use strict'
const express = require('express');

const cors = require('cors');

const axios = require('axios');
const mongoose = require('mongoose')
require('dotenv').config();
const server = express();

server.use(cors());
const PORT = 3003
server.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/appoint', { useNewUrlParser: true, useUnifiedTopology: true });
const userModel = require('./module/user')
const getAllSellers = require('./module/allsellers')
const getAppiont = require('./module/getAppiont')
const addAppoint = require('./module/addAppoint')
const deleteAppoint = require('./module/deleteAppoint')
const updateAppoint = require('./module/updateAppoint')
server.get('/', handelOK)
server.get('/allsellers',getAllSellers)
server.get('/getAppiont',getAppiont)
server.post('/addappoint',addAppoint)
server.delete('/deleteappoint/:Id', deleteAppoint)
server.put('/updateAppoint/:Id', updateAppoint)
function seedUserCollection() {
    const Mohammad = new userModel({
        email: 'mhmmd.alkateeb@gmail.com', name : 'Mohammad', appointments: [{
            buyername: 'Noor',
            buyeremail: 'talents@iwishsystems.com',
            date: '31/12/2021',
            time : '1:00 PM',
            aproval : false
        }]
    });

    const Noor = new userModel({
        email: 'talents@iwishsystems.com', name : 'Noor', appointments: [{
            buyername: 'Mohammad',
            buyeremail: 'mhmmd.alkateeb@gmail.com',
            date: '31/12/2021',
            time : '1:00 PM',
            aproval : false
        }]
    });

    Mohammad.save()
    Noor.save()
}

// seedUserCollection();
function handelOK(req, res) {
    res.send('OK')
}
server.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})