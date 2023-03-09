const  mongodb = require('mongodb')
const getDB = require('../util/database').getDB

class Product {
  constructor(title,price,description,imageUrl,id,userId,) {
    this.title = title,
    this.price = price,
    this.description = description,
    this.imageUrl = imageUrl,
    this._id = id,
    this.userId = userId
  }
  save() {
    const db = getDB();
    let dbOp;
    if (this._id) {
      //Update product
      dbOp = db
        .collection('products')
        .updateOne({_id:new mongodb.ObjectId(this._id)},{$set:this})
    } else {
      //create product
      dbOp = db
        .collection('products')
        .insertOne(this)
    }
    return dbOp
    .then(result => {
      console.log(result)
    })
    .catch(err => console.log(err)
    )
  }
  static fetchAll() {
    const db = getDB();
    return db.collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products
      })
      .catch(err => console.log(err))
  }
  static findById(prodId) {
    const db = getDB();
    return db.collection('products')
    .find({ _id: new mongodb.ObjectId(prodId) })
    .next()
    .then(product => {
      console.log(product)
      return product
    })
    .catch(err => console.log(err))
  }
  static deleteById(prodId) {
    const db = getDB();
    return db
      .collection('products')
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then(result => {
        console.log('The killing was successfull')
      })
      .catch(err => console.log(err))
    
  }
}



module.exports = Product;