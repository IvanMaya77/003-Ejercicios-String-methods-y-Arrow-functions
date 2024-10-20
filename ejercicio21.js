let a = 'Hola mundo, mundo feliz';
let pal1 = 'mundo';
let palNew = 'universo';

function remplazar(cadena, pal1, palNew) {
    return cadena.replaceAll(pal1, palNew);
}

let res = remplazar(a, pal1, palNew);
console.log(res);
