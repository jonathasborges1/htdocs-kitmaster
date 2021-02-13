/*  eslint-env browser  */
/*  eslint-env jquery   */

$(function () {
  $('#animateBtn').click(function () {
    animate('#anim-head', 'bounce');
    animate('#anim-body', 'rubberBand');
    return false;
  });
      // Animate
  function animate (element, animation) {
    $(element).addClass('animated ' + animation);
    setTimeout(function () {
      $(element).removeClass('animated ' + animation);
    }, 1000);
  }
});

function animated (elementParent, elementChildren, animation) {
  $(elementParent).hover(function () {
    // var animatedEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    $(elementChildren).css('display', 'block');
    // $(elementChildren).css('-webkit-animation-fill-mode', 'forwards')
    $(elementChildren).addClass('animated ' + animation);
  }, function () {
    $(elementChildren).removeClass('animated ' + animation);
    $(elementChildren).css('display', 'none');
  });
}
// animated('.nav-bar a', '.nav-bar span', 'slideOutRight')
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});
$('.logo-letras-img-b').animateCss('slideInRight');
/*
$('.nav-bar a').hover(
    function(){
        var animatedEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('.nav-bar').addClass('animated bounceOutLeft').one(animatedEnd,
            function(){
                $(this).removeClass('animated bounceOutLeft');
        });
    }
);
*/
