let mices = [
 
    ['lucas','camila','pedro'], // 0
    ['juan', 'luisa', 'martin'],// 1
 
]

/* console.table(mices);
console.log(mices[1][1]);

console.log(mices[1][2]);

mices[1][2] = 'Jerry' 

console.table(mices); */
                            //   f  c 
/* console.log('Hola Soy: ' + mices[0][0]);
console.log('Hola Soy: ' + mices[0][1]);
console.log('Hola Soy: ' + mices[0][2]);

console.log('Hola Soy: ' + mices[1][0]);
console.log('Hola Soy: ' + mices[1][1]);
console.log('Hola Soy: ' + mices[1][2]); */




for (let f = 0; f < mices.length; f++) {
   
    for (let c = 0; c < mices[f].length; c++) {
        
        console.log('Hola Soy: ' + mices[f][0]);    
    
    }
        
}