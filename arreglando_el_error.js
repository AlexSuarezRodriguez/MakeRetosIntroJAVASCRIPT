/*
Objetivo: Corregir el siguiente programa para obtener el resultado esperado.
El JavaScript actual en el archivo arreglando-el-error.js es el siguiente:*/

var name = "alexander";
var jobTitle = "Director de Marketing"

console.log("El " + jobTitle +" se llama " + name);
//El resultado actual del programa es:
//El Director de Marketing se llama undefined

//El resultado esperado es:
//El Director de Marketing se llama Felipe
//Explica por qué el programa no funciona como se espera y corrígelo.

//al no asignarle un dato a la variable en ese instante la variable esta vacia o void, por ende al mostrarla despues por consola no se sabe que typo de dato es.