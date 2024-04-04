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
  
  



})

