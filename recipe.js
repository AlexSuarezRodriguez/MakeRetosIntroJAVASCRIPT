let recipe={
  LecheEnPolvo:"1 litro",//las llaves si van separadas por espacios debe ir entre comillas como si duera un string
  chocolateEnBarra:"3 barras",
  azucar:"3 gramos",
  //saludo:function(){console.log("hola")}
}
let llaves = Object.keys(recipe);
//console.log(recipe[llaves[0]])

for (let i=0;i<llaves.length;i++){
  console.log(`agrega ${recipe[llaves[i]]} de ${llaves[i]}`)//no funciona con la notacion punto para acceder al valor de la llave si no notacio llave (objeto[llave])
}
