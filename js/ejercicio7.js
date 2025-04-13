let g,lista=["Lionel","Marcelo","Diego","Lucas","Renato","Candela"];
g=lista[0]
for(i=0;i<lista.length;i++){
    if(lista[i].length>g.length){
        g=lista[i];
    }
}
console.log(g);