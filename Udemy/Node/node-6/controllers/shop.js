const Product = require('../models/product')
const { checkout } = require('../routes/admin')




exports.getProducts = (req, res, next) => {
  // Product.fetchAll().then(([rows, fieldData]) => {
  //   res.render('shop/product-list', {
  //     prods: rows,
  //     pageTitle: 'Xhop',
  //     path:'/products'
  //   })
  // }).catch(err => console.log(err))
  Product.findAll().then(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Xhop',
      path:'/products'
    })
  })
    .catch(err => console.log(err))
}
exports.getIDProducts = (req, res, next) => {
  const prodID = req.params.productId
  Product.findByPk(prodID)
    .then(product => {
      
      res.render('shop/product-detail',
      {
        product: product,
        pageTitle: product.title,
        path:'/products'
      }
      )
    }
      )
    .catch(err => console.log(err)) 
   


}

exports.getIndex = (req, res, next) => {
    res.render('shop/index', {
     pageTitle: 'Home',
     path: '/',
    
  });

}

exports.getCart = (req, res, next) => {

  // Cart.getCartProduct(cart => {
  //   Product.fetchAll(products => {
  //     const cartProducts = []
  //     for (product of products) {
  //       const cartProductData = cart.products.find(prod => prod.id === product.id)
  //       if (cartProductData) {
  //         cartProducts.push({ productData: product, qty: cartProductData.qty })
  //       }
  //     }
  //     res.render('shop/cart', {
  //       cartProducts: cartProducts,
  //       pageTitle: 'Cart',
  //       path:'/cart'
  //     })
  //   })
  // })

  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts()
        .then(products => {
          res.render('shop/cart', {
          cartProducts: products,
          pageTitle: 'Your Cart',
          path:'/cart'
      })
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}
exports.postCart = (req, res, next) => {
  const prodID = req.body.productId
  let fetchedCart
  let newQuantity = 1;
  req.user.getCart()
    .then(cart => {
      fetchedCart = cart
      return cart.getProducts({where:{id:prodID}})
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0]
      }
      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product
      }
      return Product.findByPk(prodID)
    })
    .then(product => {
      return fetchedCart.addProduct(product,{through:{quantity:newQuantity}})
    })
    .then(() => {
      res.redirect('/cart')
    })
    .catch(err => console.log(err))

}

exports.getCheckout = (req, res, next) => {
  req.user
    .getOrders({include:['products']})
    .then(orders => {
          res.render('shop/checkout', {
            orders: orders,
            pageTitle: 'Checkout',
            path:'/checkout'
        })
    })
  .catch(err => console.log(err))
}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Previous Orders',
    path:'/orders'
  
  })

}
exports.postDeleteCartItem = (req, res, next) => {
  const prodId = req.body.productId
  req.user.getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } })
    })
    .then(products => {
      const product = products[0]
      return product.cartItem.destroy()
    })
    .then(result => {
      res.redirect('/cart')
    })
    .catch(err => console.log(err))
    
  }
  
exports.postCheckout = (req, res, next) => {
    let fetchedCart
    req.user.getCart()
      .then(cart => {
        fetchedCart = cart;
      return cart.getProducts()
    })
    .then(products => {
      return req.user.createOrder()
        .then(order => {
          order.addProduct(products.map(product => {
            product.orderItem = { quantity: product.cartItem.quantity}
          return product
        }))
        })
    
      
      .catch(err => console.log(err))
      })
      .then(result => {
        return fetchedCart.setProducts(null)
      })
      .then(
        res.redirect('/checkout')

      )  
    .catch(err => console.log(err))
}

