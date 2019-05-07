/**
 * Pagina 25
 * Cuando detras de un tipo de dato se pone un puno /.
 * salen todas las caractericticas que pueda tener el elemento
 */

function areaCirculo(radio = 1){
    let area = Math.PI * radio * radio
    return area.toFixed(2)
}

console.log(areaCirculo(2))

function numeroAlAzar() {
    return Math.random()*100
}

for (let i = 0; i < 20; i++) {
    console.log(numeroAlAzar())
    
}
