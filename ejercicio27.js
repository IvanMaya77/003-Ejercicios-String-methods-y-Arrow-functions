let a = 'Hola mundo desde JavaScript';

function eliminar(cadena) {
    let palabras = cadena.trim().split(' ');
    return palabras.join('_').toLowerCase();
}

let res = eliminar(a);
console.log(res);
