// Fetch API con Async / Await
/** Async Await si requiere de una funcion y puede ser un arrow function o un function declaration */

const url = 'https://jsonplaceholder.typicode.com/comments';

//**El codigo espera "await" obtener los datos y si no los recibe despliega la otra opcion*/
    
fetch(url) //Llamado
        .then((response)=>{  //Then su acccion es esperar a obtener los datos para reaccionar. 
            if(response.ok){
                return response.json()
            }   
            throw new Error ('Error al obtener los datos')
        }) 
        .then(data => console.log(data)) // promise, si no se cumple el then anterior, revisa este 
        .catch(error => console.log(error))   //promise, Solo se ejecuta cuando hay problemas de red

    
// Metodo Async Await    
     const consultarAPI = async () => {
        try {
            const response = await fetch(url) //con fetch hace el llamado una vez terminado, lo asigna al response
            if(!response.ok) {
                throw new Error ('Error al obtener los datos')
            }
            const data = await response.json() //Una vez obtenido los datos y que se hayan asignado a response, los reasgina a data
            console.log(data)
        } catch (error) {
            console.log(error.message)    
        }
    }
        

consultarAPI()