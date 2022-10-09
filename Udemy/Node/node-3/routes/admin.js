const path = require('path')
const express = require('express')



const rootDir = require('../util/path')

const Router = express.Router()

const products = []

Router.get('/add-product', (req, res, next) => {
  //primero se escribe esta alternativa para bloquear la ruta '/' ya que es el default
// ---------------PUG----------------------------
// res.render('add-product',
  //   {
  //     docTitle: "Add ProProduct",
  //     path: '/add-product',
  //   })


// ---------------handlebars----------------------------
  // res.render('add-product',
  //   {
  //     docTitle: "Add ProProduct",
  //     path: '/add-product',
  //     productCSS: true,
  //     formsCSS: true,
  //     activeproduct: true
  //   })

// ---------------EJS----------------------------

  res.render('add-product',
    {
      docTitle: "Add ProProduct",
      path: '/add-product',e
    })
})
Router.post('/add-product', (req, res, next) => {
  products.push({title:req.body.title})
  res.redirect('/')
})


exports.routes = Router;
exports.products = products;

