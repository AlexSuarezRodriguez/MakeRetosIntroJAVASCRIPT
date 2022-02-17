/*
Objetivo: Define una función llamada greetings, que reciba cómo parámetros el nombre y el apellido de una persona y retorne lo siguiente:

Mi nombre es Nayib y mi apellido es Abdalá
Mi nombre es Germán y mi apellido es Escobar
Mi nombre es Simón y mi apellido es Hoyos
*/

function greetings(nombre,apellido){
  return `Mi nombre es ${nombre} y mi apellido es ${apellido}`
}
console.log(greetings("Nayib", "Abdalá"));
console.log(greetings("Germán", "Escobar"));
console.log(greetings("Simón", "Hoyos"));