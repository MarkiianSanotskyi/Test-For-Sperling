


$(document).ready(function() {
    $("#content-slider").lightSlider({
        loop:true,
        keyPress:true
    });
    $('#image-gallery').lightSlider({
        gallery:false,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:true,
        loop:true,
        pager: false,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});



$('.js-toggle-menu').click(function(e){
    e.preventDefault();
    $('.mobile-nav-wrap').slideToggle();
    $(this).toggleClass('open');
  });


  $(document).ready(function(){
    $('#header .nav a[href*=#]').bind("click", function(e){
       var anchor = $(this);
       $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
       }, 1400);
       e.preventDefault();
    });
    return false;
 });

 $(document).ready(function(){
    var $menu = $(".header-scroll");
$(window).scroll(function(){
        if ( $(this).scrollTop() > 30 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 30 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });//scroll
});
 
 