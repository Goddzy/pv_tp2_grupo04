import {funcionTexto} from "./ejercicio21Funciones.js";

const texto1 = document.querySelector("#entradaTexto");
const texto2 = document.querySelector("#salidaTexto");

entradaTexto.addEventListener("input", () => {
    funcionTexto(texto1.value, texto2);
});

