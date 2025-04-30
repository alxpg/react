// Funciones que retornan valores

//const sumar = function (numero1 = 0, numero2 = 0){  //Funcion expression que retorna un valor
//    return numero1 + numero2; 
//}

function sumar (numero1 = 0, numero2 = 0){ //Funcion declaration que retorna un valor
    return numero1 + numero2;
}

//const sumar = (numero1=0, numero2=0) => numero1 + numero2; //funcion de flecha

const resultado = sumar(10, 20); //10 y 20 son los argumentos que se pasan a la función

console.log(resultado); 