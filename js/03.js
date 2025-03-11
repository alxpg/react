//Tipos de Dato.

//undefined
let nombre;
console.log(nombre); //undefined
console.log(typeof nombre); 

//String srive para representar texto como "Hola mundo" o el nombre de una persona
const cadena = "Cadena de string";
console.log(cadena); //Cadena de string
console.log(typeof cadena); //string


const numero = "10";
const numero1 = 10.5;
const numero2= -100;

console.log(numero); //10
console.log(typeof numero); //10
console.log(numero1, numero2); //10
console.log(typeof numero1); //10
console.log(typeof numero2); //10

//Booleano
const booleano = true;  //true o false
console.log(booleano); //true
console.log(typeof booleano); //boolean

//Null
const nulo = null; //Requiero de un valor nulo
console.log(nulo); //null
console.log(typeof nulo); //object

//Symbol
const simbolo = Symbol(20); //Valor unico no hay dos simbolos iguales aunque se creen con el mismo valor
const simbolo1 = Symbol(20);
console.log(simbolo); //Symbol()
console.log(simbolo1); //Symbol()
console.log(simbolo === simbolo1); //false
console.log(typeof simbolo); //symbol
