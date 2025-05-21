// SELECTOR
// Todas las modificaciones que se hacen en el DOM o HTML por medio de JS requieren o incian con un selector
// Basicamente es como un CSS, seleccionas un elemento y le aplicas una propiedad para que se vea diferente
// Lo mismo pasa con JS, seleccionas un elemento y vas a realizar operaciones por medio de JS para agregar atributos, eliminarlo, modificarlos, clases, estilos, etc.

const heading = document.querySelector('.heading'); // Selecciona el primer elemento h1. Y cuando se selecciona querySelector, tienes selectores muy similares a los de CSS como a una .clase, #id, pseudo selectores como :last-of-typ o nth-child.

console.log(heading); // Imprime el elemento en la consola
console.log(heading.tagName); // Imprime el elemento en la consola
console.log(heading.textContent); // Imprime el elemento en la consola
console.log(heading.className); // Imprime el elemento en la consola
console.log(heading.addEventListener); // Imprime el elemento en la consola

const enlaces = document.querySelectorAll('.navegacion a'); // Selecciona todos los elementos a dentro de la clase navegacion. Regresa un NodeList, que es una lista de nodos, y puedes recorrerla con un forEach
const enlaces2 = document.querySelector('.navegacion a'); // Selecciona todos los elementos a dentro de la clase navegacion. Regresa un NodeList, que es una lista de nodos, y puedes recorrerla con un forEach
console.log(enlaces); // Imprime el elemento en la consola
console.log(enlaces2); // Imprime el elemento en la consola