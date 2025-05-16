$(document).ready(function(){
    $("#datepicker1, #datepicker2").datepicker({
        dateFormat: "yy년 mm월 dd일",
        showOtherMonths: true,
        selectOtherMonths: true,
        prevText: "",
        nextText: "",
        beforeShow: function () {
          setTimeout(setIcons, 0);
        },
        onChangeMonthYear: function () {
          setTimeout(setIcons, 0);
        }
      });

      function setIcons() {
        $(".ui-datepicker-prev").html('◀');
        $(".ui-datepicker-next").html('▶');
      }

    //   스크롤 이동
      $(".landing .title .button>p").click(function () {
        $("html, body").animate({
          scrollTop: 2950 // 원하는 위치(px 단위)
        }, 1000); // 0.5초 동안 스크롤 이동
      });

    //   header 숨기기 나타내기
    let lastScrollTop = 0;

  $(window).on("scroll", function () {
    let st = $(this).scrollTop();

    if (st > lastScrollTop) {
      // 스크롤 내릴 때: header 숨기기
      $(".header").css("top", "-100px");
    } else {
      // 스크롤 올릴 때: header 보여주기
      $(".header").css("top", "0");
    }

    lastScrollTop = st;
    // 배경 투명 처리
  if (st === 0) {
    $(".header").css("background-color", "transparent");
  } else {
    $(".header").css("background-color", "rgba(1, 20, 59, 0.8)");
  }
  });
  

  // 마우스가 상단에 올라왔을 때 header 강제로 보이기
  $(document).on("mousemove", function (e) {
    if (e.clientY <= 100) {
      $(".header").css("top", "0");
    }
  });

  // weather 클릭 시 슬라이드
  $('.side_btn').click(function(){
    $('.slideBar').toggleClass('active');
  });

  // 공지사항 이벤트 탭바 클릭시 리스트 출력
  $('.con_box .title_box ul li').click(function(){
    // $('.con_box .list_box>div').removeClass('on')
    // $('.con_box .list_box>div').eq(1).addClass('on')
    $('.con_box .title_box ul li').removeClass('on')
    $(this).addClass('on')

    // listA 하위 div(.notice, .event 등) on 토글
    let $listItems = $('.listA > div');
    $listItems.removeClass('on');
    $listItems.eq(index).addClass('on');

    // ✅ 슬라이드 위치 초기화
    $listItems.find('ul').css('left', '0');
    num = 0;

    var index = $(this).index();
    
    var $items = $('.con_box .list_box .listA > div');
    
    $items.removeClass('on');
    
    // 새로 활성화할 div는 먼저 오른쪽에 배치
    $items.eq(index).css({
        left: '100%',
        opacity: 0
    }).addClass('on'); // on을 먼저 붙이고
    
    // 살짝 시간차를 두고 슬라이드
    setTimeout(function() {
        $items.eq(index).css({
            left: '0',
            opacity: 1
        });
    }, 10);
  })

  let num = 0; // 현재 슬라이드 인덱스

$('.rightbtn').click(function () {
    let $activeUl = $('.listA > div.on ul');
    let itemCount = $activeUl.find('li').length;
    let visibleCount = 4; // 화면에 보이는 항목 수
    let maxNum = itemCount - visibleCount;

    if (num < maxNum) {
        num++;
        $activeUl.stop().animate({
            left: -394 * num + 'px' // 374px + 20px 마진 = 394
        }, 100);
    }
});

$('.leftbtn').click(function () {
    let $activeUl = $('.listA > div.on ul');
    if (num > 0) {
        num--;
        $activeUl.stop().animate({
            left: -394 * num + 'px'
        }, 100);
    }
});

  // gnb 아이콘 클릭 시 menu 가 나타나라
  $('.gnb').click(function(){
    $('nav').addClass('on')
  })
  // 닫기 버튼 클릭 시 팝업 닫기
  $('nav .close').click(function () {
    $('nav').removeClass('on');
});

// ESC 키 누르면 닫기
$(document).keydown(function (e) {
    if (e.key === "Escape") {
        $('nav').removeClass('on');
    }
    // $("body").css("overflow", "auto");
});

// 동물이야기 슬라이드
let current = 0;
const total = 4;

// 슬라이드 업데이트 함수
function updateSlide(index) {
  const prev = (index + total - 1) % total;
  const next = (index + 1) % total;

  $(".story .slide").removeClass("prev active next");
  $(".story .slide" + prev).addClass("prev");
  $(".story .slide" + index).addClass("active");
  $(".story .slide" + next).addClass("next");

  $(".story .text").removeClass("active");
  $(".story .text" + index).addClass("active");

  $(".story .dot").removeClass("active");
  $(".story .dot").eq(index).addClass("active");
}

// 슬라이드는 container 내부에서만 작동
$(".story .container").on("wheel", function (e) {
  if (e.originalEvent.deltaY > 0) {
    // 아래로 스크롤할 때
    if (current < total - 1) {
      e.preventDefault();
      current = (current + 1) % total;
      updateSlide(current);
    }
    // 마지막 슬라이드일 경우엔 웹페이지 스크롤 허용
  } else {
    // 위로 스크롤할 때
    if (current > 0) {
      e.preventDefault();
      current = (current - 1 + total) % total;
      updateSlide(current);
    }
    // 첫 번째 슬라이드에서는 페이지 스크롤 허용
  }
});

// navigator dot 클릭 시에도 반응
$(".story .dot").on("click", function() {
  const index = $(this).index();
  current = index;
  updateSlide(current);
});

// 인원 수 카운트
$('.box').each(function () {
  const $box = $(this);
  const $count = $box.find('.count');

  $box.find('.plus').click(function () {
    let value = parseInt($count.text());
    value++;
    $count.text(value);
  });

  $box.find('.minus').click(function () {
    let value = parseInt($count.text());
    if (value > 0) {
      value--;
      $count.text(value);
    }
  });
});

// PC / 모바일 구분 함수
function isMobile() {
  return window.innerWidth <= 1439;
}

// ✅ PC: 리스트 티켓 클릭 시 선택
$('.listBox .list > li').on('click', function (e) {
  if (isMobile()) return;
  if ($(this).hasClass('book')) return;
  e.stopPropagation();

  $('.listBox .list > li').not(this).not('.book')
    .removeClass('selected')
    .addClass('gray');

  $(this).addClass('selected').removeClass('gray');
});

// ✅ PC: 바깥 클릭 시 초기화
$(document).on('click', function (e) {
  if (isMobile()) return;
  const $target = $(e.target);
  if ($target.closest(".book").length || $target.closest(".listBox .list>li").length) return;

  $(".listBox .list>li").removeClass("gray selected");
});

// ✅ 모바일일 때만 ts 버튼으로 티켓 넘기기
// 📌 클릭으로 티켓 넘기기 & 선택 적용
const $ticketList = $(".ticket .list > li").not(".book");
let currentIndex = 0;

function updateVisibleTicket() {
  $ticketList.hide().removeClass("selected");
  $ticketList.eq(currentIndex).show().addClass("selected");
}

updateVisibleTicket();

$(".ts.ts_left").on("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateVisibleTicket();
  }
});

