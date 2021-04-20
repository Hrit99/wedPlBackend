const admin = require('../model/Admin')
var qs = require('querystring');
const { listenerCount } = require('cluster');

const index = (req, res, next) => {

    admin.find()
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



const validateAdmin = (req, res, next) => {
    let un = req.body.username
    let pw = req.body.password
    console.log(un)
    console.log(pw)
    admin.find({ username: un, password: pw })
        .then(response => {
            console.log(response[0].username)
            if ((un == response[0].username) && (pw == response[0].password)) {
                res.json({
                    validity: true
                })
            }
            else {
                res.json({
                    validity: false
                })
            }
        })
        .catch(error => {
            res.json({
                validity: false
            })
        })
}







module.exports = {
    index, validateAdmin
}