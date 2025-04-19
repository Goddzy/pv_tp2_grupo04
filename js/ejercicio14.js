const duplicar = (arreglo) => {
    return arreglo.map((numero) => numero * 2);
};

let numeros = [3, 5, 7, 9];
console.log(numeros)  // muestra los numeros del arreglo
let numerosDuplicados = duplicar(numeros);  
console.log(numerosDuplicados); //muestra los numeros del arreglo multiplicado por 2