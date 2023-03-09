const Sequelize = require('sequelize')
const sequelize = require('../util/database')
const User = sequelize.define('user', {
    uuid: {
    // type: Sequelize.DataTypes.UUID,
    type: Sequelize.DataTypes.INTEGER,
    // defaultValue: Sequelize.DataTypes.UUIDV4,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  email: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique:true
  }
}) 
module.exports = User