$(function() {

   //카운트
  const items = $('.count_wrap .num span');
  let targetPos = $('.count_wrap').parents('section');
  gsap.from(items, {
    textContent: 0,
    duration: 1.5,
    ease: "power1.in",
    snap: { textContent: 1 },
    stagger: {
      // each: 1.0,
      onUpdate: function() {
        this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
      },
    },
    scrollTrigger : {
      trigger:targetPos,
      start:"-400 top"
    }
  });
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //ir cont
  let item = $('.ir_cont .item');
  gsap.utils.toArray(item).forEach(function(item){
    gsap.timeline({
      scrollTrigger :{
        trigger:item,
        start:'-500 top',
        toggleClass: {'targets':item, className:'active'},
        // scrub:true,
        markers:false,
        stagger:0.5,
      }
    })
  })



  //메인 top logo svg
  setTimeout(function() {
    $('.drawing_logo').fadeOut();
  },3200)


  //메인 sec01 logo fix
  let secBgLogo = $(".main .about_cont .bg_logo");

  gsap.to('.about_cont .sec_tit', {
    scrollTrigger: {
      trigger:".about_cont",
      start: "-400 top",
      end: "top top",
      scrub:true,
      // toggleActions:"restart  pause  reverse none",
      markers:false,
    },
    autoAlpha: 1,
  })
  
  gsap.to(secBgLogo, {
    scrollTrigger: {
      trigger:secBgLogo,
      start: "top top",
      end: "+=2000",
      scrub:true,
      pin: true, 
      pinSpacing: false,
      anticipatePin: 1,
      toggleClass:{'targets':secBgLogo, className:'active'},
      markers:false,
    },
  })

  //메인 video
  $(document).on('click','.videoPoster',function(e) {
    e.preventDefault();
    let poster = $(this);
    let wrapper = poster.closest('.video_cont');
    videoPlay(wrapper);
  });

  function videoPlay(wrapper) {
    let iframe = wrapper.find('iframe');
    let src = iframe.data('src');
    wrapper.addClass('active');
    iframe.attr('src',src);
    iframe.playVideo();
  }

  //gnb
  let header = $('#header'), 
      gnbMenuWrap = $('.gnb_menu_wrap'),
      gnbBtn = $('.btn_gnb'),
      gnbMenu = gnbMenuWrap.find('.gnb > ul > li');

  $(window).on('scroll',function(){
    let scroll = $(this).scrollTop();
    (scroll>0) ? $('#header .wrap').addClass('active') : $('#header .wrap').removeClass('active');
  })    

  gnbBtn.on('click',function() {
    if(header.is('.active')) {
      gnbMenuWrap.hide(0);
      header.removeClass('active');
      $('body').css('overflow','visible');
    } else {
      gnbMenuWrap.slideDown(300);
      header.addClass('active');
      $('body').css('overflow','hidden');
    }
  })

  gnbMenu.on('mouseover',function () {
    let idx = $(this).index()
    $('.bg > li').removeClass('active');
    $(this).parents(gnbMenuWrap).find('.bg > li').eq(idx).addClass('active');
  })
})


//메인 sns 스와이퍼
function view4Swiper() {
  let view4Swiper = new Swiper(".view4_swiper", {
    slidesPerView: 4,
    loop: false,
    spaceBetween : 40,
    slidesPerGroup: 4,
    followFinger : false,
    observer: true,
    observeParents: true,
    navigation: { 
      nextEl: ".button_next",
      prevEl: ".button_prev",
    },
    breakpoints: {        
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 16,
        }
    },
  });
}

//sub2 top video
function scrollVideo() {
  let video = $(".sub2 .top_video video")[0],//실제 비디오 반환
      lastScrollTop = 0,
      isPlaying = false;

  $(window).scroll(function() {
    let scroll = $(this).scrollTop();
    if (scroll > lastScrollTop) {
      if (!video.paused) {
        video.pause();
        isPlaying = false;
      }
    } else {
      if (!isPlaying) {
        video.play();
        isPlaying = true;
      }
    }
    lastScrollTop = scroll <= 0 ? 0 : scroll; 
    //스크롤 올리면 다시 재생
    // 페이지 맨 위에 도달하면 스크롤 위치를 0으로 설정
  });
}

