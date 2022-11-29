/* 
 Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.
*/

let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // 0
    [333, 2500, 333, 123, 123, 22, 444],       // 1
    [44, 2500, 455, 1600, 455, 1600, 455],
    [55, 2500, 222, 22, 11, 3650, 33]
];

/* 
¿Cuánto gastamos los días viernes de este mes ?
gastos = 3650 + 1750 + 4500 + 1270

*/
console.table(gastos);

// gastos.length

function gastoNumDia(dia) {
    let contador = 0;
    
    for (let c = 0; c < gastos.length; c++) {
        contador += gastos[c][dia]
    }

    return contador
}

console.log(gastoNumDia(5))



// console.log(sumarDia(5)); //gastos = 3650 + 1750 + 4500 + 1270


/* function gastosSemana(array, semana) {
    let suma = 0;

    for (let j = 0; j < array[semana - 1].length; j++) {
        suma += array[semana -1][j];
    }
    return suma;
}
 */
// console.log(gastosSemana(mes, 1)); // sumatoria sem 1  #num


/* const costosSemanales = (matriz, semana) =>{

    let gastos = 0

    for (let col = 0; col < matriz[semana].length; col++) {
        gastos += matriz[semana][col]
    }

    return gastos
    
}


console.log(costosSemanales(mes, 0)); */




/* function gastoTotalSemana(num_semana) {
    let contador = 0;

    for (let b = 0; b < gastos[num_semana].length; b++) {
        contador += gastos[num_semana][b]
    }

    return contador

}

//Gastos totales semana 1
console.log(gastoTotalSemana(0))
 */