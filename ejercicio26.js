let a = 'Hola mundo desde JavaScript';

function palabraLarga(cadena) {
    let palabras = cadena.split(' ');
    return palabras.reduce((masLarga, palabra) => {
        return palabra.length > masLarga.length ? palabra : masLarga;
    }, '');
}

let res = palabraLarga(a);
console.log(res);
