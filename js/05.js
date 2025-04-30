// Objetos manipulacion

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

//Reescribir un valor
producto.disponible = false;
//console.log(producto);

//Agregar nuevas propiedades cuando no existe en el objeto
producto.imagen = "imagen.jpg";
//console.log(producto);

//Eliminar propiedades de un objeto
delete producto.precio; //Elimina la propiedad disponible
//console.log(producto);

//Object.freeze(producto); //Congela el objeto, no se puede modificar, agregar o eliminar propiedades
Object.seal(producto); //Seal no permite agregar ni eliminar propiedades, pero si modificar las existentes
console.log(producto);