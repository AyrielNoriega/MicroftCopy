

$(document).ready(function () {

 
  // $(window).scroll(function () { 
  //   console.log($(document).scrollTop());
  // })
 
  var desplazamientoActual = 0
  

  $(document).on("scroll", function(){
    //sacamos el desplazamiento actual de la página
    console.log($(document).scrollTop())
    var desplazamientoActual = $(document).scrollTop();
    //accedemos al control de "ir arriba"
    if(desplazamientoActual > 650){
      $(".conectate").removeClass("inline-block animated fadeInUp");
    } else if (desplazamientoActual < 600) {
      $(".conectate").addClass("inline-block animated fadeInUp");
    }


    if(desplazamientoActual < 200 || desplazamientoActual > 1378){
      $(".caja_2").removeClass("inline-block animated fadeInUp");
    } else if (desplazamientoActual > 200 || desplazamientoActual < 1378) {
      $(".caja_2").addClass("inline-block animated fadeInUp");
    }
     if (desplazamientoActual < 735) {
      $(".caja_3").removeClass("inline-block animated fadeInUp");
    }else if (desplazamientoActual > 735) {
      $(".caja_3").addClass("inline-block animated fadeInUp");
    }

    


  });

});