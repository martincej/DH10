/* 
 *CIERRE SEMANA
 
 ARRAY Y OBJETOS LITERALES
 PRACTIQUEMOOOOS!!! 👐
*/

/* 
 Desarrollar una función que reciba 4 numeros y calcular la suma de total
    ? si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
    ? caso contrario retornar 'otra chance :)'.
*/

function sumatoria(n1, n2, n3, n4) {
    let total = n1 + n2 + n3 + n4

    if (total < 7) {
        return 'Aprobado'
    } else {
        return 'otra chance :)'
    }
}

/* console.log(sumatoria(3,4,5,6));

console.log(sumatoria(3,1,1,1)); */
// let sumatoriaFlecha = ()=>{}

/* 
 Desarrollar una función que reciba 4 numeros y calcular la suma de total
     ?si el el resultado es par, retornar la mitad del total,  
     ?caso contrario retornar el doble del total.
*/

function suma(n1, n2, n3, n4) {
    let total = n1 + n2 + n3 + n4
    // console.log(total);
    if (total % 2 === 0) {
        return total / 2
    } else {
        return total * 2
    }
}

/* console.log(suma(1,1,1,1));

console.log(suma(1,1,1,2)); */

/* 
- Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , 
luego desarrollar las siguientes funciones:

? 1 - Funcion que reciba un array de edades y retorne el promedio 
*/

let edades = [10, 9, 8, 22, 55, 80, 5, 8, 9, 9];

let edades2 = [10, 2, 3];

// console.log(edades.length);


function promedio(arrayEdades) {
    let sumatoria = 0;
    for (let i = 0; i < arrayEdades.length; i++) {
        sumatoria = sumatoria + arrayEdades[i]
    }
    return sumatoria / arrayEdades.length
}


/* 
?2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
*/

function elMayor(arrayEdades) {
    
    let aux = arrayEdades[0];
    
    for (let i = 0; i < arrayEdades.length; i++) {

      if ( arrayEdades[i] > aux) {
        aux = arrayEdades[i]
      }
    }
    return aux;
}


console.log(elMayor(edades)) //
console.log(elMayor(edades2)) //