/*
Objetivo: Agregar el método mixIngredients como propiedad al objeto recipe del reto anterior.

El método mixIngredients debe retornar la cadena del resultado esperado. Imprime en la consola el resultado.

Resultado esperado:

Mezclando los ingredientes ...
*/

/*
//notacion punto
let recipe={
  LecheEnPolvo:"1 litro",//las llaves si van separadas por espacios debe ir entre comillas como si duera un string
  chocolateEnBarra:"3 barras",
  azucar:"3 gramos"}

  recipe.mixIngredients = function(){
    return "Mezclando los ingredientes ..."
  }
  console.log(recipe.mixIngredients())
  */

  //notacion corchete
  let recipe={
    LecheEnPolvo:"1 litro",//las llaves si van separadas por espacios debe ir entre comillas como si duera un string
    chocolateEnBarra:"3 barras",
    azucar:"3 gramos"}

    recipe["mixIngredients"]= function(){//la manera de acceder usando notacion corchete es en medio de comillas dobles poner el nombre de la llave seguido de parentesis si el calor es un metodo o funcion
      return "Mezclando los ingredientes ..."
    }
    console.log(recipe["mixIngredients"]())