/**
 * Las funciones son objetos
 * con la funcion se puede hacer cualquier cosa
 * Se pueden anidar
 * 
 */
/**Esto que aparece abajo es encapsular */
 function operaciones (x = 1, y = 1) {
    console.log(suma( x, y))
    let r = 0
function suma (x,y){
    return x + y
    }
    
}


operaciones(10, 12)

 function mostrarResultado(x=0 , y=0, nombre, operacion){

    // let x
    // let y
    // operacion

    console.log(`El resultado con ${nombre} y ${y} es`)
    console.log (operacion (x,y))

}
/**Esta es la funcion de callback (function (x,y) {return x + y} */

let suma = function (x,y) {return x + y}
mostrarResultado(11, 12,`suma,(x,y)=> x + y)
mostrarResultado(11, 12,`resta`(x,y)=> x - y)