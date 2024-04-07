$(document).ready(function () {
    // Obtener el ID de la extensión de la ruta actual
    var urlSegments = window.location.pathname.split('/');
    var idInvitacion = urlSegments[urlSegments.length - 1];

    // Realizar una solicitud GET a la API para obtener la invitación
    $.ajax({
        type: 'GET',
        url: '/api/Invitaciones/' + idInvitacion,
        success: function (response) {
            // Mostrar el correo asociado a la invitación
            $('#correo-invitacion').text(response.correo);
            $('#id-invitacion').text(response.id);
            $('#id-evento').text(response.idEvento);
            $('#asistencia').text(response.aceptada === 1 ? "Confirmada" : "Pendiente");
            // Bloquear el botón si la asistencia está confirmada
            if (response.aceptada === 1) {
                $('#boton').prop('disabled', true);
            }

            // Realizar una solicitud GET a la API de eventos para obtener el evento asociado a la invitación
            $.ajax({
                type: 'GET',
                url: '/api/Evento/' + response.idEvento,
                success: function (evento) {
                    // Mostrar el título y la descripción del evento en el formulario
                    $('#titulo-evento').text(evento.titulo);
                    $('#descripcion-evento').text(evento.descripcion);
                },
                error: function (error) {
                    alert('Error al obtener el evento');
                    console.error(error);
                }
            });
        },
        error: function (error) {
            alert('Error al obtener la invitación');
            console.error(error);
        }
    });

    // Escuchar el evento submit del formulario
    $('#form-aceptar').submit(function (event) {
        event.preventDefault();

        // Obtener el ID de la invitación
        var idInvitacion = $('#id-invitacion').text();

        // Realizar una solicitud PUT para actualizar la invitación
        $.ajax({
            type: 'PUT',
            url: '/api/Invitaciones/' + idInvitacion,
            contentType: 'application/json',
            data: JSON.stringify({ id: idInvitacion, aceptada: 1 }),
            success: function (response) {
                // Mostrar una alerta de éxito
                Swal.fire({
                    icon: 'success',
                    title: 'Asistencia confirmada exitosamente',
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                }).then(function () {
                    // Recargar la página después de cerrar la alerta
                    location.reload();
                });
            },
            error: function (error) {
                alert('Error al confirmar la asistencia');
                console.error(error);
            }
        });
    });
});