//3 formas de declarar un string
let producto1 = "monitor 20 pulgadas";
let producto2 = String("monitor 24 pulgadas");
let producto3 = new String("monitor 24 pulgadas");

console.log(producto1);
console.log(producto2);
console.log(producto3);

//Ahora vamos a ver una de las utilidades de usar comillas simples
producto1 = 'monitor 20" ';
console.log(producto1);

//Ahora vamos a ver a una de las formas de usar un doble comillas dentro de otro doble comillas, con el escape.
producto1 = "monitor 20\" ";
console.log(producto1);

