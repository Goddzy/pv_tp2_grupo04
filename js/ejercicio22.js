import Texto from "../js/ejercicio22Funciones.js";

document.addEventListener("DOMContentLoaded", () => {
    const inputTexto = document.getElementById("inputTexto");
    const textoMostrado = document.getElementById("textoMostrado");

    inputTexto.addEventListener("input", () => {
        Texto(inputTexto, textoMostrado);
    });
});
