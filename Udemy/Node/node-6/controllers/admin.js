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

  // const product = new Product(false,title,imageURL,description,price);
  // product
  //   .save()
  //   .then(() => { res.redirect('/')})
  //   .catch(err => console.log(err));
  req.user.createProduct({
    title: title,
    price: price,
    imageURL: imageURL,
    description: description
    // userUuid: req.user.uuid
  }).then(
    result => { res.redirect('/admin/products') }
    // (result) => { console.log(result) }
  )
  .catch(err => console.log(err));
}
exports.postEditProduct = (req, res, next) => {
  const prodID = req.body.productID;
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;
  // const product = new Product(prodID,title,imageURL,description,price);
  // product.save();
  Product.findByPk(prodID)
    .then(product => {
      product.title = title;
      product.price = price;
      product.imageURL = imageURL;
      product.description = description;
      return product.save();
    })
    .then(
      res.redirect('/admin/products')
    )
    .catch(err => console.log(err)) 
  

}
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit
  if (!editMode) {
   return res.redirect('/')
  }
  const prodID = req.params.productId
  req.user
     .getProducts({where: {id:prodID}})
    .then(products => {
      const product = products[0]
         if (!product) {
      return res.redirect('/')
    }
      res.render('admin/edit-product', {
        product: product,
        pageTitle: `Edit ${product.title}`,
        path: '/admin/add-product',
        editing: editMode,

      })
    })
    .catch(err => console.log(err)) 
  
}

exports.getProducts = (req, res, next) => {
  req.user.getProducts()
    .then((products) => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
  .catch(err => console.log(err))
}
exports.postDeleteProduct = (req, res, next) => {
  const prodID = req.body.productId
  Product.findByPk(prodID)
    .then(product => {
      return product.destroy()
    })
    .then(result => {
      res.redirect('/admin/products')
    })
  .catch(err => console.log(err))
}