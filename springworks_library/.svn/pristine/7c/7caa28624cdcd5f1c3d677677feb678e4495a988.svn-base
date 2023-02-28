$(document).ready(function(){
  function titleText(){

    $('.fc-day-number').each(function () {
      var text = $(this).text();
      $(this).text(text.replace('일',''));
    });

    $('.fc-right>h2').each(function () {
      var subtitleH2 = $(this).text(),
          subtitleNo = subtitleH2.replace(/[^0-9]/g," "),
          subtitleSplit = subtitleNo.split(" ");

      var subchangeH2 = (subtitleSplit[0] + '. ' + '<p class="month">' + subtitleSplit[2] + '</p>');

      $(this).text("").append(subchangeH2);
    });

    $('.fc-center>h2').each(function () {
      var $subtitleH2 = $(this).text(),
          $subtitleNo = $subtitleH2.replace(/[^0-9]/g," "),
          $subtitleSplit = $subtitleNo.split(" ");

      var $subchangeH2 = ($subtitleSplit[0] + '. ' + '<p class="month">' + $subtitleSplit[2] + '</p>');

      $(this).text("").append($subchangeH2);
    });
  }

  titleText();

  $('#mainCal1 .fc-button-primary').on('click',function () {
    titleText();
    sliceText();
  });

  $('#subCalendar1 .fc-button-primary').on('click',function () {
    titleText();
  });


  function autoHeight(){

    if(window.innerWidth < 768){
      $('.bbs_wrap .cal_wrap').css({'height':'435px'});
    }
    if(window.innerWidth >= 768 && window.innerWidth < 1024){
      $('.bbs_wrap .cal_wrap').css({'height':'865px'});
    }
    if(window.innerWidth >= 1024){
      $('.bbs_wrap .cal_wrap').css({'height':'895px'});
    }
  }
  autoHeight();

  $(window).resize(function() {
    autoHeight();
  });


//sub calendar tab
  var tabLi = $('.depth3_menu>li'),
      resList = $('.cal_wrap .sub_cal_wrap');

  tabLi.on('click',function () {
    var tabIndex = $(this).index();
    tabLi.removeClass('on');
    $(this).addClass('on');
    resList.hide();

    $(this).addClass('active').siblings().removeClass('active');
    resList.eq(tabIndex).show();
  });

  function sliceText() {
    $('.cal_con_wrap.main  .fc-day-grid-event .fc-title').each(function () {
      var event = $(this).text(),
          sliceDay = event.slice(0,2),
          sliceTxt = event.slice(2,7),
          eventDay = "<span class='eventday'>" + sliceDay +"</span>",
          eventTxt = "<span class='txt'>" + sliceTxt +"</span>";

      $(this).text('').append(eventDay + eventTxt);
    });
  }
  sliceText();
});
