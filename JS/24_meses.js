/**
 * EJERCICIO PAGINA 13 (JS OOP)
 * Creamos un objeto con los nombres de los meses en español como propiedades
 * y sus equivalentes en otro idioma (e.j. ingles) como valor
 * y añadimos una función que muestre por consola la frase
 * "El mes... en ingles se dice..." para cada uno de los meses
 */

let mesesenIngles = {
    Enero: 'Janury',
    Febrero: 'February',
    Marzo: 'March',
    Abril: 'April',
    Mayo: 'May',
    Junio: 'June',
    Julio: 'July',
    Agosto: 'August',
    Septiembre: 'September',
    Octubre: 'October',
    Noviembre: 'November',
    Diciembre: 'December',
    toString: function() {
        let output = ''
        for (const key in this) {
            const element = this [key]
            if (typeof element === 'function') {
                continue
        }
        output = output + `El mes ${key} en ingles se dice ${element}` + '\n'
    }
    return output
    },
    mostrar: function() {
        console.log (this.toString())
        },
    }

    mesesenIngles.mostrar ()

