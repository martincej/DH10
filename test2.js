let sellers = {
    "LEVY, MARCOS GABRIEL": [
        {
            "nombre": "LEVY, MARCOS GABRIEL",
            "codigo": "001204",
            "marca": "FORD",
            "venta": "12290000.000000",
            "usados": ".000000",
            "negocio": "FORD"
        }
    ],
    "FAGIOLI, JOSE MARIA": [
        {
            "nombre": "FAGIOLI, JOSE MARIA",
            "codigo": "000622",
            "marca": "FORD",
            "venta": "9000000.000000",
            "usados": ".000000",
            "negocio": "FORD"
        }
    ]
}

let arraySeller = []

for (const sellerName in sellers) {
    let arraySales = sellers[sellerName]
    let objetoSeller = {}
    objetoSeller.name = sellerName
    objetoSeller.ventas = arraySales.reduce((acc, item) => acc + (+item.venta), 0)
    objetoSeller.tomaUsados = arraySales.reduce((acc, item) => acc + (+item.usados), 0)

    arraySeller.push(objetoSeller)
}


console.log(arraySeller);


-28.00
16.00
23.00
11.00
31.00
25.00
7.00
17.00
13.00
28.00
24.00
101.00
3.00
142.00
1.00
