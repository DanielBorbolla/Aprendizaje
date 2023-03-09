// const Cart = require('./cart')
// const { v4: uuidv4 } = require('uuid')
// const { getCartProduct } = require('./cart')
// const db = require('../util/database')


// module.exports = class Product{
//   constructor(id, title, imageURL, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageURL = imageURL;
//     this.description = description;
//     this.price = price;
//   }
//   save() {
//     return db.execute('INSERT INTO products (title,price,imageURL,description) VALUES (?,?,?,?)',[this.title,this.price,this.imageURL,this.description])
//   }
//   static fetchAll() {
//     return db.execute('SELECT * FROM products');
      
//   }
//   static fetchidproduct(id) {
//    return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
//   }
//   static deleteProduct(id) {
      
//     }
//   }

const Sequelize = require('sequelize')
const sequelize = require('../util/database')
const { v4: uuidv4 } = require('uuid')
const Product = sequelize.define('product', {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DataTypes.DOUBLE,
    allowNull: false
  },
  description: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },


});
module.exports = Product