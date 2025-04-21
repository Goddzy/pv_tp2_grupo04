export default function Texto (input, elementoMostrado) {
    elementoMostrado.textContent = input.value;
    
    if (input.value.length > 20) {
        elementoMostrado.style.backgroundColor="red";
    } else {
      elementoMostrado.style.backgroundColor = "white";
    }
}
