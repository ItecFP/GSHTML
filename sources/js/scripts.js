jQuery(document).ready(function($) {
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.menu').addClass('aside-fixed');
        } else {
            $('.menu').removeClass('aside-fixed');
        }
    });
});