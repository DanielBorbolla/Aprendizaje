const express = require('express')
const Router = express.Router()
const passport = require('passport')
const { isLoggedIn,notLoggedIn } = require('../lib/auth')
Router.get('/signup',notLoggedIn, (req, res, next) => {
  res.render('auth/signup')
})
// Router.post('/signup', (req, res, next) => {
//   passport.authenticate('local.signup', {
//     successRedirect: '/profile',
//     failureRedirect: '/signup',
//     failureFlash: true,
//   })
// })

Router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true,
  
}))
Router.get('/signin',notLoggedIn, (req, res, next) => {
  res.render('auth/signin')
})

Router.post('/signin', (req, res, next) => {
  passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash:true
  })(req,res,next)
})
Router.get('/profile', isLoggedIn,
  (req, res, next) => {
  res.render('profile')
})
Router.get('/logout', (req, res,next) => {
  req.logOut(function (err) {
    if(err){return next(err)}
  });
  res.redirect('/signin')
})
module.exports = Router