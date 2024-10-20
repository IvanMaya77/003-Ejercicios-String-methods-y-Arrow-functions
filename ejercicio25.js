let a = '¡Hola mundo! desde JavaScript#@?';

function eliminarCar(cadena) {
    return cadena.replace(/[^a-zA-Z0-9\s]/g, ''); // expresion para buscar que no sea ni letra, numero o espacio.
}

let res = eliminarCar(a);
console.log(res);
