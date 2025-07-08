// Eventos del DOM - Click

const heading = document.querySelector('.heading');
const enlace = document.querySelectorAll('.navegacion a ');
//const navigation = document.querySelector('.navigation');
//heading.textContent = 'Eventos nuevos del DOM - Click';
//navigation.textContent = 'navegacion y modificacion del DOM ';
 heading.addEventListener('click', () => {
    heading.textContent = 'Eventos nuevos del DOM';
    heading.style.color = 'green';
    heading.style.backgroundColor = 'gray';
    heading.style.padding = '10px';
    heading.style.borderRadius = '10px';
    heading.style.fontSize = '2rem';
    heading.style.textAlign = 'center';
    heading.style.transition = 'all 0.5s ease';
    heading.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    heading.style.cursor = 'pointer';
 });

 heading.addEventListener('mouseout', () => {
    heading.textContent = 'Saliendo de Eventos nuevos del DOM';
    heading.style.color = 'green';
    heading.style.backgroundColor = 'white';
    heading.style.padding = '10px';
    heading.style.borderRadius = '10px';
    heading.style.fontSize = '2rem';
    heading.style.textAlign = 'center';
    heading.style.transition = 'all 0.5s ease';
    heading.style.boxShadow = 'none';
 });

enlace.forEach((enlace) => {
      enlace.addEventListener('click',  (e) => {
         e.preventDefault(); // Evita que el enlace navegue a otra pagina
         e.target.textContent = 'Diste click en el ' + e.target.textContent;
         console.log(e.target.textContent);
         console.log(e.target.getAttribute('href'));
         enlace.textContent = e.target.textContent;
         enlace.style.color = 'blue';
         enlace.style.backgroundColor = 'white';
         enlace.style.padding = '10px';
         enlace.style.borderRadius = '10px';
         enlace.style.fontSize = '2rem';
         enlace.style.textAlign = 'center';
         enlace.style.transition = 'all 0.5s ease';
         enlace.style.boxShadow = 'none';
      });
   });   