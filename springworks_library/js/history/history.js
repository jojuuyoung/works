$(document).ready(function(){
    var btn = $('.history-btn, .year');

    btn.on('click', function(){
        if($(this).parents('.history-box').hasClass('on')){
            $(this).parents('.history-box').find('ul').stop().slideUp(300);
            $(this).parents('.history-box').removeClass('on').addClass('off');
        } else if ($(this).parents('.history-box').hasClass('off')){
            $(this).parents('.history-box').find('ul').stop().slideDown(300);
            $(this).parents('.history-box').removeClass('off').addClass('on');
        }
    });
});