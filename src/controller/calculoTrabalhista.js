/**
 * Controller responsável por realizar um calculo pj
 */

module.exports = function (app){


const calculoService = require('../service/calculoTrabalhistaService')

app.get('/calculo-salario-pj', (request, response, next)=>{
    const objCalculo = {
        valorHora: request.query.valorHora,
        totalHorasProduzidas: request.query.totalHorasProduzidas,
    }
    const salarioPJ = calculoService.calcularSalarioBrutoPJ(objCalculo)
    response.send({salarioPJ})
})

}