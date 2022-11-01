$(function (){
  $('#toggle').click(function () {
    $('#toggle .bar').toggleClass('animate');
    $('#menu-page').toggleClass('overlay');
  });

  $('.pc_tab li').first().addClass("activeClass");
  $(".tab-contents").not(':first').hide();

  $('.pc_tab li').on('click', function () {
    $(this).addClass("activeClass").siblings().removeClass("activeClass");
    var link = $(this).find("a").attr("href");
    var link_num = link.substr(link.length - 1);
    $("select#tabmenu option").eq(link_num - 1).prop("selected", "selected");
    $(".tab-contents").hide();
    $(link).show();
  });

  $("select#tabmenu").on("change", function () {
    var select_link = $("select#tabmenu").val();
    var select_num = $(this).prop('selectedIndex');
    $('.pc_tab li').eq(select_num).addClass("activeClass").siblings().removeClass('activeClass');
    $(".tab-contents").hide();
    $(select_link).show();
    console.log(select_link);
  });

  // $.each($(".container p"), function(i, v){
  //   var mainText = $(this);
  //   // var mainTextSpace = $(this).text();
  //   var animatedMainT = $(this).text().split("");
  
  //   mainText.empty();
  //   $.each(animatedMainT, function(i, v) {
  //     mainText.append('<span>'+v+'</span>');
  //   });
  // });

  $('#fullpage').fullpage({
    //options here
    navigation: true,
    slidesToSections: true,
    scrollingSpeed: 850,
    easingcss3:'cubic-bezier(.61,.01,.13,.95)',
    afterLoad: function(anchorLink, index){
      TweenMax.staggerFromTo($('header'), 0.5, {opacity: 0}, {opacity: 1, delay:0.3, ease: Power1.easeInOut})
      TweenMax.staggerFromTo($("#fp-nav"), 0.8, {opacity: 0, x: '0%'}, {opacity: 1, x: '0%',delay:0.3, ease: Power1.easeInOut});
			TweenMax.staggerFromTo($(".scroll-btn"), 0.8, {opacity: 0,}, {opacity: 1, delay:0.5, ease: Power1.easeInOut});

      $.each($(".container p"), function(i, v){
        var mainText = $(this);
        // var mainTextSpace = $(this).text();
        var animatedMainT = $(this).text().split("");
      
        mainText.empty();
        $.each(animatedMainT, function(i, v) {
          mainText.append('<span>'+v+'</span>');
        });
      });

      // TweenMax.staggerFromTo($(".container p"), 1.2, {opacity: 0, y: 100}, {opacity: 1, y: 0, delay: 0.2, ease: Power1.easeInOut}, 0.05);
      TweenMax.staggerFromTo($(".container > p > span"), 0.8, {opacity:0, y:'120%'}, {opacity: 1, y:'0%', delay: 0.2, ease: Power1.easeInOut}, 0.05);
      TweenMax.staggerFromTo($(".l-txt-box .txt"), 1.5, {opacity:0, y:'0%'}, {opacity: 1, y:'0%', delay: 1, ease: Power1.easeInOut}, 0.2);
      TweenMax.staggerFromTo($(".l-txt-box .date"), 1, {opacity:0}, {opacity: 1, delay:1.1, ease: Power1.easeInOut}, 0.2);
    },
    onLeave: function(index, nextIndex, direction){
			TweenMax.staggerFromTo($("header"), 0.8, {opacity: 0}, {opacity: 0, ease: Power1.easeOut});
      TweenMax.staggerFromTo($("#fp-nav"), 0.8, {opacity: 0, x: '0%'}, {opacity: 0, x: '0%', ease: Power1.easeOut});
			TweenMax.staggerFromTo($(".scroll-btn"), 0, {opacity: 1}, {opacity: 0,ease: Power1.easeInOut});
      // TweenMax.staggerFromTo($(".container p"), 0, {opacity:0,y:'0%'}, {opacity: 0, y:'60%', ease: Power1.ease});
      TweenMax.staggerFromTo($(".container > p > span"), 0, {opacity:0,y:0}, {opacity: 0, y:0, ease: Power1.easeInOut});
      TweenMax.staggerFromTo($(".l-txt-box .txt"), 0, {opacity:0, y:'0%'}, {opacity: 0, y:'100%',ease: Power1.easeInOut});
      TweenMax.staggerFromTo($(".l-txt-box .date"), 0, {opacity:0}, {opacity: 0, ease: Power1.easeInOut});
    }
  });
});

