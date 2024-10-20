let a = 'hola mundo';

function contar(cadena) {
    let apariciones = {};
    
    cadena.split('').forEach(caracter => {
        apariciones[caracter] = (apariciones[caracter] || 0) + 1;
    });
    
    return apariciones;
}

let res = contar(a);
console.log(res);
