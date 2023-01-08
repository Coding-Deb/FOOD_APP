const express = require('express')
const SignInModel = require('../models/signinmodel')
const InputDataModel = require('../models/inputdata')

const Route = express.Router()

Route.post('/login', (req, res) => {
    const email = req.body.email
    SignInModel.findOne({ email }).then(user => {
        if (!user) {
            console.log("no user found");
        }
        else {
            console.log('Matched Successfully');
        }
    })
})

Route.post('/signin', (req, res) => {
    SignInModel.findOne({ email: req.body.email }).then(user => {
        if (user) {
            console.log('User Exists');
        } else {
            const signinUser = new SignInModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                cpassword: req.body.cpassword,
            })

            signinUser.save()
                .then(data => res.json(data))
                .catch(err => res.json(err))

        }
    })
})

Route.post('/inputdata', (req, res) => {
    const inputdata = new InputDataModel({
        name: req.body.name,
        type: req.body.type,
        itemType: req.body.itemType,
        price: req.body.price,
    })
    inputdata.save()
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

const getData = async (req,res)=>{
    try {
        const result = await InputDataModel.find()
        res.send(result)
    } catch (error) {
        console.log(err);
    }
} 

Route.get('/inputdataapi', getData)

module.exports = Route