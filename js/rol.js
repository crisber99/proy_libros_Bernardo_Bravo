document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de registro de roles
    const formRol = document.querySelector('.needs-validation');

    formRol.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();
  
      const codigo = document.querySelector('#codigo').value;
      const nombreRol = document.querySelector('#nombreRol').value;
  
      console.log('Formulario de registro enviado:', { codigo, nombreRol });
  
      const isValid = formRol.checkValidity();
      formRol.classList.add('was-validated');
  
      if (!isValid) {
        return;
      }

      if(codigo ==""){
        window.mostrarAlerta("Debe ingresar un código.","danger");
        return;
      }

      if(nombreRol ==""){
        window.mostrarAlerta("Debe ingresar el nombre del rol.","danger");
        return;
      }
  
      const rolExitoso = window.registrarRol(codigo, nombreRol);
      if (rolExitoso) {
        console.log('Registro de Rol exitoso:', { codigo, nombreRol });
        formRol.reset();
        formRol.classList.remove('was-validated');
      } else {
        console.log('El rol ya existe.');
      }
    }, false);
  });
  