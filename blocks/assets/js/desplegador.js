const formulario = document.getElementById('contact');

function validarBootstrap(){
  formulario.classList.add('was-validated');
  }

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;
    const tlfregex = /^\d{9}$/;
    const emailregex= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const nombre = document.getElementById('name').value;
    // Valida el nombre utilizando una expresión regular
    if (!nombreRegex.test(nombre)) {
     alert('El nombre es inválido. Por favor, introduce solo letras y espacios.');
     document.getElementById('name');
     return
   }
   const correo = document.getElementById('email').value;
if (!emailregex.test(correo)) {
  alert('Por favor, introduce un correo válido.');
  document.getElementById('email').focus();  // Añadí .focus() para resaltar el campo
  return;
}
   const formData = new FormData();
  //Datos personales
  formData.append('name', name); 
  formData.append('email', email); 
  formData.append('message', message); 

  setTimeout(function() {
    // Oculta el overlay de carga
    //document.getElementById('overlay').style.display = 'none';
  
    // Envío del formulario
    enviarFormularioReal(formData);
  }, 30000);
    
  // ========> Envío los datos al servidor <=========
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/enviar', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText);
        formulario.reset();
      }
    };
    xhr.send(formData);
  });







function aceptarCookies() {
  const cookieNotification = document.getElementById('cookieNotification');
  cookieNotification.classList.add('visually-hidden');
  cookieNotification.classList.remove('d-flex');
  cookieNotification.classList.remove('justify-content-center');
  cookieNotification.classList.remove('gap-3');
  cookieNotification.style.display = "none";
}

function toggleConcepto(conceptoId) {
  var concepto = document.getElementById("concepto" + conceptoId);
  concepto.classList.toggle("oculto");
}

$(document).ready(function(){
  // Activate Carousel with a specified interval
  $("#myCarousel").carousel({interval: 3000});
        
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
    
  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#myCarousel").carousel("next");
  });
});

