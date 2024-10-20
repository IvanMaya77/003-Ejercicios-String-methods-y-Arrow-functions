let a = 'Hola mundo desde JavaScript';

function puntitos(cadena, limite) {
    if (cadena.length > limite) {
        return cadena.slice(0, limite) + '...';
    }
    return cadena;
}

let res = puntitos(a, 10);
console.log(res);
