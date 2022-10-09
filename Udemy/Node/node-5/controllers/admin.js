const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    product: {}
  });
}
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(false,title,imageURL,description,price);
  product.save();
  res.redirect('/')
}
exports.postEditProduct = (req, res, next) => {
  const prodID = req.body.productID;
  console.log(prodID)
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(prodID,title,imageURL,description,price);
  product.save();
  res.redirect('/admin/products')

}
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit
  if (!editMode) {
   return res.redirect('/')
  }
  const prodID = req.params.id
  Product.fetchidproduct(prodID, (product) => {
    if (!product) {
      return res.redirect('/')
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/add-product',
      editing: editMode,
      product:product
  
    });
  })
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
    res.render('admin/products', {
     prods: products,
     pageTitle: 'Admin Products',
     path: '/admin/products'
  });
  })
}
exports.postDeleteProduct = (req, res, next) => {
  const prodID = req.body.productId
  Product.deleteProduct(prodID)
  res.redirect('/admin/products')

}