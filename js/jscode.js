


$('.containslider2').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  rtl: true
});





$('#home').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 3,
  rtl: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      mobileFirst: true,
        centerMode: true,
  pauseOnHover: true,
});


$('#menu1').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 3,
  rtl: true,
     dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      mobileFirst: true,
        centerMode: true,
  pauseOnHover: true,

});



$('#menu2').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 3,
  rtl: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      mobileFirst: true,
        centerMode: true,
  pauseOnHover: true,
});

$('#menu3').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 3,
  rtl: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      mobileFirst: true,
        centerMode: true,
  pauseOnHover: true,
});



$("nextSlide").click(function(){
    $("#menu1").slickNext();
});
$(".prevSlide").click(function(){
    $("#menu1").slickPrev();
    });

var num = $(".headerpage").outerHeight();

$(window).scroll(function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
                                      }
    else {
        $('.menu').removeClass('fixed');
    }
});