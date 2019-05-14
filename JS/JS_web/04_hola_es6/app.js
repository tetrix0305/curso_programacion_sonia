class eventos {...
    constructor() {
        this.msg = [...
        'Hola desde una clase en un fichero ES6',
        'Adios desde una clase enun fichero ES6',
]
    }
/**
 *  Metodos manejadoras de eventos (Event Handler) 
 * 
 * */
saludar () {
        console.log(this.msg[0])
}
 despedirse() {
     console.log(this.msg [1])
}
 onMouseOver(){
     console.log(this.msg[2])
}
onMouseOut()
     console.log(this.msg[3])
}

main() {
    document.querySelector('#btn-saludar')
        .addEventListener('click',this.saludar)   
    document.querySelector('#btn-despedirse')
        .addEventListener('click',this.despedirse)
    document.querySelector('#div-raton')
        .addEventListener('mouseover',this.onMouseOver)
    document.querySelector('#div-raton')
        .addEventListener('mouseout',this.onMouseOut)
    }
}

(function(){
    let misEventos = new Eventos ()
    misEventos.saludar()
    misEventos.despedirse()
    //document.addEventListener('DOMContentLoaded',main)
}}()


misEventos.saludar()


function main () {
 
    
}

(function () {
    document.addEventListener('DOMContentLoaded', main) 
})()


