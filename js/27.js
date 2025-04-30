//Performance y Multiple Async Await
// Fetch API con Async / Await

const url = 'https://jsonplaceholder.typicode.com/comments'
//**El codigo espera "await" obtener los datos y si no los recibe despliega la otra opcion*/
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'

const consultarAPI = async () => {
    try {
        const inicio = performance.now() //Marca el tiempo de inicio

        const response = await fetch(url) //Este espera a que se cumpla la promesa de la llamada a la API y lo asigna a response
        const data = await response.json() //Seguido de la llamada a la API, espera a que se cumpla la promesa de la conversion a json y lo asigna a data
        console.log(data)

        const response2 = await fetch(url2) //Luego sigue con la segunda llamada a la API y lo asigna a response2
        const data2 = await response2.json() //seguido de la llamada a la API, espera a que se cumpla la promesa de la conversion a json y lo asigna a data2
        console.log(data2)

        const response3 = await fetch(url) //Luego sigue con la tercera llamada a la API y lo asigna a response3
        const data3 = await response3.json() //seguido de la llamada a la API, espera a que se cumpla la promesa de la conversion a json y lo asigna a data3
        console.log(data3)

        const fin = performance.now() //Marca el tiempo de fin
        console.log(`Tiempo de ejecución: ${fin - inicio} ms`) //Calcula el tiempo de ejecución en milisegundos
    } catch (error) {
        console.log(error.message)    
    }
}

consultarAPI()

