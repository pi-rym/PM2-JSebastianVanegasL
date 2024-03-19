$(document).ready(function() {
    // Evento para limpiar el formulario
    $('#clear-btn').click(function() {
        // Restablecer los valores de los campos del formulario
        $('#title').val('');
        $('#year').val('');
        $('#director').val('');
        $('#duration').val('');
        $('#genre').val('');
        $('#rate').val('');
        $('#poster').val('');
    });
    
    // Evento para manejar el envío del formulario
    $('#movie-form').submit(function(event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        var title = $('#title').val();
        var year = $('#year').val();
        var director = $('#director').val();
        var duration = $('#duration').val();
        var genre = $('#genre').val().split(', ');
        var rate = $('#rate').val();
        var poster = $('#poster').val();

        // Validar que todos los campos estén completos
        if (title && year && director && duration && genre && rate && poster) {
            // Validar que la puntuación sea un número decimal entre 0 y 10
            if (isNaN(rate) || parseFloat(rate) < 0 || parseFloat(rate) > 10) {
                alert('La puntuación debe ser un número decimal entre 0 y 10.');
                return;
            }

            // Crear objeto película
            var movie = {
                title: title,
                year: parseInt(year),
                director: director,
                duration: duration,
                genre: genre,
                rate: parseFloat(rate),
                poster: poster
            };

            // Aquí puedes hacer lo que quieras con el objeto movie, como enviarlo a tu servidor
            console.log('Película creada:', movie);
        } else {
            alert('Por favor complete todos los campos.');
        }
    });
    $('#rate').on('input', function() {
        var maxScore = 10;
        var enteredValue = parseFloat($(this).val());
        
        if (enteredValue > maxScore) {
            $(this).val(maxScore);
        }
    });
});


