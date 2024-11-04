document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de recuperación de contraseñas
    const formPass = document.querySelector('.pass-form form');
    formPass.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
  
        const email = document.querySelector('#email').value;

        console.log('Formulario de recuperación de contraseña:', { email });

        if(email == ""){
            window.mostrarAlerta("Debe ingresar su email.","danger");
            return;
        }

        window.mostrarAlerta("Mail eviado.","success");

    }, false);
});