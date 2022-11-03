/* 
  ? For 🎆 
 while
 do while
*/

/* let i = 0
console.log(++i); */


/* for (let i = 0; i < 4; i++) {
    console.log('avanzar');
} */




/* let i = 1
while (i < 10) {
    console.log('avanzar' + i);
    i--
} */


/* let k = 0
do {
    console.log('avanzar');
    
} while (k === 'Hola'); */

/* 
Crear una función que retorne la cantidad números impares del del 1 al 20
*/

function cantImpares(){

    let impares = 0
    for (let i = 0; i <= 20 ; i++) {
        if (i % 2 !==  0) {
            // impares++
            impares = impares + 1
        }
    }

    return impares
}

console.log(cantImpares())