export function controller() {

    console.log('Cargado el controller')

    /** Nodos del DOM */
    const btnPedir = document.querySelector('#btn-pedir') 
    const btnSaludar = document.querySelector ('#btn-saludar')
    const output = document.querySelector ('@output')
    /** Manejadores de eventos */

    btnPedir.addEventListener('click', onPedir)
   

    /* let aDatos = [1,2,3,4,5] 
     aDatos.map(x, i, Array)=>x* incide)*/

    /**
     * una Promesa es un objeto nativo desde ES6
     * QUER REPRESETNA LA TERMINACIÓN O EL FRACASO EVENTUAL
     * DE UNA OPERACIÓN ASINCRONA
     * 
     * Una promesa es un objeto devuelto
     * al cual encadenas lasfunciones callback, 
     * en vez de pasar funciones callback a una función 
     */
     function completarPedido() {
          return new Promise( (resolve,reject) =>{
                    setTimeout(() => {
                    if(Math.random() > 0.3){// 70% simulamos aciertos}
                         resolve ('Toma tu hamburguesa')
                    } else { // el otro 30% simulamos errores
                         reject('Lo siento, no quedan hambuerguesas')
                    }
               }, 2000)
          })
     }

     

     function onPedir() {
          completarPedido() 
          .then( (datos)=> {
               output.innerHTML +='<li>'+ datos + '</li>'
          })
          .catch( (error)=> {
               output.innerHTML +='<li>'+ error + '</li>'
          })
     }


/**function msgAfterTimeout(msg, nombre, tiempo, cb) {
      * setTimeout (function () {
      * cb(msg,nombre); 
      }, tiempo};
    }; */











function msgAfterTimeout(msg,nombre,tiempo) {
     return new Promise( (resolve) => {
     setTimeout( ()=> {
          resolve([msg, nombre])
     }, tiempo)
     })
}

function onSaludar(){
     msgAfterTimeout('Juanito', 'Pepito', 3500)
     .then( (msg, nombre) => {
          console.log(nombre)
          let saludo = (`Hola ${nombre}!`)
          let quienSoy = msg
          console.log (saludo)
          return msgAfterTimeout (msg,saludo,500)
     }).then( ([quienSoy, saludo])=> {
          console.log (`${saludo},soy ${quienSoy}`)
     })
}
function onSaludar(2){
     msgAfterTimeout('Juanito', 'Pepito', 3500)
     .then( (datos[msg, nombre]) => {
          let saludo = (`Hola ${nombre}!`)
          let quienSoy = datos [0]
          console.log (saludo)
          return msgAfterTimeout (msg,saludo,500)
     }).then( (datos)=> {
          console.log (`${datos [1]},soy ${datos[0]}`)
     })
} 

}