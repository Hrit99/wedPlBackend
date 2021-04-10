const express = require('express')
const router = express.Router()

const itemsController = require('../controller/itemsController')
var itemModel = require('../model/items').item
router.post('/', (req, res) => {
    console.log(req.body.category)
    console.log(req.body.subcategory)
    itemsController.showItem(itemModel(req), res)
}
)

router.post('/storeItem', (req, res) => {
    console.log(req.body.category)
    console.log(req.body.subcategory)
    itemsController.storeItem(itemModel(req),res, req.body.name, req.body.mediaUrl, req.body.details)
})

router.post('/updateItem', (req, res) => {
    console.log(req.body.category)
    console.log(req.body.subcategory)
    itemsController.updateItem(itemModel(req),res, req.body._id, req.body.name, req.body.mediaUrl, req.body.details)
})

router.post('/deleteItem', (req, res) => {
    console.log(req.body.category)
    console.log(req.body.subcategory)
    itemsController.destroyItem(itemModel(req),res, req.body._id)
})

module.exports = {
    router: router,
}