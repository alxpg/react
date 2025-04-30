// Arrows Function

// Las funciones de flecha son una forma más corta de escribir funciones en JavaScript y no pueden leer los parametros si estan antes de la funcion

const sumar = (numero1 = 0, numero2 = 0) => console.log(numero1 + numero2); // el simbolo => se llama flecha y se utiliza para definir funciones


sumar(10, 20); //10 y 20 son los argumentos que se pasan a la función
sumar(100, 131); //100 y 131 son los argumentos que se pasan a la función
sumar(50); //50 y 0 son los argumentos que se pasan a la función