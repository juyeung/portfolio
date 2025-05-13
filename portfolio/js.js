$(document).ready(function(){
    // 페이지연결
    // nav 두번째 p를 클릭했을때, product에 on이 붙어라
    $('nav p').click(function(){
        $('nav p').removeClass('on')
        $(this).addClass('on')
    })
    $('nav p:eq(0), .navi li:eq(0)').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(0).addClass('on')
        $('body').css('background-color','#FE7D95')
        $('header .box1').css('background-color','#FE7D95')
        $('header .box2').css('background-color','#FFF')
    })
    $('nav p:eq(1), .navi li:eq(1)').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(1).addClass('on')
        $('body').css('background-color','#FE7D95')
        $('header .box1').css('background-color','#FE7D95')
        $('header .box2').css('background-color','#FFF')
    })
    $('nav p:eq(2), .navi li:eq(2)').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(2).addClass('on')
        $('body').css('background-color','#FE7D95')
        $('header .box1').css('background-color','#FE7D95')
        $('header .box2').css('background-color','#FFF')
    })

    // 메인 이미지 클릭 시 페이지 연결
    $('.leftBox img').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(1).addClass('on')
    })
    $('.rightBox img').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(2).addClass('on')
    })

    // logo를 클릭했을때, main에 on이 붙어라
    $('.logo').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap>div').eq(0).addClass('on')
        $('nav p').removeClass('on')
        $('nav p').eq(0).addClass('on')
        $('body').css('background-color','#FE7D95')
        $('header .box1').css('background-color','#FE7D95')
        $('header .box2').css('background-color','#FFF')
    })

    // 프로젝트 상세페이지 연결d
    $('article').eq(0).children('.mockup').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project01').addClass('on')
        $('body').css('background-color','#3787FF')
        $('header .box1').css('background-color','#3787FF')
        $('header .box2').css('background-color','#F9FBFF')
        console.log('article')
    })
    $('article').eq(1).children('.mockup').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project02').addClass('on')
        $('body').css('background-color','#C10C1A')
        $('header .box1').css('background-color','#C10C1A')
        $('header .box2').css('background-color','#FFFAEE')
    })
    $('article').eq(2).children('.mockup').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project03').addClass('on')
        $('body').css('background-color','#66655D')
        $('header .box1').css('background-color','#66655D')
        $('header .box2').css('background-color','#FBFBFA')
    })
    $('.latestBox>div').eq(0).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project01').addClass('on')
        $('body').css('background-color','#3787FF')
        $('header .box1').css('background-color','#3787FF')
        $('header .box2').css('background-color','#F9FBFF')
    })
    $('.latestBox>div').eq(1).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project02').addClass('on')
        $('body').css('background-color','#C10C1A')
        $('header .box1').css('background-color','#C10C1A')
        $('header .box2').css('background-color','#FFFAEE')
    })
    $('.latestBox>div').eq(2).click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project03').addClass('on')
        $('body').css('background-color','#66655D')
        $('header .box1').css('background-color','#66655D')
        $('header .box2').css('background-color','#FBFBFA')
    })
    $('.project01 .right').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project02').addClass('on')
        $('body').css('background-color','#C10C1A')
        $('header .box1').css('background-color','#C10C1A')
        $('header .box2').css('background-color','#FFFAEE')
    })
    $('.project02 .left').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project01').addClass('on')
        $('body').css('background-color','#3787FF')
        $('header .box1').css('background-color','#3787FF')
        $('header .box2').css('background-color','#F9FBFF')
    })
    $('.project02 .right').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project03').addClass('on')
        $('body').css('background-color','#66655D')
        $('header .box1').css('background-color','#66655D')
        $('header .box2').css('background-color','#FBFBFA')
    })
    $('.project03 .left').click(function(e){
        e.preventDefault()
        $('.wrap>div').removeClass('on')
        $('.wrap .project02').addClass('on')
        $('body').css('background-color','#C10C1A')
        $('header .box1').css('background-color','#C10C1A')
        $('header .box2').css('background-color','#FFFAEE')
    })
    // 모바일 또는 태블릿인지 판별
    function isMobileDevice() {
      return /Android|iPhone|iPad|iPod|Tablet|Mobile/i.test(navigator.userAgent);
    }
  
    if (isMobileDevice()) {
      var projectWrap = document.querySelector('.wrap');
      var hammer = new Hammer(projectWrap);
  
      hammer.on('swipeleft', function() {
          if ($('.project01').hasClass('on')) {
              $('.wrap>div').removeClass('on');
              $('.wrap .project02').addClass('on');
              $('body').css('background-color', '#C10C1A');
              $('header .box1').css('background-color', '#C10C1A');
              $('header .box2').css('background-color', '#FFFAEE');
          } else if ($('.project02').hasClass('on')) {
              $('.wrap>div').removeClass('on');
              $('.wrap .project03').addClass('on');
              $('body').css('background-color', '#66655D');
              $('header .box1').css('background-color', '#66655D');
              $('header .box2').css('background-color', '#FBFBFA');
          }
      });
  
      hammer.on('swiperight', function() {
          if ($('.project03').hasClass('on')) {
              $('.wrap>div').removeClass('on');
              $('.wrap .project02').addClass('on');
              $('body').css('background-color', '#C10C1A');
              $('header .box1').css('background-color', '#C10C1A');
              $('header .box2').css('background-color', '#FFFAEE');
          } else if ($('.project02').hasClass('on')) {
              $('.wrap>div').removeClass('on');
              $('.wrap .project01').addClass('on');
              $('body').css('background-color', '#3787FF');
              $('header .box1').css('background-color', '#3787FF');
              $('header .box2').css('background-color', '#F9FBFF');
          }
      });
    }


    // 깃허브페이지 연결
    $('.project01 .gitadd').on('click', function() {
        window.open('https://juyeung.github.io/portfolio/project001/index.html', '_blank');
    });
    $('.project02 .gitadd').on('click', function() {
        window.open('https://juyeung.github.io/portfolio/project002/index.html', '_blank');
    });
    $('.project03 .gitadd').on('click', function() {
        window.open('https://juyeung.github.io/portfolio/project003/index.html', '_blank');
    });

    // home mainImg 마우스위치에 따라 이미지 조정
    $(function () {
        const $mainImg = $('.mainImg');
        const $rightBox = $('.rightBox');
        const isMobile = window.matchMedia('(max-width: 1024px)').matches;
      
        if (!isMobile) {
          // PC: 마우스 위치에 따라 드러남
          $mainImg.on('mousemove', function (e) {
            const containerLeft = $mainImg.offset().left;
            const containerWidth = $mainImg.width();
            const mouseX = e.clientX;
            const relativeX = mouseX - containerLeft;
            const percentage = (relativeX / containerWidth) * 100;
            const clipped = Math.max(0, Math.min(100, 100 - percentage));
            $rightBox.css('clip-path', 'inset(0 0 0 ' + clipped + '%)');
          });
        } else {
          // 모바일: 스와이프 중 실시간 반응
          let containerLeft = $mainImg.offset().left;
          let containerWidth = $mainImg.width();
      
          $mainImg.on('touchmove', function (e) {
            const touch = e.originalEvent.touches[0];
            const touchX = touch.clientX - containerLeft;
            const percentage = (touchX / containerWidth) * 100;
            const clipped = Math.max(0, Math.min(100, 100 - percentage));
            $rightBox.css('clip-path', 'inset(0 0 0 ' + clipped + '%)');
          });
      
          // 손가락 떼면 자동으로 열거나 닫기
          $mainImg.on('touchend', function (e) {
            const touch = e.originalEvent.changedTouches[0];
            const touchX = touch.clientX - containerLeft;
            const percentage = (touchX / containerWidth) * 100;
      
            if (percentage < 50) {
              // 절반 이하 → 많이 스와이프 → 전부 보이기
              $rightBox.css('clip-path', 'inset(0 0 0 0)');
            } else {
              // 덜 밀었으면 → 숨기기
              $rightBox.css('clip-path', 'inset(0 0 0 100%)');
            }
          });
        }
      });
      

    // top 클릭시 페이지 상단으로 이동 스크롤위치값이 0일 때 top 숨김
    // 초기 상태에서 숨김 처리
    if ($(window).scrollTop() === 0) {
        $('.top').hide();
      }
  
      // 스크롤 시 .top 표시/숨김 처리
      $(window).on('scroll', function () {
        if ($(this).scrollTop() === 0) {
          $('.top').fadeOut();
        } else {
          $('.top').fadeIn();
        }
      });
  
      // .top 클릭 시 맨 위로 스크롤
      $('.top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
      });


    //   반응형웹 미디어쿼리 스크립트
    $('.gnb').click(function () {
        $('.navi').toggleClass('on');
        $('.hamburger').toggleClass('on');
      });

   
}) // 스크립트 끝