const express = require('express')
const shopController = require('../controllers/shop')
const Router = express.Router()

Router.get('/', shopController.getIndex)
Router.get('/products', shopController.getProducts)
Router.get('/products/:productId', shopController.getIDProducts)
Router.get('/cart', shopController.getCart)
Router.get('/orders', shopController.getOrders)
Router.get('/checkout', shopController.getCheckout)
Router.post('/checkout', shopController.postCheckout)
Router.post('/cart', shopController.postCart)
Router.post('/cart-delete-item',shopController.postDeleteCartItem)

module.exports = Router 
