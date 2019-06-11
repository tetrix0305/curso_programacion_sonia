Skip to content
Why GitHub? 
Enterprise
Explore 
Marketplace
Pricing 
Search

Sign in
Sign up
1 2 4 alce65/front_cice
 Code  Issues 0  Pull requests 0  Projects 0  Security  Insights
Join GitHub today
GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together.

front_cice/JS_Web/18_form_dinamic/js/datos.js
@alce65 alce65 Form dinamic final
850cbe3 3 hours ago
20 lines (19 sloc)  854 Bytes
    
export const GENEROS = [
    {value:'', label: ''},
    {value:'P', label: 'Policiaco', autores : [
        {value:'Christie,Agata', label: 'Agata Christie'},
        {value:'Simenon,Geroges', label: 'Geroges Simenon'},
        {value:'Doyle,Arthur C.', label: 'Arthur C. Doyle'},
    ]},
    {value:'SF', label: 'Ciencia Ficcion', autores: [
        {value:'Asimov,Isaac', label: 'Isaac Asimov'},
        {value:'Gibson,William', label: 'William Gibson'},
        {value:'Bradbury,Ray', label: 'Ray Bradbury'},
    ]},
    {value:'F', label: 'Fantasia', autores: [
        {value:'Tolkien,JRR', label: 'JRR Tolkien'},
        {value:'Stoker,Bran', label: 'Bran Stoker'},
        {value:'Shelly,Mary', label: 'Mary Shelley'},
    ]}
]

// https://www.googleapis.com/books/v1/volumes?q=inauthor:${xxxxxx}&fields=items(volumeInfo(publisher,title,language))

