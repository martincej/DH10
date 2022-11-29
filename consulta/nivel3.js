/* 
1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
   - 2 String   
   - 1 Boolean
   - 1 Number
   - 1 Array
   - 1 Metodo que retorne un saludito
    * por ejemplo:
    
     let canHijo = {
       nombre : 'Negrito',
       color  : 'Negrito',
       estaVacunado : true,
       edad : 10,
       vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
       saludo: function(){
           return 'wouf wouf wouf..'
       } 
     }
    
  - Luego desarrollar una funcion que liste indiidualmente ls elementos de la propiedad del tipo Array 


2 - Dado el Siguiente array de personas desarrollar funciones:
  - Funcion que reciba el array de personas y liste el nombre de cada una. 
  - Funcion que reciba el array de personas y retorne en un array los que son programadores.
  - Funcion que reciba el array de personas y unida buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null

*/
let canHijo = {
    nombre : 'Negrito',
    color  : 'Negrito',
    estaVacunado : true,
    edad : 10,
    vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
    saludo: function(){
        return 'wouf wouf wouf..'
    } 
  }

  const listarVacunas = (objCan) => {
    for (let i = 0; i < objCan.vacunas.length; i++) {
        const vacuna = objCan.vacunas[i];
        console.log(vacuna);        
    }
  }

//   listarVacunas(canHijo)


let personas = [
    {
      id: 0,
      isProgrammer: true,
      age: 28,
      name: "Harrington Curry",
      company:"TRANSLINK",
      favoriteFruit: "strawberry"
    },
    {
      id: 1,
      isProgrammer: false,
      age: 38,
      name: "Greta Morton",
      company:"PYRAMI",
      favoriteFruit: "apple"
    },
    {
      id: 2,
      isProgrammer: false,
      age: 32,
      name: "Hester Bowen",
      "company": "TURNABOUT",
      favoriteFruit: "apple"
    },
    {
      id: 3,
      isProgrammer: false,
      age: 25,
      name: "Melendez Mcfarland",
      "company": "XSPORTS",
      favoriteFruit: "strawberry"
    },
    {
      id: 4,
      isProgrammer: false,
      age: 31,
      name: "Kimberly Matthews",
      "company": "KNOWLYSIS",
      favoriteFruit: "banana"
    },
    {
      id: 5,
      isProgrammer: false,
      age: 36,
      name: "Hardin Sims",
      "company": "SEALOUD",
      favoriteFruit: "banana"
    },
    {
      id: 6,
      isProgrammer: false,
      age: 29,
      name: "Natalia Huff",
      "company": "ENERSOL",
      favoriteFruit: "apple"
    }
]
console.table(personas)
/* 
  - Funcion que reciba el array de personas y liste el nombre de cada una. 
*/

const listarPersonas = (arrayPersonas) => {
    for (let i = 0; i < arrayPersonas.length; i++) {
        const persona = arrayPersonas[i];
        console.log(persona.name);
    }
}
// listarPersonas(personas)

/* 
  - Funcion que reciba el array de personas y retorne en un array los que son programadores.
*/

const obtenerProgramadores = (arrayPersonas) => {
    let arrayProgramadores =  []
    for (let i = 0; i < arrayPersonas.length; i++) {
        const persona = arrayPersonas[i];
        if (persona.isProgrammer) {
            arrayProgramadores.push(persona)
        }
    }
    return arrayProgramadores
}

// console.table(obtenerProgramadores(personas));

/* 
- Funcion que reciba el array de personas y un id a buscar, 
       retorne la persona en caso de encontrar, 
       caso contrario retorne null
*/

const buscarPersona = (arrayPersonas ,id) => {
    for (let i = 0; i < arrayPersonas.length; i++) {
        const persona = arrayPersonas[i];
        if (persona.id === id) {
            return persona
        }
    }
    return null
}

/* console.log(buscarPersona(personas, 1));
console.log(buscarPersona(personas, 100)); */