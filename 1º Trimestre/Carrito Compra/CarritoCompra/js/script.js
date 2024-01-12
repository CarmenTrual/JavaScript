// Importamos todas las funciones del archivo funciones.js
import * as funciones from "./imports/funciones.js";

// Constantes de los elementos del DOM
const TABLA_CARRITO = document.querySelector("#lista-carrito tbody");  // Seleccionar el cuerpo de la tabla del carrito
const BOTON_VACIAR_CARRITO = document.querySelector("#vaciar-carrito");  // Seleccionar el botón para vaciar el carrito
const ELEMENTO_LISTA_CURSOS = document.querySelector("#lista-cursos");  // Seleccionar el elemento que contiene la lista de cursos
const RUTA_JSON = "data/data.json";  
const ARRAY_CURSOS_SELECCIONADOS = [];  // Array para los cursos

// Función para mostrar los cursos almacenados en el carrito
function mostrarCursosAlmacenados(tabla, array) {
  array.forEach((arrayInfoTarjeta) => {
    // Llamada a la función para actualizar las filas existentes en la tabla del carrito
    funciones.actualizarFilaExistente(tabla, arrayInfoTarjeta[4], arrayInfoTarjeta);
  });
}

// Carga los cursos almacenados y los muestra en la tabla del carrito
funciones.cargarCarrito(ARRAY_CURSOS_SELECCIONADOS);  // Llamada a la función para cargar cursos almacenados
mostrarCursosAlmacenados(TABLA_CARRITO, ARRAY_CURSOS_SELECCIONADOS);  // Llamada a la función para mostrar cursos almacenados en la tabla


// Función asincrónica para obtener datos del archivo JSON y mostrarlos en la página
async function obtenerDatos(ruta_json, elemento_lista) {
  try {
    // Realiza una solicitud fetch para obtener los datos del archivo JSON
    const RESPUESTA = await fetch(ruta_json);

    // Convierte la respuesta a formato JSON
    const DATOS = await RESPUESTA.json();
    let fila_div;

    // Recorre los datos y crea elementos en la página para mostrar la información
    DATOS.forEach(({ imagen, titulo, profesor, precio, precioNuevo, id }, index) => {
      // Crea una nueva fila cada 3 cursos para mantener el diseño de 3 columnas
      if (index % 3 === 0) {
        fila_div = document.createElement("div");
        fila_div.classList.add("row");
        elemento_lista.appendChild(fila_div);
      }

       // Crea la tarjeta del curso y agrega al contenedor correspondiente
      const DIV_TARJETA = document.createElement("div");
      DIV_TARJETA.classList.add("four", "columns");
      DIV_TARJETA.innerHTML = `
        <div class="card">
          <img src="${imagen}" class="imagen-curso u-full-width" />
          <div class="info-card">
            <h4>${titulo}</h4>
            <p>${profesor}</p>
            <img src="img/estrellas.png" />
            <p class="precio">${precio} <span class="u-pull-right">${precioNuevo}</span></p>
            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${id}">Agregar Al Carrito</a>
          </div>
        </div>
      `;

      fila_div.appendChild(DIV_TARJETA);
    });
  } catch (error) {
    console.error(`error: ${error}`);
  }
}

// Llamada a la función para obtener datos del JSON y mostrarlos en la página
obtenerDatos(RUTA_JSON, ELEMENTO_LISTA_CURSOS);

// Función para agregar un curso al carrito al hacer clic en el botón correspondiente
function agregarAlCarrito(evento, tabla, array) {
  // Obtiene el elemento que fue clickeado
  const ELEMENTO_CLICKEADO = evento.target;

  // Verifica si el elemento clickeado tiene la clase 'agregar-carrito'
  if (ELEMENTO_CLICKEADO.classList.contains("agregar-carrito")) {
    // Obtiene el ID del curso desde el atributo 'data-id'
    const ID_OBJETIVO = ELEMENTO_CLICKEADO.dataset.id;

    // Obtiene el elemento padre del botón clickeado (la tarjeta de curso)
    const ELEMENTO_PADRE = ELEMENTO_CLICKEADO.parentElement.parentElement;

    // Obtiene la información de la tarjeta de curso
    const ARRAY_INFO_TARJETA = obtenerInfoTarjeta(ELEMENTO_PADRE);

    // Agrega el ID del curso al final del array de información de la tarjeta
    ARRAY_INFO_TARJETA.push(ID_OBJETIVO);

    // Agrega el array de información de la tarjeta al array de cursos seleccionados
    array.push(ARRAY_INFO_TARJETA);

    // Almacena la información actualizada en el almacenamiento local
    localStorage.setItem("cursos_seleccionados", JSON.stringify(array));

    // Actualiza la fila existente o agrega una nueva fila en la tabla del carrito
    funciones.actualizarFilaExistente(tabla, ID_OBJETIVO, ARRAY_INFO_TARJETA);
  }
}

