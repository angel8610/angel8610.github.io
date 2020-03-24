$(function() {
	$('.galeria .imagencontenedor').on('click', function() {
		$('#modal').modal;
		var rutaImagen = ($(this).find('img').attr('src'));
		$('#imagen-modal').attr('src', rutaImagen)
	});

	/**
	* Cerrar el modal
	*/
	$('#modal').on('click', function() {
		$('#modal').modal('hide');
	});
})