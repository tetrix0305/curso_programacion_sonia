/**
 * Programa para calcular los numeros de la serie de Fibonachi por debajo de un valor dado (incluido)
 * 
 * Partiendo de 0 y 1, cada elemento de la serie se calcula como la suma de los 2 anteriores
 * 
 */

 /**
  * Function fibonachi
  * @param limite: number
  * @return : array [number]
  * 
  */
/** 
  function fibonachi (limite){
      let i = 0
      let j = 1
      let serie = [i]

      while (j <= limite) {
        let next =  i + j
        i = j
        j = next
        serie.push(i)
} 
       return serie
    
  }


    let limite = 8
    console.log (fibonachifor(limite))
*/

    function fibonachifor (limite){
        let i = 0
        let j = 1
        let serie = [i]
      
/*for (let index = 0; index < Infinity; index++) {
    let next =  i + j
        i = j
        j = next
        serie.push(i)
        if (i > limite) {
            break
        } 
    
}*/
    

}

for (let i = 0; j = i < limite; i = j, j = next) {
    serie.push(j)
    next = i + j
}
    return serie

}
     