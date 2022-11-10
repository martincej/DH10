/* 
  ? Objeto Literales C11
  sintaxis
  manipulación

  *Array de objetos literales
*/
let gatito1 = ['Tom', 'cafe', 1, true];

console.log(gatito1[0])


let gatito = {
  nombre: 'Tom',
  color: 'cafe',
  peso : 1,
  estaVacunado : true,
  sonido: function(){
    return 'Hola soy un lindo gatito: ' + this.nombre
  }
}


gatito.nombre = 'Jerry'
gatito.color = 'Naranja'

/* console.log(gatito.nombre);

console.log(gatito.color);
console.log(gatito.color2);

console.log(gatito.sonido()); */

/* 
Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.

Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

La función entrenarHoras tiene las siguientes tres características:

Recibe por parámetro la cantidad de horas.
Resta a su energía (this.energia) la cantidad de horas x 5.
Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.
*/


// 1 hs ===> 1 * 5
// 2 hs ===> 2 * 5
let deportista = {
	  energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantHoras){
        this.energia = this.energia - cantHoras * 5;
        this.experiencia = this.experiencia + cantHoras * 2
    }
};

console.log(deportista.energia);
console.log(deportista.experiencia);

deportista.entrenarHoras(2)

console.log(deportista.energia);
console.log(deportista.experiencia);
deportista.entrenarHoras(1)


console.log(deportista.energia);
console.log(deportista.experiencia);

deportista.entrenarHoras(1)


console.log(deportista.energia);
console.log(deportista.experiencia);






/* console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia); */