const express = require('express')
const router = express.Router()

const userController = require('../controller/AdminController')

router.get('/', userController.index)
router.post('/validate', userController.validateAdmin)

module.exports = router