const user = require('../model/User')
var qs = require('querystring');

const index = (req, res, next) => {
    
    user.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}


const show = (req, res, next) => {
    let un = req.body.username
    let pw = req.body.password
    user.find({username: un, password: pw})
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

const validateUser = (req, res, next) => {
    let un = req.body.username
    let pw = req.body.password
    console.log(un)
    console.log(pw)
    user.find({username: un, password: pw})
    .then(response => {
        console.log(response[0].username)
        if((un == response[0].username)&&(pw == response[0].password)){
            res.json({
                validity: true
            })
        }
        else{
            res.json({
                validity: false
            })
        }
    })
    .catch(error => {
        res.json({
            message: 'false'
        })
    })
}


const store = (req, res, next) => {
    console.log(req.body.username)
    let newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,      
    })

    newUser.save()
    .then( response => {
        res.json({
            message: 'user added succesfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}


const update = (req, res, next)=> {
    let userId = req.body.userId

    let updatedData = {
        username: res.body.username,
        email: res.body.email,
        password: res.body.password,
        phone: res.body.phone, 
    }

    user.findByIdAndUpdate(userId, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'user updated succesfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

    const destroy = (req, res, next) => {
        let userId = req.body.userId

        user.findByIdAndRemove(userId)
        .then(() => {
            res.json({
                message: 'user deleted succesfully'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error occured'
            })
        })
        
    }

    module.exports = {
        index, show, store, update, destroy, validateUser
    }