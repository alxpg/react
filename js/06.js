// Objetos Desestructuracion de dos o mas objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true,
    direccion:{
        ciudad: "Mexico",
        calle: "Felipe Carrillo Puerto"
    }
}

const {nombre} = producto; //Extraer el valor de la propiedad nombre del objeto producto
//const {nombre:nombreCliente} = cliente; //Renombrar la variable sirve para no confundir las variables
const {nombre: nombreCliente, direccion : { calle }} = cliente; //Extraer un objeto dentro de otro objeto
console.log(nombre);
console.log(nombreCliente);
console.log(calle);