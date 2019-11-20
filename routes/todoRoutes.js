const {ToDo} = require('../models')

module.exports= app =>{

//Get list
app.get('/home', (req, res)=>{
  ToDo.findAll()
  .then(list=>res.json(list))
  .then(()=>res.sendStatus(200))
  .catch(e=>console.error(e))
})


//Add item
  app.post('/list', (req, res)=>{
    ToDo.create(req.body)
    .then(()=> res.sendStatus(200 ))
    .catch(e=>console.error(e))
  })


//Update
  app.put('/list/:id', (req, res)=>{
    ToDo.findOne({where: {id: parseInt(req.params.id)}})
    .then(list.update(req.body))
    .then(res.sendStatus(200))
    .catch(e=>console.error(e))
  })

  //Delete
  app.delete('/list/:id', (req, res)=>{
    ToDo.findOne({where : {id : parseInt(req.params.id)}})
    .then(list=> list.destroy())
    .then(()=>res.sendStatus(200))
    .catch(e=>console.error(e))
  })


}