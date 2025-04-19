let opciones = document.querySelectorAll("input");

let resultado = document.getElementById("resultado");


for ( i=0; i<opciones.length;i++ ){
  opciones[i].addEventListener('click', (event)=>{
    
    resultado.innerHTML=`Tu lenguaje favorito es: <strong>${event.target.value}</strong>`;

        console.log("El valor seleccionado fue: " +event.target.value);

  });
}
