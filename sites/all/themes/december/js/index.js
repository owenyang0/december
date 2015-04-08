(function($){
  $(function(){
    $('[data-lightbox]').click(function(e){
      $(this).siblings('.lightbox').addClass('active');
      e.preventDefault();
    });

    $('.lightbox__close').click(function(e){
      $(this).parent().removeClass('active');
      e.preventDefault();
    });

    var $nav = $('.site-nav');
    var offsetTop = $nav.offset().top;
    $(window).resize(function(){
      offsetTop = $nav.offset().top;
    });

    $(window).scroll(function(){
      var isToFix = $(window).scrollTop() > offsetTop;
      if (isToFix && !$nav.hasClass('fix')) {
        $nav.addClass('fix');
      }
      if (!isToFix && $nav.hasClass('fix')) {
        $nav.removeClass('fix');
      }
    })
  });
})(jQuery);