/* 
* CLASE CONSULTA - MARTIN 🧉
*/

/* 
? Desarrollar una función que reciba 2 numeros y retorne la suma de ambos 

*/


function suma(n1, n2) {
    let res = n1 + n2;
    return res;
}


// console.log(sumaFecha(1, 2));
// console.log(suma(33, 23));


/* 

Desarrollar una función que reciba 4 numeros y calcular la suma de total
 ?     si el el resultado es par, retornar la mitad del total,  
 ?    caso contrario retornar el doble del total.
*/

/* const sumaFlecha = (n1, n2) => n1 + n2;

const sumaFlecha2 = n1 => n1 + 10; */


const sumaTotal = (n1, n2, n3, n4) => {
   
    let calculoTotal = n1 + n2 + n3 + n4;

    // console.log(calculoTotal);
    
    if (calculoTotal % 2 === 0) {
        return calculoTotal / 2
    } else {
        return calculoTotal * 2
    }
}

/* console.log(sumaTotal(1, 2, 3, 4));

console.log(sumaTotal(1, 2, 3, 1));
 */

/* 

- Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] ,
 luego desarrollar las siguientes funciones:

1 - Funcion que reciba un array de edades y retorne el promedio 
*/

let edades = [10, 9, 8, 22, 22,55, 80, 5, 63, 29, 9]
        
let edades1 = [10, 9]


function promedio(arrayEdades) {
    let sumatoria = 0;
    for (let i = 0; i < arrayEdades.length; i++) {
        // sumatoria += arrayEdades[i]
        sumatoria =  sumatoria + arrayEdades[i]
        // console.log(sumatoria);
    }
    return sumatoria / arrayEdades.length
}

// console.log(promedio(edades)) // promedio -> valor nuemro

/* 
5 - Funcion que reciba un array de edades y una edada buscar,
 retorne el primer índice si encuentra coincidencia o null caso contrario

*/
// console.table(edades);

function buscarEdades(arrayEdades, edad ) {

    for (let i = 0; i < arrayEdades.length; i++) {
        if (edad === arrayEdades[i]) {
            return i
        }
    }
    return null
}

/* console.log(buscarEdades(edades, 22)) // 3

console.log(buscarEdades(edades, 200)) // 3 */


/* 
 Funcion que reciba el array de personas y un id a buscar, 

       retorne la persona (objeto literal completo) en caso de encontrar, 
       caso contrario retorne null 
*/

let personas = [
    {
        nombre :'Apple', 
        id: 1
    },
    {nombre :'Amazon', id: 2} ,
    {nombre :'Google', id: 3} ,
    {nombre :'Microsoft', id: 4} ,
    {nombre :'Walmart', id: 5}
] 


// console.log(edades[0]);

/* console.log(personas[4].id);
console.log(personas[4].nombre); */

function buscarPersona(arrayPersonas, id ) {

    for (let i = 0; i < arrayPersonas.length; i++) {
        if (arrayPersonas[i].id === id) {
            return arrayPersonas[i]
        }
    }
    return null

}
// console.table(personas);
function buscarPersonaNombre(arrayPersonas, nombre ) {

    for (let i = 0; i < arrayPersonas.length; i++) {
      
        if (arrayPersonas[i].nombre === nombre) {
            return arrayPersonas[i]
        }
    }
    return null

}



console.log(buscarPersonaNombre(personas , 'Walmart'));
console.log(buscarPersonaNombre(personas , 'Tesla'));

// console.table(personas);


/* let canHijo = {
    nombre : 'Negrito',
    color  : 'Negrito',
    estaVacunado : true,
    edad : 10,
    vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
    saludo: function(){
        return 'wouf wouf wouf..' + this.nombre
    } 
  }

  console.log(canHijo.color); */