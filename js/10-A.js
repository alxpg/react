const deportes = ['futbol', 'tenis', 'baloncesto', 'natación', 'ciclismo']; //Array original

deportes.push('taekwondo'); //Adiciona un elemento al final del array, pero modifica el valor del array no se recomienda en REACT. como alternativa esta el metodo

const deportes2 = [...deportes, 'boxeo']; //Crea un nuevo array con los elementos del array original y le adiciona el nuevo elemento        

deportes.shift(); //Elimina el primer elemento del array, pero modifica el valor del array no se recomienda en REACT. como alternativa esta el metodo siguiente

const deportes3= deportes.filter(function(sport){ //Filter permite sacar o mantener elementos en base a cierta condicion, pero solo filtra sin modificar el array original
    if(sport !== 'futbol'){ //!==filtra todos los elementos menos futbol
        return sport
    }
})

const deportes4 = deportes.map(function(sport){ //Map itera sobre todos los elementos de la colección y devuelve un nuevo array con los elementos modificados
    if(sport === 'ciclismo'){
        return 'lanzamiento de disco'
    } else {
        return sport
    }
    });
    console.table(deportes4);