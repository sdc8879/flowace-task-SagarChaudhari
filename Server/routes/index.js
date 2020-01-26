
const express = require('express');
const router = express.Router();
var dbconnect = require('../db');
const controller = require('../services/controller');



router.post('/login',controller.login);
router.get('/listitems',controller.listItems);
router.get('/productlist',controller.getProductList);
router.get('/confirmOrder',controller.confirmOrder);
router.post('/executequery',controller.executequery);

module.exports = router;