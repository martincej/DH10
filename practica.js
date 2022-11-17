let array = [
  "20-03-2022",
  "02-04-2022",
];

let ultimoIngreso1 = array
      .map(e => (e.split('-')))
      .map(e => new Date(`${e[2]}/${e[1]}/${e[0]}`))

let max = new Date(Math.max.apply(null,ultimoIngreso1))

// let ultimoIngreso2 = ultimoIngreso1.map(e => new Date(`${e[2]}/${e[1]}/${e[0]}`))


console.log(max.toLocaleDateString('es-AR'))

max

let rentArray = [
  "1.1",
  "1.1",
  "1.1",
  "1.1",
  "1.1",
  "1.1"
]

let promedio = rentArray.reduce((acc,e)=> acc + Number(e) , 0)

console.log(promedio / rentArray.length);