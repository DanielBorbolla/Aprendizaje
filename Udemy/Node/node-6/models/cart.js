const fs = require('fs')
const path = require('path')
const pete = path.join(path.dirname(require.main.filename),'data','cart.json')


module.exports = class Cart {
  static addProduct(id,productPrice) {
    fs.readFile(pete, (err, fileContent) => {
      let cart = {products:[],totalPrice: 0}
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      const existingProductindex = cart.products.findIndex(prod => prod.id === id);
      const existingProduct = cart.products[existingProductindex]
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1
        cart.products = [...cart.products]
        cart.products[existingProductindex]=updatedProduct
      } else {
        updatedProduct={id:id ,qty:1}
        cart.products = [...cart.products,updatedProduct]
      }
      cart.totalPrice = cart.totalPrice + Number(productPrice)
      fs.writeFile(pete, JSON.stringify(cart), err => {
        console.log(err);
      })
    })
  }

  static deleteCartProducts(id, productPrice) {
    fs.readFile(pete, (err, fileContent) => {
      if (err) {
        return
      }
      const updatedCart = {...JSON.parse(fileContent)};
      const product = updatedCart.products.find(prod => prod.id === id)
      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(prod => prod.id !== id)
      updatedCart.totalPrice = updatedCart.totalPrice - (productPrice * productQty)
      fs.writeFile(pete, JSON.stringify(updatedCart), err => {
        console.log(err);
    
    
      })

    })
  } 
  static getCartProduct(cb) {
    fs.readFile(pete, (err, fileContent) => {
      const cart = JSON.parse(fileContent)
      if (err) {
        return cb(null)
      }
      cb(cart)
    })
  }

}
