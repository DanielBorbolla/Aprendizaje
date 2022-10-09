const fs = require('fs')
const path = require('path')
const pete = path.join(path.dirname(require.main.filename),'data','products.json')

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
  constructor(title) {
    this.title = title;
  }
  save() {
    getProductsFromFile(products => {
      products.push(this)
      fs.writeFile(pete, JSON.stringify(products), err => {
        console.log(err)
      })

    })
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
      
  }
}