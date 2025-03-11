let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
// declaramos las variables
let name;
let phone;
let email;
// menú principal de selección de opciones
while(true) {
let opcion = prompt("Ingrese su opción: \n  1. Mostrar el primer contacto (first) \n  2. Mostrar el último contacto \n 3. Mostrar todos los contactos \n 4. Agregar un nuevo contacto \n 5. Salir");
if (opcion === "5" || opcion === "cinco" || opcion === "5.") {
    confirm("desea salir del programa?");
    break;
   }
switch (opcion) {
    // muestra el primer contacto de la lista
    case "1":
        console.log(contacts[0]);
        break;
    // muestra el último contacto de la lista
    case "2":
        console.log(contacts[contacts.length - 1]);
        break;
    // muestra todos los contactos de la lista
    case "3":
       //console.log(contacts); 
       for( let key in contacts) { 
        console.log(${key}); 
            }
       break;
    // agrega un contacto nuevo
    case "4":
    // condicional, si no hay ningún campo vacío, agrega al usuario
        if (name !== "" && phone !== "" && email !== ""){
              let nuevoContacto = {
                name:  prompt("Ingrese el nombre completo: ", ""),
                phone: prompt("Ingrese el número telefónico: ",""),
                email: prompt("ingrese su correo: ","")
      };
      
      contacts.push(nuevoContacto);
      alert("Contacto agregado con éxito.");
      console.log(contacts[contacts.length - 1]);
      
     // en caso contrario no lo agrega   
    }else {
        alert("Para ingresar un nuevo contacto agregue todos los datos.."); 
        
    }   
      break;
    
    // si no se selecciona una opcion del menú principal manda alerta
    default:
        alert("Debe elegir una opcion!");
    
   }
   
 }