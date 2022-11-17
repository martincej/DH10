let edades = [11, 12, 15, 18, 25, 22, 10, 33, 2, 50];

function incrementar(arrayEdades){
    
    for (let i = 0; i < arrayEdades.length; i++) {
        arrayEdades[i] = arrayEdades[i] + 1;
    }

}

/* 
console.table(edades); 
console.log('ejecutando incrementar...');
incrementar(edades); 
console.table(edades);
*/

// retornar el el menor
console.table(edades); 

function elMenor(arrayEdades){
    let edadMenor = arrayEdades[0]

    for (let i = 1; i < arrayEdades.length; i++) {
        if (arrayEdades[i] < edadMenor) {
            edadMenor = arrayEdades[i]
        }        
    }
    return edadMenor
}


console.log(elMenor(edades));