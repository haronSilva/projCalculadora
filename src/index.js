const express = require('express')
const porta = 3003
const app = express()

require('../src/controller/calculoTrabalhista')(app)
require('../src/controller/calculoMatematico')(app)

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const bodyParser = require("body-parser")
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(bodyParser.json())
app.listen(porta,() =>{
    console.log(`Server ativo na porta ${porta} `)
})

