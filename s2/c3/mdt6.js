/* 

Crear una función que recibe un texto y
devuelve la misma frase pero con admiración.
*/

function transformaString(texto){
    return ' ¡ ' + texto + ' ! '
}

/* console.log(transformaString('hola'));
console.log(transformaString('chau')); */

/* 
?Crear la función calculadorIMC() “Índice de Masa corporal = kg/(mt2)” 

?que reciba la altura en metros y el peso en kilogramos 

y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.

*/

function calculadorIMC(altura, peso){
    let imc = peso / (altura * altura)
    return imc;
}

const calculadorIMC2 = (altura, peso) =>  peso / (altura * altura)


// console.log(calculadorIMC(1.78, 80));
// console.log(calculadorIMC(1.85, 82));




/* 
funciones

?anterior: recibe un número como parámetro y devuelve ese número menos uno.

?triple: recibe un número como parámetro y devuelve el triple de ese número.

?anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).

*/

let anterior = (numero) => numero - 1;

let triple = (numero) => numero * 3;


let anteriorDelTriple = (numero) => {
    let aux = triple(numero)
    return anterior(aux)
};


console.log(anteriorDelTriple(3));