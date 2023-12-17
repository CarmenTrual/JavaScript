// ZONA DE CARGA/LECTURA DEL DOM
const alumnoSelect = document.getElementById('alumno');
const notasContainer = document.getElementById('notas');
const btnMedia = document.getElementById('btn-media');
const btnNotaAlta = document.getElementById('btn-nota-alta');
const btnNotaBaja = document.getElementById('btn-nota-baja');
const btnSuspenso = document.getElementById('btn-suspenso');
const resultadoMedia = document.getElementById('resultado-media');
const resultadoAlta = document.getElementById('resultado-alta');
const resultadoBaja = document.getElementById('resultado-baja');
const resultadoSuspenso = document.getElementById('resultado-suspenso');

// ZONA DE MAIN
function main() {
  cargarEventos();
  cargarNotas();
}

// ZONA DE CARGA DE LOS 4 EVENTOS
function cargarEventos() {
  btnMedia.addEventListener('click', mostrarMedia);
  btnNotaAlta.addEventListener('click', mostrarNotaAlta);
  btnNotaBaja.addEventListener('click', mostrarNotaBaja);
  btnSuspenso.addEventListener('click', mostrarSuspensos);
  alumnoSelect.addEventListener('change', cargarNotas);
}

// ZONA DONDE SE PINTA DINÁMICAMENTE EL ARRAY
function cargarNotas() {
  const alumnos = {
    'Carmen Trujillo': [7, 4, 6, 8, 4],
    'Santi Trujillo': [8, 9, 7, 6, 7],
    'Cristina Conde': [6, 7, 8, 9, 4],
    'Ángel Moya': [10, 9, 8, 7, 7],
    'Lunna Villalta': [4, 6, 7, 8, 9]
  };
  
  const alumnoSeleccionado = alumnoSelect.value;
  const notas = alumnos[alumnoSeleccionado];
  
  // Limpiar notas anteriores
  notasContainer.innerHTML = '';
  
  notas.forEach(nota => {
    const p = document.createElement('p');
    p.textContent = nota;
    notasContainer.appendChild(p);
  });
}

// ZONA DE DECLARACIÓN DE LAS FUNCIONES
function mostrarMedia() {
  const notas = Array.from(notasContainer.children).map(p => Number(p.textContent));
  const media = notas.reduce((a, b) => a + b, 0) / notas.length;
  resultadoMedia.textContent = 'Media: ' + media.toFixed(2);
}

function mostrarNotaAlta() {
  const notas = Array.from(notasContainer.children).map(p => Number(p.textContent));
  resultadoAlta.textContent = 'Nota más alta: ' + Math.max(...notas);
}

function mostrarNotaBaja() {
  const notas = Array.from(notasContainer.children).map(p => Number(p.textContent));
  resultadoBaja.textContent = 'Nota más baja: ' + Math.min(...notas);
}

function mostrarSuspensos() {
  const notas = Array.from(notasContainer.children).map(p => Number(p.textContent));
  const suspensos = notas.filter(nota => nota < 5);
  
  if (suspensos.length > 0) {
    resultadoSuspenso.textContent = 'Sí: ' + suspensos.join(', ');
  } else {
    resultadoSuspenso.textContent = 'No hay suspensos';
  }
}

// ZONA DE ESCRITURA DEL DOM
main();



