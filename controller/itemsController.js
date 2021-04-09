var qs = require('querystring');

function showItem(item,res){
    var val
    
    item.find()
    .then(response => {
        res.json({
            response
        })
    }
    )
    .catch(
        error => {
            res.json({
                message: 'an error occured'
            })
        }
    )
    return val;
}

function storeItem(item,res,name, mediaUrl, details){
    console.log(name)
    console.log(mediaUrl)
    var val
    let newItem = new item({
        name: name,
       mediaUrl: mediaUrl,
       details: details, 
    })

    newItem.save()
    .then(
        response => {
            res.json({
            stored: true
            })
        }
    )
    .catch(
        error => {
            res.json({
                message: 'an error occured'
            })
        }
    )
}

module.exports = {
    showItem, storeItem
}