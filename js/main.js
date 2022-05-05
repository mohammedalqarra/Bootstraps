$(function() {
    'use strict';

    let winH = $(window).height(),

    upperH = $('.upper-bar').innerHeight(),
    navH = $('.navbar').innerHeight();

    $('.slider,.carousel-item').height(winH - (upperH + navH));

    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
     //   console.log($(this).data('class'));

        if($(this).data('class') === 'all'){
            $('.shuffle-imgs .col-md').css('opacity', 1 );
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '.08' );
            $($(this).data('class')).parent().css('opacity', 1 );
        }
    })
}) 