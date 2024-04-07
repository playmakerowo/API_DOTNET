// Realizar una solicitud AJAX a tu API
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var eventos = JSON.parse(this.responseText);
        var select = document.getElementById("IdEvento");
        eventos.forEach(function (evento) {
            var option = document.createElement("option");
            option.value = evento.id;
            option.text = evento.id + " " + evento.titulo;
            select.appendChild(option);
        });

        // Construir el HTML para mostrar los eventos en una tabla
        var eventosHTML = "";
        eventos.forEach(function (evento) {
            eventosHTML += "<tr>";
            eventosHTML += "<td>" + evento.titulo + "</td>";
            eventosHTML += "<td>" + evento.descripcion + "</td>";
            eventosHTML += "<td>" + evento.fecha + "</td>";
            eventosHTML += "</tr>";
        });

        // Mostrar los eventos en el contenedor
        document.getElementById("eventos-container").querySelector("tbody").innerHTML = eventosHTML;
    }
};
xhttp.open("GET", "/api/Evento", true);
xhttp.send();


$('#form-invitar').submit(function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var idEvento = $('#IdEvento').val();
    var correoInvitado = $('#correo_invitado').val();

    // Crear el objeto de datos de la invitación
    var invitacionData = {
        IdEvento: idEvento,
        Correo: correoInvitado
    };

    // Realizar la solicitud POST a la API
    $.ajax({
        type: 'POST',
        url: '/api/Invitaciones',
        contentType: 'application/json',
        data: JSON.stringify(invitacionData),
        success: function (response) {
            // Mostrar una alerta de éxito con SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Invitación creada exitosamente',
                showCancelButton: false,
                confirmButtonText: 'Ok',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Recargar la página después de confirmar
                    location.reload();
                }
            });
        },
        error: function (error) {
            alert('Error al crear la invitación');
            console.error(error);
        }
    });
});