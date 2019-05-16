export function controller() {

    console.log('Cargado el controller')

    /** Nodos del DOM */
    

    /** Manejadores de eventos */

    function msgAfterTimeout (msg, nombre,tiempo,cb){
       setTimeout(function () {
           cb(msg,nombre);
       },tiempo;
   };

   
msgAfterTimeout('Hola' 'Pepito', 2000,)

}