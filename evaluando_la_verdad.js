/*
Evaluando la verdad
Objetivo: Decide si las siguietes expresiones booleanas evaluan falso o verdadero:
*/

console.log (3 != 4 && !("pedro" === "juan" || 26 > 10))    //false
console.log(true && !(false || true))    //false
console.log(true && !true)   //false
console.log(true && false )  //false
console.log(false)   //false
console.log(true)    //true
console.log(!(5 === 5) && 8 !== 8)   //false
console.log(("cat" === "kat" && 26 > 30) || ("cat" === "cat" && 26 > 10))    //true
console.log(!("testing" == "testing" && !(5 > 8)))   //false
