/* 
   * Bubble Sort 
*/

/* let contA = 15;
let contB = 25;

console.log(contA, contB);

console.log('swap');

let aux = contA;
contA = contB;
contB = aux;

console.log(contA, contB); */


const numeros = [5, 1, 4, 2, 8];

console.log(numeros[4 + 1]); //undefined
 //swapping
/*  let aux = numeros[1];
 numeros[1] = numeros[1 + 1];
 numeros[1 + 1] = aux;
 
 console.log(numeros); */

function bubbleSort(array){
    let contador =  0;
    for (let i = 0; i < array.length; i++) { // n = 5

        for (let j = 0; j < array.length - 1; j++) { // n = 5
           console.log('iteracion: ' + contador);
          
            if (array[j] > array[j + 1]) {
                //swapping
              let aux = array[j];
              array[j] = array[j + 1];
              array[j + 1] = aux;    
            }
           // contador++
        }
        
    }

}

console.log('ordenando....'); 

bubbleSort(numeros)

console.log(numeros); 


