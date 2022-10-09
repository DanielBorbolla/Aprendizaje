const Product = require('../models/product')
const Cart = require('../models/cart')



exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
     prods: products,
     pageTitle: 'Our Products',
     path: '/products'
    
  });
  })
}
exports.getIDProducts = (req, res, next) => {
  const prodID = req.params.id
  Product.fetchidproduct(prodID, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path:''
    })
  })

}

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
     prods: products,
     pageTitle: 'Home',
     path: '/',
    
  });
  })
  
}

exports.getCart = (req, res, next) => {

  Cart.getCartProduct(cart => {
    Product.fetchAll(products => {
      const cartProducts = []
      for (product of products) {
        const cartProductData = cart.products.find(prod => prod.id === product.id)
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty })
        }
      }
      res.render('shop/cart', {
        cartProducts: cartProducts,
        pageTitle: 'Cart',
        path:'/cart'
      })
    })
  })
}
exports.postCart = (req, res, next) => {
  const prodID = req.body.productId
  Product.fetchidproduct(prodID, (product) => {
    Cart.addProduct(prodID,product.price)
    
  })
  console.log(prodID)
  res.redirect("/cart")

}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path:'/checkout'
  
  })

}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Previous Orders',
    path:'/orders'
  
  })

}
exports.postDeleteCartItem = (req, res, next) => {
  const prodId = req.body.productId
  Product.fetchidproduct(prodId, (product) => {
    // console.log(product,prodId)
    Cart.deleteCartProducts(prodId, product.price)
  })
  res.redirect("/cart")

}

