/** como es una funcion no puede faltar los parentesis y corchetes
 Es un fichero que exporta algo*/  
 
 export function controller() {

    console.log('Controller cargado')

    /** Declarar variables */
    let isVisibleDiv = false
    let msg = [' [....monstras menos]',]

    /** Modos del DOM */
    let nodos = {
        btnCambiar: document.querySelector('#btn-cambiar'),
        divHide: document.querySelector ('#div-hide')
    }
    msg.push (nodos.btnCambiar.innerHTML)

       /**Asignar manejadores de eventos */
    nodos.btnCambiar.addEventListener('click', cambiar )
    
    function cambiar (){
        if (isVisibleDiv) {
            // hay que ocultar
            modos.divHide.classList.
            console.log(nodos.divHide.classList.value)
            // ya hemos ocultado
            nodos.btnCambiar.innerHTML = msg [1]
            isVisibleDiv = false
        } else {
            // hay que mostrar
            nodos.divHide.classList.remove('hide')
            console.log(nodos.divHide.classList.value)
            // ya hemos mostrado
            nodos.btnCambiar.innerHTML = msg [0]
            isVisibleDiv = true
        }
        isVisibleDiv = !isVisibleDiv
    }