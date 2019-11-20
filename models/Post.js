const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config')

module.exports = (sequelize, Model, DataTypes) {

class Post extends Model { }
  Post.init({
    action: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Post'
  })
  return Post
}

