let nombre=document.querySelector("#Nombre");
let ape=document.querySelector("#Apellido");
let lu=document.querySelector("#lu");
let form=document.querySelector("#formulario");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    alert("Nombre: " + nombre.value + "\nApellido: " + ape.value + "\nLU: " + lu.value);
    nombre.value="";
    ape.value="";
    lu.value="";
})