jQuery(document).ready(function($) {
    var altura = $('.aside').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.aside').addClass('aside-fixed');
        } else {
            $('.aside').removeClass('aside-fixed');
        }
    });
});