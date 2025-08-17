const express = require('express')
const { signup, login, orders, contact } = require('../controller/user.controller')


const router = express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/order',orders)
router.post('/contact',contact)


module.exports = {router}