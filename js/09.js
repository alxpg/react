//Arrays o arreglos es un objeto similar a un listado de elementos, que se pueden acceder por su índice.
//En JavaScript, los arrays comienzan a contar desde 0.
//Para crear un array, se utilizan corchetes [] y se separan los elementos por comas.
//Ejemplo:  

const frutas = ['manzana', 'pera', 'melon', 'uva', 'sandía', 'mango']; //para tener un buen arreglo se recomienda que todos los elementos sean del mismo tipo.
//console.table(frutas);
//console.log(frutas[2]); //manzana



//para eliminar el primer indice de un arreglo se utiliza el método shift().

/*frutas.shift();
console.table(frutas);

//Para agregar un elemento al final de un array, se utiliza el método push().
//Ejemplo:
frutas.push('kiwi');
console.table(frutas);

//Generar un arreglo nuevo con los elementos de frutas
const frutas2 = [...frutas, 'naranja'];
console.table(frutas2);

//Para agregar un elemento al inicio de un array, se utiliza el método unshift().
//Ejemplo:  
frutas.unshift('fresa');
console.table(`${frutas}, ${frutas2}`)*/

//filter srive para sacar elementos de un arreglo
//Ejemplo:
const frutas3 = frutas.filter(function(frutitas) {
    if(frutitas !== 'melon') {
        return frutitas;
    }
});
    //console.log(frutas3);

//map sirve para modificar los elementos de un arreglo sin que sean modificados en el arreglo original.
//Ejemplo:
const frutas4 = frutas.map(function(frutitas) {
    return frutitas + 's';
});
console.log(frutas4);


//map sirve para modificar los elementos de un arreglo sin que sean modificados en el arreglo original.
const frutas5 = frutas.map(function(frutitas) {
    if(frutitas === 'melon') { //si el elemento es melon, se cambia por papaya sin modificar el arreglo original.
        return 'papaya';
    } else {
        return frutitas;
    }
});
    console.log(frutas5);

