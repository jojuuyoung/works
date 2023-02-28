$(document).ready(function () {
    //file upload
    var fileTarget = $('.add-file-inner #fileUp');
    fileTarget.on('change', function () {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }

        $(this).siblings('.upload').val(filename);
    });
});
/* :: datepicker s :: */
(function($){
    "use strict";
    $(function(){
        var $datepicker = $('.js-datepicker');
        $datepicker.datepicker({
            setDate:'today',
            inline: true,
            showOtherMonths: true,
            showOn: 'button',
            buttonImageOnly: true,
            dateFormat: 'ymmdd',
            changeMonth: true,
            changeYear: true,
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
            monthNames : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            buttonImage: "/img/icon_calendar.png",
            buttonText: "날짜 선택",
            showMonthAfterYear: true,
            // yearSuffix: "년",
        });
    });
})(jQuery);
///* :: datepicker e :: */