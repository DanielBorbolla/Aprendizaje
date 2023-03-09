const express = require('express')
const Router = express.Router()
const pool = require('../database')
const { isLoggedIn } = require('../lib/auth')

Router.get('/add', isLoggedIn,(req, res) => {
  res.render('links/add')
})
Router.post('/add',isLoggedIn, async (req, res, next) => {
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description,
    user_id:req.user.id
  };
  await pool.query('INSERT INTO links set ?', [newLink])
  req.flash('success','Link Successfully Added');
  res.redirect('./')
})
Router.get('/', isLoggedIn,async (req, res) => {
  const Links = await pool.query('SELECT * FROM links WHERE user_id = ?',[req.user.id])
  res.render('links/list',{links:Links})
})
Router.get('/delete/:id',isLoggedIn, async (req, res, next) => {
  const { id } = req.params;
  await pool.query('DELETE FROM links WHERE ID = ?',[id])
  
  res.redirect('/links')
})
Router.get('/edit/:id',isLoggedIn, async (req, res, next) => {
  const { id } = req.params;
  const link = await pool.query('SELECT * FROM links WHERE id = ?', [id])
  res.render('links/edit',{link:link[0]})
  
})

Router.post('/edit/:id',isLoggedIn, async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const { title, description, url } = req.body;
  const newLink = { title, description, url }
  await pool.query('UPDATE links set ? WHERE id = ?', [newLink, id])
  res.redirect('/links')
  
})
module.exports = Router