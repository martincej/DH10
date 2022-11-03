/* 
    *Operadores Lógicos
    *Condicionales
    *Ternario
    *switch
*/

let exp1 = 5 > 1;      // true
let exp2 = 3 === 5;    // false
let exp3 = (8 % 2) === 0;// true


// || OR

// console.log(false || exp2 || false || false);

// && AND

// console.log(exp1 && exp2 && exp3); //???

// ! NOT

// console.log(!true); // false
// console.log(!false); // true

// console.log(exp1 && !exp2 && exp3); //

/* console.log('hola' && 'chau'  && 'condicionales');
console.log('hola' || 'chau'); */



/* COONDICIONALES */


let nota =  9; 


/* if (nota >= 9) {
    console.log('APROBO MUY BIEN');
}

if (nota < 5) {
    console.log('desaprobado');
} */

/* let res = 5 >= 5 ? 'CASO VERDADERO' : 'CASO FALSO'

console.log(res);
 */

if (8 === 7) {
    
}else{
    
}

const animal = 'Bizcochito';

switch (animal) {
  
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
    console.log('This animal is extinct.');
    break;
  default:
    console.log('unknown');

}