/**
 * Controller responsável por realizar operações matemáticas
 */


module.exports = function (app){
    const service = require('../service/calculoMatematicoService')
    app.get('/soma', (request, response)=>{
        const resultado = service.soma(parseInt(request.query.numero))
        response.send({resultado : resultado})
    })
}