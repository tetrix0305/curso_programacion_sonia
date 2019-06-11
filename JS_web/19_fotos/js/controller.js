export function controller () {

    const.url'https://jsonplaceholder.typicode.com/photos'
        const.aFotos = []
    ajax(URL, 'GET',getFotos)

    function getFotos (response){
        console.log(respon)
        let html = ''
        response.forEach(item => {
            html += ´
             <div>
                 <h3>{item.title}</h3>
             </div>
    
        });
    }





