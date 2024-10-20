let a = 'Hola mundo desde JavaScript';
let palaB = 'Hola';

function eliminar(cadena, palaB) {
    return cadena.startsWith(palaB);
}

let res = eliminar(a, palaB);
console.log(res);