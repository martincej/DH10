/* 
    clase 5 Programación Imperativa
    
    FUNCIONES

    *DECLARADAS
    *EXPRESADAS
    *FLECHAS

*/

//DECLARADA

function test2(x, y = 5) {
    return 'hola'
    console. log(x)
    return x / 2
}    
console.log(test2(10))


function restar(a, b) {//scope de funcion
    return b - a;
}

console.log(restar(10,40));


//EXPRESADA

let sumarExp = function(a, b) {
    return a + b   
}

//FLECHA
const sumarFlecha = (a, b) => {
    let res = a + b;
}


const sumarFlecha2 = (a, b) => a + b;   


