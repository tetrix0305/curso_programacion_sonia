/** function suma(x - ){
      return number (x) + Number (y)
  }

  function sumaplus(x - 0, y - 0,...otros){
      if (otros){
          console.log('Sin usar', otros)
      
        }
    return Number(x) + Number(y)
  
  console.log(suma('2','5'))

  console.log(suma)

  console.log(suma(2))*/
  /**
 * Programa de calculo de estadisticos como la media aritmetica 
 * que es la suma de los elementos / el numero de elementos
 * 
 */




 /**
  * Function mediaAr
  * @param datos: array
  * @returns: number
  */
  

  function mediaAr (datos = [],...otros) {
        if(!Array.isArray(datos)) {
            // No es un array
            datos = [datos]
            datos = datos.concat(otros)
        }
        console.log(datos)
        let r = 0
        //let sumatorio = 0
        for (let i = 0; i < datos.length; i++) {
            const element = datos[i];
            r = r + element
            //sumatorio = sumatorio + element
            // sumatorio + = element 
        }
        // r= sumatorio / datos.length
        r = r / datos . length
       /* console.log(sumatorio)
        console.log(datos.length)*/
        return r
  }
  
  let numeros = [3,5,6,4,6,2,5]
  console.log(mediaAr(numeros))

  console.log
