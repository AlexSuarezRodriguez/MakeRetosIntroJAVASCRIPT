/*
Objetivo: Escribir una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena (cambie a mayúscula la letra inicial).

Nota: puedes asumir que cada palabra está separada por espacio.
Casos para probar tu programa

console.log(capitalize("pedro perez")); // "Pedro Perez"
console.log(capitalize("make it real")); // "Make It Real"

*/
function capitalize (cadena){
  let datonuevo=[];
  cadena=cadena.split(" ")
  for(i=0;i<cadena.length;i++){
  datonuevo.push(cadena[i][0].toUpperCase()+cadena[i].substr(1)); 
}
return datonuevo.join(" ");
}

console.log(capitalize("pedro perez")); // "Pedro Perez"
console.log(capitalize("make it real")); // "Make It Real"