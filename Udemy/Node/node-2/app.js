const express = require('express')
const path = require('path')
// const rootDir = require('../util/path')
const bodyParser =require('body-parser')

const app = express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
// app.use((req, res, next) => {
//   console.log('in the middleware')
//   next() //esto permite que se ejecute el siguiente middleware
// })
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'))
})


app.listen(3000)
// module.exports = path.dirname(require.main.filename);