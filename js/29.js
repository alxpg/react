//manipular el DOM o elementos de HTML con JS
const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

heading.textContent = 'Nuevo Heading desde JS'; // Cambiar el texto del heading
heading.id = 'nuevo-id'; // Cambiar el id del heading

//console.log(heading.textContent); // Obtener el texto del heading

heading.removeAttribute('class'); // Eliminar la clase del heading

//Manipulando el login
const inputNombre = document.querySelector('#nombre');
const inputPassword = document.querySelector('#password');
inputPassword.value = 'Escribe tu contraseña'; // Cambiar el valor del input de contraseña
inputNombre.value = 'Escribe tu nombre'; // Cambiar el valor del input
inputNombre.dataset.nombre = "input"; // Agregar un atributo data al input

console.log(inputNombre.classList); // Obtener el valor del input
