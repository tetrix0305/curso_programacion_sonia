//  como es una funcion no puede faltar los parentesis y corchetes
 // Es un fichero que exporta algo
 
export function controller() {

    console.log('Controller cargado')

    let nombre = ''

    /**Nodos del DOM  */
    const inNombre    = document.querySelector('in-nombre')
    const btnborrar   = document.querySelector('btn-borrar')
    const output      = document.querySelector('output')

    /** Asignar manejadores de eventos*/
    inNombre.addEventListener('input',oninputNombre)
    btnborrar.addEventListener('click', borrar)

    function oninputNombre () {
        console.dir(inNombre.value)
    }
}
    function borrar() {
        
    }
