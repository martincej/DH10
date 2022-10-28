/* 
Crear una función que recibe un string y lo convierte en una URL. 
Ej: “pepito” es devuelto como “http://www.pepito.com”

*/

function url(urlParametro){
    return 'http://www.' + urlParametro + '.com'
}

const urlFlecha = (urlParametro) => {
    return 'http://www.' + urlParametro + '.com'
}

const urlFlecha2 = urlParametro => 'http://www.' + urlParametro + '.com'


console.log(urlFlecha2('dh'));