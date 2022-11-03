/* 

Crear una función esMenor() que reciba 2 numeros como parámetros
 ? si el primer es menor o igual retornar el booleano true 
 ? caso contrario retorna el booleano false
*/

function esMenor(a, b){
   /*  if (a <= b) {
        return true
    }else{
        return false
    } */
    
    return a <= b  // retornamos true o false
}

// console.log(esMenor(20, 3)); //  


/* 

Crear una función esPar() que reciba 1 número como parámetro
?Si él numero es par retornar true
?Caso contrario retorna false
*/

function esPar(num){

    if (num % 2 === 0){
        return true
    }else{
        return false
    }
}
console.log(esPar(45))

const esPar1 = nume => nume % 2 === 0

console.log(esPar1(100))


function esPar (a){
    if (a % 2 == 0){
        return true
    }
    else {
        return false
    }
}
console.log(esPar(7));

