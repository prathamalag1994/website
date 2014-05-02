
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

});
