const express = require('express')
const registerData = require('./register')


const router = express.Router()

router.get('/', (req, res, next) => {
  const users = registerData.userList

  res.render(
    'users', {
    users: users,
    pageTitle: "Users",
    path: "/"
 }
  )
})

module.exports = router