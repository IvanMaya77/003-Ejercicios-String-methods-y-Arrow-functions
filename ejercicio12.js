const a = "oso";

function invertir(str) {
    let b= str.split('').reverse().join('');
    if (a === b){
        return ('La palabra ' + a + ' es un polindromo');
    }
    else {
        return ('La palabra ' + a + ' no es un polindromo');
    }
}

const res = invertir(a);
console.log(res);