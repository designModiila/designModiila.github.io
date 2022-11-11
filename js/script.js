$(function (){
  AOS.init({
    delay: 300,
    duration: 800,
    easing: 'ease-in-out'
  });


  $('#toggle').click(function () {
    $('#toggle .bar').toggleClass('animate');
    $('#menu-page').toggleClass('overlay');

    if($('#toggle .bar').hasClass('animate') === true){
      $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }else{
      $('body').off('scroll touchmove mousewheel');
    }
  });

  $('.main-title').addClass('on');


  function popup() {
	//레이어팝업
    var bg = $("#pop_bg");

    $(document).on('click','.popup-close, #pop_bg',function(){
      $('#pop_bg').hide();
      $('#foot_popup').hide();

      $('body').off('scroll touchmove mousewheel');
    });

    $(document).on('click','.privacy',
      function () {
      var ClassName = $(this).data('link');

      bg.show();
      $('#foot_popup').show();
      $('#foot_popup').html(
        '<div class="popup-close"><img src="../images/popup_close_icon.png" alt="close" class="close"></div>'+
        '<div class="pri_inner"></div>'
      );

      $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });

      //foot 메뉴 클릭시
      switch (ClassName) {
        case "privacy1":
          $("#foot_popup div.pri_inner").load("../html/privacy.html");
        break;
      }
    }); //click
  }

  popup();

  function textMotion(){
    $.each($(".container p"), function(i, v){
      var mainText = $(this);
      var animatedMainT = $(this).text().split("");
    
      mainText.empty();
      $.each(animatedMainT, function(i, v) {
        mainText.append('<span>'+v+'</span>');
      });
    });

    TweenMax.staggerFromTo($(".container p span"), 0.5, {opacity:0, y: '120%'}, {opacity: 1, y: '0%', delay: 0.2, ease: Power1.easeInOut}, 0.05);
    TweenMax.staggerFromTo($(".l-txt-box .txt"), 1.5, {opacity:0, y:'0%'}, {opacity: 1, y:'0%', delay: 1, ease: Power1.easeInOut}, 0.5);
    TweenMax.staggerFromTo($(".l-txt-box .date"), 1, {opacity:0}, {opacity: 1, delay:1.1, ease: Power1.easeInOut}, 0.5);
  }

  function textMotionInit(){
    TweenMax.staggerFromTo($(".container p span"), 0, {opacity:0, y: '0%'}, {opacity: 0, y: '0%', ease: Power1.easeInOut});
    TweenMax.staggerFromTo($(".l-txt-box .txt"), 0, {opacity:0, y:'0%'}, {opacity: 0, y:'100%',ease: Power1.easeInOut});
    TweenMax.staggerFromTo($(".l-txt-box .date"), 0, {opacity:0}, {opacity: 0, ease: Power1.easeInOut});
  }

  $(document).ready(function() {
    $('#fullpage').fullpage({
      //options here
      navigation: true,
      slidesToSections: true,
      scrollingSpeed: 850,
      afterLoad: function(anchorLink, index, direction){
        TweenMax.staggerFromTo($('header'), 0.5, {opacity: 0}, {opacity: 1, delay:0.3, ease: Power1.easeInOut})
        TweenMax.staggerFromTo($("#fp-nav"), 0.8, {opacity: 0, x: '0%'}, {opacity: 1, x: '0%',delay:0.3, ease: Power1.easeInOut});
        TweenMax.staggerFromTo($(".scroll-btn"), 0.8, {opacity: 0,}, {opacity: 1, delay:0.5, ease: Power1.easeInOut});
        if (index == 6){
          $('.scroll-btn').css('display','none');
        }
      },
      onLeave: function(){
        TweenMax.staggerFromTo($("header"), 0.8, {opacity: 0}, {opacity: 0, ease: Power1.easeOut});
        TweenMax.staggerFromTo($("#fp-nav"), 0.8, {opacity: 0, x: '0%'}, {opacity: 0, x: '0%', ease: Power1.easeOut});
        TweenMax.staggerFromTo($(".scroll-btn"), 0, {opacity: 1}, {opacity: 0,ease: Power1.easeInOut});
        textMotion();
        textMotionInit();
      }
    });
  });
});
