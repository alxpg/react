// Evaluacion de cortocircuito (Short-circuit evaluation): Este es un concepto que se utiliza en la evaluación de expresiones lógicas. Si el primer operando de una expresión lógica AND (&&) es falso, el segundo operando no se evalúa. Si el primer operando de una expresión lógica OR (||) es verdadero, el segundo operando no se evalúa.

// //Sintaxis: operando1 && operando2


const auth = true;

if ({}) {
    console.log(truthy); // truthy es una valor que es considerado true cuando se evalua en un contexto de boolean. Se imprime en consola porque el valor es verdadero ya sea un numero, string, objeto, etc.
} else {
    console.log(falsy); // falsy solo se cumple cuando el valor sea unicamente  falso
}


// //Evaluacion de cortocircuito (Short-circuit evaluation): Se utiliza mucho en la validacion de formularios, para validar si un campo esta vacio o no.

const auth1 = true;
const auth2 = {};
auth1 && console.log('Autenticado'); // Si auth es verdadero, se imprime Autenticado, pero tambien si está vacío imprime Autenticado
auth2 ? console.log('Si Autenticado'): '' // Si auth es verdadero, se imprime Autenticado, pero tambien si está vacío imprime Autenticado