/* FUNCIONES: Estas permiten escribir código reutilizable en JavaScript. Una función es un bloque de código que se diseña para hacer una tarea en particular. Una función se ejecutará cuando algo la invoque (llame).*/


//Function Declaration
function saludar(){ //Declaración de la función
    console.log('Hola, soy una función declarada'); // esto no se va a imprimir a la consola para eso hay que llamar a la función
}
saludar(); //Llamamos a la función para que se ejecute
saludar(); //Las funciones se pueden llamar las veces que se necesiten

// Para evitar crear tantas funciones se puede hacer una función que reciba un parametro el cual es una variable especial que se utiliza en una función y cuyo valor se refiere a que proviene del exterior de la función.

function sumar (numero1, numero2){ //Las funciones pueden recibir parametros desde cualquier parte del código
    console.log(numero1 + numero2); // Se suman los dos parametros
}

sumar(10, 20); //10 y 20 son los argumentos que se pasan a la función
sumar(100, 131); //100 y 131 son los argumentos que se pasan a la función