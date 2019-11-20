module.exports = (sequelize, Model, DataTypes)=> {
  //key valur pairs for all models
// Hotdog: require('./Hotdog')(Model, DataTypes, sequelize)

class ToDo extends Model { }

  ToDo.init({
    action: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ToDo'
  })
  return ToDo
}

