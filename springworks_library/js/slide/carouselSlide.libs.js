//슬라이드
(function($){
    var csSlide = null;
    csSlide = this.csSlide = {};    //객체 생성

    //모바일 체크
    function isMobile(){
        var mobile = ['iphone','ipad','android','blackberry','nokia','opera mini','windows mobile','windows phone','iemobile'];
        for(var i in mobile){
            if(navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) >= 0){
                return true;
            }
        }
    }

    this.csSlide = function ( $slider ){
        var $carouselSlide = $('.carousel-slide');
        var sliderView = 1;      //슬라이드보여주는 갯수 기본값
        var sliderSpace = 20;    //슬라이드 간격 기본값
        var m = sliderSpace*(sliderView-1)/sliderView;
        var slideWidth = $carouselSlide.outerWidth()/sliderView-m;
        var basicobj = {};
        var $slide = $('.slide');
        var $slideList = $('.slide>li');
        var $slideLink = $('.slide>li>a');
        var liLength = $slideList.length;
        var $prevBtn = $('.control-btn.prev');
        var $nextBtn = $('.control-btn.next');
        var $paly = $('.play');
        var $stop = $('.stop');
        var $time = 5000;    //슬라이드 재생시간 기본값
        var $transition = 500;    //슬라이드 넘어가는 시간 기본값
        var i = 0;
        var play = true;
        var $pagerWrap = $('.slide-pager');
        var $pagerLi = $pagerWrap.find('li');
        var autoMove = false;
        var hoverStop = false;
        var loop = false;

        //변수 선언을 안해줄 시 스코프 오류
        //외부에 명시해야 내부에서도 스코프를 불러온다
        //내부함수로 써서 함수로 리턴받아 사용하는게 클로저, 스코프와 반대 개념
        var autofn = '';


        // 변수 초기화
        function init() {
            $slideLength = $slideList.length;
        }

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
            $loop = basicobj.loop;
            if($loop){
                if (i == liLength) {
                    i = 0;
                } else {
                    i++;
                }
            } else {
                if (i == liLength - 1) {
                    i = 0;
                } else {
                    i++;
                }
            }

            slideMove();
        }

        //move
        function slideMove(){
            $loop = basicobj.loop;
            if(basicobj.sliderView){sliderView = basicobj.sliderView;}
            if(basicobj.sliderSpace){sliderSpace = basicobj.sliderSpace;}
            slideWidth = $carouselSlide.outerWidth()/sliderView-m;
            $slideList.css('width',slideWidth);
            $slide.find('.clone').css('width',slideWidth);
            var result = Math.floor(liLength-sliderView),
                remainder = -(result-(liLength-sliderView)),
                totalLeft = -((slideWidth*result+sliderSpace*result)+(slideWidth*remainder+sliderSpace*remainder));
            var indim = Math.floor(sliderView-1);
            var indiNum = liLength-indim;

            if($loop){
                if(i>=liLength){
                    $slideList.eq(0).addClass('active').siblings().removeClass('active');
                    $pagerWrap.find('li').eq(0).addClass('active').siblings().removeClass('active');
                }
                if(sliderView>1){
                    $slide.stop().animate({
                        left: -slideWidth*i-sliderSpace*i
                    }, $transition, function(){
                        if(i>=liLength){
                            $slide.css('left',0);
                            i = 0;
                        }
                    });
                } else {
                    $slide.stop().animate({
                        left: -slideWidth*i
                    }, $transition, function () {
                        if(i>=liLength){
                            $slide.css('left',0);
                            i = 0;
                        }
                    });
                }
            } else {
                if(sliderView>1){
                    if(i==indiNum-1){
                        $slide.stop().animate({
                            left: totalLeft
                        }, $transition);
                    } else {
                        $slide.stop().animate({
                            left: -slideWidth*i-sliderSpace*i
                        }, $transition);
                    }
                } else {
                    $slide.stop().animate({
                        left: -slideWidth*i
                    }, $transition);
                }

                if(i == 0){
                    $prevBtn.addClass('disabled');
                    $nextBtn.removeClass('disabled');
                } else if(i == indiNum-1){
                    $prevBtn.removeClass('disabled');
                    $nextBtn.addClass('disabled');
                } else {
                    $prevBtn.removeClass('disabled');
                    $nextBtn.removeClass('disabled');
                }
            }

            //active
            $slideList.eq(i).addClass('active').siblings().removeClass('active');
            $pagerWrap.find('li').eq(i).addClass('active').siblings().removeClass('active');
        }

        //focus
        function focusMove() {
            $slideLink.focus(function () {
                var index = $(this).parent().index();
                i = index;
                console.log(i);
                slideMove();
            });
        }

        //loop
        function loopFn() {
            $loop = basicobj.loop;
            if(basicobj.sliderView){sliderView = basicobj.sliderView;}
            if($loop){
                var copyNum = sliderView;
                for(var c = 0; c < copyNum; c++){
                    var cloneLi = $slideList.eq(c).clone().addClass('clone');
                    $slide.append(cloneLi);
                }
                $('.slide .clone>a').attr('tabindex','-1');
            }
        }

        //sliderView
        function view(){
            $slideList.css({'margin-right':sliderSpace+'px'});
        }

        //resize
        function resize(){
            $(window).resize(function(){
                $transition = 0;
                slideMove();
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

                init();
                // console.log(slideWidth);
            });
            if($autoMove){
                $(window).on('resizeEnd',function () {
                    $transition = basicobj.transition;
                    if(!$slide.hasClass('stop-btn')){
                        autoPlayRestart();
                        $slideList.removeClass('stop');
                    }
                });
            }

        }

        //next
        function next(){
            $loop = basicobj.loop;
            if(basicobj.transition){$transition = basicobj.transition;}
            if($loop){
                if(i == liLength){
                    i = i;
                } else {
                    i++;
                    $slideList.removeClass('stop');
                }
            } else if(!$loop && sliderView > 1) {
                var indiLenght = liLength-Math.floor(sliderView-1);
                if(i == indiLenght - 1){
                    i = i;
                } else {
                    i++;
                    $slideList.removeClass('stop');
                }
            } else {
                if(i == liLength - 1){
                    i = i;
                } else {
                    i++;
                    $slideList.removeClass('stop');
                }
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
            $loop = basicobj.loop;
            if(basicobj.transition){$transition = basicobj.transition;}
            if($loop){
                if(sliderView>1){
                    if(i == 0){
                        i = liLength;
                        $slide.css({'left':-i*slideWidth-sliderSpace*i});
                        i--;

                    } else {
                        i--;
                        $slideList.removeClass('stop');
                    }
                } else {
                    if(i == 0){
                        i = liLength;
                        $slide.css({'left':-i*slideWidth});
                        i--;

                    } else {
                        i--;
                        $slideList.removeClass('stop');
                    }
                }
            } else {
                if(i == 0){
                    i = 0;
                } else {
                    i--;
                    $slideList.removeClass('stop');
                }
            }

            slideMove();
            $autoMove = basicobj.autoMove;
            if($autoMove){
                autoPlayStop();
                autoPlayRestart();
            }
        }

        // swipe option
        function swipe(){
            var check=isMobile();
            //모바일
            if(document.URL.indexOf('isMobile') == -1){
                $carouselSlide.swipe( {
                    //Generic swipe handler for all directions
                    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                        if(distance>75){
                            if( direction == "left" ){
                                next();
                            }else if( direction == "right" ) {
                                prev();
                            }
                        }
                    },
                    threshold:0,
                    allowPageScroll:'vertical'
                });
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
                $transition = basicobj.transition;
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
            var indim = Math.floor(sliderView-1);
            var indiNum = liLength-indim;
            var loopnum = liLength;

            if(!$loop){
                for(var t = 1; t <= indiNum; t++){
                    pager[1] = '<li class="active"><button type="button" class="pager"></button></li>';
                    pager[t] = '<li><button type="button" class="pager"></button></li>';
                }
                $pagerWrap.append(pager.join(''));

            } else{
                for(var t = 1; t <= loopnum; t++){
                    pager[1] = '<li class="active"><button type="button" class="pager"></button></li>';
                    pager[t] = '<li><button type="button" class="pager"></button></li>';
                }
                $pagerWrap.append(pager.join(''));
            }
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

        init();

        this.set = function (controlobj) {
            basicobj = controlobj;
            if(basicobj.time){$time = basicobj.time;}
            if(basicobj.transition){$transition = basicobj.transition;}
            if(basicobj.sliderView){sliderView = basicobj.sliderView;}
            if(basicobj.sliderSpace){sliderSpace = basicobj.sliderSpace;}
            $elem = $slider,
                $carouselSlide = $elem.find('.carousel-slide'),
                m = sliderSpace*(sliderView-1)/sliderView,
                slideWidth = $carouselSlide.outerWidth()/sliderView-m,
                $slide = $elem.find('.slide'),
                $slideList = $elem.find('.slide>li'),
                $slideLink = $elem.find('.slide>li>a'),
                liLength = $slideList.length,
                $prevBtn = $elem.find('.control-btn.prev'),
                $nextBtn = $elem.find('.control-btn.next'),
                $paly = $elem.find('.play'),
                $stop = $elem.find('.stop'),
                $pagerWrap = $elem.find('.slide-pager'),
                $pagerLi = $pagerWrap.find('li'),
                $autoMove = basicobj.autoMove,
                $hoverStop = basicobj.hoverStop,
                $loop = basicobj.loop;

            $slideList.css('width',slideWidth);   //창크기 width 값

            if(sliderView>1){
                view();
            }
            if(!$loop){
                $prevBtn.addClass('disabled');
            }

            if($autoMove){
                autoPlay();
                if($hoverStop){
                    hovereEv();
                }
            }

            $prevBtn.on('click',function(){prev();});
            $nextBtn.on('click',function(){next();});
            indi();
            loopFn();
            direct();
            resize();
            playBtn();
            stopBtn();
            swipe();
            focusMove();
        };
    };
})(jQuery);