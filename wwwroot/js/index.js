$('#fecha').datepicker({
    uiLibrary: 'bootstrap5'
});

$('#form-evento').submit(function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var titulo = $('#titulo').val();
    var descripcion = $('#descripcion').val();
    var fecha = $('#fecha').val();

    // Crear el objeto de datos del evento
    var eventoData = {
        titulo: titulo,
        descripcion: descripcion,
        fecha: fecha
    };

    // Realizar la solicitud POST a la API
    $.ajax({
        type: 'POST',
        url: '/api/Evento',
        contentType: 'application/json',
        data: JSON.stringify(eventoData),
        success: function (response) {
            // Mostrar una alerta de éxito con SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Evento creado exitosamente',
                showCancelButton: false,
                confirmButtonText: 'Ir a alguna ruta',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirigir a la ruta deseada al hacer clic en el botón de confirmación
                    window.location.href = '/ListaEventos'; // Reemplaza '/ruta-deseada' con la ruta a la que deseas redirigir
                }
            });
        },
        error: function (error) {
            alert('Error al crear el evento');
            console.error(error);
        }
    });
});