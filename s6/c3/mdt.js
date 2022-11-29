/* 
? Dada una matriz, recorrer sus valores 
y sumar solo los números 
que estén por encima o sean iguales a 10, pero menores que 1000.

[
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4]
];
*/

let numeros =
    [
        [10, 3, 2, 1, 4, 7, 900], // longitud = 7
        [5, 5, 10, 100, 4],
        [5, 125, 10, 1020, 4],
        [5, 5, 5097, 100, 4]
    ];

//numeros.length //


// SEBASTIAN
/* let suma = 0;

for (let i = 0; i < numeros.length; i++) {
 
    
    for (let j = 0; j < numeros[i].length; j++) {
        
        if (numeros[i][j] >= 10 && numeros[i][j] < 1000) {
            suma += numeros[i][j];
        }

    }
}

console.log(suma); */


let matrizMil =
[
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4]
]


function sumaMil(matriz) {
    let suma = 0
    
    for (let i = 0; i < matriz.length; i++) {

        //console.log(matriz[i]); // fila

        for (let j = 0; j < matriz[i].length; j++) {
            //console.log(matriz[i][j]); // ELEMENTO FINAL

            if (matriz[i][j] >= 10 && matriz[i][j] < 1000) {
                suma = suma + matriz[i][j]
            }
        }

    }

    return suma
}

console.log(sumaMil(matrizMil));

/* function sumar (n1 , n2){
    return n1 + n2
}



console.log(sumar(1,2));

console.log(sumar(12,22));
console.log(sumar(12,22));

let a = 100
let b = 2

console.log(sumar(a,b)); */