$(".ts.ts_right").on("click", function () {
  if (currentIndex < $ticketList.length - 1) {
    currentIndex++;
    updateVisibleTicket();
  }
});

// ✅ 팝업 열기 버튼 클릭 시 현재 티켓 반영
$(".book .button").on("click", function () {
  const $selectedTicket = $ticketList.eq(currentIndex);
  const selectedDate = $("#datepicker1").val();

  let totalCount = 0;
  $(".book .people .count").each(function () {
    totalCount += parseInt($(this).text());
  });

  let ticketName = $selectedTicket.find(".mark").text().trim();

  const $pop = $(".pop");
  const $title = $pop.find("h4");
  const $message = $pop.find("p").eq(0);
  const $dateText = $pop.find(".pop_date p").eq(1);
  const $peopleText = $pop.find(".pop_people p").eq(1);

  if (!selectedDate || totalCount === 0) {
    $title.text("입력 정보가 부족합니다");
    $message.text("날짜와 인원을 모두 선택해주세요.");
    $dateText.text("");
    $peopleText.text("");
  } else {
    $title.text(ticketName);
    $message.text("예매되었습니다.");
    $dateText.text(selectedDate);
    $peopleText.text(totalCount + "명");
  }

  $pop.fadeIn();
});

// 팝업 닫기
$(".pop .button").on("click", function () {
  $(".pop").fadeOut();
});

