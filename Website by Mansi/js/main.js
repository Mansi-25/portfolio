$(document).ready(function(){
  $(window).scroll(function(){
    var val=$(window).scrollTop()/2;
    $('header').css('background-position-y','-'+val+'px');
    $('header *').css('right','-'+val+'px');
    $('header span span').css('right','0px');
  });
});
