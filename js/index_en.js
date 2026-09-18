gsap.registerPlugin(ScrollTrigger);


$(function(){
    // x버튼을 누르면 비디오가 원형으로 작아진다
    $('.close').click(function(){
        // 얘들은 바로 실행
        $('.intro').addClass('on')
        $('header').addClass('on')
        $('body').addClass('on')

        let video = $('.fullvideo').find('video')[0];
        video.muted = true;

        // 얘는 1초 있다가 실행
        setTimeout(function(){
        $('.sect1_inner').addClass('active');
        }, 1000);
    })

    // 음소거 btn 누르면 소리가 나옴
    $('.sound').click(function(){
        
        $('.sound, .sound img').toggleClass('on');

        let video = $('.fullvideo').find('video')[0];
       
        if ($('.sound img').hasClass('on')){
            video.muted = false;
        }else {
            video.muted = true;
        }
       
    })

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

    // 스크롤 내릴때는 .header 가 .slideUp되고 스크롤 올리면 .hide
    let lastScroll = 0;
    const header = $('header');

    $(window).scroll(function(){
        const st = $(this).scrollTop();
        // 맨위에 있을때
        if (st === 0) {
            header.css({
                top: 0,
                'background-color': 'transparent'
            })
            $('.hd_gnb').css({
                color: '#fff'
            });
            $('.toggle_btn').css({
                filter: 'brightness(1) invert(1)'
            })
            $('.mb_side > .line').css({
                filter: 'brightness(1) invert(1)'
            })
        }
        
        // 내릴때
        else if (st > lastScroll) {
            header.css({
                'background-color': '#fff',
                top: '-72px',
            });
            $('.hd_gnb').css({
                color: '#000',
            });
            $('.toggle_btn').css({
                filter: 'brightness(1) invert(0)'
            })
            $('.mb_side > .line').css({
                filter: 'brightness(0) invert(0)'
            })
        // 올릴때
        }else {
            header.css({
                top: '0',
                'background-color': '#fff',
            });
            $('.mb_side > .line').css({
                filter: 'brightness(0) invert(0)'
            })
        }

        lastScroll = st;
    })
    
    // 섹션2 타이틀
    gsap.to('.sect2_business .content h2', {
        opacity: 1,
        scale: 1,

        scrollTrigger: {
            trigger: '.sect2_business',
            start: 'top 50%',
            end: 'top 20%',
            scrub: 1
        }
    })
    gsap.to('.sect2_business .content h2', {
        opacity: 0,
        scale: 1.5,
        
        scrollTrigger: {
            trigger: '.sect2_business',
            start: 'top -10%',
            end: 'top -60%',
            scrub: 1
        }
    });
    // 섹션2 span, btn
    gsap.to('.sect2_business .content .orange_btn, .sect2_business .content > span', {
        opacity: 1,
        y: 0,

        scrollTrigger: {
            trigger: '.sect2_business',
            start: 'top 50%',
            end: 'top 20%',
            scrub: 1
        }
    })
    gsap.to('.sect2_business .content .orange_btn, .sect2_business .content > span', {
        opacity: 0,
        yPercent: 50,
        
        scrollTrigger: {
            trigger: '.sect2_business',
            start: 'top -10%',
            end: 'top -60%',
            scrub: 1
        }
    });
    // 섹션2 똥글뱅이
    gsap.to('.circle_wrap .figure', {
        scale: 1,
        

        scrollTrigger: {
            trigger: '.sect2_business',
            start: 'top 50%',
            end: 'top 20%',
            scrub: 1
        }
    })
    gsap.to('.circle_wrap .figure', {
        scale: 0,

        scrollTrigger: {
            trigger: '.sect2_business',
            start: 'top -10%',
            end: 'top -60%',
            scrub: 1
        }
    });

    // 섹션3그로우 글자 하나씩 올라옴

    gsap.to('.sect3_inner .txt_box p', {
        y: 0,
        stagger: 0.2,

        scrollTrigger: {
            trigger: '.sect3_inner',
            start: 'top 90%',
            end: 'top 30%',
            scrub: 1
        }
    });

    // 섹션3 슬라이드 밑에서 나타남
    gsap.to('.sect3_inner .sponsor_slide', {
        y: 0,
        opacity: 0.7,

        scrollTrigger: {
            trigger: '.sect3_inner',
            start: 'top 40%',
            end: 'top 10%',
            scrub: 1
        }
    })
    
    // 섹션4 타이틀 h2가 축소되면서 스르륵 나타남
    gsap.to('.sect4_world .content h2 ', {
        opacity: 1,
        scale: 1,

        scrollTrigger: {
            trigger: '.sect4_world',
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1
        }
    })
    // 섹션4 span 이 밑에서 위로 올라옴
    gsap.to('.sect4_world .content span', {
        opacity: 1,
        y: 0,

        scrollTrigger: {
            trigger: '.sect4_world',
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1
        }
    })
    // 섹션4 content_box
    gsap.to('.sect4_world .function li', {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
    
        scrollTrigger: {
            trigger: '.sect4_world',
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1
        }
    })

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


    // Updates 위드값 효과
    
    let mm = gsap.matchMedia();

    mm.add('(min-width: 991.98px)',() => {

        // 991px 이상 부터 실행될거
    //     gsap.set('.updates .inner', {
    //     xPercent: -50,
    //     yPercent: -51
    // });

    // gsap.set('.mc_tv', {
    //     yPercent: 100
    // });

    // const t1 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.pin-wrapper',
    //         start: 'top top',
    //         end: '+=1800',
    //         scrub: 1,
    //         pin: true,
    //         pinSpacing: true,
    //         anticipatePin: 1,
    //         invalidateOnRefresh: true,
    //         // markers: true,

    //         snap: {
    //             snapTo: [0, 0.165, 0.413, 1],
    //             duration: { min: 0.2, max: 0.6 },
    //             delay: 1,
    //             ease: "power1.out",
    //         }
    //     }
    // });

    // 1. updates width
    // t1.to('.updates .inner', {
    //     width: '99.9%',
    //     ease: 'none',
    //     duration: 1,
    // })

    t1.to({}, { duration: 2 })

    // 2. updates가 작아지면서 사라짐
    // .to('.updates .inner', {
    //     scale: 0.8,
    //     opacity: 0,
    //     ease: 'power1.out',
    //     duration: 0.8,
    // })

    // 3. mc_tv가 아래에서 올라옴(일부만 도착)
    // .fromTo('.mc_tv', 
    // { 
    //     // 아래 바깥에서 대기 (시작 위치)
    //     yPercent: 100,            
    // },
    // { 
    //     // (도착 위치) 
    //     yPercent: 40,              
    //     ease: 'power1.out', 
    //     duration: 3,
    // }, 
                        
    // );

    // 제자리로 완전히 올라오되 일반 스크롤 처럼 자연스럽게 올라오기
    // t1.to('.mc_tv', {
    // yPercent: 0,
    // // ease: 'power1.out',
    // duration: 2,
    // });

    // tv가 다올라오면 화면이 머무는 구간 유지
//     t1.to({},{
//         duration: 3.1,
//     })
//     return () => {
//     gsap.set('.updates .inner, .mc_tvm, .pin-wrapper',{
//         clearProps: 'all',
//     });
//   };

    })

})
