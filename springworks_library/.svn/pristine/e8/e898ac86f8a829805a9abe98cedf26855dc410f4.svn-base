$(document).ready(function(){
    //main fade Slide
    var fadeSlide = new Swiper('.main-slider1', {
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction:false
        },
        simulateTouch:false,
        navigation: {
            nextEl: '.main-slider1 .swiper-button-next',
            prevEl: '.main-slider1 .swiper-button-prev',
        },
        speed: 1000,
        pagination: {
            el: '.main-slider1 .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><div class="rect"><span></span></div></span>';
            }
        }
    });
    $(".main-slider1").mouseenter(function() {
        fadeSlide.autoplay.stop();
        $('.rect > span').css('animation-play-state','paused');
    });

    $(".main-slider1").mouseleave(function() {
        fadeSlide.autoplay.start();
        $('.rect > span').css('animation-play-state','running');
    });

    var playSild1=true;
    $('.main-slider1 .control-slide').on('click',function(){
        if(playSild1==true){
            $(this).addClass('on');
            fadeSlide.autoplay.stop();
        } else {
            $(this).removeClass('on');
            fadeSlide.autoplay.start();
        }
        playSild1 = ! playSild1;
    });

    //인디 시간
    var fadeSlide2 = new Swiper('.main-slider3', {
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction:false
        },
        simulateTouch:false,
        navigation: {
            nextEl: '.main-slider3 .swiper-button-next',
            prevEl: '.main-slider3 .swiper-button-prev',
        },
        speed: 1000,
        pagination: {
            el: '.main-slider3 .swiper-pagination'
        }
    });

    var playSild6=true;
    $('.main-slider3 .control-slide').on('click',function(){
        if(playSild6==true){
            $(this).addClass('on');
            fadeSlide2.autoplay.stop();
        } else {
            $(this).removeClass('on');
            fadeSlide2.autoplay.start();
        }
        playSild6 = ! playSild6;
    });

    //main swipe Slide
    var swipeSlide=new Swiper('.main-slider2', {
        simulateTouch:false,
        autoplay: {
            delay: 5000,
            disableOnInteraction:false
        },
        navigation: {
            nextEl: '.main-slider2 .swiper-button-next',
            prevEl: '.main-slider2 .swiper-button-prev',
        },
        speed: 1000,
        pagination: {
            el: '.main-slider2 .swiper-pagination',
            clickable:true
        },
    });

    var playSild2=true;
    $('.main-slider2 .control-slide').on('click',function(){
        if(playSild2==true){
            $(this).addClass('on');
            swipeSlide.autoplay.stop();
        } else {
            $(this).removeClass('on');
            swipeSlide.autoplay.start();
            // console.log(playSild2);
        }
        playSild2 = ! playSild2;
    });

    //info fade slide
    var infoSlide=new Swiper('.info-slider1', {
        simulateTouch:false,
        effect: 'fade',
        speed:600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.info-slider1 .swiper-button-next',
            prevEl: '.info-slider1 .swiper-button-prev'
        },
        pagination: {
            el: '.info-slider1 .swiper-pagination',
            clickable:true
        },
        on: {
            slideChangeTransitionStart: function(){
                $('.info-slider1 .visual-paging .no').text(+ (this.activeIndex + 1));
            }
        }
    });

    var totalSlide = $('.info-slider1 .swiper-slide').length;

    $('.info-slider1 .visual-paging .no-total').text(totalSlide);

    //info slide play/stop
    var playSild3=true;
    $('.info-slider1 .control-slide').on('click',function(){
        if(playSild3==true){
            $(this).addClass('on');
            infoSlide.autoplay.stop();
        } else {
            $(this).removeClass('on');
            infoSlide.autoplay.start();
        }
        playSild3 = ! playSild3;
    });

    //info swipe slide
    var infoSlide2=new Swiper('.info-slider2', {
        simulateTouch:false,
        speed:600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.info-slider2 .swiper-button-next',
            prevEl: '.info-slider2 .swiper-button-prev'
        },
        pagination: {
            el: '.info-slider2 .swiper-pagination',
            clickable:true
        },
        on: {
            slideChangeTransitionStart: function(){
                $('.info-slider2 .visual-paging .no').text(+ (this.activeIndex + 1));
            }
        }
    });

    var totalSlide2 = $('.info-slider2 .swiper-slide').length;

    $('.info-slider2 .visual-paging .no-total').text(totalSlide2);

    //info slide play/stop
    var playSild4=true;
    $('.info-slider2 .control-slide').on('click',function(){
        if(playSild4==true){
            $(this).addClass('on');
            infoSlide2.autoplay.stop();
        } else {
            $(this).removeClass('on');
            infoSlide2.autoplay.start();
        }
        playSild4 = ! playSild4;
    });


    //banner slide
    var bannerSlide=new Swiper('.banner-slider', {
        loop: false,
        simulateTouch:false,
        slidesPerView: 5,
        spaceBetween: 25,
        speed:600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.banner-slider .swiper-button-next',
            prevEl: '.banner-slider .swiper-button-prev'
        },
        breakpoints: {
            1023: {
                slidesPerView: 3,
                spaceBetween: 25
            },
            767: {
                slidesPerView: 1
            }
        }
    });

    bannerSlide.on('init',function () {
        if($('.banner-slide .swiper-slide').length > 5){

        }
    });

    //banner slide play/stop
    var playSild5=true;
    $('.banner-slider .control-slide').on('click',function(){
        if(playSild5==true){
            $(this).addClass('on');
            bannerSlide.autoplay.stop();
        } else {
            $(this).removeClass('on');
            bannerSlide.autoplay.start();
        }
        playSild5 = ! playSild5;
    });

    // 현재 인덱스 / 총 슬라이드 개수에 01 / 03 처럼 0 붙이기
    // formatFractionCurrent: function(number) {
    //  if (number < 10) {
    //      number = '0' + number;
    //    }
    //    return number;
    // },
    //  formatFractionTotal: function(number) {
    //   if (number < 10) {
    //      number = '0' + number;
    //    }
    //    return number;
    //},
});
