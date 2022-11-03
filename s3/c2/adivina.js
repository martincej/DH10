const prompt= require("prompt-sync")({sigint: true});

/* 
  ? For 🎆 
 while
 do while
*/

let nro = 9;
function inputNumero(){
    return Number(prompt('adivina que nro estoy pensando: '));
}

while (inputNumero() !== nro ) {
    console.log('intenta de nuevo😂');
}

console.log('🥳 🥳 🥳 Felicidades adivinaste pensaba en el :' + nro);