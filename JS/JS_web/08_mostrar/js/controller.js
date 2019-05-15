/** como es una funcion no puede faltar los parentesis y corchetes
 Es un fichero que exporta algo*/  
 
export function controller() {

    console.log('Controller cargado')

    let nombre = ''
    let msgInicial

    /**Nodos del DOM  */
    const inNombre    = document.querySelector('#in-nombre')
    const btnborrar   = document.querySelector('#btn-borrar')
    const output      = document.querySelector('#output')

    msgInicial = output.innerHTML + ' '

    /** Asignar manejadores de eventos*/
    inNombre.addEventListener('input',onInputNombre)
    btnborrar.addEventListener('click', borrar)

    function onInputNombre () {
        nombre = inNombre.value
        output.innerHTML  = msgInicial + nombre.toUpperCase()
    }
}
    function borrar() {
        
    }
