const mongoose = require('mongoose')
const schema = mongoose.Schema 

const userSchema = new schema({
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

const user = mongoose.model('user', userSchema)
module.exports = user