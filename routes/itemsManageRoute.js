const express = require('express')
const router = express.Router()
const imgur = require('imgur');

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
    imgur
  .uploadFile(req.body.path)
  .then((json) => {
    itemsController.storeItem(itemModel(req),res, req.body.name, json.link, req.body.details)
  })
  .catch((err) => {
    console.error(err.message);
  });
    
})

router.post('/updateItem', (req, res) => {
    console.log(req.body.category)
    console.log(req.body.subcategory)
    imgur
    .uploadFile(req.body.path)
    .then((json) => {
      itemsController.updateItem(itemModel(req),res, req.body._id, req.body.name, json.link, req.body.details)
    })
    .catch((err) => {
      console.error(err.message);
    });
   
})

router.post('/deleteItem', (req, res) => {
    console.log(req.body.category)
    console.log(req.body.subcategory)
    itemsController.destroyItem(itemModel(req),res, req.body._id)
})

module.exports = {
    router: router,
}