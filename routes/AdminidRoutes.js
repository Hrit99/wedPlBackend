const express = require('express')
const router = express.Router()

const AdminIdController = require('../controller/AdminidController')

router.get('/', AdminIdController.loadUserIds)
router.post('/reloadcheck', AdminIdController.reloadCheck)

module.exports = router