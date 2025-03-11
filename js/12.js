// Iteradores de arreglos o arrays con for...of
//iterar nos permite acceder a cada valor de nuestro array
const deportes = ['futbol', 'tenis', 'baloncesto', 'natación', 'ciclismo', 'boxeo', 'atletismo', 'golf', 'beisbol', 'rugby'];
for (let i = 0; i < deportes.length; i++) {
    //console.log(deportes[i]);
}

//Foreach Loop es un metodo que ejecuta una funcion indicada por cada elemento del arreglo.
deportes.forEach(function(olimpiadas){ // forEach es parecida al arregle de for, pero es más sencillo de escribir.
    //console.log(olimpiadas);
});

//Map sirve para iterar, pero su caracteristica principal es que crea un nuevo arreglo con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

// La diferencia entre forEach y map es que map genera un nuevo arreglo, se itera pero su caracteristicas principal es es que genera un nuevo arreglo.

const deportes2 = deportes.map(function(olimpiadas) { //map es el mas utilizado en React, ya que genera un nuevo arreglo
    return olimpiadas;
});
//console.log(deportes2);

//For...of es un bucle que recorre los elementos de un objeto iterable, como un array, y ejecuta una sentencia específica para cada uno de los valores.
for (const olimpiadas of deportes) {
    console.table (olimpiadas);
}