$(function() {

  // $(window).on('scroll',function() {
  //   let scroll = $(this).scrollTop(),
  //       sec01 = $('.sec01'),
  //       sec01Top = sec01.offset().top,
  //       sec01Bttom = sec01.height(),
  //       main_tit = sec01.find('h1'),
  //       scrollBar = $('.scroll');

  //   if(scroll > sec01Top && scroll < sec01Bttom)  {
  //     main_tit.addClass('active');
  //     scrollBar.addClass('active');
  //   } else {
  //     main_tit.removeClass('active');
  //     scrollBar.removeClass('active');
  //   }
  // })



  // cursor 위치
  let cursor = $('.cursor'),
      cursorFollower = $('.follower'),
      cursorOn = $('.cursor_on');

  window.addEventListener("mousemove", e => {
    const mouseX = e.clientX,
        mouseY = e.clientY;

    gsap.set(cursor, {
    x: mouseX,
    y: mouseY,
    });

    gsap.to(cursorFollower, {
    x: mouseX - 25,
    y: mouseY - 25,
    });
  });

  //cursor 디자인
  cursorOn.each(function(idx) {
    $(this).on('mousemove',function() {
      cursorFollower.addClass('grow_small');
      if($(this).hasClass('small')) {
        cursorFollower.removeClass('grow_small');
        cursorFollower.addClass('grow');
      };
      onMouseHover();
    });

    $(this).on('mouseleave',function() {
      cursorFollower.addClass('grow_small');
      cursorFollower.removeClass('grow');
      onMouseHoverOut();
    });
  });

  function onMouseHover() {
    gsap.to(cursorFollower, .5, {
      scale: 2
    });
  }
  function onMouseHoverOut() {
    gsap.to(cursorFollower, .5, {
      scale: 1
    });
  }

  //heaer
  const header = $('#header');

  // hide menu
  const topMenu = $("#header .top_menu"),
        sectionH = $('section').outerHeight();
        
  ScrollTrigger.create({
    trigger:topMenu,
    start: "top top",
    end: `${sectionH - 250}`,
    endTrigger: topMenu,
    scrub: true,
    pin: true,
    pinSpacing: false,
    anticipatePin: 1,
    // markers:true
  })

  // pop menu
  $('.btn_menu').on('click', function() {
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).next('.menu_wrap').css('display','flex');
      $('body').css('overflow','hidden');
    } else {
      $(this).removeClass('active');
      $(this).next('.menu_wrap').css('display','none');
      $('body').css('overflow','visible');
    }
  })

  // sec01 ----------------------------------------------------------------
  const sec01Tit = $(".sec01 h1"),
        sec01TitSm = $(".sec01 .sm"),
        sec01ScrollBar = $(".sec01 .scroll");

  gsap.set(sec01Tit, {
    transformOrigin: 'left bottom'
  });

  gsap.to(sec01Tit, {
    scrollTrigger :{
      trigger: sec01Tit, 
      // toggleActions: "restart none reverse none", 
      //onEnter, onLeave, onEnterBack, onLeaveBack
      markers:false,
      start: "top top",
      end: `${innerHeight}`,
      scrub: 0.7,
    },
    y: innerHeight - 260,
    scale:0.5,
  });  

  gsap.to(sec01TitSm, {
    scrollTrigger :{
      trigger: sec01TitSm, 
      start: "top top",
      scrub: 0.5,
    },
    autoAlpha: 0.5,
  })

  gsap.to(sec01ScrollBar, {
    scrollTrigger :{
      trigger: sec01ScrollBar, 
      start: `${-innerHeight} top`,
      end: `${innerHeight}`,
      scrub: 0.5,
      markers:false,
    },
    autoAlpha: 0,
  });  


  // sec02 ----------------------------------------------------------------
  let sec02 = $('.sec02'),
      sec02Viedo = sec02.find('.video_wrap'),
      hederTit = $('#header .tit'),
      hederBtn = $('#header .btn_menu span');

  //header 고정
  gsap.to(sec02, {  
    scrollTrigger :{
      trigger: sec02, 
      start:"top top",
      scrub: true,
      delay:3, 
      toggleClass: {targets: header, className: "fixed"},
      markers:false,
    },
  });  

  //header 타이틀    
  gsap.to(hederTit, {  
    scrollTrigger :{
      trigger: sec02, 
      start:"top top",
      scrub: true,
      delay:3, 
      markers:false,
    },
    color:"#F8F8F4",
    autoAlpha:1
  }); 

  //header 메뉴    
  gsap.to(hederBtn, {  
    scrollTrigger :{
      trigger: sec02, 
      start:"top top",
      scrub: true,
      delay:3, 
      markers:false,
    },
    background:"#F8F8F4",
    autoAlpha:1
  });

  //sec02 비디오 
  gsap.set(sec02Viedo, {
    transformOrigin:'70.5% center'
  });
  
  const aniVideo = gsap.timeline();
  aniVideo.to(sec02Viedo, {scale:25, borderRadius:0, duration:4, top:400, width:80 })
  
  ScrollTrigger.create({
    animation: aniVideo,
    trigger: sec02,
    start: "top top",
    end:"bottom top",
    scrub: 1.8,
    pin: true,
    anticipatePin: 1,
    markers:true,
  });

  //sec02 텍스트
  const txt1 = $('.txt_box .txt1'),
        txt2 = $('.txt_box .txt2');

  gsap.to(txt1, {  
    scrollTrigger :{
      trigger: sec02, 
      start:"top top",
      end:"center top",
      scrub: true,
      markers:false,
    },
    autoAlpha:0,
  });

  gsap.to(txt2, {
    scrollTrigger: {
      trigger:sec02,
      start: "top top",
      end:"20% top",
      scrub: true,
      markers:false,
    },
    color: "#F8F8F4",
    autoAlpha:1,
  });


  // sec03 ----------------------------------------------------------------
  const sec03 = $('.sec03');
  
  const ani5 = gsap.timeline();
  ani5.to(".sec03 .t1", {xPercent:-200,duration:10},"text")
      .to(".sec03 .t2", {xPercent:200,duration:10},"text")
      .to(".sec03 .t3", {xPercent:-200,duration:12},"text")
      .to(".sec03 .t4", {xPercent:-600,duration:13},"text")
      .to(".sec03 .works_noti .symbol", {rotation:-360, duration:10},"text")

  ScrollTrigger.create({
    animation:ani5,
    trigger:sec03,
    start: "top top",
    end:"+=3000",
    scrub: 1,
    markers: false,
    anticipatePin: 1
  })


  // sec04 ----------------------------------------------------------------
  gsap.to(".sec04 .fix", {
    scrollTrigger: {
      trigger:".sec04 .fix",
      scrub: true,
      pin: true,
      pinSpacing:false,
      anticipatePin: 1,
      markers:false,
    },
  })


  // sec05 ----------------------------------------------------------------
  let slideWrap = $('.sec05 .slide_wrap');
  let slideItems = gsap.utils.toArray('.sec05 .slide_wrap li');

  gsap.to(slideWrap, {
    xPercent:-100*(slideItems.length -1),
    ease:"none",
    scrollTrigger: {
      trigger: slideWrap,
      start:"top top",
      // end: () =>  "+=" + (slideWrap.offsetWidth - innerWidth),
      pin: true,
      scrub: 1,
      snap: {
          snapTo: 1 / (slideItems.length - 1),
          inertia: false,
          duration: {min: 0.1, max: 0.1}
      },
      invalidateOnRefresh: true,
      anticipatePin: 1,
      markers:false,
    }
  })


  // sec06 ----------------------------------------------------------------
  let sec06 = $('.sec06'),
      fixWrap = $('.sec06 .fix_txt'),
      fixTxt = $('.sec06 .fix_txt .txt');

  const moveTxt = gsap.timeline();
  moveTxt.from(".sec06 .t1", {xPercent:-100,duration:1},"m1")
      .from(".sec06 .t2", {xPercent:100,duration:1},"m1")
      .to(fixTxt,{color:"#fff"},3)
      .to(sec06,{background:"#000"},3)

  ScrollTrigger.create({
    animation:moveTxt,
    trigger:fixWrap,
    top:"top top",
    end:"30% top",
    scrub:1,
    markers: false,
  })    

  gsap.to(fixWrap, {
    scrollTrigger: {
      trigger:fixWrap,
      end:"+=4000",
      scrub: true,
      pin: true,
      pinSpacing:false,
      anticipatePin: 1,
      markers:true,
    },
  })

  










  // ------------------------------    ex   -------------------------------

  // 마우스 방향
  // const header = gsap.from("#header",{
  //   yPercent:-300,
  //   paused:true,
  //   duration:0.2
  // });
  // ScrollTrigger.create({
  //   start: "top top",
  //   end: 99999,
  //   onUpdate: (self) => {
  //     self.direction === -1 ? header.play():header.reverse()
  //   }
  // });


  // 클래스 추가
  // ScrollTrigger.create({
  //   start: "top -80",
  //   end: 99999,
  //   toggleClass: {
  //     className:"active",
  //     targets:".sec01 .scroll"
  //   }
  // })

})
