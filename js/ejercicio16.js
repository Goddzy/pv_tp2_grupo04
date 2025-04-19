const sumarRango = (numInicial,numFinal) =>{
  let suma = 0;
  if(numInicial <= numFinal){
    for(i=numInicial; i<=numFinal;i++)
      suma+=i;
  }
  return suma;
}

console.log(sumarRango(1,5));