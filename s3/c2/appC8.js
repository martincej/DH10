/* 
 For 
 while
*/




/* let k = 0

console.log(k++); // 
console.log(k + 1); // 
 */
/* let cont = 0;

let res = cont++;

let res2 = cont + 1; */


/* for (let i = 0; i < 4; i = i + 1) {  
   console.log('avanzar');
} */


/* let j = 0
while(j < 4){
    console.log('avanzar');
    j++
} */


/* let k = 0
do {
    console.log('avanzar');
    k++
} while (k < 4); */



function imprimirPares(nro){
    for (let i = 0; i < nro; i++) {
        if (i % 2 === 0) {
            console.log(i);
        } 
    }
}
console.log(imprimirPares(10))

function contarPares(nro){
    let pares = 0
    for (let i = 0; i < nro; i++) {
        if (i % 2 === 0) {
            pares++
        } 
    }
    return pares
}

console.log('--------')
console.log(contarPares(10))