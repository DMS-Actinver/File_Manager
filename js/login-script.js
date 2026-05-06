$(document).ready(function() {
    console.log("Login de Spine Beat inicializado.");

    $('#formLogin').on('submit', function(e) {
        e.preventDefault();
        
        // 1. Obtener valores de los inputs
        const user = $('#usuario').val().trim();
        const pass = $('#password').val().trim();
        
        // 2. Efecto visual de carga en el botón
        const btn = $(this).find('button');
        const originalText = btn.text();
        
        btn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Verificando...');

        // 3. Simulación de validación con delay para que se vea profesional
        setTimeout(function() {
            
            if (user === "Admin_1") {
                // Redirección al Dashboard Verde
                window.location.href = 'dashboard_admin_1.html';
            } 
            else if (user === "Admin_2") {
                // Redirección al Dashboard Morado
                window.location.href = 'dashboard_admin_2.html';
            } 
            else {
                // Si el usuario no es ninguno de los dos
                alert('Usuario no reconocido. Por favor verifique sus datos.');
                btn.prop('disabled', false).text(originalText);
            }

        }, 1500); // 1.5 segundos de "espera"
    });
});