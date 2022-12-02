/* 
   * Bubble Sort 
*/


/* let contA = 15
let contB = 25

console.log(contA, contB);

// swap

let aux = contA

contA = contB
contB = aux
console.log('swap...');

console.log(contA, contB);
 */

const numeros = [5, 1, 4, 2, 8];

// console.log(numeros.sort());

//  1, 4, 2 , 5 , 8

const bubbleSortAsc = (array) => {
    // let contador = 1
    for (let i = 0; i < array.length; i++) { // n = 5

        for (let j = 0; j < array.length - 1; j++) { // n = 5
            //console.log('iteracion: ' + contador);
            if (array[j] > array[j + 1]) {
                // swap
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux 
            }
            //contador++            
        }
    
    }

} 

console.log('ordenando.asc..');

bubbleSortAsc(numeros)

console.log(numeros);


const bubbleSortDesc = (array) => {
    // let contador = 1
    for (let i = 0; i < array.length; i++) { // n = 5

        for (let j = 0; j < array.length - 1; j++) { // n = 5
            //console.log('iteracion: ' + contador);
            if (array[j] < array[j + 1]) {
                // swap
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux 
            }
            //contador++            
        }
    
    }

} 

console.log('ordenando Desc...');

bubbleSortDesc(numeros)

console.log(numeros);







const bubbleSortObj = (array) => {
    // let contador = 1
    for (let i = 0; i < array.length; i++) { // n = 5

        for (let j = 0; j < array.length - 1; j++) { // n = 5
            //console.log('iteracion: ' + contador);
            if (array[j].altura < array[j + 1].altura) {
                // swap
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux 
            }
            //contador++            
        }
    
    }
} 

console.log('ordenando Desc...');

bubbleSortObj(numeros)

console.log(numeros);