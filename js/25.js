//Fetch API va muy de la mano con PROMISES y puede ser colocado dentro de una funcion.
/**Fetch API proporciona una interfaz para integrar recursos para poder obtener datos a traves de la red */

/**PROMISES es un objeto que va a estar disponible a futuro o no
 * Los PROMISES cuentan con varios pasos y con varios estados
 * Los pasos se representan por una sintaxis .then()
 * 
*/

const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url) //Quiero obtener los datos de esta URL
    .then((response)=>{ //Entonces que quiero hacer
        if(response.ok){
        return response.json()
        }   
        throw new Error ('Error al obtener los datos')
    }) 
    .then(data =>{ 
        console.log(data) 
    })
    .catch(error => {  // Solo se ejecuta cuando hay problemas de red
        console.log(error) 
    })