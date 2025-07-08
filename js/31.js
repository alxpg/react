//Eventos del DOM - Inputs

// Seleccionamos el input de tipo texto y lo podemos ver en la consola
const inputNombre= document.querySelector('#nombre');
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value);
});

//Evento del password para

const inputPassword = document.querySelector('#password');
inputPassword.addEventListener('input', functionPassword)

function functionPassword() {
    inputPassword.type = 'text';

    setTimeout(() => {
        inputPassword.type = 'password';
    }, 700);
}