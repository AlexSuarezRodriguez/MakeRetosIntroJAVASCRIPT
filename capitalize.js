/*
Objetivo: Escribir una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena (cambie a mayúscula la letra inicial).

Nota: puedes asumir que cada palabra está separada por espacio.
Casos para probar tu programa

console.log(capitalize("pedro perez")); // "Pedro Perez"
console.log(capitalize("make it real")); // "Make It Real"

*/
function capitalize (cadena){
  cadena=cadena.split(" ")// convertir el dato de entrada en un arreglo
  for(i=0;i<cadena.length;i++){ // ejecutar el for de acuerdo a la longuitud del arreglo
  cadena.splice(i,1,cadena[i][0].toUpperCase()+cadena[i].substr(1));//reemplazar cada posicion con la priemra letra convertida a mayuscula y luego concatenando los siguientes datos
}
return cadena.join(" ");// al final se retorna es arreglo obtenido pero uniendolos y con ello pasandolo a una cadena de texto separada por espacios
}
console.log(capitalize("pedro perez")); // "Pedro Perez"
console.log(capitalize("make it real")); // "Make It Real"