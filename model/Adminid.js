const mongoose = require('mongoose')
const schema = mongoose.Schema 

const adminIdSchema = new schema({
    adminId: {
        type: String
    },
}, {timestamps:true, collection: "adminId"})

const adminId = mongoose.model('adminId', adminIdSchema)
module.exports = adminId