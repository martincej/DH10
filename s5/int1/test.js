let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    }
]  

console.table(arrayCuentas);
/* Crear otro método llamado depósito que recibirá dos parámetros: 
el titular de
cuenta y una cantidad de dinero a depositar.
? El método debe obtener la cuenta
correspondiente y
 luego sumar la cantidad de dinero a depositar a saldo en pesos.
?Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.
 */

/* let banco = {
    cuentas : arrayCuentas,

    depositar: function(titular, dinero){
        for (let i = 0; i < arrayCuentas.length; i++) {
            if (arrayCuentas[i].titularCuenta === titular) {
               // console.log(arrayCuentas[i]);
                arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos + dinero
                return 'Depósito realizado, su nuevo saldo es :' + arrayCuentas[i].saldoEnPesos
            }
        }
        return 'titular no encontrado'
    }

} */

function depositar(titular, dinero){
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].titularCuenta === titular) {
           // console.log(arrayCuentas[i]);
            arrayCuentas[i].saldoEnPesos = arrayCuentas[i].saldoEnPesos + dinero
            return 'Depósito realizado, su nuevo saldo es :' + arrayCuentas[i].saldoEnPesos
        }
    }
    return 'titular no encontrado'
}

// console.log(depositar('Abigael Natte', 10000))
console.log(depositar('Martin', 10000))

// console.table(arrayCuentas);