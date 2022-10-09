const path = require('path')
const express = require('express')
const rootDir = require('../util/path')
const adminData = require('./admin')

const Router = express.Router()

Router.get('/', (req, res, next) => {
  // res.sendFile(path.join(rootDir,'Views','shop.html'))
// ---------------PUG----------------------------
  // en this.apply.js escribimos:

  // app.set('view engine', 'pug');

  // que define a pug como nuestro render por defecto y :

  // app.set('Views', 'views')
  // que define la carpeta de views para que la instrucción de render sepa donde buscar los archivos
  // como ya tenemos nuestro render definido como pug y la ruta no es necesario poner la extención.pug
  // ni la ruta del archivo a renderizar 
  const products = adminData.products;
  
  // res.render('shop', { prods: products, docTitle: 'Chopitas', path: '/'})

// ---------------handlebars----------------------------

  res.render('shop', {
    prods: products,
    docTitle: 'Chopitas',
    path: '/',
    hasproducts: products.length > 0,
    productCSS: true,
    activeShop: true
  })


})

module.exports = Router 
