/**
 * Programa que comprueba la letra de un DNI
 * La letra se asigna a partir de un array
 */

 /**
  * function calcularletraDNI
  * 
  * @returns: string
  * 
  */


  function calcularletraDNI(dni) {
      letraDNI = ['T','R','W','A','G','M','Y','L'];
     // let num =dni % 23
     // return letrasDNI [dni % 23]
  }


  /**
   * function isLetraDNIValida
   * @param DNI: string (formato nnnnnnnnL)
   * @returns : boolean
   * 
   */
  //  1R = length = 2
  //  99999999 = length = 9

   function isLetraDNIValida(dni) {
       r = false
        let letra = dni[dni.length-1]
        let numero = dni.slice(0,dni.length-1)//este es un string
        numero =formateaNumero(numero)
       if (letra === calcularletraDNI(numero)) { r = true}
        return r     
   }

   /**
    * function formateaNumero
    * @param cadena: string
    * @returns : string
    * 
    */
    function formateaNumero(cadena = ''){
        let aCadena = cadena.split ('')
        for (let i = 0; i <aCadena.length; i++) {
        const item = aCadena[i];
        if (isNaN (item)) {
            aCadena.splice(i,1)      
        }
        }
        return aCadena.join('')
    }


  (function () {
      let miDNI = '52.954.253-L'
     // console.log(calcularLetraDNI(miDNI))
    console.log(isLetraDNIValida (miDNI))
     // console.log(isLetraDNIValida(miDNI))
 })()