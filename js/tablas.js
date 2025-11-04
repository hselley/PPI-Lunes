var registro = "<tr><th>Nombre del Juego</th><th>Publisher</th><th>Consola</th><th>Estado</th><th>Fecha adquisición</th><th>Portada</th></tr>";
var estilo=0;

function registrar() {
  /* Validación de que todos los campos del formulario han sido llenados */
  if (document.getElementById("nombre").value == false) {
    alert("Nombre vacío. Debes llenar todos los campos");
  } else if (document.getElementById("pub").value == false) {
    alert("Publisher vacío. Debes llenar todos los campos");
  } else {
    /* Si todos los campos han sido llenados se prosigue con el registro */
    /* Incio de un nuevo renglón en la tabla */
    /* Asignación de estilo independiente a los renglones */
    if (estilo%2 == 0) {
      registro = registro + "<tr class=\"renglon1\">";
    } else {
      registro = registro + "<tr class=\"renglon2\">";
    }
    /* Nombre del juego */
    x = document.getElementById("nombre").value;
    registro = registro + "<td>" + x + "</td>";

    /* Publisher del juego */
    x = document.getElementById("pub").value;
    registro = registro + "<td>" + x + "</td>";

    /* Finalización del renglón de la tabla */
    registro = registro + "</tr>";
    document.getElementById("consolas").innerHTML = registro;

    /* Limpiar los campos */
    document.getElementById("nombre").value = "";
    document.getElementById("pub").value = "";
    document.getElementById("360").checked = false;
    document.getElementById("ps3").checked = false;
    document.getElementById("wii").checked = false;
    document.getElementById("nuevo").checked = false;
    document.getElementById("usado").checked = false;
    document.getElementById("fecha").value = false;
    document.getElementById("portada").value = null;

    /* Se alterna el estilo de los renglones */
    estilo = estilo + 1;
  }
}