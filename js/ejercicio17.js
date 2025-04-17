const contarLetraA = (cadena)=>{
  let contador=0;
  for(i=0;i<cadena.length;i++)
    if(cadena[i] == 'a' || cadena[i] == 'A' || cadena[i] == 'á' || cadena[i] == 'Á')
      contador++;
  return contador;
}

console.log(contarLetraA('Programación Visual'))