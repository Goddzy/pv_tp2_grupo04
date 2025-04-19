let boton=document.getElementById("topon");
let colores = [
    "#FF5733", "#33FF57", "#3357FF", "#F0F033", "#FF33F0", 
    "#33FFF0", "#F033FF", "#FF8C00", "#8A2BE2", "#00FF7F"
  ];
const cambiar_fondo=()=>{
    let color = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = color;
    console.log(color);
}
boton.addEventListener("click", cambiar_fondo);
