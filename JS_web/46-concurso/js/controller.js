import{mostrar} from "./funciones.js";
export function controller() {

    console.log('Controller cargado')
         
 
    const output = document.querySelector('#output')
    const btnAdd = document.querySelector('#btnAdd')
    const inActor = document.querySelector('#inActor')
     

    btnAdd.addEventListener('click', onClick )
   

    function onClick () {
        let name = inActor.value
        output.innerHTML = mostrar(name)
        
    }
}