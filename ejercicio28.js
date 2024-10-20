let a = 'Hola mundo desde JavaScript';

function primerLetra(cadena) {
    return cadena.split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
}

let  res = primerLetra(a);
console.log(res);
