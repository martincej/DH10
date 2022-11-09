const prompt= require("prompt-sync")({sigint: true});

let nro =  Math.floor(Math.random() * 10 + 1);;
function inputNumero(){
    return Number(prompt('adivina que nro estoy pensando: '));
}

while (inputNumero() !== nro ) {
    console.log('intenta de nuevo😂');
}

console.log('🥳 🥳 🥳 Felicidades adivinaste pensaba en el :' + nro);