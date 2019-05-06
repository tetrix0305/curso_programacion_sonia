let vuelo = {
    airline: 'Oceanic',
    number: '815',
    departure: {
        claveIATA: 'SYD',
        time:  '2004-09-22 14:55',
        ciudad: 'Sydney'
    },
    arrival: {
        claveIATA: 'LAX',
        time:  '2004-09-23 10:42',
        ciudad: 'Los Angeles'
    }
}

vuelo.mostrar =function (obj = this) {
    for (const key in obj) {
        const element = obj[key]
        if (typeof element === 'function') {
            continue
        }

        
        if (typeof element != 'object') {
                console.log( `La propiedad ${key} vale ${element}`)
        }
        else {
            console.log( `La propiedad ${key} vale ...`)
            obj.mostrar(element) 
        }
    }
}
 

vuelo.mostrar()
    
  