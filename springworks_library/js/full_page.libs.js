(function($) {
    $.fn.fullPage = function ( setting ) {
        var option = {};
        var $fullPage = $('.full-page');
        var $section = $('.section');
        var fade = false;
        var $sectionNav = $('.section-nav');
        var $time = 300; //이동 시간 기본값
        var $transition = 500; //이동 시간 기본값
        var moveTop = $(window).scrollTop();
        var lastChk = true; //마지막 요소 체크

        option = setting;
        if(option.time){$time=option.time;}
        if(option.transition){$transition=option.transition;}
        if(option.fade){
            //이걸 실행해라
            $fullPage.addClass('fade');
            $section.eq(0).addClass('top');
            $('body').css('overflow','hidden');
            moveFade();
        } else {
            moveDefault();
            $('body').css('overflow','hidden');
        }

        //새로고침 시 맨 위로 이동
        setTimeout(function(){
            scrollTo(0,0);
        }, 100);

        //휠 이벤트 (디폴트)
        function moveDefault () {
            $sectionNav.find('li').off('click');
            $section.each(function(index){
                if(!$(this).hasClass('inner-scroll')){
                    $(this).on('mousewheel touchmove DOMMouseScroll', function(e){
                        e.preventDefault();

                        var delta = 0;

                        if(!event) event = window.event; //이벤트 초기화

                        if(event.wheelDelta) {
                            delta = event.wheelDelta /120;
                        } else if(event.detail) {
                            delta = -event.detail / 3;
                        }

                        var $elmSelector = $section.eq(index),
                            nextNum = $elmSelector.next().index(),
                            prevNum = $elmSelector.prev().index();

                        if(delta<0){
                            if ($elmSelector.next() != undefined){
                                try {
                                    moveTop = $elmSelector.next().offset().top;
                                    $('.section-nav li').eq(nextNum).addClass('active').siblings().removeClass('active');
                                    $section.eq(nextNum).addClass('active').siblings().removeClass('active');

                                    if($section.offset().top === 0) {
                                        lastChk = true;
                                    }

                                } catch(e){}
                            }
                        } else {
                            if($elmSelector.prev() != undefined){
                                try {
                                    moveTop = $elmSelector.prev().offset().top;
                                    $('.section-nav li').eq(prevNum).addClass('active').siblings().removeClass('active');
                                    $section.eq(prevNum).addClass('active').siblings().removeClass('active');

                                    if($fullPage.find('footer') && lastChk){
                                        moveTop = $section.last().offset().top;

                                        $('.section-nav li').last().addClass('active').siblings().removeClass('active');
                                        $section.last().addClass('active').siblings().removeClass('active');
                                        $('html,body').stop().animate({scrollTop:moveTop + 'px'},
                                            {duration:$time, complete: function(){}
                                            });
                                        lastChk = false;
                                    }
                                } catch(e){}
                            }
                        }

                        $(window).resize(function(){
                            moveTop = $('.section.active').offset().top;
                            $('html,body').stop().animate({scrollTop:moveTop + 'px'},
                                {duration:$time, complete: function(){}
                                });
                        });

                        /* 화면이동 */
                        $('html,body').stop().animate({scrollTop:moveTop + 'px'},
                            {duration:$time, complete: function(){}
                            });
                    });
                } else if($(this).hasClass('inner-scroll')) {
                    $(this).on('mousewheel touchmove DOMMouseScroll',function () {
                        var didScroll = 0;

                        if(!event) event = window.event; //이벤트 초기화

                        if(event.wheelDelta) {
                            didScroll = event.wheelDelta /120;
                        } else if(event.detail) {
                            didScroll = -event.detail / 3;
                        }

                        var scrollValue = $(this).scrollTop();
                        var sectionH = $(this).height();
                        var contH = $(this).find('div').height();
                        var moveTop = $(this).next().offset().top;

                        if(!$(this).hasClass('last')){
                            if (contH - sectionH === scrollValue) {
                                $(this).removeClass('active').next().addClass('active');

                                if(contH - sectionH === scrollValue && didScroll < 0) {
                                    $('.section-nav li.active').removeClass('active').next().addClass('active');
                                    $('html,body').delay(300).stop().animate({scrollTop:moveTop + 'px'},
                                        {duration:$time, complete: function(){}
                                        });
                                }
                            }
                        } else if($(this).hasClass('last')) {
                            if (contH - sectionH === scrollValue  && didScroll < 0) {
                                $('html,body').delay(300).stop().animate({scrollTop:moveTop + 'px'},
                                    {duration:$time, complete: function(){}
                                    });
                            } else if (didScroll > 0) {
                                var lastTop = $('.section.last').offset().top;
                                $('html,body').delay(300).stop().animate({scrollTop:lastTop + 'px'},
                                    {duration:$time, complete: function(){}
                                    });
                            }
                        }
                    });
                }
            });
        }
        function moveFade () {
            $sectionNav.find('li').off('click');
            $section.each(function(index){
                $(this).on('mousewheel touchmove DOMMouseScroll', function(e){
                    e.preventDefault();

                    var delta = 0;

                    if(!event) event = window.event; //이벤트 초기화

                    if(event.wheelDelta) {
                        delta = event.wheelDelta /120;
                    } else if(event.detail) {
                        delta = -event.detail / 3;
                    }

                    var $elmSelector = $section.eq(index),
                        nextNum = $elmSelector.next().index(),
                        prevNum = $elmSelector.prev().index();

                    if(delta<0){
                        if ($elmSelector.next() != undefined){
                            try {
                                $('.section-nav li').eq(nextNum).addClass('active').siblings().removeClass('active');
                                $section.eq(nextNum).stop().animate({'opacity':'1'}, $transition).addClass('active').siblings('.section').stop().animate({'opacity':'0'}, $transition).removeClass('active');

                                if($section.last().hasClass('active') && lastChk){
                                    event.preventDefault();
                                    moveTop = $('.footer').outerHeight();
                                    $('.full-page').stop().animate({scrollTop:moveTop + 'px'},
                                        {duration:$time, complete: function(){}
                                        });
                                    $('.section-nav li').last().addClass('active').siblings().removeClass('active');
                                    $section.last().addClass('active').siblings('.section').removeClass('active');
                                    lastChk = false;
                                }

                            } catch(e){}
                        }
                    } else {
                        if($elmSelector.prev() != undefined){
                            try {
                                $('.section-nav li').eq(prevNum).addClass('active').siblings().removeClass('active');
                                $section.eq(prevNum).stop().animate({'opacity':'1'}, $transition).addClass('active').siblings('.section').stop().animate({'opacity':'0'}, $transition).removeClass('active');

                            } catch(e){}
                        }
                    }

                });
            });
        }

        //pager 생성
        $fullPage.each(function () {
            var pager = [];
            var num = $(this).find($section).length;
            for(var t = 1; t <= num; t++){
                pager[1] = '<li class="active"><button type="button" class="pager"></button></li>';
                pager[t] = '<li><button type="button" class="pager"></button></li>';
            }
            $(this).find($sectionNav).append(pager.join(''));
        });
        //pager 클릭 이벤트
        $sectionNav.find('li').on('click', function(){
            var sectionIdx = $(this).index();
            moveTop = $section.eq(sectionIdx).offset().top;

            $(this).addClass('active').siblings().removeClass('active');
            $section.eq(sectionIdx).addClass('active').siblings().removeClass('active');

            //클릭 시 해당 section으로 화면 이동
            if($('.full-page').hasClass('fade')){
                $section.eq(sectionIdx).stop().animate({'opacity':'1'}, $transition).siblings('.section').stop().animate({'opacity':'0'}, $transition).removeClass('active');
            } else {
                $('html,body').stop().animate({scrollTop:moveTop + 'px'},
                    {duration:800, complete: function(){}
                    });
            }

        });

        //방향키로 제어
        $sectionNav.find('li').on('keydown',function (e) {
            var keyCode = e.keyCode || e.which;
            if(keyCode === 38){
                e.preventDefault();
                $(this).prev().find('button').focus();
            } else if (keyCode === 40) {
                e.preventDefault();
                $(this).next().find('button').focus();
            }
        });
    };
}(jQuery));