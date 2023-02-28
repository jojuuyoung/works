$(document).ready(function(){
    var $lnbTit = $('.lnb-tit'),
        $lnbCon = $('.lnb-cont'),
        slideDef = false;

    function lnbMob(){
        if(window.innerWidth < 1024){
            $lnbCon.hide();
            $lnbTit.on('click', function(){
                if($lnbCon.css('display') === 'none'){
                    $(this).addClass('on');
                    $lnbCon.stop().slideDown();
                } else {
                    $(this).removeClass('on');
                    $lnbCon.stop().slideUp();
                }
                console.log(slideDef);
            });
        }
        if(window.innerWidth >= 1024){
            $lnbTit.off('click');
            $lnbCon.css('display','block')
        }

    }

    lnbMob();
    $(window).resize(function(){
        lnbMob();
    });
});