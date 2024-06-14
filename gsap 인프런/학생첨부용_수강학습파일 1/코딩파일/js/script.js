$(document).on('click','a[href="#"]', function(e) {
  e.preventDefault();
})

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

  // con01
  gsap.timeline({
    scrollTrigger: {
      trigger:'.con01',
      start:'0% 40%', //.con01 의 0% 와 브라우저의 80%
      end:'100% 100%',//.con01 의 100% 와 브라우저의 100%
      scrub:1,
      // markers:true
    }
  })
  .to('.wrap', {backgroundColor:'#fff', color:'#000', ease:'none', duration:5}, 0) //ease:가속도 none>동일하게, duration:진행시간, delay:0
  .to('.svgAni path', {stroke:'#000', ease:'none', duration:5}, 0)
  .to('.scroll', {opacity:'0', duration:5}, 0)
  .fromTo('.videoWrap video', {'clip-path': 'inset(60% 60% 60% 60% round 30%)'}, {'clip-path': 'inset(0% 0% 0% 0% round 0%)', ease:'none', duration:10}, 0)


  // con02
  //title 애니메이션
  gsap.timeline({
    scrollTrigger: {
      trigger:'.con02',
      start:'0% 100%',
      end:'0% 20%',
      scrub:1,
      // markers:true
    }
  })
  .fromTo('.con02 .title .a', {x:'-100%'},{x:'0%', ease:'none', duration:5}, 0)
  .fromTo('.con02 .title .b', {x:'100%'},{x:'0%', ease:'none', duration:5}, 0)
  
  gsap.timeline({
    scrollTrigger: {
      trigger:'.worklist',
      start:'0% 100%',
      end:'0% 100%',
      scrub:1,
      // markers:true
    }
  })
  .to('.wrap', {backgroundColor:'#000', color:'#fff', duration:5, ease:'none'},0)
  //title 글자 fixed
  .to('.con02 .title', {position:'fixed', left:0, top:0, right:0, duration:5, ease:'none'}, 0)
  //worklist 에 margin top을 적용해서 애니를 자연스럽게
  .fromTo('.worklist', {margin:'0 auto'}, {margin:'100vh auto 0', position:'relative', zIndex: '10', duration:1, ease:'none'}, 0)


  gsap.timeline({
    scrollTrigger: {
      trigger:'.worklist',
      start:'100% 50%',
      end:'100% 0%',
      scrub:1,
      // markers:true
    }
  })
  .to('.con02 .title .a', {x:'-100%', ease:'none', duration:5}, 0)
  .to('.con02 .title .b', {x:'100%', ease:'none', duration:5}, 0)


  // simplyScroll
  $('.con03 .list').simplyScroll({
    speed:4,
    pauseOnHover:false,
    pauseOnTouch:false
  })


  //menuOpen
  $('.menuOpen').on('click', function() {
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
    $('body').toggleClass('on');
  })
});

