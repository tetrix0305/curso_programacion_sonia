//pagina 35
let numbers = [23, 45, 67, 56, 89]

// esto es la funcion Map y map ya hace el bucle for
let cuadrados = numbers.map((item) => item * item)

let sumaTotal = 0
for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    // sumaTotal = sumaTotal + item
    sumaTotal += item
}
let sumaCuadrados = 0
cuadrados.forEach(item => sumaCuadrados += item)


let numbersPares = numbers.filter(item=> !item%2)
let numbersImpares = numbers.filter(item=> item%2)

let limit =25
let numbersGrandes = numbers.filter(item => item>=25)

let productoAcumulado = numbers.reduce(a,b) => a*b)
let sumaAcumulada = numbers.reduce ((a,b) => a+b)

console.log(cuadrados)
console.log(sumaTotal)
console.log(numbersPares)
console.log(numbersImpares)
console.log(prodcutoAcumulado)