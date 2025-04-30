// Comparadores, estrictos y no estrictos
// == comparador no estricto
// === comparador estricto

const numero1 = 10;
//const numero2 = 10; // Si son iguales al comparar con ==
//const numero2 = "10"; // si son iguales al comparar con == porque compara valores pero no tipos de datos
//const numero2 = 10; // Si son iguales al comparar con === porque compara valores y tipos de datos
const numero2 = "10"; // No son iguales al comparar con === porque compara valores y tipos de datos

if( numero1 === numero2) {
    console.log('Si, son iguales');
} else {
    console.log('No, no son iguales');
}   
