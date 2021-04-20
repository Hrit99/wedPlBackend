const express = require('express')
const router = express.Router()

const adminController = require('../controller/AdminController')

router.get('/', adminController.index)
router.post('/validate', adminController.validateAdmin)
router.post('/show', adminController.show)
router.post('/store', adminController.store)
router.post('/update', adminController.update)
router.post('/delete', adminController.destroy)

module.exports = router