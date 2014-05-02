/**
  *
  * jPanelMenu 1.3.0 (http://jpanelmenu.com)
  * By Anthony Colangelo (http://acolangelo.com)
  *
* */
$( document ).ready(function() {

 jPM = $.jPanelMenu({
    menu: '#menu',
    trigger: '.menu-trigger',
    duration: 400
    });
jPM.on();
console.log("test")


$(function() {
    $(".carousel").jCarouselLite({
        btnNext: "#right-button",
        btnPrev: "#left-button"
    });
 });

$(function() {
    $(".carousel2").jCarouselLite({
        btnNext: "#right-button2",
        btnPrev: "#left-button2"
    });
 });
var width = $(window).width()
var height = $(window).height()






if (width < 1300 && height > 700)
  {
  $("#intro1").attr("id", "intro1s");
  $("#intro2").attr("id", "intro2s");
  $("#intro3").attr("id", "intro3s");
  $("#speech-bubble-image").css({"width": 800, "height": 400, "margin-top": 00});
  $("#speech-bubble").css({"margin-left": 200});
  $("#slideshow").css({"font-size": 20, "margin-left": 320, "margin-top": 150});
  $("#aboutme").css({"font-size": 20});
  $("#videos").css({"font-size": 20});

  }

if (width < 1300 && height > 700)
  {
  $("#content").css({"width": 700, "height": 400});
  $("#text").css({"font-size":30});
  $("#picture").css({"right": 50, "width": 350, "height": 490, "top": 150});
  $("#title").css({"margin-left": 400});
}

if (width < 1300 && height > 700)
  {
  $("#video-box").css({"width": 800, "height": 500, "margin-top": 00,"margin-left": 50});
  $(".carousel-items").css({"width": 800, "height": 500});
  $("#left-button2").css({"left": 50, "top": 250});
  $("#right-button2").css({"right":50, "top": 250});
  $("#description").css({"bottom": 75, "left": 100});

  }
  if (width < 1300 && height > 700)
  {
  $("#box").css({"width": 800, "height": 500});
  $("#left-button").css({"left":50})
  $("#slideshow-title").css({"margin-left":500 })
  $(".carousel-itemss").css({"width": 800, "height": 500})


  }

if (width < 1300 && height < 700)
  {
  $("#intro1").attr("id", "intro1s");
  $("#intro2").attr("id", "intro2s");
  $("#intro3").attr("id", "intro3s");
  $("#speech-bubble-image").css({"width": 800, "height": 330, "margin-top": 0});
  $("#speech-bubble").css({"margin-left": 200});
  $("#slideshow").css({"font-size": 20, "margin-left": 320});
  $("#aboutme").css({"font-size": 20});
  $("#videos").css({"font-size": 20});

  }

if (width < 1300 && height < 700)
  {
  $("#content").css({"width": 700, "height": 300});
  $("#text").css({"font-size":25});
  $("#picture").css({"right": 50, "width": 250, "height": 390, "top": 150});
  $("#title").css({"margin-left": 400})
}

if (width < 1300 && height < 700)
  {
  $("#video-box").css({"width": 600, "height": 400, "margin-top": 00,"margin-left": 150});
  $(".carousel-items").css({"width": 600, "height": 400})
  $("#left-button2").css({"left": 50, "top": 250})
  $("#right-button2").css({"right":50, "top": 250})
  $("#description").css({"bottom": 75, "left": 100})

  }
  if (width < 1300 && height < 700)
  {
  $("#box").css({"width": 800, "height": 400});
  $("#left-button").css({"left":50})
  $("#slideshow-title").css({"margin-left":500 })
  $(".carousel-itemss").css({"width": 800, "height": 400})


  }

if (width < 1200)
  {
  $("#intro1").attr("id", "intro1s");
  $("#intro2").attr("id", "intro2s");
  $("#intro3").attr("id", "intro3s");
  $("#speech-bubble-image").css({"width": 800, "height": 330, "margin-top": 0});
  $("#speech-bubble").css({"margin-left": 0});
  $("#slideshow").css({"font-size": 20, "margin-left": 20});
  $("#aboutme").css({"font-size": 20});
  $("#videos").css({"font-size": 20});

  }

if (width < 1200)
  {
  $("#box").css({"width": 600, "height": 500});
  $("#left-button").css({"left":50})
  $("#slideshow-title").css({"margin-left":400 })
  $(".carousel-itemss").css({"width": 600, "height": 500})
  }

if (width < 1200)
  {
  $("#video-box").css({"width": 600, "height": 400, "margin-top": 50, "margin-left": 50});
  $(".carousel-items").css({"width": 600, "height": 400})
  $("#left-button2").css({"left": 50, "top": 250})
  $("#right-button2").css({"right":50, "top": 250})
  $("#description").css({"bottom": 100, "left": 100})

  }

if (width < 1200)
  {
  $("#content").css({"width": 600, "height": 350});
  $("#text").css({"font-size":25});
  $("#picture").css({"right": 20, "width": 250, "height": 390, "top": 200});
  $("#title").css({"margin-left": 400})


  }

$( "#slideshow" ).hover(
  function() {
    $("#slideshow").css({"background-color": "gray", "color": "black", "border-color":"black"});
  }, function() {
    $("#slideshow").css({"background-color": "rgba(57,181,74, 0.8)", "color": "white"});
  }
);

$( "#aboutme" ).hover(
  function() {
    $("#aboutme").css({"background-color": "gray", "color": "black", "border-color":"black"});
  }, function() {
    $("#aboutme").css({"background-color": "rgba(57,181,74, 0.8)", "color": "white"});
  }
);


$( "#videos" ).hover(
  function() {
    $("#videos").css({"background-color": "gray", "color": "black", "border-color":"black"});
  }, function() {
    $("#videos").css({"background-color": "rgba(57,181,74, 0.8)", "color": "white"});
  }
);

var home = $( "div#jPanelMenu-menu :nth-child(6)" )
var slideshow = $( "div#jPanelMenu-menu :nth-child(7)" )
var video = $( "div#jPanelMenu-menu :nth-child(8)" )
var aboutme = $( "div#jPanelMenu-menu :nth-child(9)" )

home.hover(
  function() {
    home.css({"color": "black", "background-color": "gray", "border-color": "black"});
  }, function() {
    home.css({"border": "5px outset", "color": "white", "background-color": "rgb(108, 138, 213)"});
  }
);


slideshow.hover(
  function() {
    slideshow.css({"color": "black", "background-color": "gray", "border-color": "black"});
  }, function() {
    slideshow.css({"border": "5px outset", "color": "white", "background-color": "rgb(108, 138, 213)"});
  }
);

video.hover(
  function() {
    video.css({"color": "black", "background-color": "gray", "border-color": "black"});
  }, function() {
    video.css({"border": "5px outset", "color": "white", "background-color": "rgb(108, 138, 213)"});
  }
);

aboutme.hover(
  function() {
    aboutme.css({"color": "black", "background-color": "gray", "border-color": "black"});
  }, function() {
    aboutme.css({"border": "5px outset", "color": "white", "background-color": "rgb(108, 138, 213)"});
  }
);


$("#right-button").hover(
  function() {
    $("#right-arrow").show();
  }, function() {
    $("#right-arrow").hide();
  }
);


$("#left-button").hover(
  function() {
    $("#left-arrow").show();
  }, function() {
    $("#left-arrow").hide();
  }
);

$( "#picture" ).click(function() {
  $("#picture").css({"border-color":"white"})
});















	});