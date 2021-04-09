const express = require('express')
const router = express.Router()

const itemsController = require('../controller/itemsController')
var itemModel = require('../model/items').item
let category
let subcategory
router.post('/', (req, res) => {
    console.log(req.body.category)
    console.log(req.body.subcategory)
    category = req.body.category
    subcategory = req.body.subcategory
    itemsController.showItem(itemModel(req), res)
}
)

router.post('/storeItem', (req, res) => {
    console.log(req.body.category)
    console.log(req.body.subcategory)
    category = req.body.category
    subcategory = req.body.subcategory
    inpreq = req
    itemsController.storeItem(itemModel(req),res, req.body.name, req.body.mediaUrl, req.body.details)
})

module.exports = {
    router: router,
}