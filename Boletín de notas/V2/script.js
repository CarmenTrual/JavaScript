// ZONA DE CARGA/LECTURA DEL DOM
const alumnoSelect = document.getElementById('alumno');
const notasContainer = document.getElementById('notas');
const btnCargar = document.getElementById('btn-cargar');
const btnBorrar = document.getElementById('btn-borrar');
const acciones = document.getElementById('acciones');
const resultadoMedia = document.getElementById('resultado-media');
const resultadoAlta = document.getElementById('resultado-alta');
const resultadoBaja = document.getElementById('resultado-baja');
const resultadoSuspenso = document.getElementById('resultado-suspenso');

// ZONA DE MAIN
function main() {
  cargarEventos();
}


// ZONA DE CARGA DE LOS 4 EVENTOS
function cargarEventos() {
  btnCargar.addEventListener('click', cargarNotas);
  btnBorrar.addEventListener('click', borrarNotas);
  acciones.addEventListener('click', delegarAcciones);
  alumnoSelect.addEventListener('change', () => {
    // Limpiar notas anteriores
    notasContainer.innerHTML = '';
    
    // Habilitar botón de cargar y deshabilitar botón de borrar
    btnCargar.disabled = false;
    btnCargar.classList.remove('disabled');
    btnBorrar.disabled = true;
    btnBorrar.classList.add('disabled');
    
    // Deshabilitar botones de acciones
    Array.from(acciones.getElementsByClassName('accion')).forEach(btn => {
      btn.nextElementSibling.innerHTML = "";
      btn.disabled = true;
      btn.classList.add('disabled');
    });
  });
}


// ZONA DONDE SE PINTA DINÁMICAMENTE EL ARRAY
function cargarNotas() {
  const alumnos = {
    'Carmen Trujillo': [7, 4, 6, 8, 4],
    'Santi Trujillo': [8, 9, 7, 6, 5],
    'Cristina Conde': [6, 7, 8, 9, 10],
    'Ángel Moya': [10, 9, 8, 7, 6],
    'Lunna Villalta': [5, 6, 7, 8, 9]
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
  
  // Habilitar botones
  btnCargar.disabled = true;
  btnCargar.classList.add('disabled');
  btnBorrar.disabled = false;
  btnBorrar.classList.remove('disabled');
  Array.from(acciones.getElementsByClassName('accion')).forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('disabled');
  });
}

// ZONA DE BORRADO DE NOTAS
function borrarNotas() {
  notasContainer.innerHTML = '';
  
  // Deshabilitar botones
  btnCargar.disabled = false;
  btnCargar.classList.remove('disabled');
  btnBorrar.disabled = true;
  btnBorrar.classList.add('disabled');
  Array.from(acciones.getElementsByClassName('accion')).forEach(btn => {
    btn.nextElementSibling.innerHTML= "";
    btn.disabled = true;
    btn.classList.add('disabled');
  });
}

// ZONA DE DELEGACIÓN DE ACCIONES
function delegarAcciones(e) {
  if (e.target.classList.contains('accion')) {
    switch (e.target.id) {
      case 'btn-media':
        mostrarMedia();
        break;
      case 'btn-nota-alta':
        mostrarNotaAlta();
        break;
      case 'btn-nota-baja':
        mostrarNotaBaja();
        break;
      case 'btn-suspenso':
        mostrarSuspensos();
        break;
    }
  }
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



