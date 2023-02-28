$(document).ready(function(){
    var headerEL = $('.header.each .header-wrap'),
        bodyEl = $('body'),
        menuBtn = $('.header.each .btn-menu'),
        closeBtn = $('.header.each .btn-menu-close'),
        gnbEL = $('.header.each .gnb > li'),
        lastEl= $('.header.each .gnb > li:last-child > .dep2 > ul > li:last-child > a'),
        def = false;

    function gnbFn () {
        gnbEL.off('click keyup').on('mouseenter focusin', function(){
            gnbEL.removeClass('active');
            $('.header.each .dep2').hide();
            if(def === true && !$(this).hasClass('active')){
                $(this).addClass('active').find('.dep2').slideDown();
                def = false;
            } else {
                $(this).addClass('active').find('.dep2').show();
            }
        });
    }
    function gnbWeb() {
        $('.header.each .dep2').css({'left':'0','opacity':'1'});
        // menuBtn.off('click');
        // closeBtn.off('click');
        gnbEL.off('click keyup');

        $('.header.each .gnb-wrap').on('mouseenter focusin', function(){
            headerEL.addClass('on');
        });
        gnbFn();
        headerEL.on('mouseleave', function(){
            $(this).removeClass('on');
            gnbEL.removeClass('active');
            $('.header.each .dep2').hide();
        });

        lastEl.off('focusout').on('focusout', function(){
            headerEL.removeClass('on');
            gnbEL.removeClass('active');
            $('.header.each .dep2').hide();
        });
    }
    function gnbMob() {
        headerEL.off('mouseleave focusin');
        $('.header.each .gnb-wrap').off('mouseenter');

        menuBtn.on('click',function(){
            $(this).hide();
            // $('.dep2').css({'left':'100%','opacity':'0'});
            headerEL.show().stop().animate({'right':'0'},400);
            bodyEl.css('overflow','hidden');
        });
        closeBtn.on('click',function(){
            headerEL.stop().animate({'right':'100%'},400).hide();
            $('.header.each .dep2').addClass('off').removeClass('on');
            menuBtn.show();
            gnbEL.removeClass('active');
            def = false;
        });

        gnbEL.off('mouseenter').on('click', function(){
            def = true ;
            gnbEL.removeClass('active');
            $('.header.each .dep2').removeClass('off');
            if(def === true && !$(this).hasClass('active')){
                $(this).addClass('active');
                $('.header.each .dep2').addClass('on');
                $(this).find('.dep2').show();
                $(this).siblings().find('.dep2').hide();
                def = false;
            }
        });

        lastEl.off('focusout').on('focusout', function(){
            headerEL.stop().animate({'right':'100%'},400);
            menuBtn.show();
            gnbEL.removeClass('active');
            $('.header.each .dep2').animate({'left':'100%','opacity':'0'},300).hide();
            def = false;
        });
    }

    if(innerWidth>1023){
        //pc
        gnbWeb();
    }

    if(innerWidth<=1023){
        //mob
        gnbMob();
    }
    $(window).resize(function(){
        if(innerWidth>1023){
            //pc
            headerEL.show();
            // $('.dep2').css({'left':'0','opacity':'1'});
            gnbWeb();
            $('.header.each .dep2').removeClass('on off');
        }

        if(innerWidth<=1023){
            //mob
            headerEL.stop().animate({'right':'100%'},400);
            menuBtn.show();
            gnbEL.removeClass('active');
            $('.header.each .dep2').addClass('off').removeClass('on');
            def = false;
            gnbMob();
        }
    });
});