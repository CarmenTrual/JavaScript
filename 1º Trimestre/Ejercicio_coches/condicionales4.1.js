'use strict'
//ZONA DE VARIABLES
const marca = document.getElementById("marca");
const precio = document.getElementById("precio");
const btnPrecio = document.getElementById("btnPrecio");

const listado_coches=[
    {nombre: "PEUGEOT", precio: "15000€"},
    {nombre:"C4", precio:"20000€"}
];

//ZONA DE EVENTOS
btnPrecio.addEventListener("click", () => {
    procesarPrecio();
});

//ZONA DE FUNCIONES
function procesarPrecio(){
    reset();
    let valor = marca.value;
    if (isEmpty(valor)){
        precio.textContent = "no has introducido nada";
    }
    else{
        precio.textContent = valorMarca(valor);
    }
}

function reset(){
    precio.textContent = "";
}

function isEmpty(valor){
    if (String(valor).length == 0){
        return true;
    }
    false;
}


function valorMarca(tipo_coche){
    let salida="";
    tipo_coche = tipo_coche.trim().toUpperCase();
    let array_coches = listado_coches.filter(coche => coche.nombre === tipo_coche);

    

   if (array_coches.length >0){
        salida= array_coches[0].precio;
   }
   else{
        salida = "no tenemos registrada esa marca de coches en nuestra base de datos";
   }
    return salida;
   
}




