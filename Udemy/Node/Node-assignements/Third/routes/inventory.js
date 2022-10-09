const path = require('path');

const express = require('express')
const rootDir = require('../util/path')

const Router = express.Router()

Router.get('/inventory', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','inventory.html'))
})
Router.post('/inventory', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = Router