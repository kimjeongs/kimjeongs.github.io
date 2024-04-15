$(document).ready(function () {
   if($('.input_writing_group textarea')){ initCountString() }
   if ($('.pagination').length > 0) { paginationUI() }
   if ($(".line_tab") || $(".vertical_tab")) { LineTabMenuInit() }

   /****** Tab Menu ******/
   $('.inner_tab_menu .tab_list').click(function () { tabMenu(this) });

   function tabMenu(el) {
      var tab = $(el).parents('.inner_tab_menu');
      var activeTab = $(el).attr('data-tab');
      $(el).siblings('li').removeClass('current');
      $(el).addClass('current');
      tab.next('.tab_cont').find('.tab_cont_item').stop().hide();
      tab.next('.tab_cont').find('#' + activeTab).stop().show();

      if (tab.hasClass("line_tab") || tab.hasClass("vertical_tab")) {
         //클릭시 라인이동
         var tab = $(el).parents('.inner_tab_menu');
         var tabBar = $(el).parents('.inner_tab_menu').find('.tab_bar');
         if (tab.hasClass("line_tab")) {
            var liWidth = tab.find(".current").outerWidth();
            var marginLeft = parseInt(tab.find(".current").css("margin-left"));
            var left = tab.find(".current").position().left + marginLeft;
            tabBar.css({
               "width": liWidth,
               "left": left
            });
         } else if (tab.hasClass("vertical_tab")) {
            var liH = tab.find(".current").outerHeight();
            var marginTop = parseInt(tab.find(".current").css("margin-top"));
            var top = tab.find(".current").position().top + marginTop;
            tabBar.css({
               "height": liH,
               "top": top
            });
         }
      }
   }

   //Line Tab 초기화
   function LineTabMenuInit() {
      var tabM = $('.inner_tab_menu');
      var lineTab = $('.line_tab');
      var verticalLineTab = $(".vertical_tab");
      if (tabM.hasClass("line_tab") || tabM.hasClass("vertical_tab")) {
         tabM.each(function () {
            if ($(this).find('.tab_bar').length < 1) {
               tabM.append("<div class='tab_bar'></div>");
            };
         });
      }
      lineTab.each(function () {
         console.log($(this))
         $(this).find('.tab_bar').css({
            "width": $(this).find(".current").outerWidth(),
            "left": $(this).find(".current").position().left + parseInt($(this).find(".current").css("margin-left"))
         });
      })
      verticalLineTab.each(function () {
         $(this).find(".tab_bar").css({
            "height": $(this).find(".current").outerHeight(),
            "top": $(this).find(".current").position().top + parseInt($(this).find(".current").css("margin-top"))
         });
      })
   };

  
   /****** Select Box ******/
   $(document).on('click', '.select_box_value', function (e) {
      const t = $(this);
      if ($(this).parents('.select_box').hasClass('on')) {
         dropDownClose(t);
      } else {
         if ($(this).parents('.select_box').hasClass('disabled')) {
            return false;
         }
         $('.select_box').removeClass('on');
         selectBoxDown(t);
      }
   });
   $(document).on('click', '.select_box_list li', function (e) {
      selectBoxDownAction(this);
      SelectBoxChange(this);
   });

   function selectBoxDown(t) {
      const $selectBox = t.parents('.select_box');
      if (!t.hasClass('disabled')) {
         if ($selectBox.hasClass('on')) {
            $selectBox.removeClass('on')
         } else {
            $selectBox.addClass('on');
            $selectBox.siblings('.select_box').removeClass('on');
         }
         $('body').on('click', function (e) {
            if ($(e.target).closest('.select_box').length === 0 && $('.select_box').hasClass('on')) {
               dropDownClose()
            }
         });
      };
   };

   function selectBoxDownAction(el) {
      $(el).parents('.select_box_list').find('li').removeClass('selected');

      if (!$(el).parent('li').hasClass('disabled')) {
         $(el).addClass('selected');
      }
      $(el).parents('.select_box').removeClass('on')
   };

   function dropDownClose() {
      $('.select_box').removeClass('on');
   };
   //Change Select Box Value
   function SelectBoxChange(selectItem) {
      if ($(selectItem).find('ul').length <= 0) {
         var $cloneEle = $(selectItem).parents('.select_box').find('.select_box_value').children('span').children();
         var selectText = $(selectItem).text();
         clearInput(selectItem);
         $(selectItem).parents('.select_box').find('.select_box_value').children('span').text(selectText);
         $(selectItem).parents('.select_box').find('.select_box_value').children('span').append($cloneEle);
      }
   };

   function clearInput(obj) {
      $(obj).parents('.select_box').find('.select_box_value').children('span').text("");
   };

   /****** TextArea String Length Count ******/
   $(".input_writing_group").find('textarea').on('keyup', function () {CountString(this)});
   //textarea 기존 값이 있는 경우 Count String
   function initCountString(){
      $('.input_writing_group').each(function (index, item) {  
         var st = $(item).find('textarea').val();
         $(item).find('.txt_count').find('.current').html(st.length)
      });
   }
   //Count String
   function CountString(el){
      var regex = /[^0-9]/g; //숫자추출 정규식
      var total = $(el).next('.txt_count').find('.total').html().replace(regex, "");
      $(el).next('.txt_count').find('.current').html($(el).val().length);
      if ($(el).val().length > total) {
         alert(total + '자 이내로 작성해주세요')
         $(el).val($(el).val().substring(0, total));
         $(el).next('.txt_count').find('.current').html(total);
      };
   }

   /****** Pagination ******/
   function paginationUI(){
      $('.pagination').each(function (index, item) {
         $(item).find('a').on('click', function () {
            if(!$(this).hasClass('arr')){
               $(this).siblings().removeClass('active')
               $(this).addClass('active');
            }
         });
      });
   }

   /* LNB 메뉴 3depth */
   function initMenu() {
      $(".nav_depth2, .nav_depth3").hide();
      $('.nav_menu li a').click(
      function() {
         var checkElement = $(this).next();
         if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
               checkElement.slideUp('normal');
               return false;
         }
         if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
               console.log(checkElement.parentsUntil('.nav_menu'));
               $('.nav_menu ul:visible').not(checkElement.parentsUntil('.nav_menu')).slideToggle('normal');
               checkElement.slideToggle('normal');
               return false;
            }
      });
   }
   $(function() {
      initMenu();
   });
   $(".nav_menu li a").click(function(){
      if($(this).parent('li').hasClass("active")){
         $(this).parent('li').removeClass("active");
      }else{
         $(".nav_menu li").removeClass("active");	
         $(this).parent('li').addClass("active");	
      }	
   });


   /*  Top Tab 메뉴 */
   $(".tabs_close_ico").on( "click", function(){
      $(this).closest("li").remove();
      $("#"+$(this).closest("li").find("a").eq(0).attr("href").replace("#", "")).remove();

      if( $(this).closest("li").hasClass("active") ){
         $(".tabs_menu_list").find("li").eq(0).addClass("active");
         $("#"+$(".tabs_menu_list").find("li").eq(0).find("a").eq(0).attr("href").replace("#", "")).addClass("in active");
      }
   });

   $(".tabs_menu_list li").on("mouseover", function(){
      $(this).find(".tabs_close_ico").fadeIn(200);
   });
   $(".tabs_menu_list li").on("mouseleave", function(){
      $(this).find(".tabs_close_ico").stop();
      $(this).find(".tabs_close_ico").hide();
   });

   $(".tabs_menu_close").on( "click", function(){
      $(this).find("div").slideToggle(300);
      $(this).find("i").toggleClass('slide_toggle');
   });
   
   /* 엣지, 오페라에서 thead fixed 체크 */
   cross();

   function checkBrowser(){
      var agt = navigator.userAgent.toLowerCase();
      
      if (agt.indexOf("edg") != -1) return 'fix_thead'; 
      if (agt.indexOf("opr/") != -1) return 'fix_thead'; 
   }

   function cross(){
      $("body").addClass(checkBrowser());
   }

   /* 말줄임 들어가는 table만 table-layout을 fixed로 */
   tblFixed();

   function tblFixed(){
      var ellipsisTd = $('.tbl').find('td');

      if(ellipsisTd.hasClass("txt_ellipsis")){
         $('td.txt_ellipsis').parents('.tbl').css('table-layout','fixed');
      }
   }

   //240311 contents_card_head 클릭시 아코디언 기능 추가
   $(document).on("click",'.contents_card_head' ,function(){
      $(this).parent('.contents_card').find('.contents_card_cont').stop().slideToggle();
      $(this).find('.ico_chev_down').toggleClass('active')
   });
    

   //240412 이미지 미리보기 팝업 추가
   $('.contents_card .image_box').on('click',function() {
      let getImg = $(this).find('img').attr('src'),
         targetImg = $('.modal_imgView .modal_content .img img');
      targetImg.attr('src',getImg);
   })

}) //ready