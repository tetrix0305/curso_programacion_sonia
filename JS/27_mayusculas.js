/**
 * Dada una cadena de caracteres hay que indicar si esta formado:
 * solo por letras mayusculas,
 * solo por letras minusculas,
 * solo por la combinacion de ambas
 * 
 */

 /**
  * fuction probarCadena
  * @param cadena: string
  * @returns: number
  * -0-solo por letras mayusculas,
  * -1-solo por letras minusculas,
  * -2-solo por la combinacion de ambas
  */
 function comoEsLaCadena (cadena = ''){
     let mensajes = [
         'La cadena esta formada solo por letras mayusculas',
         'La cadena esta formada solo por letras minusculas',
         'La cadena esta formada por la combinación de ambas'
     ]  
     // let i = probarCadena (cadena)
     // console.log(mensajes[i])
     console.log(mensajes [probarCadena(cadena)])
   
       
  function probarCadena (cadena = ''){
      let r = 2
      if( cadena === cadena.toLowerCase()){
           r = 0
      } else if (cadena === cadena.toLowerCase){
           r = 1
      } 
       return r 
        } }
  /**
   * function comoEsLaCadena
   * @param: cadena: string
   * @returns: void
   * 
   */
  
   
       

(function)
let texto 
texto = 'YO SOY ASI'
comoEsLaCadena (texto)
texto='otra cosa que se os ocurra'
comoEsLaCadena (texto)
texto = 'Una ultima prueba'
comoEsLaCadena(texto)
}) ({


prueba()