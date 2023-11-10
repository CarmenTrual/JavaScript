'use strict'
//ZONA DE VARIABLES
//Obtener referencias a los elementos del DOM
const pais = document.getElementById("pais");
const poblacion = document.getElementById("poblacion");
const btnPoblacion = document.getElementById("btnPoblacion");

//base de datos" de países, representada como un array.
const listado_paises=[
  {nombre: "España", poblacion: "48.446.594 habitantes"},
  {nombre: "Portugal", poblacion: "10.467.366 habitantes"},
  {nombre: "Alemania", poblacion: "83.358.845 habitantes"},
  {nombre: "Italia", poblacion: "58.850.717 habitantes"},
  {nombre: "Francia", poblacion: "68.070.697 habitantes"},
  {nombre: "Polonia", poblacion: "36.753.736 habitantes"},
  {nombre: "Rumanía", poblacion: "19.051.562 habitantes"},
  {nombre: "Países Bajos", poblacion: "17.811.291 habitantes"},
  {nombre: "Bélgica", poblacion: "11.754.004 habitantes"},
  {nombre: "Suecia", poblacion: "10.521.556 habitantes"},
  {nombre: "República Checa", poblacion: "10.827.529 habitantes"},
  {nombre: "Grecia", poblacion: "10.394.055 habitantes"},
  {nombre: "Hungría", poblacion: "9.597.085 habitantes"},
  {nombre: "Austria", poblacion: "9.104.772 habitantes"},
  {nombre: "Bulgaria", poblacion: "6.447.710 habitantes"},
  {nombre: "Dinamarca", poblacion: "5.932.654 habitantes"},
  {nombre: "Finlandia", poblacion: "5.563.970 habitantes"},
  {nombre: "Eslovaquia", poblacion: "5.428.792 habitantes"},
  {nombre: "Irlanda", poblacion: "5.194.336 habitantes"},
  {nombre: "Croacia", poblacion: "3.850.894 habitantes"},
  {nombre: "Lituania", poblacion: "2.857.279 habitantes"},
  {nombre: "Eslovenia", poblacion: "2.116.792 habitantes"},
  {nombre: "Letonia", poblacion: "1.883.008 habitantes"},
  {nombre: "Estonia", poblacion: "1.365.884 habitantes"},
  {nombre: "Chipre", poblacion: "920.701 habitantes"},
  {nombre: "Luxemburgo", poblacion: "660.809 habitantes"},
  {nombre: "Malta", poblacion: "542.051 habitantes"}
];

//ZONA DE EVENTOS
//añadiendo un event listener al botón. Cuando se haga clic en el botón, se llamará a la función procesarPoblacion.
btnPoblacion.addEventListener("click", () => {
  procesarPoblacion();
});

//ZONA DE FUNCIONES
//Procesa el valor introducido por el usuario.
function procesarPoblacion(){
    reset();
    let valor = pais.value;
    if (isEmpty(valor)){
        poblacion.textContent = "No has introducido nada";
    }
    else{
        poblacion.textContent = valorPais(valor);
    }
}

//resetea el contenido del elemento de población.
function reset(){
  poblacion.textContent = "";
}

//comprueba si un valor está vacío.
function isEmpty(valor){
  if (String(valor).length == 0){
    return true;
  }
  return false;
}

//busca la población de un país en nuestra "base de datos". Si el país no se encuentra, devuelve un mensaje de error.
function valorPais(tipo_pais){
  let salida="";
  tipo_pais = tipo_pais.trim().toUpperCase();
  let array_paises = listado_paises.filter(pais => pais.nombre.toUpperCase() === tipo_pais);

if (array_paises.length >0){
  salida= array_paises[0].poblacion;
}
else{
  salida = "Ese país no pertenece a la Unión Europea.";
}
  return salida;

}
