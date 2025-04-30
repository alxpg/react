//Optional chaining operator (?): Este es un operador que permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar si cada referencia en la cadena es válida. Si una referencia en la cadena es null o undefined, la expresión se corta y la expresión completa se evalúa como undefined.

//Sintaxis: objeto?.propiedad

//Optional chaining operator (?): Se utiliza mucho en respuesta de API, para validar si existe una propiedad en un objeto. O en base de datos, para validar si existe un campo en un objeto.
const alumno = {
    nombre: 'Juan',
    clase: 'Programacion 1',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}
    console.log(alumno.examenes?.examen1); // Esta propiedad comprueba que exista examenes y examen1
    console.log('Despues de Alumno');

//Nullish coalescing operator (??): Este es un operador que devuelve el operando derecho cuando el operando izquierdo es null o undefined. De lo contrario, devuelve el operando izquierdo.

//Sintaxis: operando1 ?? operando2

//Nullish coalescing operator (??): Se utiliza mucho en la creacion de paginadores, para validar si existe una pagina en un objeto.

const pagina = null ?? 1; // Si pagina es null o undefined, se asigna 1, sino asigna null
const pagina1 = 10 ?? 1; // Si pagina es null o undefined, se asigna 1, sino asigna 10 
console.log(pagina);
console.log(pagina1);
