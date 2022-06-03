const express = require("express")
// routing (logic = controller= CRUD), 
//listenting = creating server ,
// middlewares = body parser (we need data in form of json)
// router = middleware by which we can create new url for entire app
const create = require('../controller/empcontroller')
const read = require('../controller/empcontroller')
const update = require('../controller/empcontroller')
const delte = require('../controller/empcontroller')

var router = express()

const bodyParser = require("body-parser")

router.use(bodyParser.json())
router.post('/create',create.create)
router.get('/users',read.read)
router.put('/update/:id',update.update)
router.delete('/delete/:id',delte.delte)

module.exports = router