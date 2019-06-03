export function controller(ev) {

    // Procedimiento habitual

    // 1. Referencia alos Nodos del Dom que me interesan

    const aNodosQuestion = document.querySelectorAll(',question')
    const aNodosQuestion = document.querySelectorAll(',respuesta')


    // 2. Definir los manejadores de eventos

    aNodosQuestion.forEach( item) => { item.addEventiListener('Click',onclick) })

    //3. Implementar los manejadores de eventos

    function onclick(ev) {
        console.dir(ev)
        
    
    }

}