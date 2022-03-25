$(function () {
    //////////////////////////////////////////////////

    //topBanner 2022.03.17 최종수정
    // $('css선택자').on('이벤트',할일)


    function topbannerHandler() {
        $('.topBanner').slideUp();
    }


    $('.topBanner i ').on('click', topbannerHandler);

    // 각각의 슬라이드에 애니메이션
    $('.mainVisualSlide').on('init reInit afterChange', function () {
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.mainVisualSlide').slick({
        autoplay: true,
        autoplaySpeed: 2000,//(2초)
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    // $('.mainVisualSlide figure').eq(1).addClass('on');
    // //전체 슬라이드에서 class를 떼고 지금 슬라이드에 class를 붙이는 일

    // $('.mainVisualSlide').on('afterChange', function (s, i, c) {
    //     //c => 0,1,2
    //     $('.mainVisualSlide figure').removeClass('on')
    //     $('.mainVisualSlide figure').eq(c + 1).addClass('on');
    // });


    $('.movieBtn i:first-child').on('click', function () {
        $('#adMovie').trigger('play');
    });

    $('.movieBtn i:first-child').on('click', function () {
        $('#adMovie').trigger('pause');
    });









    /////////////////////////////////////////////////
});