/* 
 * ARRAY BIMENSIONAL
*/

let numeros = [1, 2, 3, 4]


let letras = ['a', 'b']

let personas = [
    {
        nombre: 'Martin'
    },
    {
        nombre: 'Nelson'
    }
];







let matriz = [
    //   0  1  2
    [1, 1, 1],   // indices --> 0
    [2, 'H', 2],  // indices --> 1
    [3, 3, 'Z']  // indices --> 2
]

console.table(matriz);
/* console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]); */

for (let i = 0; i < matriz.length; i++) {

    const arrayFila = matriz[i]
    for (let j = 0; j < arrayFila.length; j++) {
        const elemento = arrayFila[j] 

        console.log(elemento);

    }


}

