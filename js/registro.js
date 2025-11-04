var contenido = "<tr><th>Nombre del juego</th><th>Publisher</th><th>Consola</th><th>Medio</th><th>Fecha de adquisición</th></tr>";
var estilo = 0;

function registro() {
    if(document.getElementById('nombre').value == false) {
        alert("Nombre vacio");
    } else if(document.getElementById('pub').value == false) {
        alert("Publisher vacio");
    } else if(document.querySelector('input[name=consola]:checked') == null) {
        alert("Consola vacia");
    } else {
        if(estilo%2 == 0) {
            contenido = contenido + "<tr class=\"renglon1\">";
        } else {
            contenido = contenido + "<tr class=\"renglon2\">";
        }
        // Nombre del juego
        x = document.getElementById('nombre').value;
        contenido = contenido + "<td>" + x + "</td>";

        // Publisher
        x = document.getElementById('pub').value;
        contenido = contenido + "<td>" + x + "</td>";

        // Consola
        y = document.querySelector('input[name=consola]:checked');
        if(y!=null) {
            consola = y.value;
            console.log(consola);
            contenido = contenido + "<td>" + consola + "</td>";
        }
        

        // Medio
        z = document.querySelectorAll('input[name=medio]:checked');
        var c = "";
        for(var v of z) {
            medio = v.value;
            console.log(medio);
            c = c + " " + medio;
        }
        contenido = contenido + "<td>" + c + "</td>";

        // Fecha
        fecha = document.getElementById('fecha').value;
        contenido = contenido + "<td>" +  fecha + "</td>";

        // Completar la tabla
        contenido = contenido + "</tr>";
        document.getElementById('videojuegos').innerHTML = contenido;

        // Limpiar los campos
        document.getElementById('nombre').value = "";
        document.getElementById('pub').value = "";
        
        document.getElementById('fecha  ').value = "";

        // Alternar el estilo
        estilo = estilo + 1;

    }
}