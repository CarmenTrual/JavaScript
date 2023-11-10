'use strict'
//ZONA DE VARIABLES
//Obtener referencias a los elementos del DOM
const pais = document.getElementById("pais");
const poblacion = document.getElementById("poblacion");
const btnPoblacion = document.getElementById("btnPoblacion");

//ZONA DE EVENTOS
//añadir un event listener al botón. que llamará a la función procesarPoblacion.
btnPoblacion.addEventListener("click", () => {
  procesarPoblacion();
});

//ZONA DE FUNCIONES
//Procesa el valor introducido por el usuario.
function procesarPoblacion(){
    reset();
    let valor = pais.value; //obtenemos el valor introducido por el usuario.
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


function isEmpty(valor){
  if (String(valor).length == 0){
    return true;
  }
  return false;
}

//Busca la población de un país en nuestra "base de datos". Si el país no se encuentra, devuelve un mensaje de error.
  function valorPais(tipo_pais){
    let salida="";
    tipo_pais = tipo_pais.trim().toUpperCase();
  
    switch(tipo_pais) {
      case "ESPAÑA":
        salida = "48.446.594 habitantes";
        break;
      case "PORTUGAL":
        salida = "10.467.366 habitantes";
        break;
      case "ALEMANIA":
        salida = "83.358.845 habitantes";
        break;
      case "ITALIA":
        salida = "58.850.717 habitantes";
        break;
      case "FRANCIA":
        salida = "68.070.697 habitantes";
        break;
      case "POLONIA":
        salida = "36.753.736 habitantes";
        break;
      case "RUMANÍA":
        salida = "19.051.562 habitantes";
        break;
      case "PAÍSES BAJOS":
        salida = "17.811.291 habitantes";
        break;
      case "BÉLGICA":
        salida = "11.754.004 habitantes";
        break;
      case "SUECIA":
        salida = "10.521.556 habitantes";
        break;
      case "REPÚBLICA CHECA":
        salida = "10.827.529 habitantes";
        break;
      case "GRECIA":
        salida = "10.394.055 habitantes";
        break;
      case "HUNGRÍA":
        salida = "9.597.085 habitantes";
        break;
      case "AUSTRIA":
        salida = "9.104.772 habitantes";
        break;
      case "BULGARIA":
        salida = "6.447.710 habitantes";
        break;
      case "DINAMARCA":
        salida = "5.932.654 habitantes";
        break;
      case "FINLANDIA":
        salida = "5.563.970 habitantes";
        break;
      case "ESLOVAQUIA":
        salida = "5.428.792 habitantes";
        break;
      case "IRLANDA":
        salida = "5.194.336 habitantes";
        break;
      case "CROACIA":
        salida = "3.850.894 habitantes";
        break;
      case "LITUANIA":
        salida = "2.857.279 habitantes";
        break;
      case "ESLOVENIA":
        salida = "2.116.792 habitantes";
        break;
      case "LETONIA":
        salida = "1.883.008 habitantes";
        break;
      case "ESTONIA":
        salida = "1.365.884 habitantes";
        break;
      case "CHIPRE":
        salida = "920.701 habitantes";
        break;
      case "LUXEMBURGO":
        salida = "660.809 habitantes";
        break;
      case "MALTA":
        salida = "542.051 habitantes";
        break;
      default:
        salida = "Ese país no pertenece a la Unión Europea.";
    }
  
    return salida;
  }
