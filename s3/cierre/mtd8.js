/* 
 CIERRE IF FOR
*/
/* 
 ? Crear una función llamada cantidadPares que reciba un número por parámetro 
 ? y dame la cantidad de pares que hay desde él 0
 ? hasta él numero inclusive

*/
function cantidadPares(numero){  
    let contadorPares = 0
    for (let i = 0; i <= numero; i++) { 
        if (i % 2 === 0) { // i es par  
            contadorPares++
        }
    }
    return contadorPares
}
// 0 1 2 3 4
  console.log(cantidadPares(4)); // 3
/* 
console.log(cantidadPares(6)); // 4
console.log(cantidadPares(600000)); // 4 */


/* 
Crear una función que imprima los números entre el 5 y el 20,
saltando de tres en tres.
*/

// resolevr con array para el retorno de los valores
function imprimirTresEnTres(inicio, fin){
    for (let i = inicio ; i < fin; i = i + 3) {
        console.log(i);
    }
}
imprimirTresEnTres(9,20)



/* 
5
8
11
14
17
20
 */