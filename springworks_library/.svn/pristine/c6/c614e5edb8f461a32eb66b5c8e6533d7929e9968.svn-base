//슬라이드
(function($){
    var fdSlide = null;
    fdSlide = this.fdSlide = {};    //객체 생성

    //모바일 체크
    function isMobile(){
        var mobile = ['iphone','ipad','android','blackberry','nokia','opera mini','windows mobile','windows phone','iemobile'];
        for(var i in mobile){
            if(navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) >= 0){
                return true;
            }
        }
    }

    this.fdSlide = function ( $slider ){
        var $fadelSlide = $('.fade-slide');
        var slideWidth = $fadelSlide.outerWidth();
        var basicobj = {};
        var $slide = $('.slide');
        var $slideList = $('.slide>li');
        var $slideLink = $('.slide>li>a');
        var liLength = $slideList.length;
        var $prevBtn = $('.control-btn.prev');
        var $nextBtn = $('.control-btn.next');
        var $paly = $('.play');
        var $stop = $('.stop');
        var $pagerNo = $('.pager-slide .no');
        var $pagerTotal = $('.pager-slide .total');
        var $time = 5000;    //슬라이드 재생시간 기본값
        var $transition = 500;    //슬라이드 넘어가는 시간 기본값
        var i = 0;
        var play = true;
        var $pagerWrap = $('.pager-wrap');
        var $pagerLi = $pagerWrap.find('li');

        var autoMove = false;
        var hoverStop = false;

        var autofn = '';

        // 자동실행 함수
        function autoPlay() {
            if(play){
                autofn = setInterval(function() {
                    ChkPlay();
                }, $time);
                play = false;
            }
        }

        // 자동실행 멈춤
        function autoPlayStop() {
            clearInterval(autofn);
            play = true;
            $slideList.eq(i).addClass('stop');
        }

        //자동실행 멈췄다가 재실행
        function autoPlayRestart(){
            play = true;
            autoPlay();
            $slideList.eq(i).removeClass('stop');
        }

        //조건 검사후 슬라이드 무브
        function ChkPlay() {
            if (i == liLength - 1) {
                i = 0;
            } else {
                i++;
            }
            slideMove();
        }

        //slide li 정렬
        function slideAlign() {
            var slideWidth = $fadelSlide.outerWidth();
            $slideList.eq(0).css('opacity','1').siblings().css('opacity','0');
            for (var i=0; i<liLength; i++){
                var x = -slideWidth*i;
                var translateX = 'translateX('+ x +'px)';
                $slideList.eq(i).css('transform',translateX);
            }
        }

        function slideMove(){
            //active
            $slideList.eq(i).addClass('active').siblings().removeClass('active');
            $pagerWrap.find('li').eq(i).addClass('active').siblings().removeClass('active');
            pagerNum();

            if(i == 0){
                $slideList.eq(i).siblings().stop().animate({
                    'opacity':'0'
                },$transition);
            }
            if(i == liLength - 1){
                $slideList.eq(0).stop().animate({
                    'opacity':'0'
                },$transition);
            }
            $slideList.eq(i).stop().animate({
                'opacity':'1'
            },$transition).siblings().stop().animate({
                'opacity':'0'
            },$transition);
        }

        //focus
        function focusMove() {
            $slideLink.focus(function () {
                $autoMove = basicobj.autoMove;
                if($autoMove){
                    $slide.addClass('stop-btn');
                    autoPlayStop();
                    basicobj.autoMove = false;
                    $autoMove = basicobj.autoMove;
                    $paly.addClass('on');
                    $stop.removeClass('on');
                }
                var index = $(this).parent().index();
                i = index;
                $(this).parent().addClass('active stop').siblings().removeClass('active stop');
                $slideList.eq(i).stop().animate({
                    'opacity':'1'
                },$transition).siblings().stop().animate({
                    'opacity':'0'
                },$transition);
                $pagerWrap.find('li').eq(i).addClass('active').siblings().removeClass('active');
            });
        }

        //resize
        function resize(){
            $(window).resize(function(){
                slideMove();
                slideAlign();
                $autoMove = basicobj.autoMove;

                if($autoMove){
                    autoPlayStop();

                    if(this.resizeTo){
                        clearTimeout(this.resizeTo);
                    }
                    this.resizeTo = setTimeout(function () {
                        $(this).trigger('resizeEnd');
                    },500);
                }
            });
            if($autoMove){
                $(window).on('resizeEnd',function () {
                    if(!$slide.hasClass('stop-btn')){
                        autoPlayRestart();
                        $slideList.removeClass('stop');
                    }
                });
            }
        }

        //next
        function next(){
            if(i == liLength - 1){
                i = 0;
            } else {
                i++;
                $slideList.removeClass('stop stop-btn');
            }
            slideMove();
            $autoMove = basicobj.autoMove;
            if($autoMove){
                autoPlayStop();
                autoPlayRestart();
            }
        }

        //prev
        function prev(){
            if(i == 0){
                i = liLength - 1;
            } else {
                i--;
                $slideList.removeClass('stop stop-btn');
            }
            slideMove();
            $autoMove = basicobj.autoMove;
            if($autoMove){
                autoPlayStop();
                autoPlayRestart();
            }
        }

        //swipe option
        function swipe(){
            var check=isMobile();
            if(check){
                //모바일
                if(document.URL.indexOf('isMobile') == -1){
                    $fadelSlide.swipe( {
                        //Generic swipe handler for all directions
                        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                            if( direction == "left" ){
                                next();
                            }else if( direction == "right" ) {
                                prev();
                            }
                        },
                        threshold:0,
                        allowPageScroll:'vertical'
                    });
                }
            }
        }

        //hover
        function hovereEv() {
            $slideList.on('mouseenter',function(){
                if(!$(this).hasClass('stop')){
                    autoPlayStop();
                }
            });
            $slideList.on('mouseleave',function(){
                if($(this).hasClass('stop') && !$(this).parent('.slide').hasClass('stop-btn')){
                    autoPlayRestart();
                }
            });
        }

        //direct
        function direct(){
            $pagerWrap.on('click','li',function(){
                var index = $(this).index();
                i = index;
                $autoMove = basicobj.autoMove;
                slideMove();
                $slideList.removeClass('stop stop-btn');
                if($autoMove){
                    autoPlayStop();
                    autoPlayRestart();
                }
            });
        }

        //slider pager
        function indi(){
            var pager = [];
            var num = liLength;
            for(var t = 1; t <= num; t++){
                pager[1] = '<li class="active"><button type="button" class="pager"></button></li>';
                pager[t] = '<li><button type="button" class="pager"></button></li>';
            }
            $pagerWrap.append(pager.join(''));
        }

        //slider pager number
        function pagerNum() {
            activeSlide = i+1;
            totalSlide = liLength;

            $pagerNo.text(activeSlide);
            $pagerTotal.text(totalSlide);
        }

        function playBtn(){
            $paly.on('click',function(){
                if(play){
                    basicobj.autoMove = true;
                    $autoMove = basicobj.autoMove;
                    if($autoMove){
                        $slide.removeClass('stop-btn');
                        autoPlayRestart();
                    }
                }
            });
        }

        function stopBtn(){
            $stop.on('click',function(){
                $autoMove = basicobj.autoMove;
                if($autoMove){
                    $slide.addClass('stop-btn');
                    autoPlayStop();
                    basicobj.autoMove = false;
                    $autoMove = basicobj.autoMove;
                }
            });
        }


        this.set = function (controlobj) {
            basicobj = controlobj;
            $elem = $slider,
                $fadelSlide = $elem.find('.fade-slide'),
                slideWidth = $fadelSlide.outerWidth(),
                $slide = $elem.find('.slide'),
                $slideList = $elem.find('.slide>li'),
                $slideLink = $elem.find('.slide>li>a'),
                liLength = $slideList.length,
                $prevBtn = $elem.find('.control-btn.prev'),
                $nextBtn = $elem.find('.control-btn.next'),
                $paly = $elem.find('.play'),
                $stop = $elem.find('.stop'),
                $pagerWrap = $elem.find('.pager-wrap'),
                $pagerLi = $pagerWrap.find('li'),
                $pagerNo = $elem.find('.pager-slide .no'),
                $pagerTotal = $elem.find('.pager-slide .total'),
                $autoMove = basicobj.autoMove,
                $hoverStop = basicobj.hoverStop;
            if(basicobj.time){$time = basicobj.time;}
            if(basicobj.transition){$transition = basicobj.transition;}

            if($autoMove){
                autoPlay();
                if($hoverStop){
                    hovereEv();
                }
            }

            $prevBtn.on('click',function(){
                prev();
            });
            $nextBtn.on('click',function(){
                next();
            });
            indi();
            direct();
            resize();
            playBtn();
            stopBtn();
            swipe();
            slideAlign();
            focusMove();
        }
    };
})(jQuery);