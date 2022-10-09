const express = require('express')
const Router = express.Router()
const productsController = require('../controllers/products')

Router.get('/add-product', productsController.getAddProduct)
Router.post('/add-product', productsController.postAddProduct)

module.exports = Router 
