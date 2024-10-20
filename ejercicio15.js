const a = "Hola Mundooos";

function ultimo(str) {
    let i = 0;
    while (str.charAt(i) !== "") {
        i++;
    }
    return str.charAt(i - 1);
}

const res = ultimo(a);
console.log(res);
