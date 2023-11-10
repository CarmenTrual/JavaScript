'use strict'

let numero = 11;
let string1 = "Hola mundo";
let string2 = "Hola, ¿qué tal?";

//CONVERSIONES Y CONSULTAS DE TIPPOS
console.log(numero.toString());
console.log(typeof(numero));
console.log(typeof(numero.toString()));

//CONVERSIONES A MAYUS/MINUS
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());

//CALCULAR LONGITUD
console.log(string1.length);

//CONCATENAR
console.log(string1.concat("Hola mundo, aquí estoy"));

//MÉTODOS DE BÚSQUEDA QUE DEVUELVE LA POSICIÓN indexOf === search,   lastIndexOf
console.log(string1.indexOf("mundo"));
console.log(string1.indexOf("kk"));
console.log(string1.search("und"));
console.log(string1.search("kk"));

//MÉTODO DE BÚSQUEDA lastIndexOf
console.log(string1.lastIndexOf("mundo"));

//MÉTODOS DE BÚSQUEDA SUBSTRING
let string3 = "Hola, ¿qué tal va por allí?";
console.log("método string:" + string3.substring(1,6));
console.log(string3.charAt(1));
console.log(string3.substring(1,2));
console.log(string3.slice(1,2));

//MÉTODO include
console.log(string3.includes("tal"));
console.log(string3.includes("kk"));
console.log(string3.startsWith("ho"));
console.log(string3.startsWith("kk"));
console.log(string3.endsWith("allí"));
console.log(string3.endsWith("kk"));

//MÉTODOS DE REEMPLAZO
console.log(string3.replace("hola", "adiós"));

//MÉTODO DE QUITAR ESPACIO
let correo = "   flamenk_84@hotmail.com   ";
console.log(correo.length);
console.log(correo.trimStart().length);

//MÉTODO DE CONVERSIÓN A ARRAY CUADNO HAY UN DELIMITARDOR COMÚN
let var1 = "hola, ¿qué tal va por allí?";
let var2 = "18-15-56-67-78-89";
console.log(var1.split(""));
console.log(var1.split("-"));
let array_numeros = var2.split("-");
console.log(array_numeros[2]);























