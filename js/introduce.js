gsap.registerPlugin(ScrollTrigger);

$(function(){
    // 토글을 누르면 eng가 나온다
    $('.toggle_btn, .lang > .txt').click(function(){
        $('.eng').toggleClass('on')
        $('.toggle_btn').toggleClass('on')
    })
    // 메인메뉴에 호버하면 서브메뉴가 슬라이드토글
    $('.header_inner').mouseenter(function(){
        $('.menu_wrap').slideDown(300)
    })
    $('.header_inner').mouseleave(function(){
        $('.menu_wrap').hide()
    })
    
    // 스크롤 내리면 header 사라지고 스크롤 올리면 header 나타남
    let lastScroll = 0;
    const header = $('header');

    $(window).scroll(function(){

        const st = $(this).scrollTop();

        // 스크롤 내릴 때
        if(st > lastScroll){
            header.css({
                top: '-72px',
                'background-color': '#fff'
            });

            $('.hd_gnb').css({
                color: '#000'
            });

            $('.toggle_btn').css({
                filter: 'brightness(1) invert(0)'
            });

            $('.mb_side > .line').css({
                filter: 'brightness(0) invert(0)'
            });

        }
        // 스크롤 올릴 때
        else{
            header.css({
                top: '0',
                'background-color': '#fff'
            });

            $('.hd_gnb').css({
                color: '#000'
            });

            $('.toggle_btn').css({
                filter: 'brightness(1) invert(0)'
            });

            $('.mb_side > .line').css({
                filter: 'brightness(0) invert(0)'
            });

        }
        lastScroll = st;
        
        $('.yo section').each(function(){ 
            if($(this).offset().top <= $(window).scrollTop()+500) { 
                let idx = $(this).index() 
                $('.page_list li').removeClass('on') 
                $('.page_list li').eq(idx).addClass('on') 
            } 
        })

    });
    // 고탑버튼 누르면 위로 올라감
    $('.gotop_btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        },500)
    })

    // 푸터에 있는 버튼을 클릭 했을 때 실행항 거
    $('footer .inner .right_box .btn').click(function(){
        // 버튼 배경색 변하고 아이콘 180도 회전
        $('.btn').toggleClass('on')
        $('img').toggleClass('on')
        // 숨겨진 list box 나타남
        $('.btn_list').toggleClass('on')      
    })


    // 서브페이지 온스크롤
    // .page_list li 클릭했을때 할일
    $('.page_list li').click(function(e){
        e.preventDefault()
        // li한테 on클래스 추가
        // $(this).addClass('on').siblings().removeClass('on')
        // 해당하는 section 으로 이동
        let idx = $(this).index()
        let sd = $('#subpage main section').eq(idx + 1).offset().top
        $('html, body').animate({
            scrollTop : sd
        })
    });

    
    // 인트로 글자 효과
    let mm = gsap.matchMedia();

    mm.add('(min-width: 991.98px)',() => {

        const title = document.querySelector('.sub_intro .content > div')
        gsap.timeline({
            scrollTrigger: {
                trigger: '.sub_intro',
                start: 'top top',
                end: '+=300',
                scrub: 1.5,
                invalidateOnRefresh: true,
            }
        })
        // 글자 중앙에서 왼쪽 상단으로 이동
        .to(title, {
                scale: 0.6,
                // xPercent: -130,
                // yPercent: -180,
                // duration: 1,
                x: () => {
                    const startLeft =
                        (window.innerWidth - title.offsetWidth) / 2;

                    return 50 - startLeft;
                },

                y: () => {
                    const startTop =
                        (window.innerHeight - title.offsetHeight) / 2;

                    return 100 - startTop;
                },
                duration: 1.5,
                ease: 'none'
            })
        // sticky로 고정되어있는 .sub_intro .content div 를 
        // medical section 이 top 30%올라왔을떄 같이 위로 올려서 사라지게 한다
        gsap.timeline({
            scrollTrigger: {
                trigger: '.medical',
                start: 'top 30%',
                end: 'end end',
                scrub: 1.5,
            }
        })
        .to('.sub_intro .content div', {
            yPercent: -300,
        })
        // 메뉴가 메디컬 섹션 진입할때 선명해짐
        gsap.timeline({
            scrollTrigger: {
                trigger: '.medical',
                start: 'top 30%',
                end: '+=0',
                scrub: 1,
            }
        })
        .to('.page_list', {
            opacity: 1,
        })
    });
    
})