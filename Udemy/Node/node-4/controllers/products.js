const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/add-product',
  
  });
}
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
     prods: products,
     pageTitle: 'Chopipan',
     path: '/',
     hasproducts: products.length > 0,
     productCSS: true,
     activeShop: true
    
  });
  })
}