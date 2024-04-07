// Realizar una solicitud AJAX a tu API
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var Invitaciones = JSON.parse(this.responseText);

        // Construir el HTML para mostrar los eventos en una tabla
        var invitacionHTML = "";
        Invitaciones.forEach(function (invitacion) {
            //cambio el estado a texto para su comprencion en la interfaz de usuario
            var estado = invitacion.aceptada === 1 ? "Aceptada" : "Pendiente";
            
            invitacionHTML += "<tr>";
            invitacionHTML += "<td>" + invitacion.id + "</td>";
            invitacionHTML += "<td>" + invitacion.idEvento + "</td>";
            invitacionHTML += "<td>" + invitacion.correo + "</td>";
            invitacionHTML += "<td>" + estado + "</td>";
            invitacionHTML += '<td><a href="/Confirmacion/' + invitacion.id + '"><button>link</button></a></td>';
            invitacionHTML += "</tr>";
        });

        // Mostrar los eventos en el contenedor
        document.getElementById("Invitaciones-container").querySelector("tbody").innerHTML = invitacionHTML;
    }
};
xhttp.open("GET", "/api/Invitaciones", true);
xhttp.send();
