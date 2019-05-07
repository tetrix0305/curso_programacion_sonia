let nombres = ['Pepe', 'Juan', 'Bernardette','Penelope','Eustaquio']

//Slice es una funcion inmutable
console.log(nombres.slice(3,4))

//Splice es una funcion mutable

let newNombres = nombres.splice(1,3)
console.clear()
console.log(nombres)
console.log(newNombres)

//Colas y pilas - todas 

nombres.push() // AÑADE AL FINAL
nombres.pop() // QUITA AL FINAL 

nombres.shift() // QUITA EL PRIMERO
nombres.unshift() // AÑADIR AL PRINCIPIO

nombres.push('Aurora')

