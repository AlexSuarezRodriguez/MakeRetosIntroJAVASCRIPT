/*
Objetivo: Define una función message, que reciba como parámetro un arreglo y retorne las siguientes cadenas de texto para cada uno de los casos de prueba.
Casos para probar tu programa

console.log(message(["Estoy", "aprendiendo", "Java", "Script"])); // Estoy aprendiendoJavaScript!
console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"])); //  El método join me permite unir elementos
console.log(message(["Java", "Script", "es", "muy", "útil"])) //JavaScript es muy útil
*/
function message(arreglo){// crea la lfuncion para enviar los datos 
  let cadena;
  for (i=0;i<arreglo.length;i++){// un ciclo para recorrer los datos del arreglo y ver en donde esta las palabras Java Script por separado
    if(arreglo[i].toLowerCase()==="java" && arreglo[i+1].toLowerCase()==="script"){// un condicional el cual evalua si despues de la palabra java en la siguente posicio ndel arreglo sigue script
      datosBorrados=arreglo.splice(i,2);//si se cumple esos datos seran borrados y almacenados en una nueva variable
      arreglo.splice(i,0,datosBorrados.join(""))//los datos borrados se unen y se agregarn en la posicion dodne estaba la palabra java
    }
    cadena=arreglo.join(" ");
    if (cadena.toLowerCase().endsWith("javascript")){
     cadena= cadena+"!"
    }
  }
  return cadena;
}
console.log(message(["Estoy", "aprendiendo", "Java", "Script"])); // Estoy aprendiendo JavaScript!
console.log(message(["El", "método", "join", "me", "permite", "unir", "Elementos"])); //  El método join me permite unir elementos
console.log(message(["Java", "Script", "es", "Muy", "útil"])) //JavaScript es muy útil