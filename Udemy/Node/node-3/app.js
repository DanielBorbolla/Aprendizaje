const express = require('express')
const path = require('path')
// ---------------handlebars----------------------------
// const expressHbs= require('express-handlebars')

const bodyParser =require('body-parser')

const app = express()
// ---------------PUG----------------------------
// app.set('view engine', 'pug');

// ---------------handlebars----------------------------
// app.engine('hbs', expressHbs({layoutsDir:'views/layouts', defaultLayout: 'main-layout.hbs'}));
// app.set('view engine', 'hbs');

// ---------------EJS----------------------------
app.set('view engine', 'ejs');

app.set('Views','views')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
// ---------------PUG & handlebars----------------------------
  res.status(404).render('404', { docTitle: "404 Not Found" })
  // res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'))
})


app.listen(3000)
