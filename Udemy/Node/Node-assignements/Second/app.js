const express = require('express')
const bodyParser =require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log('Dummy Response')
  next()
})

app.use('/users',(req, res, next) => {
  res.send('<h1>página get user</h1><br><form action="/usuario" method="POST"><input type="text" name="nombre" placeholder= "usuario"/><button type="submit">write name</button></form>')
})

app.use('/usuario', (req, res, next) => {
  console.log(req.body["nombre"])
  res.redirect('/')
})
app.use('/', (req, res, next) => {
  res.send(`<h1>esta madre no funciono</h1>`)
})

app.listen(3000)
