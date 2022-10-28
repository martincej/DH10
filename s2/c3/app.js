/* 
Escribir las siguientes tres funciones:

-?anterior: recibe un número como parámetro y devuelve ese número menos uno.

-?triple: recibe un número como parámetro y devuelve el triple de ese número.

?anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).  esta actividad no me queda clara

*/

let anterior = function(numero) {
    return numero - 1
}

let triple = function(numero) {
    return numero * 3
}


let anteriorDelTriple = function(numero) {

    /* let aux = triple(numero);
    let resultadoFinal = anterior(aux)
    return resultadoFinal; */
    return anterior(triple(numero))

}


console.log(anteriorDelTriple(2));


/* 

Calculadora - Nivel I
1. Crear un archivo calculadora.js que contendrá las distintas operaciones a
realizar de nuestra calculadora.
2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la
suma de los mismos.
3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
resta del primero menos el segundo.
4. Crear una función multiplicar, la misma deberá recibir dos parámetros y
retornar el resultado de su multiplicación.
5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
de la división del primero sobre el segundo.
*/

//CREAR FUNCION
function sumar(a,b){
    console.log('analizando a ' +  a);
    console.log('analizando b ' +  b);
    return a + b
}

//INVOCACION
