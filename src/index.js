const express = require('express')
const porta = 3003
const app = express()

require('../src/controller/calculoTrabalhista')(app)
require('../src/controller/calculoMatematico')(app)

app.listen(porta,() =>{
    console.log(`Server ativo na porta ${porta} `)
})

