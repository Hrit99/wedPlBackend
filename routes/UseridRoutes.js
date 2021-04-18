const express = require('express')
const router = express.Router()

const userIdController = require('../controller/UseridController')

router.get('/', userIdController.loadUserIds)
router.post('/reloadcheck', userIdController.reloadCheck)

module.exports = router