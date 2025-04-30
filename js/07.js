const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const cliente = {
    nombre: 'Alex',
    premium : true    
}

const carrito = {
    cantidad: 20,
    //spread operator para copiar el objeto producto
    ...producto // Copia de producto en carrito
}

//como unir dos objetos
const resultado = Object.assign(producto, cliente);
console.log(resultado);