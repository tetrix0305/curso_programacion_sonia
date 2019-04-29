

/**
 * Funcion declarada
 * Existe "hoisting" (alzamiento)
 */

function suma(x = 0, y = 0) {
    return x + y
}
 
/**
 * Funcion asignada
 * 
 * Una funcion es para JS un dato de tipo "objeto"
 * para crear un objeto es con let obj
 * para crear una funcion de tipo anonima  es function llave llave () {}
 */

let obj = {}

let resta = function (x = 0, y = 0) {
    return x - y
   
}


/**
 * En ES6 aparecen un tipo de funciones que se llaman arrow (es el simbolo =>) funtion
 */

/*let producto = function (x = 1, y= 1){
return x * y
}
*/
// let producto = (x = 1, y= 1){return x * y}
let producto = (x = 1, y= 1) => x * y
      
let cuadrado = (x) => x*x


console.log(suma (4, 6))
console.log(resta(6, 3))
console.log(producto (4,7))
console.log(cuadrado (6))