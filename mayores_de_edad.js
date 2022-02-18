/*
Objetivo: Imprimir los elementos del siguiete arreglo, que sean números mayores o iguales a 18. Los números representan la edad de personas.
Arreglo de edades:

var ages = [12, 3, 5, 44, 18, 2, 55, 26];
*/
let ages = [12, 3, 5, 44, 18, 2, 55, 26];
for(i=0;i<ages.length;i++){
  (ages[i]>=18) ?console.log(ages[i]):false   // operador ternario
  }
