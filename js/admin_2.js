$(document).ready(function () {
    console.log("Módulo de Admin 1: Flujo completo cargado.");

    // 1. Input oculto para abrir el explorador real
    const hiddenInput = $('<input type="file" multiple style="display:none">');
    $('body').append(hiddenInput);

    // 2. Abrir explorador al dar click en buscar
    $('.btn-search-files').on('click', function (e) {
        e.preventDefault();
        hiddenInput.click();
    });

    // 3. Al seleccionar archivos, abrimos Pantalla 3 (Confirmación)
    hiddenInput.on('change', function () {
        if (this.files.length > 0) {
            var modalConfirm = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
            modalConfirm.show();
            $(this).val(''); // Limpiamos input
        }
    });

    // 4. Al dar click en "Subir archivos", pasamos a la Pantalla 4 (Éxito)
    $('.btn-subir-final').on('click', function () {
        const btn = $(this);
        btn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm"></span> Subiendo...');

        setTimeout(function () {
            // Cerramos modal de confirmación
            var modalConfirm = bootstrap.Modal.getInstance(document.getElementById('modalConfirmacion'));
            modalConfirm.hide();

            // Abrimos modal de éxito (Pantalla 4)
            setTimeout(function() {
                var modalExito = new bootstrap.Modal(document.getElementById('modalExito'));
                modalExito.show();
            }, 400);

            btn.prop('disabled', false).text('Subir archivos');
        }, 2000);
    });
});