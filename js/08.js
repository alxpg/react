// Plantilla de Strings y de concatenacion
//concatenar un valro quiere decir unir unas variables con otras o mezclar algunos valores con otros
// Template Strings

const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';    //se puede concatenar con el signo +
const marca = 'Marca Super Patito';

console.log(producto + " tiene un precio de " + precio + " de la marca " + marca);

//para concatenar con template strings se usan las comillas invertidas ``
console.log(`El producto ${producto} tiene un precio de ${precio} de la marca ${marca}`); //se pueden poner variables dentro de las llaves

console.log(`${producto} $${precio} Dolares, Marca: ${marca}`); //se pueden poner variables dentro de las llaves
