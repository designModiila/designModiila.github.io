$(function (){
  $('#toggle').click(function () {
    $('#toggle .bar').toggleClass('animate');
    $('#menu-page').toggleClass('overlay');
  });
});


//문의 페이지 탭메뉴
$(function () {
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
});

$(function(){
  $.each($(".container .title"), function(i, v){
    var mainText = $(this);
    var mainTextSpace = $(this).text();
    var animatedMainT = $(this).text().split("");
  
    mainText.empty();
    $.each(animatedMainT, function(i, v) {
      mainText.append('<p><span>'+v+'</span></p>');
    });
  });
});

//text motion
function textMotion() {
  TweenMax.staggerFromTo($(".container .title"), 1.2, {opacity: 0, y: 100}, {opacity: 1, y: 0, delay: 0.2, ease: Power1.easeInOut}, 0.05);
  TweenMax.staggerFromTo($(".container .title span"), 0.8, {opacity:0,y:'120%'}, {opacity: 1, y:'0%', delay: 0.2, ease: Power1.easeInOut}, 0.05);
  TweenMax.staggerFromTo($(".l-txt-box .txt"), 1.5, {opacity:0, y:'0%'}, {opacity: 1, y:'0%', delay: 1, ease: Power1.easeInOut}, 0.2);
  TweenMax.staggerFromTo($(".l-txt-box .date"), 1, {opacity:0}, {opacity: 1, delay:1.1, ease: Power1.easeInOut}, 0.2);
}
function textMotionInit() {
  TweenMax.staggerFromTo($(".container .title"), 0, {opacity:0,y:'0%'}, {opacity: 0, y:'60%', ease: Power1.ease});
  TweenMax.staggerFromTo($(".container .title span"), 0, {opacity:0,y:'0%'}, {opacity: 0, y:'0%', ease: Power1.easeInOut});
  TweenMax.staggerFromTo($(".l-txt-box .txt"), 0, {opacity:0, y:'0%'}, {opacity: 0, y:'100%',ease: Power1.easeInOut});
  TweenMax.staggerFromTo($(".l-txt-box .date"), 0, {opacity:0}, {opacity: 0, ease: Power1.easeInOut});
}



$(function (){
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
      if(index == 1){
        textMotion();
        textMotionInit();
      }
      if(index == 2){
        textMotion();
        textMotionInit();
      }
      if(index == 3){
        textMotion();
        textMotionInit();
      }
      if(index == 4){
        textMotion();
        textMotionInit();
      }

    },
    onLeave: function(anchorLink, direction){
			TweenMax.staggerFromTo($("header"), 0.8, {opacity: 0}, {opacity: 0, ease: Power1.easeOut});
      TweenMax.staggerFromTo($("#fp-nav"), 0.8, {opacity: 0, x: '0%'}, {opacity: 0, x: '0%', ease: Power1.easeOut});
			TweenMax.staggerFromTo($(".scroll-btn"), 0, {opacity: 1}, {opacity: 0,ease: Power1.easeInOut});
      if(anchorLink == 1 && direction =='down'){
        textMotionInit();
			}
      if(anchorLink == 2 && direction =='down'){
        textMotionInit();
			}
      if(anchorLink == 3 && direction =='down'){
        textMotionInit();
			}
      if(anchorLink == 4 && direction =='down'){
        textMotionInit();
			}
    }
  });
});


