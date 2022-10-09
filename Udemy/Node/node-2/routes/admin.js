const path = require('path')

const express = require('express')
const rootDir = require('../util/path')

const Router = express.Router()

Router.get('/add-product', (req, res, next) => {
  //primero se escribe esta alternativa para bloquear la ruta '/' ya que es el default
  res.sendFile(path.join(rootDir,'Views','add-product.html'))
})
Router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})


module.exports = Router 

