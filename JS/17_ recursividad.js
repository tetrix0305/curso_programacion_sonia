/**
 * Calculo del factorial mediante recursividad
 */

 /**
   * Function factorial
  * @param num: number
  * @returns: num
  * 
  * Se calcula el producto de num por todos los inferiores a él hasta el 1
  * es decir el producto de 1 por todos los superiores a él hasta llegar a num
  * 
  */

 
  function factorial(num) {

    if (num <= 0)  {
        return 0 // entraria el 0 y los negativos
      }  else if (num === 0) {
        return 1
      } else if ( num === 1) {
          return num
    }
    return num * factorial (num-1)
}

let n = 5
n = 0
n = 1
n = 5
n = 6
n = 77
console.log (factorial(n))