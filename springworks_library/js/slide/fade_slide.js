//슬라이드
$(function(){
    $(document).ready(function() {
        fadeSlide();
        fadeSlide2();
        fadeSlide3();
    });

    function fadeSlide(){
        var $slideTarget = $('.fade');
        var slide = new fdSlide($slideTarget);
        function loadSlide() {
            var controlobj = {};
            controlobj.autoMove = true;
            controlobj.hoverStop = false;
            controlobj.time = 5000;
            controlobj.transition = 1000;

            slide.set(controlobj);
        }
        loadSlide();
    }
    function fadeSlide2(){
        var $slideTarget = $('.mouse-ev');
        var slide = new fdSlide($slideTarget);
        function loadSlide() {
            var controlobj = {};
            controlobj.autoMove = true;
            controlobj.hoverStop = true;
            controlobj.time = 5000;
            controlobj.transition = 1000;

            slide.set(controlobj);
        }
        loadSlide();
    }
    function fadeSlide3(){
        var $slideTarget = $('.auto-non');
        var slide = new fdSlide($slideTarget);
        function loadSlide() {
            var controlobj = {};
            controlobj.autoMove = false;
            controlobj.transition = 1000;

            slide.set(controlobj);
        }
        loadSlide();
    }
});
