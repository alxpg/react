const saldo = 1000;
const pagar = 500;
const tarjeta = true;

/**
 * Logical Or y Logical And
 * || -> OR al menos una condición se cumple
 * && -> AND todas las condiciones se deben cumplir
 */

//if (saldo > pagar) { //se cumple la condición porque 1000 es mayor 500 y si alcanza a pagar
//if (saldo > pagar && tarjeta){  // Aqui la condicion AND && comprueba que todos los medios de pago son validos
if (saldo > pagar || tarjeta){ // Aqui la condicion OR || comprueba que al menos uno de los medios de pago es valido
    console.log('Puedes pagar');
//} else if (tarjeta) {
    //console.log('Puedes pagar con tarjeta');
} else {
    console.log('No puedes pagar');
}   