const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const db = require('./util/database')

app.set('view engine', 'ejs')
app.set('views', 'views')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const wrongRoutes = require('./controllers/error')
db.execute('SELECT * FROM products')
  .then(result => {
    console.log(result[0])
  })
  .catch(err => {
    console.log(err)
  });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes)
app.use(shopRoutes)
app.use(wrongRoutes.errorNotFound)


app.listen('3000')