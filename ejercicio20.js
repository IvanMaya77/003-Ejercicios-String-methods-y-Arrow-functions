let a = 'Hola mundo desde JavaScript si';
let palaB = 'si';

function eliminar(cadena, palaB) {
    return cadena.endsWith(palaB);
}

let res = eliminar(a, palaB);
console.log(res);