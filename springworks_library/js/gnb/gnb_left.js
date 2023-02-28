$(document).ready(function(){
    var headerEL = $('.header.left .header-wrap'),
        menuBtn = $('.header.left .btn-menu'),
        closeBtn = $('.header.left .btn-menu-close'),
        gnbEL = $('.header.left .gnb > li'),
        lastEl= $('.header.left .gnb > li:last-child > .dep2 > ul > li:last-child > a');


        function gnbMob(){
            menuBtn.off('click').on('click', function(){
                headerEL.show().stop().animate({'right':'0'},400);
                $(this).hide();
            });

            closeBtn.off('click').on('click', function(){
                menuBtn.show();
                headerEL.stop().animate({'right':'100%'},400).hide();
            });

            gnbEL.off('click').on('click', function(){
                if(!$(this).hasClass('active')){
                    $(this).addClass('active').find('.dep2').stop().slideDown();
                    $(this).siblings().removeClass('active').find('.dep2').stop().slideUp();
                } else if($(this).hasClass('active') && $(this).find('.dep2').css('display') == 'block'){
                    $(this).removeClass('active').find('.dep2').stop().slideUp();
                }
            });
            gnbEL.off('keyup').on('keyup', function(){
                $(this).addClass('active').find('.dep2').stop().slideDown();
                $(this).siblings().removeClass('active').find('.dep2').stop().slideUp();
            });
            lastEl.off('focusout').on('focusout', function(){
                menuBtn.show();
                headerEL.stop().animate({'right':'100%'},400).hide();
                gnbEL.removeClass('active');
                $('.dep2').stop().hide();
            });
        }

    function gnbWeb(){
        menuBtn.off('click').on('click', function(){
            headerEL.addClass('on').show();
            $(this).hide();
        });
        closeBtn.off('click').on('click', function(){
            headerEL.removeClass('on').hide();
            menuBtn.show();
        });
        gnbEL.off('click').on('click', function(){
            if(!$(this).hasClass('active')){
                $(this).addClass('active').find('.dep2').stop().slideDown();
                $(this).siblings().removeClass('active').find('.dep2').stop().slideUp();
            } else if($(this).hasClass('active') && $(this).find('.dep2').css('display') == 'block'){
                $(this).removeClass('active').find('.dep2').stop().slideUp();
            }
        });
        gnbEL.off('keyup').on('keyup', function(){
            $(this).addClass('active').find('.dep2').stop().slideDown();
            $(this).siblings().removeClass('active').find('.dep2').stop().slideUp();
        });
        lastEl.off('focusout').on('focusout', function(){
            menuBtn.show();
            headerEL.stop().animate({'right':'100%'},400).hide();
            gnbEL.removeClass('active');
            $('.dep2').stop().hide();
        });
    }


    if(window.innerWidth > 1024){
        gnbWeb();
    }
    if(window.innerWidth <= 1023){
        gnbMob();
    }

    $(window).resize(function(){
        gnbEL.removeClass('active');
        $('.dep2').stop().css('height','auto').hide();

        if(window.innerWidth > 1024){
            headerEL.addClass('on').show();
            gnbWeb();
        }
        if(window.innerWidth <= 1023){
            headerEL.removeClass('on').hide();
            menuBtn.show();
            gnbMob();
        }
    });
});