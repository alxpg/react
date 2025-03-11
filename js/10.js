//Arrays como agrergar elementos sin modificar el array original
//En React no se recomienda modificar el array original sino crear un nuevo array con los elementos del array original y agregar el nuevo elemento
const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Angular', 'Vue']
tecnologias.push('Node.js')// Adiciona un elemento al final del array, pero modifica el valor del array no se recomienda en REACT. como alternativa esta el metodo 
const tecnologias2 = [...tecnologias, 'Next.js']//Crea un nuevo array con los elementos del array original y le adiciona el nuevo elemento
console.table(tecnologias2);
/*En react siempre tienes que escribir con funciones que no modifiquen directamente los valores de lo que se conoce como STAT
la pagina Does it mumate, puedes revisar si modifican el arreglo o no*/

//como eliminar el primer elemento de un array sin modificar el array original
tecnologias.shift()//Elimina el primer elemento del array, pero modifica el valor del array no se recomienda en REACT. como alternativa esta el metodo siguiente
const tecnologias3 = tecnologias.filter(function(tech){ //Filter permite sacar o mantener elementos en base a cierta condicion, pero solo filtra sin modificar el array original
    //if(tech === 'HTML'){ //===filtra solo el elemento exacto HTML
    if(tech !== 'HTML'){ //!==filtra todos los elementos menos HTML
        return tech
    }
})
//console.table(tecnologias3);

//como cambiar el ultimo elemento de un array sin modificar el array original
//Usamos el metodo map para recorrer el array y cambiar el ultimo elemento
const tecnologias4 = tecnologias.map(function(tech){ //Map itera sobre todos los elementos de la colección y devuelve un nuevo array con los elementos modificados
    if(tech === 'Vue'){
        return 'Flask'
    } else {
        return tech
    }
})

console.table(tecnologias4);