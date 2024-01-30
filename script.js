// Espera a que el DOM esté completamente cargado
$(document).ready(function () {
    // Utiliza .on() para delegación de eventos
    $('#thumbs').on('click', 'img', function () {
        var $this = $(this);
        // Limpia el formato
        $('#thumbs img').removeClass('border-highlight');
        // Destaca con un borde coloreado
        $this.addClass('border-highlight');
        // Obtiene el valor del atributo 'id'
        var idAttribute = $this.attr('id');
        // Verifica si 'idAttribute' no es undefined antes de usarlo
        if (idAttribute !== undefined) {
            // Cambia el valor del campo del formulario "prod" al valor de img.id
            $('[name="prod"]').val(idAttribute.substring(idAttribute.lastIndexOf('-') + 1));
        }
    });
});
