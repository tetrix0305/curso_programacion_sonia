//apuntes en pagina 22
function main() {
    let cadena = 'Hola amigo'
    let alumno = {
        saludar: function() {}
    }
    //let  alumno = new Object ()
    let user = ['Pepe', 'Elena', 'Julia']
    // let user = new Array
console.log(typeof users)
// EN OTROS LENGUAJES tolowerCase (cadena)
console.log (cadena.toLowerCase())
// let cadenaTemp = new String()
console.log(cadena.length)
let aCadena = cadena.split(' ')
let cadenaSinEspacios = aCadena.join(' ')
cadena = cadena.split(' ').join (' ').toUpperCase ()
cadena.toUpperCase().split(' ').join(' ')
console.log(cadena)

let url = 'https://www.cife.es/alumnos/ingresos/pepito'

let urlTemp = url.slice(url.indexOf ('//')+2)
urlTemp = urlTemp.slice(0, urlTemp.indexOf('/'))
console.log(urlTemp)

console.log(url.split('/')[2])+
}

main ()