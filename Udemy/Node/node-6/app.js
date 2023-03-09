const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const sequelize = require('./util/database')
const Product = require('./models/product')
const User = require('./models/user')
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item')
const Order = require('./models/order')
const OrderItem = require('./models/order-item')

app.set('view engine', 'ejs')
app.set('views', 'views')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const wrongRoutes = require('./controllers/error')
// db.execute('SELECT * FROM products')
//   .then(result => {
//     console.log(result[0])
//   })
//   .catch(err => {
//     console.log(err)
//   });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next()
    })
    .catch(err => console.log(err))
})
app.use(adminRoutes)
app.use(shopRoutes)
app.use(wrongRoutes.errorNotFound)

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
User.hasMany(Product)
User.hasOne(Cart)
Cart.belongsTo(User)
Cart.belongsToMany(Product,{through: CartItem})
Product.belongsToMany(Cart, { through: CartItem })
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem })
Product.belongsToMany(Order, { through: OrderItem })


sequelize
  .sync(
    // { force: true }
  )
  
  .then(result => {
    return User.findByPk(1)
  })
  //   return User.findAll({
  //     where: {
  //       username: 'Daniel'
  //     }
  //   })
  // })
  .then(user => {
    if (!user) {
      return User.create({username:'Daniel', email:'riley@bimba.com'})
    }
    return user;
  })
  .then(user => {
    return user.createCart();
  })
  .then(cart =>{
    app.listen('3000');
  })
  .catch(err => console.log(err))
