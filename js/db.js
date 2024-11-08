document.addEventListener('DOMContentLoaded', function() {
    // Simulación de base de datos en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    // Función para registrar usuarios
    function registrarUsuario(email, name, ap_paterno, ap_materno, pass, r_pass, usuario, birthdate, direccion) {
      console.log('Intentando registrar usuario:', { email, name, ap_paterno, ap_materno, pass, r_pass, usuario, birthdate, direccion });
      const usuarioExistente = usuarios.find(user => user.email === email || user.usuario === usuario);
      if (usuarioExistente) {
        mostrarAlerta('El usuario ya existe.', 'danger');
        console.log('El usuario ya existe.');
        return false;
      }
  
      const nuevoUsuario = { email, name, ap_paterno, ap_materno, pass, r_pass, usuario, birthdate, direccion };
      usuarios.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      mostrarAlerta('Usuario registrado exitosamente.', 'success');
      console.log('Usuario registrado exitosamente:', nuevoUsuario);
      return true;
    }

    const roles = JSON.parse(localStorage.getItem('roles')) || [];
    // Función para registrar nuevo rol
    function registrarRol(codigo, nombreRol) {
      console.log('Intentando registrar un rol:', { codigo, nombreRol });
      const rolExistente = roles.find(rol => rol.codigo === codigo);
      if (rolExistente) {
        mostrarAlerta('El rol ya existe.', 'danger');
        console.log('El rol ya existe.');
        return false;
      }
  
      const nuevoRol = { codigo, nombreRol };
      roles.push(nuevoRol);
      localStorage.setItem('roles', JSON.stringify(roles));
      mostrarAlerta('Rol registrado exitosamente.', 'success');
      console.log('Rol registrado exitosamente:', nuevoRol);
      return true;
    }
  
    // Función para iniciar sesión
    function iniciarSesion(emailOrusuario, pass) {
      console.log('Intentando iniciar sesión:', { emailOrusuario, pass });
      const usuario = usuarios.find(user => (user.email === emailOrusuario || user.usuario === emailOrusuario) && user.pass === pass);
      if (usuario) {
        mostrarAlerta('Inicio de sesión exitoso.', 'success');
        console.log('Inicio de sesión exitoso:', usuario);
        return true;
      } else {
        mostrarAlerta('Email/Usuario o contraseña incorrectos.', 'danger');
        console.log('Email/Usuario o contraseña incorrectos.');
        return false;
      }
    }
  
    // Función para mostrar alertas
    function mostrarAlerta(mensaje, tipo) {
      const alertaDiv = document.createElement('div');
      alertaDiv.className = `alert alert-${tipo}`;
      alertaDiv.appendChild(document.createTextNode(mensaje));
      const container = document.querySelector('.container');
      const firstChild = container.firstChild;
      
      // Insertar la alerta al principio del contenedor
      if (firstChild) {
        container.insertBefore(alertaDiv, firstChild);
      } else {
        container.appendChild(alertaDiv);
      }
  
      // Desaparecer alerta después de 3 segundos
      setTimeout(() => {
        const alerta = document.querySelector('.alert');
        if (alerta) {
          alerta.remove();
        }
      }, 6000);
    }
  
    // Exportar funciones
    window.registrarUsuario = registrarUsuario;
    window.iniciarSesion = iniciarSesion;
    window.mostrarAlerta = mostrarAlerta;
    window.registrarRol = registrarRol;
  });
  