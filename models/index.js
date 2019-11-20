
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

module.exports = {
  ToDo: require('./ToDo.js')(sequelize, Model, DataTypes)

}