const express = require('express')
const router = express.Router()

const userController = require('../controller/categoryController')

router.get('/', userController.getCategories)
router.post('/showCategry', userController.showCategory)
router.post('/storeCategory', userController.storeCategory)
router.post('/updateCategory', userController.updateCategory)
router.post('/deleteCategory', userController.destroyCategory)
router.post('/validateCategory', userController. validateCategory)


module.exports = router