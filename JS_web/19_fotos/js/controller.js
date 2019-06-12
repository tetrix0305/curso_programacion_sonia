export function controller() {
    const URL = 'https://jsonplaceholder.typicode.com/photos?albumId=1'
    const aFotos = []
    let sectionFigures = document.querySelector('#figures')

    /*fetch (URL).then(x)

    function x (response){
        return response.json()
    }*/
     
    fetch(URL)
 .then (response) = response.json()
 .then (getFotos) 

    // Elementos del DOM
    const btnAdd = document.querySelector('#put')
    let aBtnModificar 
    let aBtnBorrar 

    const addFotoDlg = document.querySelector('#addFotoDlg')
    const btnAddFoto = document.querySelector('#btnAddFoto')
    const btnCancelAddFoto = document.querySelector ('#btnCancelAddFoto')

    // Manejadores de eventos
    btnAdd.addEventListener('click', onAdd)
    btnAddFoto.addEventListener('click', onClickDlg)
    btnAdd.addEventListener('click', onAdd)

    /*  "albumId": 1,
    */   
    function getFotos(response) {
        console.log(response)
        let html = ''
        JSON.parse(response)     
            .forEach( item => {
                html += `
                    <figure>
                        <a href="${item.url}">
                        <figcaption>${item.title}</figcaption>
                        <img src="${item.thumbnailUrl}" alt="">
                        </a>
                        <button class="post" id="post_${item.id}">Modificar</button>
                        <button class="delete" id="delete_${item.id}">Borrar</button>
                    </figure>
                `
            });

        sectionFigures.innerHTML = html
        aBtnModificar = document.querySelectorAll('.post')
        aBtnBorrar= document.querySelectorAll('.delete')
        aBtnModificar.forEach( item => item.addEventListener('click', onModify))
        aBtnBorrar.forEach( item => item.addEventListener('click', onDelete))
    }


    function onAdd () {
        addFotoDlg.showModal()
    }

    
    function onClickDlgAdd(ev){
        
      let id = ev.target.id // btnAddFoto o btnCancelAddFoto
      if (id == 'btnAddFoto'){
          // añadir
      } else {// btnCancelAddFoto
        addFotoDlg.close()
    }
    }
    function onModify(ev) {
        console.log('Modificando', ev.target.id)
    }

    function onDelete(ev) {
        console.log('Borrando', ev.target.id)
    }
}