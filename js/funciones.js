//ECMAScript se conecta a otros archivos de JavaScript para importar y exportar funciones y variables.
// Para este caso se exportan las funciones de suma y resta para el archivo 24.js
//Al exportar las funciones siempre debe ser con el mismo nombre

function sumar (n1, n2) {
    return n1 + n2
}

function restar (n1, n2) {
    return n1 - n2
}   

// Otra opcion de exportar

export{
    sumar,
    restar
}