// Función para obtener la información de una tarjeta
function obtenerInfoTarjeta(envoltorio_tarjeta) {
  const IMG_SRC = envoltorio_tarjeta.querySelector("img").src;
  const TITULO = envoltorio_tarjeta.querySelector("h4").textContent;
  const AUTOR = envoltorio_tarjeta.querySelector("p").textContent;
  const OFERTA = envoltorio_tarjeta.querySelector(".precio span").textContent;

  const ARRAY_INFO_TARJETA = [IMG_SRC, TITULO, AUTOR, OFERTA];
  return ARRAY_INFO_TARJETA;
}

// Función para crear una fila en la tabla del carrito
function crearFila(array_info_tarjeta) {
  const FILA = document.createElement("tr");
  FILA.setAttribute("data-id", array_info_tarjeta[4]);
  FILA.innerHTML = `
    <td>
      <img src="${array_info_tarjeta[0]}" width="100">
    </td>
    <td>${array_info_tarjeta[1]}</td>
    <td>${array_info_tarjeta[3]}</td>
    <td>1</td>
    <td>
      <a href="#" class="borrar-curso" data-id="${array_info_tarjeta[4]}">X</a>
    </td>
  `;
  return FILA;
}

// Escucha el evento click en el elemento lista-cursos
ELEMENTO_LISTA_CURSOS.addEventListener("click", (evento) => {
  evento.preventDefault();
  agregarAlCarrito(evento, TABLA_CARRITO, ARRAY_CURSOS_SELECCIONADOS);
  funciones.actualizarTotalAlModificarCarrito(TABLA_CARRITO, ARRAY_CURSOS_SELECCIONADOS);
});

// Escucha el evento click en el botón vaciar-carrito
BOTON_VACIAR_CARRITO.addEventListener("click", () => {
  funciones.vaciarCarritoDinamicamente(TABLA_CARRITO, ARRAY_CURSOS_SELECCIONADOS);
  funciones.actualizarTotalAlModificarCarrito(TABLA_CARRITO, ARRAY_CURSOS_SELECCIONADOS);
});

// Función para eliminar un curso del carrito
function eliminarCurso(evento, array, tabla) {
  const ELEMENTO_CLICKEADO = evento.target;

  if (ELEMENTO_CLICKEADO.classList.contains("borrar-curso")) {
    const ID_OBJETIVO = ELEMENTO_CLICKEADO.dataset.id;
    const INDICE = array.findIndex((item) => item[4] === ID_OBJETIVO);

    if (INDICE !== -1) {
      array.splice(INDICE, 1);
      localStorage.setItem("cursos_seleccionados", JSON.stringify(array));

      const FILA_OBJETIVO = tabla.querySelector(`tr[data-id="${ID_OBJETIVO}"]`);
      const CELDA_CANTIDAD = FILA_OBJETIVO.querySelector("td:nth-child(4)");

      if (parseInt(CELDA_CANTIDAD.textContent) > 1) {
        CELDA_CANTIDAD.textContent = parseInt(CELDA_CANTIDAD.textContent) - 1;
      } else {
        FILA_OBJETIVO.remove();
      }
    }
  }

  // Actualiza el total al modificar el carrito
  funciones.actualizarTotalAlModificarCarrito(TABLA_CARRITO, ARRAY_CURSOS_SELECCIONADOS);
}

// Escucha el evento click en la tabla del carrito
TABLA_CARRITO.addEventListener("click", (evento) => {
  eliminarCurso(evento, ARRAY_CURSOS_SELECCIONADOS, TABLA_CARRITO);
});






