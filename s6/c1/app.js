/* 
Retornar un objeto con dos propiedades
{
    impares: [] // elem impares
    pares: []   // elem pares
}
*/
/* let numeros = [1, 2, 3, 4, 5, 6]
const oddEven = arrayNums => {
    let impares = [];
    let pares = [];
    for (let i = 0; i < arrayNums.length; i++) {
        const element = arrayNums[i];
        element % 2  ?  impares.push(element): pares.push(element);   
    }
    return {impares,pares}
}

console.log(oddEven(numeros)); */

// CARO
/* for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`fizzbuzz!!!`)
    } else if (i % 3 === 0) {
        console.log(`fizz`)
    } else if (i % 5 === 0) {
        console.log(`buzz`)
    }else{
        console.log(i);
    }
} */

// LAU
/* function verificar(){
    for (let i = 1; i <=100; i++) {
     if (i % 5 === 0 && i % 3 ===0) {
       console.log('fizzbuzz')
     }
      else if (i % 5 === 0 ){
        console.log('buzz') ;
    } 
     else if (i % 3 === 0){
      console.log('fizz')
    }
    else {
        console.log(i);
    }
    }
  } */
//   verificar()
