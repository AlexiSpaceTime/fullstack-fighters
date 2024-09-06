

let form = document.getElementById('cta-form'); //Obtiene el elemento HTML con su identificación

form.addEventListener('click', function() { // Añade un "escuchador de eventos" al botón form, que ejecuta una función cada vez que el botón es clicado
  let formElement = document.getElementById('form'); //Obtiene el elemento HTML con el identificador form
formElement.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hasta el elemento form
});
;

  function presionarBoton() { //Define una función llamada "presionarBoton" que se ejecutará cuando se haga clic en el botón de enviar del formulario
    // capturar los valores de los inputs
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;
    // enviar los valores en un objeto a la consola
    

    if(nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos');
      return;
    }

    // mostrar un mensaje de alerta
    alert('Gracias por enviar tu mensaje, revisa la consola por favor');
    console.log({nombre, email, mensaje});
    // limpiar los inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  