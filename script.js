var main = function() {
  $(".day").click(function(){
    $(this).next().toggle();

    $(this).find(".glyphicon.glyphicon-plus").toggleClass("glyphicon-minus");
  });
};


$(document).ready(main);
