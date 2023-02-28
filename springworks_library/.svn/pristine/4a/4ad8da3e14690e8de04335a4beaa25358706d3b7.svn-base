$(document).ready(function(){
    var headerEL = $('.header.total .header-wrap'),
        bodyEl = $('body'),
        menuBtn = $('.header.total .btn-menu'),
        closeBtn = $('.header.total .btn-menu-close'),
        gnbEL = $('.header.total .gnb > li > a'),
        lastEl= $('.header.total .gnb > li:last-child > .dep2 > ul > li:last-child > a');

    function gnbWeb (){
        menuBtn.off('click');
        closeBtn.off('click');
        gnbEL.off('click keyup');

        $('.header.total .dep2').show();

        headerEL.on('mouseenter focusin', function(){
            $(this).addClass('on');
        });

        headerEL.on('mouseleave focusout', function(){
            $(this).removeClass('on');
        });

        $('.header.total .gnb > li').on('mouseenter focusin', function(){
            $('.gnb > li').removeClass('active');
            $(this).addClass('active');
        });
        $('.header.total .gnb > li').on('mouseleave focusout', function(){
            $('.header.total .gnb > li').removeClass('active');
        });
        lastEl.off('focusout').on('focusout',function () {
            headerEL.removeClass('on');
            gnbEL.parents('li').removeClass('active');
        });
    }
    function gnbMob (){
        headerEL.off('mouseenter mouseleave focusin focusout');
        $('.header.total .gnb > li').off('mouseenter mouseleave focusin focusout');

        menuBtn.on('click', function(){
            $(this).hide();
            headerEL.show().stop().animate({'right':'0'},400);
            bodyEl.css('overflow','hidden');
        });
        closeBtn.on('click',function(){
            headerEL.stop().animate({'right':'100%'},400);
            menuBtn.show();
            gnbEL.parents('li').removeClass('active');
            $('.header.total .dep2').hide();
        });

        gnbEL.off('click keyup').on('click keyup',function (e) {
            e.preventDefault();
            if(!$(this).parents('li').hasClass('active')){
                $(this).parents('li').addClass('active').siblings().removeClass('active').find('.dep2').stop().slideUp(300);
                $(this).siblings().stop().slideDown(300);
            } else {
                $(this).parents('li').removeClass('active').find('.dep2').stop().slideUp(300);
            }
        });
        lastEl.off('focusout').on('focusout',function () {
            headerEL.stop().animate({'right':'100%'},400);
            menuBtn.show();
            gnbEL.parents('li').removeClass('active');
            $('.header.total .dep2').hide();
        });
    }

    if(window.innerWidth > 1024){
        //pc
        gnbWeb();
    }
    if(window.innerWidth <= 1023){
        //mob
        gnbMob();
    }
    $(window).resize(function(){
        if(window.innerWidth > 1024){
            //pc
            headerEL.show();
            gnbWeb();
        }
        if(window.innerWidth <= 1023){
            //mob
            headerEL.removeClass('on').hide();
            $('.header.total .gnb > li').removeClass('active');
            gnbMob();
        }
    });
});