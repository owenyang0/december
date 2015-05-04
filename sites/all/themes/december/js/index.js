(function($){
  $(function(){
    $('[data-lightbox-dec]').click(function(e){
      $(this).siblings('.lightbox-dec').addClass('active');
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
    });

    $('.product__next > li').click(function (e) {
      e.preventDefault();

      var className = $(this).attr('for');
      var activeClassName = $('li a.active').parent().attr('for');

      $('li a.active').removeClass('active');
      $(this).find('a').addClass('active');

      $('.' + activeClassName).hide();
      $('.' + className).fadeIn();

      // TODO: temp
      $next.appendTo($('.' + className + ' .text'));
      //$listPager.appendTo($('.' + className + ' .text'));

      console.log($(this).attr('for'));
    });

    // TODO: temp
    var $next = $('.product__next');
    $next.appendTo($('.views-row-1 .text'));

    var $listPager = $('.product__detail--list').siblings('.item-list');
    if ($listPager.has('.pager')) {
      $listPager.appendTo($('.product__detail--list'));
    }

    var map = $('.contact__content-map .map');
    map.hover(function() {
      $(this).animate({
        'width': '300px',
        'height': '300px'
      }, 200);
    }, function() {
      $(this).animate({
        'width': '280px',
        'height': '280px'
      }, 200);
    });

    $('.contact__content-media .icon').hover(function() {
      $(this).next('.desc').fadeIn();
    }, function() {
      $(this).next('.desc').fadeOut();
    });
  });
})(jQuery);
