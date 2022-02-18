/*
Objetivo: Escribir una función llamada countingEs que reciba como parámetro un string (cadena de texto) y retorne el número de caracters "e" (minúscula).
Casos para probar tu programa

Todos los casos deben retornar true:

console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);  // true
console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6); // true
console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8); // true
console.log(countingEs("Ahora qué?") === 0); // true
console.log(countingEs("Los elefantes son enormes") === 5) // true
*/

function countingEs(cadena_de_caracteres){
  cadena_de_caracteres.toLowerCase();
  let count=0;
  for(i=0;i<cadena_de_caracteres.length;i++){
     (cadena_de_caracteres[i]==="e") ? count++ : false;   //operador ternario
  }
  return count;
}
console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);  // true
console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6); // true
console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8); // true
console.log(countingEs("Ahora qué?") === 0); // true
console.log(countingEs("Los elefantes son enormes") === 5) // true