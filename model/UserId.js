const mongoose = require('mongoose')
const schema = mongoose.Schema 

const userIdSchema = new schema({
    userId: {
        type: String
    },
}, {timestamps:true, collection: "userId"})

const userId = mongoose.model('userId', userIdSchema)
module.exports = userId