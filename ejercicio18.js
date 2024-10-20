let texto = 'Hola mundo desde JavaScript';

function eliminar(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, '');
}

let res = eliminar(texto);
console.log(res);