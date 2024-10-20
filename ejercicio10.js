let a = "Hola mundo desde JavaScript";
let buscar = "a";
let contador = 0;

let aMin = a.toLowerCase();
let buscarMin = buscar.toLowerCase();

for (let i = 0; i < aMin.length; i++) {
    if (aMin.charAt(i) === buscarMin) {
        contador++;
    }
}
console.log(contador);