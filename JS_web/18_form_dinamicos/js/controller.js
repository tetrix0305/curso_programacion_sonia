import { GENEROS } from "./datos.js";

export function controller () {
    console.log('Controller cargado')
    console.log(GENEROS)
    const aGeneros = GENEROS
    let iGenero
    let iAutor
    let html = ''

    let selectGeneros = document.querySelector('#generos')
    let selectAutores = document.querySelector('#autores')
    let btnPedir = document.querySelector("#btnPedir")

    selectGeneros.addEventListener('change', onChangeGenero)
    selectAutores.addEventListener('change', onChangeAutores)

    btnPedir.addEventListener('click', onclickPedir)
    btnPedir.

    aGeneros.forEach ( item => {
        html += `<option value="${item.value}">${item.label}</option>`     
    })

    selectGeneros.innerHTML = html

    function onChangeGenero(ev) {
        iGenero = ev.target.selectedIndex
        let aAutores = []
        html = '<option value=""></option>'
        if (iGenero) {
            aAutores = aGeneros[iGenero].autores
            aAutores.forEach ( item => { 
                html += `<option value="${item.value}">${item.label}</option>`     
            })    
            selectAutores.focus()
        } 
        selectAutores.innerHTML = html
        btnPedir.textContent = 'Pedir titulos'
        btnPedir.disabled = true

    }
     

    function onChangeAutores (ev) { 
        if (ev.target.selectedIndex) {
            iAutor = ev.target.selectedIndex - 1
            btnPedir.textContent = 'Pedir titulos de ' + aGeneros[iGenero].autores[iAutor].label
            btnPedir.disabled = false
        } else {
            btnPedir.textContent = 'Pedir titulos'
            btnPedir.disabled = true
                    }
    }
    }
    function onclickPedir (){
        console.clear()
        console.log('Iniciando peticion')
        ajax


    }


function ajax(clave) {


    const http = new XMLHttpRequest()
    let http = new XMLHttpRequest()
    http.addEventListener('readystatechange'; )
    //http.onreadystatechange = onResponde


    http.open ('GET', url)
    http.send ()

    Function onResponde () {
        console.log (http.readyState)
        if (http.readyState == 4 && http.status == 200) {
            procesarRespuesta (http.responseText)

        }
    }
}
function procesarRespuesta(respuese){
        let aDatos = JSON.parse(Response.items
        console.log(aDatos)
        let aDatosFinal = aDatos.map ( item => item.volumeinfo}
        console.log(aDatosFinal)
        mostrarRespuesta(aDatosFinal)    
}
mostrarRespuesta(aDatos){

    let tabla = '<table>'
    table + = 

}
