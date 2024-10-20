const a = "Hola mundo";

function invertir(str) {
    return str.split('').reverse().join('');
}

const res = invertir(a);
console.log(res);
