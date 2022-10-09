const express = require('express')
const path = require('path')
const bodyParser =require('body-parser')

const app = express()
app.set('view engine', 'ejs');

app.set('views', 'views')
const registerData = require('./routes/register')
const usersRoutes = require('./routes/users')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))

app.use(registerData.routes)
app.use(usersRoutes)
app.use((req, res, next) => {
  res.status(404).render('404',{ pageTitle:'404 not found',path:''})
})





app.listen(3000)