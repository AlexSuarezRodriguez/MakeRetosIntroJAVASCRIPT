/*
Objetivo: Escribir una función llamada contrasena que reciba un string y retorne otro string realizando los siguientes cambios sobre el string de entrada:

    Remplaza las mayúsculas por minúsculas.
    Elimina los espacios en blanco.
    Remplaza el caracter "a" por "4".
    Remplaza el caracter "e" por "3".
    Remplaza el caracter "i" por "1".
    Remplaza el carater "o" por "0".

Casos para probar tu programa

console.log(generatePassword("hola")); // "h0l4"
console.log(generatePassword("esta es una prueba")); // "3st43sun4pru3b4"
console.log(generatePassword("")); // ""
*/
function generatePassword(cadena){
newCadena=cadena.split(" ").join("").toLowerCase().split("");
for (i=0;i<newCadena.length;i++){
   if(newCadena[i]==="a"){
     newCadena[i]="4";
    }else if (newCadena[i]==="e"){
    newCadena[i]="3";
    }else if (newCadena[i]==="i"){
    newCadena[i]="1";
  }else if (newCadena[i]==="o"){
    newCadena[i]="0";}   
}
return newCadena.join("")
}
console.log(generatePassword("hola")); // "h0l4"
console.log(generatePassword("esta es una prueba")); // "3st43sun4pru3b4"
console.log(generatePassword("")); // ""