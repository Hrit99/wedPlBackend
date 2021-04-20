const mongoose = require('mongoose')
const schema = mongoose.Schema 

const adminSchema = new schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    }, 
}, {timestamps:true})


const admin = mongoose.model('admin', adminSchema)
module.exports = admin