let texto = 'hola mundo desde JavaScript';

function contar(cadena) {

    let palabras = cadena.split(' ').filter(palabra => palabra !== '');
    return palabras.length;
}

let res = contar(texto);
console.log(res);
