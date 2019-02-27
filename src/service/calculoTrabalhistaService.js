/**
 * Service responsável pelas regras de negócio do calculo trabalhista
 */

function calcularSalarioBrutoPJ (objCalculo){
    return objCalculo.valorHora * objCalculo.totalHorasProduzidas
}

module.exports = {calcularSalarioBrutoPJ}