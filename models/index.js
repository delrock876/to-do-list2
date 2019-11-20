const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config')

module.exports = {
  Todo: require('./ToDo')(sequelize,Model,DataTypes)
}