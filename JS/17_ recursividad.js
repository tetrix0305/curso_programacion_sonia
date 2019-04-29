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
       }  else if (num ===1){
        return num       
      } else if ( num >170) {
          throw "No puedo calcular factoriales de numeros tan grandes"
    }
    return num * factorial (num-1)
}

let n = 0
n = -3
n = 1
n = 5
n = 6
n = 170
n = 171
try{
  console.log(factorial(n)
} catch (error) {
  console.log(error)
}
