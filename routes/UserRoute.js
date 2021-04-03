const express = require('express')
const router = express.Router()

const userController = require('../controller/UserController')

router.get('/', userController.index)
router.post('/show', userController.show)
router.post('/store', userController.store)
router.post('/update', userController.update)
router.post('/delete', userController.destroy)


module.exports = router