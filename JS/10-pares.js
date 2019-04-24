/**
 * /* Programa que calcula si un numero es par o impar y muestra el resultado en consola*/
 */
 /**
  * function calculaQueEs
  * @param num: number /*yo escribo aqui como me gustaria que me hicera las cosa*/
  * returns: number /*el dos puntos indica que lo que viene es el tipo*/
  * Posibles valores
  *     0 (por ejemplo 0 para los pares)
  *     1 (1 para los impares)
  **/

    function calculaQueEs(num){
        let r
        if (num % 2) { 
            // numero par
            r = 2
            todos los pares su resto es 0 (la division) 
            todos los impares su resto es 1 (la division)
            aqui se ve el resto de la division entera
            si aparece un 0 en if es false
            } else {
                // numero impares
            r = 1
            }
            //return num % 2
        
  /**
   * Function isPar (esto es una funcion buliana)
   * para num: number
   * returns: boolean // sera true si el numero es PAR
   * Posibles Valores
   *    True pares
   *    False impar
   
     function isPar(num){
       return num % 2
   }
    function isImpar (num){
        return !! (num % 2)
    }
    /**
     * Function monstrar
     * @param r: bolean
     * @param num: number
     * @returns: void
     * 
     */

    function mostrar (r,num){
       /* let mesnajes - ¨[
            El numero ... es impares
            El numero ... es par
         ]*/  
        if (isPar) {
            console.log{mensajes[0]
        else {
            console.log {mensajes[1] }
        }
        } 
    }
   /* Estas comillas francesas delimitan un template, sale con la tecla al lado de la p y despues barra espaciadora*/
 /*cadena = 'Hola' + user + ' que tal estas' esto es como se hacia antes pero ahora es extrapolar una variable
cadena = 'Hola . &{user}, que tal estas'

let numer = 23
number = 28
monstrar(isPar (number),number)

let i
if (isPar){
    i = 0
     1 = 1
 
}
let i = (isPar) ? 0 : 1
 let number = 23

function mostrar 2 (code,num) {
    }
 let mensajes = [ 'El numero $ {num}]