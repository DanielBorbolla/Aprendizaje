const express = require('express')


const router = express.Router()

const userList = []

router.get('/register', (req, res, next) => {
  res.render('register',{
    pageTitle: "Registration",
    path:"/register"
  })
})
router.post('/register', (req, res, next) => {
  userList.push({name:req.body.name})
  res.redirect('/')
})
  
exports.routes = router;
exports.userList = userList;
