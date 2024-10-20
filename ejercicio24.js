let a = "123456";

function numero(cadena) {
    return cadena.split('').every(caracter => caracter >= '0' && caracter <= '9');
}

let res = numero(a);
console.log(res); // true
