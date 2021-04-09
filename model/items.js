const mongoose = require('mongoose')
const schema = mongoose.Schema



var getItemConnect = function(inpreq){
const selecteddb = mongoose.createConnection(`mongodb+srv://hritik:hritikpassword@cluster0.ibo9z.mongodb.net/${inpreq.body.category}?retryWrites=true&w=majority`, {useNewUrlParser:true, useUnifiedTopology:true})
const itemSchema = new schema({
    name: {
        type: String
    },
    mediaUrl: {
        type: String,
    },
    details: {
        type: String,
    }
}, {timestamps:true, collection: inpreq.body.subcategory})
 const item = selecteddb.model(inpreq.body.subcategory, itemSchema)
 return item
};

module.exports = {
    item: getItemConnect,
}

