// Array Methods

const tecnologias = ['html', 'css', 'javascript', 'react', 'node'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Filter: Nos sirve para sacar un elemento del arreglo o mantenerlo y sacar a los demas

const nuevoArray = tecnologias.filter(function(tech) {
 //   console.table(tech)
})
const nuevoArreglo = numbers.filter(function(number) {
   // console.log(number)
})

// En vez de colocar funciones en varias lineas de codigo se puede simplificar de la siguiente manera

const nuevo2Array = tecnologias.filter(tech => console.log(tech)) // Se puede simplificar de esta manera
const nuevo2_Array = numbers.filter(number => console.log(number)) // Se puede simplificar de esta manera

//Ahora vamos a sacar solo un elemento del arreglo

const nuevo3Array = tecnologias.filter(tech => tech === 'react') // De esta manera solo se va a mostrar el elemento que sea igual a 'react'
const nuevo3_Array = numbers.filter(number => number === 10) // Este metodo tambien es llamado Callback function ya que se esta pasando una funcion como argumento
console.table(nuevo3Array)
console.table(nuevo3_Array)

//Ahora vamos a sacar todos los elementos que sean diferentes a 'react'
const nuevo4Array = tecnologias.filter(tech => tech !== 'react') // De esta manera solo se va a mostrar el elemento que sea diferente a 'react'
const nuevo4_Array = numbers.filter(number => number !== 10)
console.table(nuevo4Array)
console.table(nuevo4_Array)

//Metodo de array includes.
//Este metodo nos va a permitir saber si un elemento esta dentro de un arreglo o no.

const resultado = tecnologias.includes('react') // Si el elemento esta dentro del arreglo nos va a devolver un true
const resultado2 = tecnologias.includes('angular') // Si el elemento no esta dentro del arreglo nos va a devolver un false
console.log(resultado)
console.log(resultado2)

// Some - Devuelve true si al menos un elemento cumple con la condición
// Every - Devuelve true si todos los elementos cumplen con la condición 

