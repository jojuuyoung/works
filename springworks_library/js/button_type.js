$(document).ready(function(){

    $('.cover-up > li ').on('mouseenter', function(){
        $(this).find('.cover-con').stop().fadeIn();
    });
    $('.cover-up > li ').on('mouseleave', function(){
        $(this).find('.cover-con').stop().fadeOut();
    });


    $(".ripple-btn li").click(function(e) {

        // make sure we cannot click the slider
        if ($(this).hasClass('slider')) {
            return;
        }

        /* Add the slider movement */

        // what tab was pressed
        var whatTab = $(this).index();

        // Work out how far the slider needs to go
        var howFar = 160 * whatTab;

        $(".slider").css({
            left: howFar + "px"
        });

        /* Add the ripple */

        // Remove olds ones
        $(".ripple").remove();

        // Setup
        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight = $(this).height();

        // Add the element
        $(this).prepend("<span class='ripple'></span>");

        // Make it round!
        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        // Get the center of the element
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;

        // Add the ripples CSS and start the animation
        $(".ripple").css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("rippleEffect");
    });

//btn-ripple
    $(document).on('mouseenter','.jt-btn-spread',function(e){
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('.jt-btn-overlay').css({top:relY, left:relX});
    });

    $(document).on('mouseout','.jt-btn-spread', function(e){
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('.jt-btn-overlay').css({top:relY, left:relX});
    });

    //랜덤 배경색
    var back1 = '#ff6f6f, #750000';
    var back2 = '#9dff8c, #1f5802';
    var back3 = '#5861fb, #070258';
    var back4 = '#e9a7ff, #af0091';
    var back5 = '#fda75c, #964b00';
    var gradient = [back1,back2,back3,back4,back5];
    var rand = gradient[Math.floor(Math.random() * gradient.length)];
    var num = 0;

    $('.random').css('background-image','linear-gradient(to right,' + rand + ')');

    function backChange(){
        if(num >= gradient.length){
            num = 0;
        }

        $('.random').css('background-image','linear-gradient(to right,' + gradient[num++] + ')');
    }


    //자동 롤링
    var $rolling = $('.rolling');
    var $rollingLi = $('.rolling>div');
    var rollingLi = $('.rolling>div').length;
    var $random = $('.random');
    var height = $('.random').height();
    var max = height * rollingLi;
    var move = 0;

    function rollingEvent(){
        move += height;

        $rolling.animate({
            'top': -move
        },700,function(){
            if(move >= max){
                $(this).css('top',0);
                move = 0;
            }
        });
    }

    rollingAuto = setInterval(function(){
        rollingEvent();
        backChange();


    },3000);

    $rolling.append($rollingLi.first().clone());

    //gnb 버튼 효과
    var $gnbBtn = $('.gnb-btn');

    $gnbBtn.each(function () {
        $(this).on('click',function () {
            $(this).toggleClass('on');
        });
    });

    //btn-list 버튼 효과
    var $btnList = $('.btn-list>.btn');

    $btnList.each(function () {
        $(this).on('click',function () {
            $(this).toggleClass('on');
        })
    });

    //fade up
    $window = $(window);
    var delayPosition = 50,
        windowheight;

    $window.on('resize', function() {
        insertTargetPosition();
    });

    $window.on('scroll', function() {
        var position = $window.scrollTop() + windowheight - delayPosition;

        $('.fade-wrap.fade-up .fade-box').each(function() {
            if(!$(this).hasClass('fadeUp') && $(this).data('offsetTop') < position) {
                $(this).addClass('fadeUp');
            }
            if($(this).hasClass('fadeUp') && $(this).data('offsetTop') > position){
                $(this).removeClass('fadeUp');
            }
        });
    });

    function insertTargetPosition() {
        windowheight = $window.height();
        $('.fade-wrap.fade-up .fade-box').each(function() {
            $(this).data('offsetTop', ($(this).offset().top));
        });
    }

    (function init() {
        insertTargetPosition();
    })();

    //left -> right
    $window.on('resize', function() {
        insertTargetPosition2();
    });

    $window.on('scroll', function() {
        var position = $window.scrollTop() + windowheight - delayPosition;

        $('.fade-wrap.to-right .fade-box').each(function() {
            if(!$(this).hasClass('toRight') && $(this).data('offsetTop') < position) {
                $(this).addClass('toRight');
            }
            if($(this).hasClass('toRight') && $(this).data('offsetTop') > position){
                $(this).removeClass('toRight');
            }
        });
    });

    function insertTargetPosition2() {
        windowheight = $window.height();
        $('.fade-wrap.to-right .fade-box').each(function() {
            $(this).data('offsetTop', ($(this).offset().top));
        });
    }

    (function init() {
        insertTargetPosition2();
    })();

    //count
    function numberCounter(target_frame, target_number) {
        this.count = 0; this.diff = 0;
        this.target_count = parseInt(target_number);
        this.target_frame = document.getElementById(target_frame);
        this.timer = null;
        this.counter();
    }

    numberCounter.prototype.counter = function() {
        var self = this;
        this.diff = this.target_count - this.count;

        if(this.diff > 0) {
            self.count += Math.ceil(this.diff / 5);
        }

        this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        if(this.count < this.target_count) {
            this.timer = setTimeout(function() { self.counter(); }, 20);
        } else {
            clearTimeout(this.timer);
        }
    };

    new numberCounter("count1", 2020);
    new numberCounter("count2", 9);
    new numberCounter("count3", 17);

    //left -> right
    $window.on('resize', function() {
        insertTargetPosition3();
    });

    $window.on('scroll', function() {
        var position = $window.scrollTop() + windowheight - delayPosition;

        $('.fade-wrap.to-left .fade-box').each(function() {
            if(!$(this).hasClass('toLeft') && $(this).data('offsetTop') < position) {
                $(this).addClass('toLeft');
            }
            if($(this).hasClass('toLeft') && $(this).data('offsetTop') > position){
                $(this).removeClass('toLeft');
            }
        });
    });

    function insertTargetPosition3() {
        windowheight = $window.height();
        $('.fade-wrap.to-left .fade-box').each(function() {
            $(this).data('offsetTop', ($(this).offset().top));
        });
    }

    (function init() {
        insertTargetPosition3();
    })();
});