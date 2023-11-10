'use strict'

  function fiesta() {
    let respuestaEdad = document.getElementById("respuestaEdad");
    let respuestaEntrada = document.getElementById("respuestaEntrada");
    let respuestaGratis = document.getElementById("respuestaGratis");
  
    const edad = parseInt(document.getElementById("edad").value);
  
    if (isNaN(edad) || edad <= 0) {
      alert("Por favor, introduce una edad válida.");
      reset();
    } else {
      // Evaluar si puede beber alcohol (mayores de 18 años)
      const puedeBeber = edad >= 18;
      respuestaEdad.innerText = puedeBeber
        ? "Sí"
        : "No";
  
      // Evaluar si puede ingresar a la fiesta (entre 18 y 99 años)
      const puedeIngresarFiesta = edad >= 18 && edad <= 99;
      respuestaEntrada.innerText = puedeIngresarFiesta
        ? "Sí"
        : "No";
  
      // Evaluar si tiene entrada gratis (entre 37 y 99 años)
      const entradaGratis = edad >= 37 && edad <= 99;
      if (edad <= 17) {
        respuestaGratis.innerText = entradaGratis
          ? "No"
          : "No";
      } else {
        respuestaGratis.innerText = entradaGratis
          ? "Sí"
          : "No";
      }
    }
  }
  function reset() {
    respuestaEdad.innerHTML = "";
    respuestaEntrada.innerHTML = "";
    respuestaGratis.innerHTML = "";
  }