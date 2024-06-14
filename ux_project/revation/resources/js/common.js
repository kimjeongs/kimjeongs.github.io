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
        // markers:true,
        stagger:0.5,
      }
    })
  })


  //main top visual
  setTimeout(function() {
    $('.main_top').addClass('active');
  },500)

  //header lang
  let langBtn = $('#header button'),
      lang = $('#header .lang');
      
  langBtn.on('click',function() {
    if(lang.hasClass('active')) {
      $(this).parent(lang).removeClass('active');
      $(this).next('ul').slideUp();
    } else {
      $(this).parent(lang).addClass('active');
      $(this).next('ul').slideDown();
    }
  })
  
  

  //aboutus
  ScrollTrigger.create({
    trigger:'.aboutus .logo',
    start:'top top',
    end: '+=1500',
    pin:true,
    // markers:true
  })

  gsap.timeline({
    scrollTrigger :{
      trigger:'.aboutus',
      start:'20% 30%',
      end:'30% 50%',
      scrub:1,
      // markers:true,
    }
  })
  .to('.aboutus .text1', {y:'-100%', opacity:0, ease:'none', duration:3}, 0, 'start')
  .to('.aboutus .text2', {y:0, opacity:1, ease:'none', duration:3}, 0, 'start')
  // .to('.aboutus .cover', {width:'150vw', height:'150vw', duration:3},5)

  gsap.timeline({
    scrollTrigger: {
      trigger: '.aboutus .logo',
      start: 'top top', 
      end: 'bottom top',
      scrub: 1,
      // markers: true,
    }
  })
  .to('.aboutus .cover', { width: '150vw', height: '150vw', ease: 'none', duration:5 });


  gsap.timeline({
    scrollTrigger: {
      trigger: '.aboutus .logo',
      start: 'center top', 
      end: 'center top',
      // markers: true,
    }
  })
  .to('.we_are .cont strong', {x:0, opacity:1, duration:1},0)
  .to('.we_are .cont p', {x:0, opacity:1, duration:1},.5)
  .to('.we_are .cont .hashtag li', {scale:1, opacity:1, duration:.7},1) //랜덤하기

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 769px)": function() {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.service',
          start: 'top top',
          end: 'bottom bottom',
          onEnter: function() {
            $('.service').addClass('active');
            setTimeout(function() {
              $('.service .box').each(function(index, box) {
                setTimeout(function() {
                  $(box).addClass('active');
                }, index * 200); 
              });
            }, 200); 
          },
          // markers: true,
        }
      });
    }
  
  });
  


  
variable();//변수담기
savePos();//div 좌표 구하기

$(window).on('resize',function(){
  savePos();//div 좌표 구하기
})


//윈도우 스크롤시
$(window).on('scroll',function(){
  let scroll = $(this).scrollTop();
  activeBtn(scroll);//버튼활성화


})

//버튼 클릭시
navi_li.on('click',function(e){
  e.preventDefault();
  let i = $(this).index();
  naviClick(i);
})


var divArr,len,dist,wrap_div,navi_li,body,topHeader;

//변수담기
function variable(){
    wrap_div = $('.content>section');
    navi_li = $('.nav_menu li');
    body = $('body,html');
    topHeader = $('#header');
    dist = -200;
    len = wrap_div.length;
}

//div 좌표 구하기
function savePos(){
    divArr = [];

    for(let i=0; i<len; i++){
        let divTop = wrap_div.eq(i).offset().top;
        divArr.push(divTop)
    }
    divArr.push(wrap_div.last().offset().top+wrap_div.last().height());
}

//버튼활성화
function activeBtn(scroll){
    navi_li.removeClass('active');
    wrap_div.removeClass('active');
    for(let i=0; i<len; i++){
        if(scroll < divArr[0]) {
          navi_li.eq(0).addClass('active');
          topHeader.removeClass('dark');
          navi_li.parents('.nav_menu').addClass('dark');
        }
        if(scroll >= divArr[i] && scroll < divArr[i+1]){
            
            wrap_div.eq(i).addClass('active');
            if(wrap_div.eq(i).hasClass('light')) {
              topHeader.addClass('dark');
            } else {
              topHeader.removeClass('dark');
            }
        }

        if(scroll >= divArr[i]+dist && scroll < divArr[i+1]+dist){
          navi_li.eq(i).addClass('active');
          if(wrap_div.eq(i).hasClass('light')) {
            navi_li.parents('.nav_menu').addClass('dark');
          } else {
            navi_li.parents('.nav_menu').removeClass('dark');
          }
      }
        
    }
    
}

//버튼 클릭시
function naviClick(i){
    body.stop().animate({
        'scrollTop':divArr[i]
    });
}


//process
gsap.timeline({
  scrollTrigger: {
    trigger: '.process',
    start: 'top top', 
    end: 'bottom bottom',
    // markers: true,
  }
})
.to('.process .cont strong', {x:0, opacity:1, duration:1},0)
.to('.we_are .cont p', {x:0, opacity:1, duration:1},.5)
.to('.we_are .cont .hashtag li', {scale:1, opacity:1, duration:.7},1) //랜덤하기


//시스템
function init(){
  ScrollTrigger.matchMedia({
    "(min-width: 1200px)": function(){
      let width = 0;
      const scrollBox = $("#system .scroll_box");
      const scroll = $("#system .scroll");
      const scrolls = gsap.utils.toArray("#system .scroll");
      const length = $("#system .scroll").length;
      const hh = $("#header").outerHeight(true);

      for(let k = 0; k < scroll.length; k++){
        if(width < scroll.eq(k).width()){
          width = Math.ceil(scroll.eq(k).width());
        }
      }
      scroll.find(".flex-box").css("width", width);

      ScrollTrigger.create({
        trigger: "#scroll",
        start: "center center",
        end: "+=" + width * length + ", top",
        pin: true,
        scrub: true,
        //markers: true,
      });

      scroll.eq(0).css("width", "76%");
      scroll.eq(1).css("width", "19%");
      scroll.eq(2).css("width", "10.4%");

      scrolls.forEach((ele, i) => {
        const animation = gsap.timeline();
        const elem = $("#system .scroll").eq(i);

        ScrollTrigger.create({
          trigger: "#system .inner",
          start: "top" + ", -=" + width * i,
          end: "+=" + width + ", -=" + width * i,
          animation: animation,
          scrub: true,
        })

        if(i == 0){
          animation
          .to(elem, { width: "76%" }, "a")
          .to(elem.next(), { width: "19%" }, "a")
          .to(elem.next().next(), { width: "10.4%" }, "a");
        }else if(i == 1){
          animation
          .to(elem, { width: "76%" }, "a")
          .to(elem.next(), { width: "19%" }, "a")
          .to(elem.prev(), { width: "10.4%" }, "a");
        }else if(i == 2){
          animation
          .to(elem, { width: "76%" }, "a")
          .to(elem.prev(), { width: "19%" }, "a")
          .to(elem.prev().prev(), { width: "10.4%" }, "a");
        }
      });
    }, "(max-width: 1199px)": function(){
      $("#system .flex-box").css("width", "100%");
      $("#system .scroll").css("width", "100%");
    }
  })

  $(window).on("resize", function(){
    ScrollTrigger.update;
  });
}

init();




})
