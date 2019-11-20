const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config')

module.exports = {
  Todo: require('./ToDo')(Model, DataTypes, sequelize),
  Post: require('./Post')(Model, DataTypes, sequelize),
  Delete: require('./Delete')(Model, DataTypes, sequelize)
}