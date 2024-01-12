const contenido = document.querySelector(".contenido");

localStorage.removeItem(3);
localStorage.clear();
escribitLS();

function escribitLS() {
  //string
  const nombreProfesora = "rocío";
  localStorage.setItem("nombre", nombreProfesora);

  //array
  const meses = ["enero", "febrero", "marzo"];
  localStorage.setItem("meses", JSON.stringify(meses));

  //objeto
  const alumno = {
    nombre: "Rafa",
    ciclo: "DAW"
  }

  localStorage.setItem("objeto alumno", JSON.stringify(alumno));
}

function getLS() {
  const nombreProfesora = localStorage.getItem("nombre");
  const meses = JSON.parse(localStorage.getItem("meses"));
  const alumno = JSON.parse(localStorage.getItem("objeto alumno"));
  const texto = document.createElement("p");
  texto.innerHTML =  `
    nombreProfesora: ${nombreProfesora}
    meses: ${meses.join(", ")}
    alumno: ${alumno.nombre} - ${alumno.ciclo}
  `;
  contenido.appendChild(texto);
}