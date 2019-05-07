let datos = []
// let datos = new Array ()
/**
 *  Pag. 27. de Oop. Los Arrays son un tipo de objeto, en el que la agrupación de diversas 
 * variables (propiedades) tiene un caracter secuencial 
 */
datos = [1,2,3,5,7,9]
datos.push(45)
function numeroAlAzar100(){
    return parseInt (Math.random ()*100)
}

/**
 * Crea un array  de n aleatorios, como minimo 1
 * funcion aleatorios , recibe un parametro de tipo limite, el timpo de limite es number (@param:limited:number)
 * Esta funcion devuelve un array (@returns:array [number])
 */

 function aleatorios(limite){
    let r = []
    for (let i = 0; i < limite; i++) {
         r[i] = numeroAlAzar100()
        
    }
    return r
 }



 console.log(aleatorios(12))


/**Pagina 28 ejercicio 13 como sacar la letra del DNI
 console.log(52954253 % 23)
 52954253l
 if( cadena ===  cadena.toUpperCase() ) {
    r = 0
*/

function aleatorios(limite = 1) {
    let r = []
    for (let i = 0; i < limite; i++) {
        r [i] = numeroAlAzar100;
    }
return r
}
console.log(aleatorios(12))

function prueba (){
    let datos = [1, 7, ,3, 2 ]
    let masDatos = [1,4,6]
    let arrayFinal = datos.concat(masDatos)
    console.log(datos)
    console.log(arrayFinal)

    let temp = datos //esto copia referencia, aqui hay 2 referencia una temp y otra datos 
    //CLONAR UN ARRAY
    let temp = datos.slice(0)
    temp.sort()
    console.clear()
    console.log('Esto es Temp')
    console.log(temp)
    console.log('Esto es datos')
    console.log(datos.join(''))
}

prueba ()