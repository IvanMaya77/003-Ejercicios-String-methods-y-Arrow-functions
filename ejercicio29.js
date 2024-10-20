let a = 'aaabbbccddeeff';

function eliminarRep(cadena) {
    return cadena.split('').reduce((res, caracter) => 
        (res.endsWith(caracter) ? res : res + caracter));
}

let res = eliminarRep(a);
console.log(res);