// 갤러리 슬라이드
function startInfiniteSlide($ul, direction = 'up') {
  const speed = 1;
  const interval = 16;

  const $list = $ul.find('li');
  const listHeight = $list.first().outerHeight(true);
  const totalHeight = listHeight * $list.length;

  // li 복제: 무한 루프 구현
  $ul.append($list.clone());

  let scrollTop = (direction === 'down') ? totalHeight : 0;
  $ul.scrollTop(scrollTop);
  $ul.data('paused', false);

  const slideInterval = setInterval(() => {
      if (!$ul.data('paused')) {
          scrollTop += (direction === 'up') ? speed : -speed;
          $ul.scrollTop(scrollTop);

          // 무한 루프 포인트
          if (direction === 'up' && scrollTop >= totalHeight) {
              scrollTop = 0;
              $ul.scrollTop(0);
          } else if (direction === 'down' && scrollTop <= 0) {
              scrollTop = totalHeight;
              $ul.scrollTop(totalHeight);
          }
      }
  }, interval);

  // hover 시 슬라이드 일시정지
  $ul.on('mouseenter', 'li', function () {
      $ul.data('paused', true);
  }).on('mouseleave', 'li', function () {
      $ul.data('paused', false);
  });
}

$('.table_inner ul').each(function (i) {
  const dir = (i === 1) ? 'down' : 'up';
  startInfiniteSlide($(this), dir);
});

// faq 아코디언 스크립트
$(".faq_list ul li .a").hide(); // 처음에 모든 답변 숨김

    $(".faq_list ul li .q").click(function () {
        const answer = $(this).next(".a");

        // 이미 열려있는 경우 닫기
        if (answer.is(":visible")) {
            answer.slideUp();
            $(this).find("i").css("transform", "rotate(0deg)");
        } else {
            // 다른 모든 답변 닫기
            $(".faq_list ul li .a").slideUp();
            $(".faq_list ul li .q i").css("transform", "rotate(0deg)");

            // 현재 선택한 답변 열기
            answer.slideDown();
            $(this).find("i").css("transform", "rotate(180deg)");
        }
    });
  

    // lang 토글 체크 시 영어 버전
    $('#langToggle').on('change', function () {
      const lang = $(this).is(':checked') ? 'en' : 'ko';
      
      $('.switch-text').each(function () {
        const newText = $(this).data(lang);
        $(this).html(newText);  // text()에서 html()로 변경
      });
    });

// 테마존 아코디언 ##########################################
$(function () {
  const liMinHeight = 100;

  $(".theme_02 .pro ul li").on("click", function (e) {
    e.stopPropagation();

    const $this = $(this);
    const isOpen = $this.hasClass("on");

    // 모두 닫기
    $(".theme_02 .pro ul li").removeClass("on").css("height", liMinHeight);
    $(".theme_02 .pro ul li i").removeClass("rotate");

    // 이미 열려 있던 경우면 여기서 종료
    if (isOpen) return;

    // 열릴 항목 설정
    $this.addClass("on");

    // 실제 내용의 높이 계산
    const articleHeight = $this.find("article").outerHeight(true);
    const moreHeight = $this.find(".text_more").outerHeight(true);
    const padding = 24; // 여백 보정
    const fullHeight = articleHeight + moreHeight + padding;

    // 높이 적용
    $this.css("height", fullHeight);

    // 아이콘 회전
    $this.find("i").addClass("rotate");
  });

  // 바깥 클릭 시 닫기
  $(document).on("click", function () {
    $(".theme_02 .pro ul li").removeClass("on").css("height", liMinHeight);
    $(".theme_02 .pro ul li i").removeClass("rotate");
  });
});

    

}); // 스크립트 끝