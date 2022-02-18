/*
Objetivo: Crea un programa que acceda a los elementos ubicados en la primera y tercera posición del siguiente arreglo, e imprima el resultado esperado.
Arreglo:
[1, 2, 3, 4, 5]
*/
let arreglo=[1, 2, 3, 4, 5],datos=[]
for (let i=0;i<arreglo.length;i++){
  (i%2!==0)?datos.push(arreglo[i]):false;
}
console.log(`el dato en la primera posicion es ${datos[0]} el de la segunda posicion es ${datos[1]}`)