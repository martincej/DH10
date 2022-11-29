/* 
CLASE INTEGRADORA DE CONTENIDOS II

*/

//NIVEL 1

/* 
  ?desarrollar una funcion que reciba 2 nros como parametro
  ?analizar si el primer es par retornar la suma
  ?caso contrario retornal la resta
*/

function sumarSiEsParA(a, b) {
  if (a % 2 === 0) {
    return a + b
  } else {
    return a - b
  }
}

// console.log(sumarSiEsParA(2,5));

/* Obtener en un nuevo array las edades menores a 18.*/

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const edades2 = [11, 12];

/* function obtenerMenores2(arrayEdades) {
    let menores = []
    let mayores = []

    for (let i = 0; i < arrayEdades.length; i++) {
       if (arrayEdades[i] < 18) {
            menores.push(arrayEdades[i])
       }else{
            mayores.push(arrayEdades[i])
       }     
    }
    
    return {
        propMenores : menores,
        propMayores : mayores
    }
} */


function obtenerMenores(arrayEdades) {
  let menores = []

  for (let i = 0; i < arrayEdades.length; i++) {
    if (arrayEdades[i] < 18) {
      menores.push(arrayEdades[i])
    }
  }

  return menores
}

// console.log(obtenerMenores(edades)); //[11, 12, 15, 10, 5]
// console.log(obtenerMenores(edades2)); //[11, 12]

/* 
Obtener en un nuevo array las edades mayor o igual a 18.
*/
function obtenerMayores(arrayEdades) {
  let mayores = []
  for (let i = 0; i < arrayEdades.length; i++) {
    if (arrayEdades[i] >= 18) {
      mayores.push(arrayEdades[i])
    }
  }
  return mayores
}

function obtenerIguales(arrayEdades) {
  let iguales = []
  for (let i = 0; i < arrayEdades.length; i++) {
    if (arrayEdades[i] === 18) {
      iguales.push(arrayEdades[i])
    }
  }
  return iguales
}
// console.log(obtenerIguales(edades)); //[18, 18]

// console.table(edades);
/* Incrementar en 1 todas las edades. */

function incrementar(arrayEdades) {
  for (let i = 0; i < arrayEdades.length; i++) {
    arrayEdades[i]++
  }
}
/* incrementar(edades)
console.table(edades); */

/* 
PISTAS PARA RETORNAR EN UNA FUNCION
* OBTENER
* DEVOLVER
* RETORNAR
*/

const arrayCuentas =
  [
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 1408.68,
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]

/*
 Obtener un nuevo array de cuentas cuyas edades sean menores a 30

*/

function menores2(arrayCuentasParam) {
  let menores = []
  for (let i = 0; i < arrayCuentasParam.length; i++) {
    if (arrayCuentasParam[i].edadTitular < 30) {
      menores.push(arrayCuentasParam[i])
    }
  }
  return menores
}


// console.log(menores2(arrayCuentas))
console.table(arrayCuentas);

/* Obtener un array con las cuentas habilitadas */

function cuentasHabilitadas(arrayCuentas) {
  let cuentasHab = []
  for (let i = 0; i < arrayCuentas.length; i++) {

    if (arrayCuentas[i].estaHabilitada === true) {
      cuentasHab.push(arrayCuentas[i])
    }

  }
  return cuentasHab;
}

// console.table(cuentasHabilitadas(arrayCuentas));


let autos = [
  {
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
  },
  {
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
  },
  {
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
  },
  {
    marca: 'Fiat',
    anio: 2019,
    color: 'negro'
  }
]
