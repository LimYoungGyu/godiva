$(document).ready(function(){
    // menu_btn
    $('.menu_btn').click(function(){
        $('header nav').animate({'right':0});
    });
    // close_btn
    $('.close_btn').click(function(){
        $('header nav').animate({'right':'-100vw'});
    });
    // header nav ul 메뉴 
    $('header nav > ul > li > a').click(function(){
        if($(this).attr('class') != 'active') {
            $('header nav > ul > li > a').removeClass('active');
            $(this).addClass('active');
            $('header nav .sub').slideUp();
            $(this).next().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });
    // 메인 슬라이드
    var swiper = new Swiper(".mySwiper", {
        effect:'fade',
        loop:true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".mySwiper .swiper-pagination",
            clickable:true
        },
    });
    // 탭메뉴 (tab)
    // 모든 .tab_list 안 보임
    $('.tab_list').hide();
    // idx변수의 값과 같은 인덱스 번호에 해당하는 tab_list만 보임
    $('.tab_list').eq(0).fadeIn();
    // idx변수 선언
    var idx=0;

    $('.tab_title ul li').click(function(){
        // 클릭한 li의 인덱스 번호를 idx변수에 저장
        var idx=$(this).index();
        // 모든 li에서 active 제거
        $('.tab_title ul li').removeClass('active');
        // 클릭한 li만 active 설정
        $(this).addClass('active');
        // 모든 .tab_list 안 보임
        $('.tab_list').hide();
        // idx변수의 값과 같은 인덱스 번호에 해당하는 tab_list만 보임
        $('.tab_list').eq(idx).fadeIn();
        return false;
    });
    // 자동 탭메뉴
    var auto=setInterval(autoTab, 4000);
    // autoTab 함수 선언
    function autoTab(){
        // idx 변수의 값을 1씩 증가시킴
        idx++;
        // 만약 idx값이 2보다 크면 0으로 초기화
        if(idx>2){idx=0;}
        // 모든 li에서 active 제거
        $('.tab_title ul li').removeClass('active');
        // 클릭한 li만 active 설정
        $('.tab_title ul li').eq(idx).addClass('active');
        // 모든 .tab_list 안 보임
        $('.tab_list').hide();
        // idx변수의 값과 같은 인덱스 번호에 해당하는 tab_list만 보임
        $('.tab_list').eq(idx).fadeIn();
    }
    // s3 슬라이드
    var swiper2 = new Swiper(".mySwiper2", {
        speed:800,    
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl:".mySwiper2 .swiper-button-next",
            prevEl:".mySwiper2 .swiper-button-prev",
        }
    });
    // s4 product 슬라이드
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView:1.15,
        spaceBetween: 20,
        centeredSlides:true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".mySwiper3 .swiper-pagination",
            clickable:true
        },
    });
    // top 버튼
    $('.top').click(function(){
        $('html, body').animate({'scrollTop':0});
        return false;
    });
    //window에 scroll이벤트 설정
    $(window).scroll(function(){
        //
        var win=$(this).scrollTop();
        if(win>0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });



}); //document.ready