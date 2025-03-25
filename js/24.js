//ECMAScript te permite exportar funciones y variables para que puedan ser importadas por otros scripts.
//Para este caso se importan las funciones de suma y resta del archivo funciones.js
//Se importa la función suma y resta del archivo funciones.js

import { restar } from "./funciones.js"
import { sumar as funcionSuma } from "./funciones.js"// as es un alias para reasignar el nombre a la importancion

const resultado = funcionSuma (10, 20)
const resulta = restar (100, 50)

console.log(resultado) 

//Si se exporta un funcion debe ser con el mismo nombre y siempre van a la cabeza del documento