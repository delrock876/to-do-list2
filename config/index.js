const mysql = require('mysql2')
const Sequelize = require('sequelize')
//connects the database to your server
module.exports = new Sequelize('mysql://root:root@localhost/db')
