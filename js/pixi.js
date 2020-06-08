$(document).ready(function()
{
      $('#btn_menu').click(function()
        {
          $("#corp_page").css({
          "-webkit-transform": "rotateY(-20deg)",
          "-webkit-transition": "all .4s linear",
          "-webkit-transform-origin": "100% 100%",
          "-webkit-transform-style": "preserve-3d",
          "-moz-transform": "rotateY(-20deg)",
          "-moz-transition": "all .4s",
          "-moz-transform-origin": "100% 100%",
          "-moz-transform-style": "preserve-3d",
          "-ms-transform": "rotateY(-20deg)",
          "-ms-transition": "all .4s",
          "-ms-transform-origin": "100% 100%",
          "-ms-transform-style": "preserve-3d",
          "transform": "rotateY(-20deg)",
          "transition": "all .4s",
          "transform-origin": "100% 100%",
          "transform-style": "preserve-3d"
          });
          $(".menu").delay(170).css({
          "z-index": "5",
          "-webkit-transition": "all .4s",
          "-moz-transition": "all .4s",
          "-ms-transition": "all .4s",
          "transition": "all .4s"
          }).fadeIn("fast");
        });
      $('#btn_menu_close,#corp_page').click(function()
        {
          $(".menu").fadeOut("fast").css({
          "z-index": "1",
          "-webkit-transition": "all .4s",
          "-moz-transition": "all .4s",
          "-ms-transition": "all .4s",
          "transition": "all .4s"
          });
          $("#corp_page").css({
          "-webkit-transform": "rotateY(0deg)",
          "-webkit-transition": "all .7s linear",
          "-webkit-transform-origin": "100% 100%",
          "-webkit-transform-style": "preserve-3d",
          "-moz-transform": "rotateY(0deg)",
          "-moz-transition": "all .7s",
          "-moz-transform-origin": "100% 100%",
          "-moz-transform-style": "preserve-3d",
          "-ms-transform": "rotateY(0deg)",
          "-ms-transition": "all .7s",
          "-ms-transform-origin": "100% 100%",
          "-ms-transform-style": "preserve-3d",
          "transform": "rotateY(0deg)",
          "transition": "all .7s",
          "transform-origin": "100% 100%",
          "transform-style": "preserve-3d"
          });

        });
})
