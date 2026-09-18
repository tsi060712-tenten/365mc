gsap.registerPlugin(ScrollTrigger);
$(function () {
    // 고탑버튼 누르면 위로 올라감
    $('.wrap .gotop_btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

    // 푸터에 있는 버튼을 클릭 했을 때 실행항 거
    $('footer .inner .right_box .btn').click(function () {
        // 버튼 배경색 변하고 아이콘 180도 회전
        $('.btn').toggleClass('on')
        $('img').toggleClass('on')
        // 숨겨진 list box 나타남
        $('.btn_list').toggleClass('on')
    })
    $(function () {
        // 토글을 누르면 eng가 나온다
        $('.toggle_btn, .lang > .txt').click(function () {
            $('.eng').toggleClass('on')
            $('.toggle_btn').toggleClass('on')
        })
        // 메인메뉴에 호버하면 서브메뉴가 슬라이드토글
        $('.header_inner').mouseenter(function () {
            $('.menu_wrap').slideDown(300)
        })
        $('.header_inner').mouseleave(function () {
            $('.menu_wrap').hide()
        })


        // 스크롤 내릴때는 .header 가 .slideUp되고 스크롤 올리면 .hide

        let lastScroll = 0;

        $(window).scroll(function () {

            const st = $(this).scrollTop();

            // 메인페이지 헤더

            if (!$('body').is('#subpage')) {

                const header = $('header');


                // 맨 위
                if (st === 0) {

                    header.css({
                        top: 0,
                        'background-color': 'transparent'
                    });

                    $('.hd_gnb').css({
                        color: '#fff'
                    });

                    $('.toggle_btn').css({
                        filter: 'brightness(1) invert(1)'
                    });

                    $('.mb_side > .line').css({
                        filter: 'brightness(1) invert(1)'
                    });

                }


                // 스크롤 내릴 때
                else if (st > lastScroll) {

                    header.css({
                        'background-color': '#fff',
                        top: '-72px'
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
                else {

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

            }


            // ==============================
            // 서브페이지 헤더
            // ==============================
            else {

                const subheader = $('#subpage header');


                // 스크롤 내릴 때
                if (st > lastScroll) {

                    subheader.css({
                        'background-color': '#fff',
                        top: '-72px'
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
                else {

                    subheader.css({
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

            }


            lastScroll = st;

        });
        gsap.to('.intro .content div', {
            scale: 0.6,
            xPercent: -35,
            yPercent: -60,
            ease: "power1.inOut",

            scrollTrigger: {
                trigger: '.intro .content div',
                start: 'top top',
                end: 'top 100%',
                scrub: 2,
                duration: 30,
            }

        })
    })

    document.addEventListener('DOMContentLoaded', function () {

        const isResponsive = window.matchMedia('(max-width: 1024px)').matches;

        if (!isResponsive) {
            // PC에서만 skrollr 실행
            skrollr.init({
                duration: 5000,
                mobileCheck: function () {
                    return false;
                }
            });
        } else {
            // 모바일/태블릿에서는 skrollr 완전 제거
            const skrollrInstance = skrollr.get();

            if (skrollrInstance) {
                skrollrInstance.destroy();
            }

            document.documentElement.classList.remove(
                'skrollr',
                'skrollr-mobile',
                'skrollr-desktop'
            );

            document.documentElement.classList.add('no-skrollr');

            // skrollr가 남긴 스타일 초기화
            document.documentElement.style.overflow = '';
            document.documentElement.style.height = '';

            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.transform = '';
        }

    });
})





