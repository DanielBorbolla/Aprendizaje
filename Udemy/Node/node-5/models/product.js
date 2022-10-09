const fs = require('fs')
const path = require('path')
const Cart = require('./cart')
const pete = path.join(path.dirname(require.main.filename),'data','products.json')
const { v4: uuidv4 } = require('uuid')
const { getCartProduct } = require('./cart')
const getProductsFromFile = (cb) => {

    fs.readFile(pete, (err, fileContent) => {
      if (err) {
        console.log(err)

        return cb([])
      }
      cb(JSON.parse(fileContent))
    })
}

module.exports = class Product{
  constructor(id, title, imageURL, description, price) {
    this.id = id;
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }
  save() {
    
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(prod => prod.id === this.id)
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this
        fs.writeFile(pete, JSON.stringify(updatedProducts), err => {
          console.log(err)
        }) 
      } else {
          this.id = uuidv4()
          products.push(this)
           fs.writeFile(pete, JSON.stringify(products), err => {
            console.log(err)
          })
        }
    })
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
      
  }
  static fetchidproduct(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(pete => pete.id === id)
      cb(product)
    })
  
  }
  static deleteProduct(id) {
    
    getProductsFromFile(products => {
      const product = products.find(prod =>prod.id === id)
      const updatedProducts = products.filter(product => product.id !== id )
      fs.writeFile(pete, JSON.stringify(updatedProducts), err => {
        if (!err) {
          Cart.getCartProduct(cart => {
            let itemInCart = cart.products.some(item => {
              if (item.id === id) {
                return true
              }
              return false
            })

            if (itemInCart) {
              console.log('item was on cart')
              Cart.deleteCartProducts(id,product.price)
              
            }
          })
     
      
        }
      })
        
      })
      
    }
  }