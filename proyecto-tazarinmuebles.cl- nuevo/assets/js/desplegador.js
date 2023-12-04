function aceptarCookies() {
  // Aquí puedes agregar tu lógica para guardar la aceptación de cookies
  // Por ejemplo, puedes utilizar cookies o almacenamiento local (localStorage)
  // Una vez que el usuario acepta las cookies, puedes ocultar la notificación
  const cookie = document.getElementById('cookieNotification');
  cookie.classList.add('visually-hidden');
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
