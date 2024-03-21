const axios = require('axios');
$(document).ready(function() {
   
    $('#clear-btn').click(function() {
        $('#title').val('');
        $('#year').val('');
        $('#director').val('');
        $('#duration').val('');
        $('#genre').val('');
        $('#rate').val('');
        $('#poster').val('');
    });
    
    $('#movie-form').submit(function(event) {
        event.preventDefault();

        
        var title = $('#title').val();
        var year = $('#year').val();
        var director = $('#director').val();
        var duration = $('#duration').val();
        var genre = $('#genre').val().split(',');
        var rate = $('#rate').val();
        var poster = $('#poster').val();

        
        if (title && year && director && duration && genre && rate && poster) {
            
            if (isNaN(rate) || parseFloat(rate) < 0 || parseFloat(rate) > 10) {
                alert('La puntuación debe ser un número decimal entre 0 y 10.');
                return;
            }

            var movie = {
                title: title,
                year: parseInt(year),
                director: director,
                duration: duration,
                genre: genre,
                rate: parseFloat(rate),
                poster: poster
            };

            
            axios.post('http://localhost:3000/movies', movie)
                .then(function(response) {
                    console.log('Película creada:', response.data);
                    alert('Película creada correctamente');
                    
                })
                .catch(function(error) {
                    console.error('Error al crear la película:', error.response.data);
                    alert('Error al crear la película');
                });
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


