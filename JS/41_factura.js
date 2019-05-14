/**
 * Objeto Facturas
 * 
 * Definir la estructura de un objeto que almacena una factura. 
 * Las facturas están formadas por 
 * - la información de la propia empresa (nombre de la empresa, dirección, teléfono, NIF),
 * - la información del cliente (similar a la de la empresa),
 * - una lista de elementos (cada uno de los cuales dispone de descripción, precio, cantidad)
 * - y otra información básica de la factura (importe total, tipo de IVA, forma de pago).
 * Añadir un método que calcule el importe total de la factura 
 * y actualice el valor de la propiedad correspondiente.
 * Añadir otro método que muestre por pantalla el importe total de la factura
 * (en un formato HTML adecuado)
 * Los arrays que nos vamos a encontrar son de objetos.
 */
(function(){

    factura = {
       empresa: {
           nombre: 'Ediciones Boracay', 
           dirección: 'c/ Pez', 
           teléfono: '916583764', 
           NIF: 'B-64539874'},
       cliente: {
           nombre: 'Libros Tuatalug', 
           dirección: 'c/ Marques de ', 
           teléfono: '917256983', 
           NIF: 'M-64584741'},
       items: [ //esto es un array de objetos, el resultado de precio x cantidad da un array de number
           {descripcion: 'Libro 1', precio: 20, cantidad: 12},
           {descripcion: 'Libro 2', precio: 24, cantidad: 10},
           {descripcion: 'Libro 3', precio: 34, cantidad: 7},
       ],
       //map y reduce, paso de un array de objetos aun unico numero que lo ha sumado todo, sin un utilizar un bucle
       importeTotal: 0, //es una variable calculada
       tipoIVA: 0.23, 
       formaPago: 'efectivo',
       calculaImporte: function() { //map proyecta un array
           let iva = this.tipoIVA < 1 ? 1 + this.tipoIVA : this.tipoIVA
           return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a+b)*iva //reduce me devuelve siempre un numero, aunque que se puede utilizar para otrasa cosas
       },
       actualizaImporte: function () {
           this.importeTotal = this.calculaImporte()
       },
       muestraImporte: function () {
           //this.actualizaImporte()
          // let msg = 'El importe total (IVA incluido) es ' + this.importeTotal.toFixed(2) + ' €'
          let msg = 'El importe total (IVA incluido) es ' + this.calculaImporte.toFixed(2) + ' €'
          console.log(msg)
       }
   }
   factura.muestraImporte()
   })()