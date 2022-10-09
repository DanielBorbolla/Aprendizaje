const path = require('path')
const express = require('express')
const rootDir = require('../util/path')

const Router = express.Router()

Router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir,'Views','shop.html'))
})

module.exports = Router 
