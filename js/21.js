// operadores Ternarios: Son operadores que nos permiten hacer una comparación y dependiendo del resultado de esa comparación, se ejecutará una acción u otra.
// Sintaxis: condición ? expresión1 : expresión2
// Ejemplo: saldo > pagar ? console.log('Puedes pagar') : console.log('No puedes pagar');

const auth = false;

const saldo = 100;
const pagar = 500;
const tarjeta = true;

/* if (auth) {
  console.log('Usuario Autenticado');
} else {
  console.log('Usuario no autenticado, ');
} */

//auth ? console.log('Usuario Autenticado') : console.log('Usuario no autenticado, inicia sesión');

saldo > pagar || tarjeta? //Condicional OR || ternario que comprueba que se cumpla al menos una de las condiciones
//saldo > pagar && tarjeta? //Condicional AND && ternario que comprueba que se cumplan todas las condiciones
    tarjeta ? console.log('Puedes pagar con tarjeta') :
    console.log('Puedes pagar con efectivo') :
    console.log('No puedes pagar, saldo insuficiente'); 