const express = require('express')
const { signup, login, orders, contact, orderfind } = require('../controller/user.controller')


const router = express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/order',orders)
router.post('/contact',contact)
router.get('/orderfind',orderfind)


module.exports = {router}