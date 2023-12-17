// Función "cargarCarrito"
export function cargarCarrito(array) {
  // Obtiene los cursos seleccionados del almacenamiento local y los agrega al array
  const CURSOS_GUARDADOS = localStorage.getItem("cursos_seleccionados");
  if (CURSOS_GUARDADOS) {
    array.push(...JSON.parse(CURSOS_GUARDADOS));
  }
}

// Exporta la función "vaciarCarritoDinamicamente"
export function vaciarCarritoDinamicamente(tabla, array) {
  // Eliminamos dinámicamente todas las filas de la tabla y vacía el array de cursos
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }
  array.length = 0; // Establecemos la longitud del array a cero, eliminando todos los elementos
  localStorage.clear(); // Limpiamos el almacenamiento local
}

// Función "crearFila"
export function crearFila(array_info_tarjeta) {
  // Creamos un nuevo elemento de fila <tr> en el DOM
  const FILA = document.createElement("tr");
  // Establecemos el atributo "data-id" en la fila con el ID del curso
  FILA.setAttribute("data-id", array_info_tarjeta[4]);
  // Rellenamos la fila con celdas <td> que contienen la información del curso
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


// Función "actualizarFilaExistente"
export function actualizarFilaExistente(tabla, id, array_info_tarjeta) {
  // Buscamos la fila con el mismo id y actualizamos la información
  const filaExistente = tabla.querySelector(`tr[data-id="${id}"]`);
  // Verificamos si la fila ya existe
  if (filaExistente) {
     // Si existe, obtiene el elemento de cantidad y actualiza su contenido
    const cantidadElemento = filaExistente.querySelector("td:nth-child(4)");
    cantidadElemento.textContent = parseInt(cantidadElemento.textContent) + 1;
  } else {
    // Si no existe, crea una nueva fila y la agrega a la tabla
    const nuevaFila = crearFila(array_info_tarjeta);
    tabla.appendChild(nuevaFila);
  }
}







