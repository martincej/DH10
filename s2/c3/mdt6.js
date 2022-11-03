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

/*Actividad Calculadora 
Nivel I: 
Items: 1 al 5*/

let num01 = 18, num02 = 7,  num03 = 5;

const suma = (a,b) => a + b;

const promedio = (a, b, c) => a + b + c/n;

const resta = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a % b;

/* Nivel II
Items: 1 al 5*/

console.log("------------Testeo de Operaciones / Calculadora------------");

console.log("Suma" , suma(num01,num02));

console.log("Resta" , resta(num01,num02));

console.log("Multiplicar", multiplicar(num02,num01));

console.log("Dividir", dividir(num01,num02));

console.log("Dividir", dividir(num01,0));

console.log("promedio", suma(num01, num02, num03)/3 )
/*
Nivel III 
Items: 1 al 4*/

let cuadradoDeUnNumero = (a, b) => a**b;
function cuadrado(){
    return (8, 2)
}
    console.log(cuadradoDeUnNumero (8, 2))

    let promedioDeTresNumeros = (num01, num02, num03)/3
    return 12+5+9/3
    console.log(promedioDeTresNumeros);
    
    let calcularPorcentaje = (a, b) => (a/b)*n
    console.log(calcularPorcentaje (300/15)*100);


function GeneradorDePorcentaje (a){
    return ((2/200)*10);
}
console.log(GeneradorDePorcentaje);


/*Profe le comento que no entiendo por que si no aparecen
errores en js, por que razon en la consola solo  aparece 
hasta la actividad de calcular el cuadrado de un numero?
 gracias por su respuesta.  */