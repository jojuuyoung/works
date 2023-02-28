//슬라이드
$(function(){
    $(document).ready(function() {
        carouselSlide();
        carouselSlide2();
        carouselSlide3();
        carouselSlide4();
        carouselSlide5();
    });

    function carouselSlide(){
        var $slideTarget = $('.basic');
        var slide = new csSlide($slideTarget);
        function loadSlide() {
            var controlobj = {};
            controlobj.autoMove = true;     //슬라이드 자동재생 true or false
            controlobj.hoverStop = false;   //autoMove = true일 경우, 마우스 오버시 stop 이벤트 true or false
            controlobj.time = 5000;         //슬라이드 재생시간
            controlobj.transition = 500;    //슬라이드 넘어가는 시간

            slide.set(controlobj);
        }
        loadSlide();
    }
    function carouselSlide2(){
        var $slideTarget = $('.mouse-ev');
        var slide = new csSlide($slideTarget);
        function loadSlide() {
            var controlobj = {};
            controlobj.autoMove = true;
            controlobj.hoverStop = true;
            controlobj.time = 5000;
            controlobj.transition = 500;

            slide.set(controlobj);
        }
        loadSlide();
    }
    function carouselSlide3(){
        var $slideTarget = $('.auto-non');
        var slide = new csSlide($slideTarget);
        function loadSlide() {
            var controlobj = {};
            controlobj.autoMove = false;
            controlobj.hoverStop = false;

            slide.set(controlobj);
        }
        loadSlide();
    }
    function carouselSlide4(){
        var $slideTarget = $('.loop-auto');
        var slide = new csSlide($slideTarget);
        function loadSlide() {
            var controlobj = {};
            controlobj.autoMove = true;
            controlobj.hoverStop = false;
            controlobj.time = 3000;
            controlobj.transition = 500;
            controlobj.loop = true;       //슬라이드 무한반복

            slide.set(controlobj);
        }
        loadSlide();
    }
    function carouselSlide5(){
        var $slideTarget = $('.slide-view');
        var slide = new csSlide($slideTarget);
        function loadSlide() {
            var controlobj = {};
            controlobj.autoMove = false;
            controlobj.hoverStop = false;
            controlobj.time = 3000;
            controlobj.transition = 500;
            controlobj.sliderView = 2.3;     //슬라이드 보여주는 갯수
            controlobj.sliderSpace = 20;     //슬라이드 간격

            slide.set(controlobj);
        }
        loadSlide();
    }
});
