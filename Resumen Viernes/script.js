//ENTRADA - SALIDA DE DATOS
alert ("Hola mundo");
let entrada_datos = prompt ("¿Quién eres?");
console.log("te llamas: " + entrada_datos);
console.log(`te llamas ${entrada_datos}`);

//VARIABLES (se usará let y ya está).
//Ejemplo1
let saludar = "hola";
if (true){
  saludar = "adiós";
  console.log(saludar);
}
console.log(saludar);

//Ejemplo2
let saluda = "hola";
const numero_pi= 3.14;
//Esto daría error porque las constantes no cambian su valor
//numero_pi="fdtg";
console.log(numero_pi);
let variable_boolean_cierto = true;
let variable_boolean_falso = false;

//CONCATENACIÓN E INTERPOLACIÓN DE CADENAS
let docente = "Rocío López";
const curso = "DAW";
let docente_curso = docente + " profesora de " + curso;
console.log(docente_curso);

let docente_curso2 = `${docente} profesora de ${curso}`;
console.log(docente_curso2);

//SELECCIONANDO ELEMENTOS DEL DOM
//Ejemplo1
/*
let cursoDAW = document.getElementById("cursoDAW");
cursoDAW.innerHTML =  `
<h2>profesora: ${docente} </h2>
<h3> curso: ${curso} </h3>
`;
*/

//Ejemplo2
let cursoDAW = document.querySelector("#cursoDAW");
cursoDAW.innerHTML =  `
<h2>profesora: ${docente} </h2>
<h3> curso: ${curso} </h3>
`;

//if else
let cursoDAM = document.querySelector("#cursoDAW");
let existe_cursoDAM = false;

if (existe_cursoDAM){
cursoDAM.innerHTML = "<h3> Existe curso DAM </h3>";
}
else{
cursoDAM.innerHTML = "<h3> No existe curso DAM </h3>";
}

//ACUMULANDO VALORES +=
let inforCampanillas = document.querySelector("#informacionCampanillas");
inforCampanillas.innerHTML = "<h2> Información de Campanillas</h2>";
inforCampanillas.innerHTML += `
<h3>Entre los profesores de Campanillas, uno de ellos es: ${docente} </h3>
<h3> y entre los cursos que se imparten, uno de ellos es: ${curso} <h3>
`;
let saludo = "hola mundo"
imprimirHTML(inforCampanillas, saludo);
imprimirHTML();

//FUNCIONES
function imprimirHTML(contenedor,mensaje){
  contenedor.innerHTML += mensaje;
}

function imprimirHTML(){
  inforCampanillas.innerHTML +=`
<h3>Entre los profesores de Campanillas, uno de ellos es: ${docente} </h3>
<h3> y entre los cursos que se imparten, uno de ellos es: ${curso} </h3>
`;
}







