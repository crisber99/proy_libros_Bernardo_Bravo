document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de registro
    const formRegister = document.querySelector('.needs-validation');

//     Array.from(formRegister).forEach(form => {
//         form.addEventListener('submit', event => {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
//           form.classList.add('was-validated')
//     }, false)
// })


    formRegister.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();
  
      const email = document.querySelector('#email').value;
      const name = document.querySelector('#nombres').value;
      const ap_paterno = document.querySelector('#ap_paterno').value;
      const ap_materno = document.querySelector('#ap_materno').value;
      const pass = document.querySelector('#pass').value;
      const r_pass = document.querySelector('#r_pass').value;
      const usuario = document.querySelector('#usuario').value;
      const birthdate = document.querySelector('#date').value;
      const direccion = document.querySelector('#direccion').value;
  
      console.log('Formulario de registro enviado:', { email, name, ap_paterno, ap_materno, pass, r_pass, usuario, birthdate, direccion });
  
      const isValid = formRegister.checkValidity();
      formRegister.classList.add('was-validated');
  
      if (!isValid) {
        return;
      }
  
      if (pass !== r_pass) {
        alert('Las contraseñas no coinciden.');
        console.log('Las contraseñas no coinciden.');
        return;
      }

      if (vacio(pass)) {
        alert('La contraseña no puede contener espacios en blanco.');
        console.log('La contraseña no puede contener espacios en blanco.');
        return;
      }

      if (!letras(pass)) {
        alert('La contraseña debe contener al menos 1 letra en Mayúscula.');
        console.log('La contraseña debe contener al menos 1 letra en Mayúscula.');
        return;
      }

      if (!numeros(pass)) {
        alert('La contraseña debe contener al menos 1 número.');
        console.log('La contraseña debe contener al menos 1 número.');
        return;
      }

      if (!isValidEmail(email))
      {
        alert('Debe ingresar un email valido.');
        console.log('Debe ingresar un email valido.');
        return;
      }

      function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      }

      function vacio(p1){
        var espacios = false;
        var cont = 0;
    
        while (!espacios && (cont < p1.length)) {
        if (p1.charAt(cont) == " ")
            espacios = true;
        cont++;
        }
        
        return espacios;
    }

      function numeros(texto){
        var num = false;
        var cont = 0;
        var reg=new RegExp("^[0-9]");
        while (!num && (cont < texto.length)) {
        if (texto.charAt(cont).match(reg))
            num = true;
        cont++;
        }
        
        return num;
    }

    function letras(texto){
    var letra = false;
        var cont = 0;
        var reg=new RegExp("^[A-Z]");
        while (!letra && (cont < texto.length)) {
        if (texto.charAt(cont).match(reg))
            letra = true;
        cont++;
        }
        
        return letra;
    }

    var edad = calcular_edad(birthdate);

    if(edad <= 13){
        alert('Eres menor de edad.');
        console.log('Eres menor de edad.');
        return;
    }

    function calcular_edad(fecha){

        //calculo la fecha de hoy
        hoy=new Date()
        //alert(hoy)
    
        //calculo la fecha que recibo
        //La descompongo en un array
        var array_fecha = fecha.split("-")
        //si el array no tiene tres partes, la fecha es incorrecta
        if (array_fecha.length!=3)
           return false
    
        //compruebo que los ano, mes, dia son correctos
        var ano
        ano = parseInt(array_fecha[0]);
        if (isNaN(ano))
           return false
    
        var mes
        mes = parseInt(array_fecha[1]);
        if (isNaN(mes))
           return false
    
        var dia
        dia = parseInt(array_fecha[2]);
        if (isNaN(dia))
           return false
    
    
        //si el año de la fecha que recibo solo tiene 2 cifras hay que cambiarlo a 4
        if (ano<=99)
           ano +=1900
    
        //resto los años de las dos fechas
        edad=hoy.getFullYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año
    
        //si resto los meses y me da menor que 0 entonces no ha cumplido años. Si da mayor si ha cumplido
        if (hoy.getMonth() + 1 - mes < 0) //+ 1 porque los meses empiezan en 0
           return edad
        if (hoy.getMonth() + 1 - mes > 0)
           return edad+1
    
        //entonces es que eran iguales. miro los dias
        //si resto los dias y me da menor que 0 entonces no ha cumplido años. Si da mayor o igual si ha cumplido
        if (hoy.getUTCDate() - dia >= 0)
           return edad + 1
    
        return edad
    }
  
      const registroExitoso = window.registrarUsuario(email, name, ap_paterno, ap_materno, pass, r_pass, usuario, birthdate, direccion);
      if (registroExitoso) {
        console.log('Registro exitoso:', { email, name, ap_paterno, ap_materno, pass, r_pass, usuario, birthdate, direccion });
        formRegister.reset();
        formRegister.classList.remove('was-validated');
      } else {
        // alert('El usuario ya existe.');
        console.log('El usuario ya existe.');
      }
    }, false);
  });
  