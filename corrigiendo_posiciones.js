/*
Objetivo: Escribe un programa que inserte cada uno de los elementos del arreglo nuevoArreglo, en el arreglo resultante del reto anterior arr, e imprima cada uno de los elementos en la consola.

var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
var newArray = ["Quinto", "Sexto"];
*/
let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"],newArray = ["Quinto", "Sexto"];
arr.splice(4,0,newArray[0],newArray[1])
for(i=0;i<arr.length;i++){
  console.log(arr[i]);
}
