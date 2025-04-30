// Funciones: function expression
// Descripción: Crear una función que reciba un número y devuelva el cuadrado de ese número. Llamar a la función y mostrar el resultado en consola.
// Las funciones expression no se pueden llamar antes de ser declaradas.

const sumar = function (numero1 = 0, numero2 = 0){ //Nuevo parametro
    console.log(numero1 + numero2); // Se suman los dos parametros
}   

sumar(10, 20); //10 y 20 son los argumentos que se pasan a la función
sumar(100, 131); //100 y 131 son los argumentos que se pasan a la función
sumar(50); //50 y 0 son los argumentos que se pasan a la función