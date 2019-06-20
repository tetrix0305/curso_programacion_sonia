

  function isRey (name) {
    let actores = ['Fernando Esteso', 'Pajares', 'Fernan Gomez', 'Jose Luis Lopez Vazquez', 'Lina Morgan']
        for (let i = 0; i <actores.length; i++) {
            const actor = actores[i] //normalmente se le da el mismo nombre que el array pero en singular
            if (actor.toLowerCase() === name.toLowerCase()) {
                return true
            }
        }
        return false
  }

  export function mostrar(name) {
    let i = 1
    let mensajes = [
        ` El nombre ${name} ha sido usado por un actor de España`,
         `Ningún actor de España se ha llamado nunca ${name}`]
         if (isRey(name)) {
             i= 0
         }
        return mensajes[i]
  }


 