// const mysql = require('mysql2')
// const pool = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'mxsiga_owner',
//   database: 'Udemy-node',
//   password: 'password',
//   port: '3306'
// })
// module.exports = pool.promise() 

const Sequelize = require('sequelize')
const sequelize = new Sequelize('Udemy-node', 'mxsiga_owner', 'password', { dialect: 'mysql', host: '127.0.0.1' })

module.exports = sequelize;