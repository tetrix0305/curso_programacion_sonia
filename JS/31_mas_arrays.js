let nombres = ['Pepe', 'Juan', 'Bernardette','Penelope','Eustaquio']

//Slice es una funcion inmutable
console.log(nombres.slice(3,4))

//Splice es una funcion mutable

let newNombres = nombres.splice(1,3)
console.clear()
console.log(nombres)
console.log(newNombres)

A - B- C- D
//Colas y pilas - todas 

nombres.push()
nombres.pop()
nombres.shift()
nombres.unshift()