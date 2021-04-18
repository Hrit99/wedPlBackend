var qs = require('querystring');
const reloadc = require('./UseridController')
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
            reloadc.loadUserIds()
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


function updateItem(item, res, _id, name, mediaUrl, details){
    let itemId = _id

    let updatedData = {
        name: name,
        mediaUrl: mediaUrl,
        details: details,
    }

    item.findByIdAndUpdate(itemId, {$set: updatedData})
    .then(() => {
        reloadc.loadUserIds()
        res.json({
            updated: true
        })
    })
    .catch(error => {
        res.json({
            updated: false
        })
    })
}

function destroyItem(item, res, _id){
    let itemId = _id
    console.log(itemId)
    item.findByIdAndRemove(itemId)
    .then(() => {
        reloadc.loadUserIds()
        res.json({
            deleted: true
        })
    })
    .catch(error => {
        res.json({
            deleted: false
        })
    })
    
}


module.exports = {
    showItem, storeItem, updateItem, destroyItem
}