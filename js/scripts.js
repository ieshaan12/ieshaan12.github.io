$(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'focus'
    });

});
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
var options = {minMargin: 5, maxMargin: 5, itemSelector: ".item", firstItemClass: "first-item"};
// $("#gallery").rowGrid(options);

popup = {
    init: function(){
      $('figure').on('click',function(){
        popup.open($(this));
      });
      
      $(document).on('click', '.popup img', function(){
        return false;
      }).on('click', '.popup', function(){
        popup.close();
      });
    },
    open: function($figure) {
      $('.popping').addClass('pop');
      $('.navbar').addClass('pop');
      $popup = $('<div class="popup" />').appendTo($('body'));
      $fig = $figure.clone().appendTo($('.popup'));
      $bg = $('<div class="bg" />').appendTo($('.popup'));
      $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
      $shadow = $('<div class="shadow" />').appendTo($fig);
      src = $('img', $fig).attr('src');
      $shadow.css({backgroundImage: 'url(' + src + ')'});
      $bg.css({backgroundImage: 'url(' + src + ')'});
      setTimeout(function(){
        $('.popup').addClass('pop');
      }, 10);
    },
    close: function(){
      $('.popping, .popup').removeClass('pop');
      $('.navbar').removeClass('pop');
      setTimeout(function(){
        $('.popup').remove()
      }, 100);
    }
  }
  
  popup.init()
  