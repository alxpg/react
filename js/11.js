//Destructuring de arrays
const deportes = ['futbol', 'tenis', 'baloncesto', 'natación', 'ciclismo'];

const baloncesto= deportes[3]; //Extrae el cuarto elemento del array

//Destructuring de arrays
const [,,,,bicicleta] = deportes; //Extrae el cuarto elemento del array
console.table(bicicleta);