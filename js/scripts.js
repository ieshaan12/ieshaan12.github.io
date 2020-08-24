$(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'focus'
    });

});
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
