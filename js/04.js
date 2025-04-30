// Objetos
// Un objeto es una coleccion de propiedades, y una propiedad es una asociacion entre un nombre (o clave) y un valor. Un valor de propiedad puede ser una funcion, en cuyo caso la propiedad es conocida como un
// metodo. Ademas de los objetos que estan predefinidos en el navegador, puedes crear tus propios objetos. Aqui hay un ejemplo:

const producto = {
    nombreProducto: "Monitor 20 Pulgadas", // Propiedad es todo completo, key es nombreProducto y value es "Monitor 20 Pulgadas"
    precio: 300,
    disponible: true
}

/*console.log(producto);
console.log(typeof producto);
console.table(producto);*/

//Una caracteristica es puede acceder a las propiedades de un objeto con la notacion de punto o la notacion de corchetes. Aqui hay un ejemplo:

/*console.log(producto.precio); //Sintaxis de punto
console.log(producto['precio']);*/ //Sintaxis de corchetes

//Desctructuring
const {nombreProducto, precio, disponible} = producto;
console.log(nombreProducto);
console.log(precio);
console.log(disponible);

//Object Literal Enhacement. Sirve para unir dos objetos en uno solo 
const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

const rock = {
    banda: banda,
    genero: genero,
    canciones: canciones};
console.log(rock);
console.log(typeof rock);
console.table (rock);