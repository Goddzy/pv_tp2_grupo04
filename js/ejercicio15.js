const Mes = (numero) => {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio",
         "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    if (numero >= 1 && numero <= 12) {
        return meses[numero - 1];
    } 
    else {
        return "El número no corresponde a un mes del año.";
    }
};

let numero = parseInt(prompt("Introduce el número de un mes:"))
console.log(Mes(numero));