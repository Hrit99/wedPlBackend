const mongoose = require('mongoose')
const schema = mongoose.Schema

const categorySchema = new schema({
    category: {
        type: String
    },
    subcategories: [{subcategory: String}]
}, {timestamps:true})

const category = mongoose.model('categories', categorySchema)
module.exports = category