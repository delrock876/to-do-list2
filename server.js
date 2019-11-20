const express = require('express')
const { join } = require('path')

const db = require('./config')
const app = express()


//sends frontend to browser
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//routes always after middleware and before the sync
require('./routes')(app)


db.sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e=>console.error(e))

