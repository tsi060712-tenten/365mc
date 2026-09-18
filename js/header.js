$(function(){
    $('.mb_gnb').click(function(){
    // 형제인 mb_sub가 나와야함
        $(this).next('.mb_sub').toggle();
        // 다른 메뉴의 서브메뉴들은 바로 닫기
        $(this).parent().siblings().children('.mb_sub').hide()
        // + 이미지가 - 로 변경
        $(this).children().find('.plus, .minus').toggleClass('on')
        $(this).parent().siblings().children().find('.plus, .minus').removeClass('on')
    })

    // .mb_side 누르면 햄버거 나와야함 
    $('.mb_side').click(function(){
        $('.hamburger').toggleClass('on')
        // .mb_side img 교체
        $('.mb_side img').toggleClass('on')
        $('main, footer').toggleClass('on')
        $('body').toggleClass('menu_open')
        $('.gotop_btn').toggleClass('on')

        let isOpen = $('.hamburger').hasClass('on')

        if (isOpen){
            // 버튼이랑 토글이 조금 늦게 나옴
            setTimeout(function(){
            $('.header_inner .side').addClass('on');
            }, 500);
            setTimeout(function(){
                $('.mb_main > li #company').addClass('on');
            }, 700);
            setTimeout(function(){
                $('.mb_main > li #business').addClass('on');
            }, 900);
            setTimeout(function(){
                $('.mb_main > li #pr').addClass('on');
            }, 1100);
            
        }else {
            // 버튼이랑 토글이 바로 사라짐
            $('.header_inner .side').removeClass('on')
            $('.mb_main > li').children().removeClass('on')
        }
    })
    // 화면이 991.98px보다 커지면 모바일 메뉴 상태 초기화
    $(window).resize(function(){

        if($(window).width() > 991.98){

            $('.hamburger').removeClass('on');
            $('.mb_side img').removeClass('on');
            $('.header_inner .side').removeClass('on');

        }
    });


})    
    