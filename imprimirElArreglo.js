/*
Objetivo: Crear un programa que imprima en la consola todos los elmentos del siguiente arreglo:
["Simón", "Natalia", "Nayib", "Diana", "Germán"]
*/
const array1 = ["Simón", "Natalia", "Nayib", "Diana", "Germán"];
//la manera de como se abrebio un foreach.se ejecuta un for por la cantidad de posiciones del arreglo 
//luego se hace el llamado de la funcion donde el dato de la posicion se pasara como argumento y luego 
//este se retorna y ese dato es el que se imprime o muestra
function imprimir(elemento){
  return elemento
}
for(i=0;i<array1.length;i++){
  console.log(imprimir(array1[i]))
}
