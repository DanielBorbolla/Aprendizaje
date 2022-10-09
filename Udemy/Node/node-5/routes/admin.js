const express = require('express')
const Router = express.Router()
const adminController = require('../controllers/admin')

Router.get('/admin/add-product', adminController.getAddProduct)
Router.get('/admin/edit-product/:id', adminController.getEditProduct)
Router.get('/admin/products',adminController.getProducts)
Router.post('/admin/add-product', adminController.postAddProduct)
Router.post('/admin/edit-product', adminController.postEditProduct)
Router.post('/admin/delete-product', adminController.postDeleteProduct)

module.exports = Router 