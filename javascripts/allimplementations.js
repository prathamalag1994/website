
/* All JQuery required implementations are here : */



$(document).ready(function(){
  $(".menu-trigger").click(function(){
    window.scrollTo(0,0);
  });

  $("#contact").hover(function(){
    $("#hide").hide();
  });

  $("#contact").click(function(){
    $("#contact").text("Thank you!");
  });

  $(".menu-trigger").hover(function(){
    $("#hide").show();
  });

   $("#contact").mouseover(function(){
    $("#contact").css("-webkit-transform","scale(1.1)");
  });

   $("#contact").mouseout(function(){
    $("#contact").css("-webkit-transform","scale(0.91)");
  });


   $("#resumee").hover(function(){
    $("#hide").hide();
  });

  $("#resumee").click(function(){
    $("#resumee").text(":)");
  });

  $(".menu-trigger").hover(function(){
    $("#hide").show();
  });

   $("#resumee").mouseover(function(){
    $("#resumee").css("-webkit-transform","scale(1.1)");
  });

   $("#resumee").mouseout(function(){
    $("#resumee").css("-webkit-transform","scale(0.91)");
  });

});
