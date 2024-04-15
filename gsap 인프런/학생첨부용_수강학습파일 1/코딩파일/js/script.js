$(function(){
  Splitting(); //header gnb 스플리팅

  //header 스크롤 이벤트
  let prevScroll =  0;
  $(window).on('scroll',function() {
    let nowScrollTop = $(this).scrollTop();

    if(prevScroll < nowScrollTop) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
    prevScroll = nowScrollTop; //현재 스크롤 값을 prevScroll에 대입
  })

  //scrolla
  $('.animate').scrolla({
    mobile: true, // 모바일 활성화
    once: false, // 반복사용
  })

  //SVG 길이 구하기
  $('.svgAni').find('#svgAni03').each(function(i, path) {
    let len = path.getTotalLength();
    console.log(len)
    // svg길이
    // #svgAni01 => 673
    // #svgAni02 => 0
    // #svgAni03 => 3059
    // #svgAni04 => 64
    // #svgAni05 => 55
  })

});