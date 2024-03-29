$(function() {
  //메인 top logo svg
  setTimeout(function() {
    $('.drawing_logo').fadeOut();
  },3200)


  //메인 sec01 logo fix
  let secBgLogo = $(".main .sec01 .bg_logo");

  gsap.to('.sec01 .sec_tit', {
    scrollTrigger: {
      trigger:".sec01 .sec_tit",
      start: "top top",
      scrub:true,
      toggleActions:"restart  pause  reverse none",
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

  let sec01Item = $('.main .sec01 .item');
  gsap.utils.toArray(sec01Item).forEach(function(item){
    gsap.timeline({
      scrollTrigger :{
        trigger:item,
        start:'-500 top',
        toggleClass: {'targets':item, className:'active'},
        scrub:true,
        markers:false,
        stagger:0.5,
      }
    })
  })

  //main sec02 카운트
  const items = $('.sec02 .count_wrap .num span');
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
      trigger:".sec02",
      start:"-300 top"
    }
  });
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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
function mainSnsSwiper() {
  let mainSnsSwiper = new Swiper(".sns_swiper", {
    slidesPerView: 4,
    loop: false,
    spaceBetween : 40,
    slidesPerGroup: 4,
    followFinger : false,
    observer: true,
    observeParents: true,
    navigation: { 
      nextEl: ".sns_button_next",
      prevEl: ".sns_button_prev",
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



