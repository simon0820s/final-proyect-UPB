$(document).ready(function() {
    setHeight();
    function setHeight() {
      windowHeight = ($(window).innerHeight())-170;
      $('.menu-slider').css('height', windowHeight);
      
      // Get the full height of the UL
      var ulheight = $(".menu-slider ul li")[0].scrollHeight;
  
      // Position the UL according to it's height and the current menu height
      var pushdown = ((windowHeight-140)-ulheight)/2;
      $(".menu-slider ul").css("padding-top", pushdown);
    };
    
    $(window).resize(function() {
      setHeight();
    });
    (function () {
      $('.burger-bg').on('click', function() {
        $( this ).toggleClass('bg-animate');
        $('.bar').toggleClass('bar-animate');
        $('.menu-slider').toggleClass('menu-open');
        setHeight();
      })
    })();
    
    (function () {
      $('.bar').on('click', function() {
        $( this ).toggleClass('bar-animate');
        $('.burger-bg').toggleClass('bg-animate');
        $('.menu-slider').toggleClass('menu-open');
        setHeight();
      })
    })();
  });