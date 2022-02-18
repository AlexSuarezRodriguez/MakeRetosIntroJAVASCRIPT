/*
Objetivo: Crear un programa que inserte en el siguiente arreglo la cadena de texto "Soy el último elemento", e imprima en consola el resultado esperado.
Arreglo inicial:
[ "Primero", "Segundo", "Tercero", "Cuarto"]
*/
let arreglo=[ "Primero", "Segundo", "Tercero", "Cuarto"];
arreglo.push("Soy el último elemento");

function imprimir(elemento){
  return elemento
}
for(let i=0;i<arreglo.length;i++){
  console.log(imprimir(arreglo[i]));
}