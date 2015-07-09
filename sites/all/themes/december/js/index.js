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

      console.log($(this).attr('for'));
    });

    // TODO: temp
    var $next = $('.product__next');
    $next.appendTo($('.views-row-1 .text'));

    var $listPager = $('.product__detail--list').siblings('.item-list');
    if ($listPager.has('.pager')) {
      $listPager.appendTo($('.product__detail--list'));
    }

    var $bar = $('<span class="bar"></span>');
    var $error = $('<div class="validate-error">无法提交，请确认以上内容是否填写正确</div>');
    var $formItem = $('.form-item');
    var fields = $('.webform-client-form input').not('input[type="submit"]').not('input[type="hidden"]');
    var $form = $formItem.find('input');

    var fieldError = {
      'field-name': '请填写名字',
      'field-email': '请填写邮箱',
      'field-tel': '请填写电话号码',
      'field-wedday': '请填写婚期',
      'field-address': '请填写婚礼地址',
      'field-consult': '请填写留言'
    };

    //$('.webform-client-form').attr('novalidate', '');
    $form.after($bar);


    //if ($formItem.find('input.error').length != 0) {
    //  $('.form-actions').before($error);
    //}

    //$formItem.each(function() {
    //  $(this).find('input').after($(this).children('label'));
    //});

    fields.blur(function() {
      checkUsed($(this));
    });

    //function getClass(self) {
    //  var classes = self.attr('class');
    //
    //  return classes && classes.match(/field-\w*/) && classes.match(/field-\w*/)[0];
    //}

    function checkUsed(self) {

      if (self.val()) {
        self.removeClass('error');
        self.addClass('used');
      } else {
        self.removeClass('used');
      }
    }


    // add class to menu
    $('.site-nav__toggle-btn').click(function() {
      $(this).toggleClass('active');
    });

    if (!isSmallDevice()) {
      console.info('desktop version');
      parallax();
      urlActive();
      scroll2Fix();
      contactControl();
    }

    function contactControl() {
      var map = $('.contact__content-map .map');
      map.hover(function () {
        $(this).animate({
          'width': '310px',
          'height': '310px'
        }, 200);
      }, function () {
        $(this).animate({
          'width': '300px',
          'height': '300px'
        }, 200);
      });
      $('.contact__content-media .icon').hover(function () {
        $(this).next('.desc').fadeIn();
      }, function () {
        $(this).next('.desc').fadeOut();
      });
    }

    function scroll2Fix() {
      var offsetTop = $nav.offset().top;
      $(window).resize(function () {
        offsetTop = $nav.offset().top;
      });
      $(window).scroll(function () {
        var isToFix = $(window).scrollTop() > offsetTop;
        if (isToFix && !$nav.hasClass('fix')) {
          $nav.addClass('fix');
          $('.december').addClass('body-fix');
        }
        if (!isToFix && $nav.hasClass('fix')) {
          $nav.removeClass('fix');
          $('.december').removeClass('body-fix');
        }
      });
    }

    function urlActive() {
    // url active
      //$nav = $('#block-block-1 .site-nav');
      if ($nav.length) {
        var pathname = $(location)[0].pathname;
        var urlMap = {
          '/products-list': '.site-nav__item--prod',
          '/products-gallery': '.site-nav__item--prod',
          '/service-process': '.site-nav__item--service',
          '/about': '.site-nav__item--about',
          '/contact-us': '.site-nav__item--contact'
        };
        urlMap[pathname] && $(urlMap[pathname]).addClass('active');
      }
    }

    function parallax() {
      // parallax
      var $ring = $('.services__hero--ring,' +
        '.services__hero--footer,' +
        '.homepage__hero,' +
        '.homepage__sub-hero');
      var posYOrig = -40;
      $ring.css('background-position', '50% ' + posYOrig + 'px');

      $(document).scroll(function () {
        var top = $(document).scrollTop();
        $ring.each(function (idx, ele) {
          var self = $(this);
          var otop = self.offset().top;
          var posY = posYOrig - (top / 2) + 'px';
          var position = '50% ' + posY;
          var winHeight = $(window).height();
          if (otop < winHeight) {
            self.css('background-position', position);
          }
          else if (top > otop - winHeight) {
            posY = posYOrig - ((top - otop) / 2) + 'px';
            position = '50% ' + posY;
            self.css('background-position', position);
          }
        });
      });
    }

    function isSmallDevice() {
      return $(window).width() <= 480;
    }
  });
})(jQuery);
