const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars')
const path = require('path')
const flash = require('connect-flash')
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport')
const {database} = require('./keys')
//imports

const app = express();
require('./lib/passport')

//initializations

app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs')
//setting
app.use(session({
  secret: 'hevosazules',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}))
app.use(flash());
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())
//middlewares
app.use((req, res, next) => {
  app.locals.success = req.flash('success')
  app.locals.fail = req.flash('fail')
  app.locals.user = req.user
  next()
})


//Global
app.use(require('./routes/index'))
//el uso de /index es opcional aquí ya que es un valor default 
app.use(require('./routes/authentication'))
app.use('/links', require('./routes/links'))


//routes
app.use(express.static(path.join(__dirname,'public')))
//public




app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})
// Starting Server