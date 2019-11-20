const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config')

module.exports = (sequelize, Model, DataTypes) {

class Delete extends Model { }
  Delete.init({
    action: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Delete'
  })
  return Delete
}

