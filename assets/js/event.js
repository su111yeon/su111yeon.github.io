// notice
$(function () {
    var noticeWrap = $(".notice_list");
    noticeWrap.find("dt a").click(function () {
        if ($(this).hasClass("close")) {
            $(this).removeClass("close").addClass("open");
            $(this).parent().parent().find("dd").slideDown(300);
            return false;
        } else {
            $(this).removeClass("open").addClass("close");
            $(this).parent().parent().find("dd").slideUp(300);
            return false;
        }
    });
});

// tab_ blkFriday 202211
// $(function () {
//     var tabWrap = $(".tabFunction");

//     tabWrap.each(function () {
//         var tabMenu = $(this).find("ul li"),
//             tabContent = $(this).find(".tabBoxWrap > div");

//         // $(this).find(".tabBoxWrap > div").not(":eq(0)").hide();
//         $(this)
//             .find("> ul li a")
//             .click(function (e) {
//                 e.preventDefault();
//                 var i = $(this).parent().index();
//                 contentV2024_1Menu.removeClass("current");
//                 $(this).parent().addClass("current");
//                 tabContent.hide();
//                 tabContent.eq(i).show();
//             });
//     });
// });

// love n luck _ 230302
// $(function () {
//     var flipCard = $(".flip-card");

//     flipCard.each(function () {
//         $(this)
//             .find("> .flip-card-inner")
//             .click(function (e) {
//                 e.preventDefault();
//                 var i = $(this).parent().index();
//                 // flipCard.find('> .flip-card-inner').css({transform:'none'});
//                 flipCard.eq(i).find("> .flip-card-inner").css({ transform: "rotateY(540deg)" });
//             });
//     });
// });

// kakao 플친 POPUP
$(".layer_call").click(function () {
    $(".layer_view").css("display", "none");
    $($(this).attr("href")).css("display", "block");
    $(".dim").css("display", "block");
    return false;
});

$(".layer_view .close").click(function () {
    $(".layer_view").css("display", "none");
    $(".dim").css("display", "none");
});

// popup default ver _ 220614
$(".couponPopup .close").click(function () {
    $(".couponPopup").hide();
    $(".dim").css("display", "none");
    return false;
});

$(".popupBtn").on("click", function (e) {
    $(".couponPopup").show();
    $(".dim").css("display", "block");
    return false;
});

// popup new Version _ 221104
function openModal(modalname, s) {
    var $element = $("." + modalname),
        $eInner = $element.find("> .content");
    $element.fadeIn();
    $eInner.css({ width: s });
    $("body, html").css({ overflow: "hidden" });
    $(window)
        .resize(function () {
            var $elementH = $element.height();
            var $eInnerH = $eInner.outerHeight();
            var i = $elementH - $eInnerH;
        })
        .resize();
}

// POPUP close
function fn_layer_close(e) {
    $(e).closest(".layerPop").fadeOut();
    $("body, html").css({ overflow: "auto" });
    // location.reload();
}

// POPUP close & reload
function fn_layer_close_reload(e) {
    $(e).closest(".layerPop").fadeOut();
    $("body, html").css({ overflow: "auto" });
    location.reload();
}

/*(21/08/30) TAB SCROLL */
$(window).scroll(function () {
    TabCheck();
    TabCheck2024();
});

/* 패밀리세일 이벤트 (21/10/20) */
function onScroll(event) {
    var position = $(window).scrollTop();
    var nav = $(".tab");

    var sectionHeight1 = $("#cont1").offset().top;
    var sectionHeight2 = $("#cont2").offset().top;
    var sectionHeight3 = $("#cont3").offset().top;
    var sectionHeight4 = $("#cont4").offset().top;

    $(".tab a").each(function () {
        $(this).removeClass("active");
    });

    if (position > sectionHeight4 - ($(".header.fixed").height() + nav.height())) {
        $(".tab4 a").addClass("active");
    } else if (position > sectionHeight3 - ($(".header.fixed").height() + nav.height())) {
        $(".tab3 a").addClass("active");
    } else if (position > sectionHeight2 - ($(".header.fixed").height() + nav.height())) {
        $(".tab2 a").addClass("active");
    } else if (position > sectionHeight1 - ($(".header.fixed").height() + nav.height())) {
        $(".tab1 a").addClass("active");
    } else {
        $(".tab1 a").addClass("active");
    }

    return;
}

function TabCheck() {
    // 해피포인트 이벤트(21/10/18) __ 리뉴얼(2022.10) 후 사용 안함
    if ($(".jestina-sub-project__wrap").hasClass("Jcont") == true) {
        $(window).resize(function () {
            TabFix();
        });

        //이벤트 탭 fix
        $(wrap).on("scroll", function () {
            if ($(window).scrollTop() > $(".contentBottom").offset().top) {
                $(".tab").hide();
                $(".tabV1").hide();
                $(".tabV2").hide();
                $(".tabV3").hide();
                $(".tabV2024").hide();
                $(".tab-menu-wrap").addClass("fixed");
            } else {
                $(".tab").show();
                $(".tabV1").show();
                $(".tabV2").show();
                $(".tabV3").show();
                $(".tabV2024").show();
                $(".tab-menu-wrap").removeClass("fixed");
            }

            TabFix();
        });

        function TabFix() {
            var position = $(window).scrollTop();
            var nav = $(".tab");
            var firstSection = $(".container_wrap");

            var sectionHeight1 = $(".cont1").offset().top;
            var sectionHeight2 = $(".cont2").offset().top;
            var sectionHeight3 = $(".cont3").offset().top;
            var sectionHeight4 = $(".cont4").offset().top;

            if ($(window).width() > 800) {
                // pc
                if (position > sectionHeight4 - nav.height()) {
                    nav.css("background-image", "url(https://webimg.jestina.co.kr/UpData/jestina/event/211018_happypoint/tab4.png)");
                    nav.addClass("fixed");
                } else if (position > sectionHeight3 - nav.height()) {
                    nav.css("background-image", "url(https://webimg.jestina.co.kr/UpData/jestina/event/211018_happypoint/tab3.png)");
                    nav.addClass("fixed");
                } else if (position > sectionHeight2 - nav.height()) {
                    nav.css("background-image", "url(https://webimg.jestina.co.kr/UpData/jestina/event/211018_happypoint/tab2.png)");
                    nav.addClass("fixed");
                } else if (position > sectionHeight1 - nav.height()) {
                    nav.css("background-image", "url(https://webimg.jestina.co.kr/UpData/jestina/event/211018_happypoint/tab1.png)");
                    nav.addClass("fixed");
                } else {
                    nav.css("background-image", "url(https://webimg.jestina.co.kr/UpData/jestina/event/211018_happypoint/tab1.png)");
                    nav.removeClass("fixed");
                }
            } else {
                // mo
                if (position > sectionHeight4 - ($(".hd .header.fixed").height() + nav.height())) {
                    nav.css("background-image", "url(https://webimg.jestina.co.kr/UpData/jestina/event/211018_happypoint/m_tab4.png)");
                    nav.css("top", $(".hd .header.fixed").height());
                    nav.addClass("fixed");
                } else if (position > sectionHeight3 - ($(".hd .header.fixed").height() + nav.height())) {
                    nav.css("background-image", "url(https://webimg.jestina.co.kr/UpData/jestina/event/211018_happypoint/m_tab3.png)");
                    nav.css("top", $(".hd .header.fixed").height());
                    nav.addClass("fixed");
                } else if (position > sectionHeight2 - ($(".hd .header.fixed").height() + nav.height())) {
                    nav.css("background-image", "url(https://webimg.jestina.co.kr/UpData/jestina/event/211018_happypoint/m_tab2.png)");
                    nav.css("top", $(".hd .header.fixed").height());
                    nav.addClass("fixed");
                } else if (position > sectionHeight1 - ($(".hd .header.fixed").height() + nav.height())) {
                    nav.css("background-image", "url(https://webimg.jestina.co.kr/UpData/jestina/event/211018_happypoint/m_tab1.png)");
                    nav.css("top", $(".hd .header.fixed").height());
                    nav.addClass("fixed");
                } else {
                    nav.css("top", 0);
                    nav.removeClass("fixed");
                }
            }
        }
    } else {
        // 기존에 있던 tab

        //스크롤 하단으로 갔을 때 탭 숨김
        $(window).scroll(function () {
            if ($(window).scrollTop() > $(".contentBottom").offset().top) {
                $(".tab").hide();
                $(".tabV1").hide();
                $(".tabV2").hide();
                $(".tabV3").hide();
                $(".tab-menu-wrap").addClass("fixed");
            } else {
                $(".tab").show();
                $(".tabV1").show();
                $(".tabV2").show();
                $(".tabV3").show();
                $(".tab-menu-wrap").removeClass("fixed");
            }
        });

        $(document).on("scroll", function () {
            // fix_func();
            fix_func_v1();
            fix_func_v2();
            fix_func_v3();
            fix_func_v4();
        });

        // function fix_func() {
        // 	var position = $(window).scrollTop();
        // 	var nav = $('.tab');
        // 	var firstSection = $('.container_wrap');

        // 	/*이벤트 주 메뉴*/
        // 	if (position > firstSection.offset().top - ($('.header.fixed').height() + nav.height()) ) {
        // 		nav.addClass('fixed');
        // 	} else {
        // 		nav.removeClass('fixed');
        // 	};
        // };

        // tab version1
        function fix_func_v1() {
            if ($(".jestina-sub-project__wrap").hasClass("tabContentV1") == true) {
                var position = $(window).scrollTop();
                var nav = $(".tabV1");
                var firstSection = $(".container_wrap");

                var sectionHeight11 = $("#contentV11").offset().top;
                var sectionHeight22 = $("#contentV12").offset().top;
                var sectionHeight33 = $("#contentV13").offset().top;
                // var sectionHeight44 = $("#contentV14").offset().top;

                $(".tabV1 a").each(function () {
                    $(this).removeClass("active");
                });

                if (position > sectionHeight33 - ($(".header.fixed").height() + nav.height() + 35)) {
                    $(".tab1_3 a").addClass("active");
                } else if (position > sectionHeight22 - ($(".header.fixed").height() + nav.height() + 35)) {
                    $(".tab1_2 a").addClass("active");
                } else if (position > sectionHeight11 - ($(".header.fixed").height() + nav.height())) {
                    $(".tab1_1 a").addClass("active");
                } else {
                    $(".tab1_1 a").addClass("active");
                }

                /*이벤트 주 메뉴*/
                if (position > firstSection.offset().top - ($(".header.fixed").height() + nav.height())) {
                    nav.addClass("fixed");
                } else {
                    nav.removeClass("fixed");
                }
            }
            return;
        }

        // tab version2
        function fix_func_v2() {
            if ($(".jestina-sub-project__wrap").hasClass("tabContentV2") == true) {
                var position = $(window).scrollTop();
                var nav = $(".tabV2");
                var firstSection = $(".container_wrap");

                var sectionHeight11 = $("#contentV21").offset().top;
                var sectionHeight22 = $("#contentV22").offset().top;

                $(".tabV2 a").each(function () {
                    $(this).removeClass("active");
                });

                if (position > sectionHeight22 - ($(".header.fixed").height() + nav.height())) {
                    $(".tab2_2 a").addClass("active");
                } else if (position > sectionHeight11 - ($(".header.fixed").height() + nav.height())) {
                    $(".tab2_1 a").addClass("active");
                } else {
                    $(".tab2_1 a").addClass("active");
                }

                /*이벤트 주 메뉴*/
                if (position > firstSection.offset().top - ($(".header.fixed").height() + nav.height())) {
                    nav.addClass("fixed");
                } else {
                    nav.removeClass("fixed");
                }
            }
            return;
        }

        // tab version3
        function fix_func_v3() {
            if ($(".jestina-sub-project__wrap").hasClass("tabContentV3") == true) {
                var position = $(window).scrollTop();
                var nav = $(".tabV3");
                var firstSection = $(".container_wrap");

                var sectionHeight11 = $("#contentV31").offset().top;
                var sectionHeight22 = $("#contentV32").offset().top;
                var sectionHeight33 = $("#contentV33").offset().top;

                $(".tabV3 a").each(function () {
                    $(this).removeClass("active");
                });

                if (position > sectionHeight33 - ($(".header.fixed").height() + nav.height() + 50)) {
                    $(".tab3_3 a").addClass("active");
                } else if (position > sectionHeight22 - ($(".header.fixed").height() + nav.height() + 50)) {
                    $(".tab3_2 a").addClass("active");
                } else if (position > sectionHeight11 - ($(".header.fixed").height() + nav.height() + 50)) {
                    $(".tab3_1 a").addClass("active");
                } else {
                    $(".tab3_1 a").addClass("active");
                }

                /*이벤트 주 메뉴*/
                if (position > firstSection.offset().top - ($(".header.fixed").height() + nav.height())) {
                    nav.addClass("fixed");
                } else {
                    nav.removeClass("fixed");
                }
            }
            return;
        }

        // tab version4
        function fix_func_v4() {
            if ($(".jestina-sub-project__wrap").hasClass("tabContentV4") == true) {
                var position = $(window).scrollTop();
                var nav = $(".tabV4");
                var firstSection = $(".container_wrap");

                var sectionHeight11 = $("#contentV41").offset().top;
                var sectionHeight22 = $("#contentV42").offset().top;
                var sectionHeight33 = $("#contentV43").offset().top;
                var sectionHeight44 = $("#contentV44").offset().top;
                // var sectionHeight55 = $("#contentV45").offset().top;
                // var sectionHeight66 = $("#contentV46").offset().top;

                $(".tabV4 a").each(function () {
                    $(this).removeClass("active");
                });

                // if (position > sectionHeight55 - 50) {
                //     $(".tab5_4 a").addClass("active");
                // } else if (position > sectionHeight55 - 50) {
                //     $(".tab4_5 a").addClass("active");
                // } else
                if (position > sectionHeight44 - 50) {
                    $(".tab4_4 a").addClass("active");
                } else if (position > sectionHeight33 - 50) {
                    $(".tab4_3 a").addClass("active");
                } else if (position > sectionHeight22 - 50) {
                    $(".tab4_2 a").addClass("active");
                } else if (position > sectionHeight11 - 50) {
                    $(".tab4_1 a").addClass("active");
                } else {
                    $(".tab4_1 a").addClass("active");
                }

                /*이벤트 주 메뉴*/
                if (position > firstSection.offset().top) {
                    nav.addClass("fixed");
                } else {
                    nav.removeClass("fixed");
                    nav.removeClass("tabOn");
                    nav.addClass("tabOff");
                }

                $(window).scroll(function () {
                    if ($(window).scrollTop() > $(".contentBottom").offset().top) {
                        $(".tabV4").addClass("tabOff");
                        $(".tabV4").hide();
                        $(".tab-menu-wrap").addClass("fixed");
                    } else {
                        $(".tabV4").removeClass("tabOff");
                        $(".tabV4").show();
                        $(".tab-menu-wrap").removeClass("fixed");
                    }
                });
            }
            return;
        }
    }
}

function TabCheck2024() {
    //스크롤 하단으로 갔을 때 탭 숨김
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(".contentBottom").offset().top) {
            $(".tab").hide();
            $(".tabV2024").hide();
        } else {
            $(".tab").show();
            $(".tabV2024").show();
        }
    });

    $(document).on("scroll", function () {
        fix_func_2024();
        // fix_event_tabV5();
    });

    // function fix_func() {
    // 	var position = $(window).scrollTop();
    // 	var nav = $('.tab');
    // 	var firstSection = $('.jestina-detail__event-wrap');

    // 	/*이벤트 주 메뉴*/
    // 	if (position > firstSection.offset().top - ($('.header.fixed').height() + nav.height()) ) {
    // 		nav.addClass('fixed');
    // 	} else {
    // 		nav.removeClass('fixed');
    // 	};
    // };

    // tab version1
    function fix_func_2024() {
        if ($(".jestina-detail__event").hasClass("tabContent2024") == true) {
            var position = $(window).scrollTop();
            var nav = $(".tabV2024");
            var firstSection = $(".jestina-detail__event-wrap");

            var sectionHeight11 = $("#contentV2024_1").offset().top;
            var sectionHeight22 = $("#contentV2024_2").offset().top;
            var sectionHeight33 = $("#contentV2024_3").offset().top;
            // var sectionHeight44 = $("#contentV2024_4").offset().top;

            $(".tabV2024 a").each(function () {
                $(this).removeClass("active");
            });

            // if (position > sectionHeight44 - ($(".header.fixed").height() + nav.height() + 35)) {
            //     $(".tab2024_4 a").addClass("active");
            // } else
            if (position > sectionHeight33 - ($(".header.fixed").height() + nav.height() + 35)) {
                $(".tab2024_3 a").addClass("active");
            } else if (position > sectionHeight22 - ($(".header.fixed").height() + nav.height() + 35)) {
                $(".tab2024_2 a").addClass("active");
            } else if (position > sectionHeight11 - ($(".header.fixed").height() + nav.height() + 35)) {
                $(".tab2024_1 a").addClass("active");
            } else {
                $(".tab2024_1 a").addClass("active");
            }

            /*이벤트 주 메뉴*/
            if (position > firstSection.offset().top - ($(".header.fixed").height() + nav.height() + 35)) {
                nav.addClass("fixed");
            } else {
                nav.removeClass("fixed");
            }
        }
        return;
    }
}

// 주소복사 _ 221110
function clip() {
    var address = "";
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    address = "서울 강남구 언주로172길 51";
    textarea.value = address;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("주소가 복사되었습니다.");
}

$(document).ready(function () {
    m_giftEvent(); // j_gift 221116
    m_popupEvent(); // popupStore event
    m_prodLinkWrap(); // oneday special _ NEW 202301 ~
    m_bannerContents(); // APP PUSH EVENT_220628
    getEventSlide(); // autumn jweek 220912
    m_couponWrap(); // 2022 chuseok 220907
    customSlide();
    j_reviewer(); // 제이리뷰어pc_ 230313
    m_j_reviewer(); // 제이리뷰어mo_ 230313
    familySale(); // 창립기념패밀리세일pc_ 230411
    m_familySale(); // 창립기념패밀리세일mo_ 230411
    blackFriday();
    m_blackFriday();
    jweek_2312(); // 2312_제이위크
    //DDayCountTimer(); // 2312_클리어런스 디데이카운트
    m_couponSwiper(); // 2312_클리어런스 모바일 swiper
    event_mainSwiper(); // 240103_신년제이위크 메인슬라이드
    //only_timer();
    m_swiper_blossom();
    springFesta();
    m_springFesta();
    m_familySale_2024(); //240422_패밀리세일_1
    m_familySale_2024_2(); //240422_패밀리세일_2
    timeDeal_bag(); //2405_핸드백 타임딜
    m_timeDeal_bag();
    timeDeal_Jew(); //2405_주얼리 타임딜
    m_timeDeal_Jew();
    pre_summer2024(); //pre-jweek2024
    m_pre_summer2024();
    ballo_swiper(); //  240616_ballo 예약판매+유튜버 쭈이
    m_layerPop_swiper(); // 레이어팝업 스와이퍼
    m_luckySeven(); // 2407_luckySeven
    luckySeven();
    event_applySwiper(); // 2407 휴가 제이위크 경품 스와이퍼
    swiper_silverWeek(); // 2407 휴가 제이위크 경품 스와이퍼
    m_timeDeal_bag_08(); // 2408_핸드백 타임딜
    timeDeal_header_swiper(); // 2408_핸드백 타임딜 헤더스와이퍼
    m_summer_swiper(); // 2408_썸머블프위크 스와이퍼
    jReviewer_2024(); // 2024_제이리뷰어
    timeDeal_swiper(); // 240815_timeDeal 스와이퍼
    m_timeDeal_swiper(); // 240815_timeDeal 스와이퍼
    timeDeal_2409(); // 2409_ 핸드백 타임특가
    m_timeDeal_2409(); // 2409_ 핸드백 타임특가
    autumn_jWeek2024_01(); // 241007_  PC가을 제이위크
    autumn_jWeek2024_02();
    m_autumn_jWeek2024_01(); // 241007_  MO가을 제이위크
    m_autumn_jWeek2024_02();
    number_counting(); // 241007_  가을 제이위크 숫자카운팅
    famSale2024_01(); // 241021 PC패밀리세일
    famSale2024_02();
    m_famSale2024_01(); // 241021 MO패밀리세일
    m_famSale2024_02();
    famSale_raffle();
    swiper__holiday1(); // 241111_홀리데이 제이위크
    swiper__holiday2(); // 241111_홀리데이 제이위크
    m_swiper__holiday1(); // 241111_홀리데이 제이위크
    m_swiper__holiday2(); // 241111_홀리데이 제이위크
    timeDeal_h1(); // 2411_핸드백 타임딜
    timeDeal_h2(); // 2411_핸드백 타임딜
    m_timeDeal_h1(); // 2411_ 핸드백 타임특가
    m_timeDeal_h2(); // 2411_ 핸드백 타임특가
});

function m_giftEvent() {
    var swiper = new Swiper(".m_giftEvent.swiper-container", {
        slidesPerView: 2,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        observer: true,
        centeredSlides: false,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

function m_popupEvent() {
    var swiper = new Swiper(".m_popupEvent .swiper-container", {
        slidesPerView: 2,
        grabCursor: true,
        spaceBetween: 10,
        setWrapperSize: true,
        loop: true,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

function m_prodLinkWrap() {
    var swiper = new Swiper(".swiper-container.m_prodLinkWrap", {
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 10,
        setWrapperSize: true,
        loop: true,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

function m_bannerContents() {
    var swiper = new Swiper(".swiper-container.bannerContents", {
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 10,
        setWrapperSize: true,
        loop: true,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

function getEventSlide() {
    var mySwiper = new Swiper(".swiperWrap .swiper-container", {
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 10,
        setWrapperSize: true,
        loop: true,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiperWrap > .swiper-button-next",
            prevEl: ".swiperWrap > .swiper-button-prev",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function m_couponWrap() {
    var swiper = new Swiper(".m_couponWrap .swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: 3000,
        loop: true,
    });
}

function jweek_2312() {
    var swiper = new Swiper(".jweek_2312", {
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function springFesta() {
    var swiper = new Swiper(".springFesta", {
        slidesOffsetBefore: 10,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        slidesPerView: 5.5,
        loopAdditionalSlides: 1,
        centeredSlides: true,
        spaceBetween: 10,
        slidesPerGroup: 1,
    });
}

function m_springFesta() {
    var swiper = new Swiper(".m_springFesta", {
        slidesOffsetBefore: 8,
        spaceBetween: 8,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        slidesPerView: 2.2,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
    });
}
function m_5Week() {
    var swiper = new Swiper(".m_5Week", {
        slidesOffsetBefore: 8,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        slidesPerView: 2.3,
        // centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
    });
}

function customSlide() {
    // custom slide
    var $banner = $(".banner").find("ul");

    var $bannerWidth = $banner.children().outerWidth();
    // var $bannerHeight = $banner.children().outerHeight();
    var $bannerLength = $banner.children().length;
    var rollingId;

    // 정해진 초마다 함수 실행
    rollingId = setInterval(function () {
        rollingStart();
    }, 3000); //다음 이미지로 롤링 애니메이션 할 시간차

    function rollingStart() {
        $banner.css("width", $bannerWidth * $bannerLength + "px");
        // $banner.css("height", $bannerHeight + "px");

        //배너의 좌측 위치 이동
        $banner.animate({ left: -$bannerWidth + "px" }, 1500, function () {
            // 롤링 진행되는 시간
            //첫번째 이미지 마지막 끝에 복사 추가
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            //뒤로 복사된 첫번재 이미지 삭제
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
}

function j_reviewer() {
    var swiper = new Swiper(".swiper_container.j_reviewer", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        loop: true,
        autoplay: 3500,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}
function m_j_reviewer() {
    var swiper = new Swiper(".swiper_container.m_j_reviewer", {
        slidesPerView: 1.2,
        spaceBetween: 6,
        loop: true,
        autoplay: 3500,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}
function familySale() {
    var swiper = new Swiper(".familySale", {
        slidesPerView: 3.7,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    });
}
function m_familySale() {
    var swiper = new Swiper(".m_familySale", {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 2.1,
        centeredSlides: true,
    });
}

function swiper_jweek_coupon() {
    var swiper = new Swiper(".swiper_jweek_coupon", {
        loop: true,
        slidesPerView: 3.2,
        centeredSlides: false,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 800,
    });
}
function m_swiper_jweek_coupon() {
    var swiper = new Swiper(".m_swiper_jweek_coupon", {
        loop: true,
        slidesPerView: 1.35,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 800,
    });
}

function m_j_popUp23() {
    var swiper = new Swiper(".m_j_popUp23", {
        spaceBetween: 20,
        loop: true,
        slidesPerView: 1.3,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 300,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

// function blackFriday() {
//   var swiper = new Swiper(".blackFriday", {
//     slidesPerView: "auto",
//     spaceBetween: 10,
//     autoplay: {
//       delay: 2500, // 시간 설정
//       disableOnInteraction: false, // false-스와이프 후 자동 재생
//     },
//     loop: true,
//     loopAdditionalSlides: 1,
//     // breakpoints: {
//     //   "@0.75": {
//     //     slidesPerView: 5,
//     //     spaceBetween: 20,
//     //   },

//     //   "@1.00": {
//     //     slidesPerView: 5,
//     //     spaceBetween: 40,
//     //   },

//     //   "@1.50": {
//     //     slidesPerView: 5,
//     //     spaceBetween: 50,
//     //   },
//     // },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// }
function blackFriday() {
    var swiper = new Swiper(".blackFriday", {
        slidesPerView: "5",
        spaceBetween: 10,
        autoplay: {
            delay: 2500, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function m_blackFriday() {
    var swiper = new Swiper(".m_blackFriday", {
        slidesPerView: "auto",
        spaceBetween: 10,
        autoplay: {
            delay: 2500, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function m_h_popUp23() {
    var swiper = new Swiper(".m_h_popUp23", {
        spaceBetween: 15,
        loop: true,
        slidesPerView: 1.7,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 300,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

function timeDeal01_2403() {
    var swiper = new Swiper(".timeSwiper01", {
        spaceBetween: 10,
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 30,
        loop: true,
        slidesPerView: 4.5,
        loopAdditionalSlides: 1,
        // speed: 400,
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        pagination: {
            el: ".swiper-pagination1",
            type: "fraction",
        },
    });
}
function timeDeal02_2403() {
    var swiper = new Swiper(".timeSwiper02", {
        spaceBetween: 10,
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 30,
        loop: true,
        slidesPerView: 4.5,
        loopAdditionalSlides: 1,
        // speed: 400,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        pagination: {
            el: ".swiper-pagination2",
            type: "fraction",
        },
    });
}

function m_swiper_blossom() {
    var swiper = new Swiper(".blossom_swiper", {
        loop: false,
        autoplay: false,
        spaceBetween: 10,
        slidesPerView: 2.05,
        centeredSlides: false,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 500,
        // slidesOffsetAfter: 100,
        // slidesOffseBefore: 40,
        // observer: true,
        // observeParents: true,
        navigation: {
            nextEl: ".swiper_btn-next",
            prevEl: ".swiper_btn-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });
}

function m_familySale_2024() {
    var swiper = new Swiper(".m_familySale_2024", {
        spaceBetween: 5,
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}
function m_familySale_2024_2() {
    var swiper = new Swiper(".m_familySale_2024_2", {
        spaceBetween: 5,
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

function dragBtn() {
    $("#dragBtn").draggable(
        {
            containment: "#drag_content",
            snap: "#drag_content",
        },
        { axis: "x" }
    );
}

// EVENT motion
$(document).ready(function () {
    motionWrap();
    mainMotion(); // APP PUSH 220623
    // vacanceMotion();  jweek 220707
});

function motionWrap() {
    //motion01(); // 230201 couponpack
    jWeekMotion(); // 240221_jWeek
}

function motion01() {
    var tl = new TimelineMax();
    tl.fromTo(".content", 0.8, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }).fromTo(".plus", 0.5, { opacity: 0 }, { opacity: 1 }).fromTo(".number", 0.2, { opacity: 0 }, { opacity: 1 });

    scrollMotion(tl, ".content");
}
function jWeekMotion() {
    var tl = new TimelineMax();

    tl.fromTo(".coupon01", 1, { opacity: 0, y: 150 }, { opacity: 1, y: 0 });
    scrollMotion01(tl, ".coupon01", -10);

    var tl = new TimelineMax();
    tl.fromTo(".coupon02", 1.2, { opacity: 0, y: 300 }, { opacity: 1, y: 0 });
    scrollMotion02(tl, ".coupon02", -10);

    var tl = new TimelineMax();
    tl.fromTo(".coupon03", 1, { opacity: 0, y: 400 }, { opacity: 1, y: 0 });
    scrollMotion03(tl, ".coupon03", -10);

    var tl = new TimelineMax();
    tl.fromTo(".coupon04", 1.2, { opacity: 0, y: 700 }, { opacity: 1, y: 0 });
    scrollMotion04(tl, ".coupon04", -10);

    var tl = new TimelineMax();
    tl.fromTo(".coupon05", 1, { opacity: 0, y: 800 }, { opacity: 1, y: 0 });
    scrollMotion05(tl, ".coupon05", -10);

    var tl = new TimelineMax();
    tl.fromTo(".coupon06", 1, { opacity: 0, y: 800 }, { opacity: 1, y: 0 });
    scrollMotion06(tl, ".coupon06", -10);
}
function scrollMotion01(tl, obj, off) {
    var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -200 }).setTween(tl).reverse(false).addTo(controller);
}
function scrollMotion02(tl, obj, off) {
    var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -400 }).setTween(tl).reverse(false).addTo(controller);
}
function scrollMotion03(tl, obj, off) {
    var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -600 }).setTween(tl).reverse(false).addTo(controller);
}
function scrollMotion04(tl, obj, off) {
    var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -1000 }).setTween(tl).reverse(false).addTo(controller);
}
function scrollMotion05(tl, obj, off) {
    var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -1400 }).setTween(tl).reverse(false).addTo(controller);
}
function scrollMotion06(tl, obj, off) {
    var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -1000 }).setTween(tl).reverse(false).addTo(controller);
}

var controller = new ScrollMagic.Controller();

function scrollMotion(tl, obj) {
    var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -230 }).setTween(tl).reverse(true).addTo(controller);
}

function mainMotion() {
    var tl = new TimelineMax();
    tl.to(".title_on", 0.8, { visibility: "visible", delay: 1, onComplete: loopMotion }, "start1");
    tl.to(".bell", 0.8, { visibility: "visible", delay: 1.8, onComplete: loopMotion }, "start1");
    tl.to(".heart", 0.8, { visibility: "visible", delay: 2.3, onComplete: loopMotion }, "start1");
    tl.to(".title", 0.8, { visibility: "visible", delay: 1.9, onComplete: loopMotion }, "start1");
}

function loopMotion() {
    var tl = new TimelineMax({ repeat: 2 });
    tl.to(".title_on, .bell, .heart", 0.8, { visibility: "hidden", yoyo: true, repeat: 1 }, 2).repeat(-1);
    tl.to(".heart", 0.5, { visibility: "visible", yoyo: true, repeat: 1 }, 2).repeat(-1);
    tl.to(".bell", 1, { visibility: "visible", yoyo: true, repeat: 1 }, 2).repeat(-1);
    tl.to(".title_on", 1.3, { visibility: "visible", yoyo: true, repeat: 1 }, 2).repeat(-1);
    tl.to(".title_on", 1.6, { visibility: "hidden", yoyo: true, repeat: 1 }, 2).repeat(-1);
    tl.to(".bell", 2, { visibility: "hidden", yoyo: true, repeat: 1 }, 2).repeat(-1);
    tl.to(".heart", 2.2, { visibility: "hidden", yoyo: true, repeat: 1 }, 2).repeat(-1);
}

//웰컴백제이몰 룰렛
var test = 950;
var target = $("#roulette-gift");

$("#start-rotate").on("click", function () {
    target
        .animate(
            {
                now: "+=" + test,
            },
            {
                step: function (now, fx) {
                    $(this).css("transform", "rotate(" + now + "deg)");
                },
                duration: 3000,
            },
            800
        )
        .animate(
            {
                now: "-=30",
            },
            {
                step: function (now, fx) {
                    $(this).css("transform", "rotate(" + now + "deg)");
                },
                duration: 1000,
            },
            2000
        )
        .animate(
            {
                now: "+=10",
            },
            {
                step: function (now, fx) {
                    $(this).css("transform", "rotate(" + now + "deg)");
                },
                duration: 3000,
            },
            2000
        );
});

/* 첫 구매 + vip tab */
$(function () {
    var tabWrap = $(".tabFunction");

    tabWrap.each(function () {
        var tabMenu = $(this).find(".tabmenu li");
        var tabContent = $(this).find(".tabBoxWrap .tabcontent");

        //tabMenu.first().addClass("current"); // Set the first tab as active by default
        //tabContent.first().show(); // Show the content of the first tab by default

        tabMenu.click(function (e) {
            e.preventDefault();
            var currentIndex = $(this).index();

            tabMenu.removeClass("current");
            $(this).addClass("current");

            tabContent.hide();
            tabContent.eq(currentIndex).show();
        });
    });
});

/* tabmenu */
$(function () {
    var tabContWrap = $(".tabContWrap");

    tabContWrap.each(function () {
        var tabMenu = $(this).find(".tabmenuList li");
        var tabcnt = $(this).find(".tabBoxWrap .tabcnt");

        tabMenu.click(function (e) {
            e.preventDefault();
            var currentIndex = $(this).index();
            var currentTabContent = tabcnt.eq(currentIndex);

            tabMenu.removeClass("active");
            $(this).addClass("active");

            tabcnt.hide();
            tabcnt.eq(currentIndex).show();
        });
    });
});

function DDayCountTimer() {
    var dday = new Date("Sep 1, 2024, 0:00:00").getTime();

    setInterval(function () {
        var today = new Date().getTime();
        var gap = dday - today;

        if (gap > 0) {
            // var day = Math.floor(gap / (1000 * 60 * 60 * 24));
            var hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
            var sec = Math.floor((gap % (1000 * 60)) / 1000);
        } else {
            // var day = 0;
            var hour = 0;
            var min = 0;
            var sec = 0;
        }

        // document.getElementById("countD").innerHTML = day.toString().padStart(2, "0");
        document.getElementById("countH").innerHTML = hour.toString().padStart(2, "0");
        document.getElementById("countM").innerHTML = min.toString().padStart(2, "0");
        document.getElementById("countS").innerHTML = sec.toString().padStart(2, "0");
    }, 1000);
}
function m_couponSwiper() {
    var swiper = new Swiper(".m_couponSwiper", {
        loop: true,
        autoplay: true,
        slidesPerView: 1.75,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 500,
        navigation: false,
    });
}

function event_mainSwiper() {
    var swiper = new Swiper(".event_mainSwiper", {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 500,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".swiper_btn-next",
            prevEl: ".swiper_btn-prev",
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "fraction",
        // },
    });
}

function timeDeal_bag() {
    var swiper = new Swiper(".timeDeal_bag", {
        spaceBetween: 17,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 3,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function m_timeDeal_bag() {
    var swiper = new Swiper(".m_timeDeal_bag", {
        spaceBetween: 8,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 2,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
function timeDeal_Jew() {
    var swiper = new Swiper(".timeDeal_Jew", {
        spaceBetween: 17,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 4,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function m_timeDeal_Jew() {
    var swiper = new Swiper(".m_timeDeal_Jew", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 2,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function pre_summer2024() {
    var swiper = new Swiper(".pre_summer2024", {
        slidesOffsetBefore: 35,
        spaceBetween: 13,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 4.4,
        centeredSlides: false,
    });
}

function m_pre_summer2024() {
    var swiper = new Swiper(".m_pre_summer2024", {
        slidesOffsetBefore: 20,
        spaceBetween: 8,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 2.4,
        centeredSlides: false,
    });
}

function ballo_swiper() {
    var swiper = new Swiper(".ballo_swiper", {
        slidesOffsetBefore: 50,
        slidesOffsetAfter: 50,
        spaceBetween: 27,
        slidesPerView: 2.3,
        centeredSlides: false,
        loop: false,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function m_layerPop_swiper() {
    var swiper = new Swiper(".m_layerPop_swiper", {
        spaceBetween: 20,
        loop: false,
        loopAdditionalSlides: 1,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 1,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function m_luckySeven() {
    var swiper = new Swiper(".m_luckySeven", {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        slidesPerView: 1,
        centeredSlides: false,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function luckySeven() {
    var swiper = new Swiper(".luckySeven", {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        slidesPerView: 2,
        loopAdditionalSlides: 1,
        centeredSlides: false,
        spaceBetween: -25,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function event_applySwiper() {
    var swiper = new Swiper(".event_apply-siwper", {
        loop: true,
        autoplay: true,
        slidesPerView: 1.9,
        spaceBetween: 7,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 500,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".swiper_btn-next",
            prevEl: ".swiper_btn-prev",
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "fraction",
        // },
    });
}

function swiper_silverWeek() {
    const swiper = new Swiper(".swiper_silverWeek", {
        loop: false,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        autoplay: true,
        speed: 2000,
        slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 8,
        breakpoints: {
            960: {
                spaceBetween: 20,
                slidesPerView: 1.6,
                centeredSlides: false,
            },
        },
    });
}

function m_timeDeal_bag_08() {
    var swiper = new Swiper(".m_timeDeal_bag_08", {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 1.8,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
function timeDeal_header_swiper() {
    var swiper = new Swiper(".timeDeal_header_swiper", {
        slidesPerView: 1,
        effect: "fade",
        mousewheelControl: false,
        draggable: false,
        slideToClickedSlide: false,
        simulateTouch: false,
        allowTouchMove: false,
        loop: true,
        speed: 100, //다음이미지로 변경되는 속도 . 1000 = 1초
        autoplay: {
            delay: 700, //다음이미지로 넘어가기 전 대기시간. 1000 = 1초
        },
    });
}

function m_summer_swiper() {
    var swiper = new Swiper(".m_summer_swiper", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        autoplay: true,
        slidesPerView: 1,
        centeredSlides: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function jReviewer_2024() {
    var swiper = new Swiper(".jReviewer_2024", {
        slidesPerView: 1,
        mousewheelControl: false,
        draggable: false,
        slideToClickedSlide: false,
        simulateTouch: false,
        allowTouchMove: false,
        loop: false,
        autoplay: {
            delay: 3000, //다음이미지로 넘어가기 전 대기시간. 1000 = 1초
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
}
function timeDeal_swiper() {
    const swiper = new Swiper(".timeDeal_swiper", {
        spaceBetween: 10,
        loop: true,
        slidesPerView: 3.3,
        // centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
function m_timeDeal_swiper() {
    const swiper = new Swiper(".m_timeDeal_swiper", {
        spaceBetween: 20,
        loop: true,
        slidesPerView: 1.6,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function only_timer() {
    var countDownDate = new Date("2024-04-26").getTime() + 1000 * 60 * 60 * 15;
    var x = setInterval(function () {
        var now = new Date().getTime();
        distance = countDownDate - now;
        if (distance > 0) {
            var h = Math.floor(distance / (1000 * 60 * 60));
            var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var s = Math.floor((distance % (1000 * 60)) / 1000);
            $("#timerH").text(h);
            $("#timerM").text(m);
            $("#timerS").text(s);
        } else {
            $("#timerH").text(0);
            $("#timerM").text(0);
            $("#timerS").text(0);
            clearTimeout(x);
        }
    });
}

function timeDeal_2409() {
    var swiper = new Swiper(".timeDeal_2409", {
        spaceBetween: 37,
        loop: true,
        slidesPerView: 3,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });
}

function m_timeDeal_2409() {
    var swiper = new Swiper(".m_timeDeal_2409", {
        spaceBetween: 20,
        loop: true,
        slidesPerView: 1.6,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        autoplay: {
            delay: 4000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
    });
}

function autumn_jWeek2024_01() {
    var swiper = new Swiper(".autumn_jWeek2024_01", {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 4,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        pagination: {
            el: ".swiper-pagination1",
        },
    });
}

function autumn_jWeek2024_02() {
    var swiper = new Swiper(".autumn_jWeek2024_02", {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 4,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        pagination: {
            el: ".swiper-pagination2",
        },
    });
}

function m_autumn_jWeek2024_01() {
    var swiper = new Swiper(".m_autumn_jWeek2024_01", {
        slidesOffsetBefore: 15,
        slidesOffsetAfter: 15,
        spaceBetween: 6,
        loop: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 2.5,
        centeredSlides: false,
        pagination: {
            el: ".swiper-pagination1",
        },
    });
}

function m_autumn_jWeek2024_02() {
    var swiper = new Swiper(".m_autumn_jWeek2024_02", {
        slidesOffsetBefore: 15,
        slidesOffsetAfter: 15,
        spaceBetween: 6,
        loop: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 2.5,
        centeredSlides: false,
        pagination: {
            el: ".swiper-pagination2",
        },
    });
}

function number_counting() {
    var swiper = new Swiper(".number_counting", {
        loop: true,
        speed: 1,
        autoplay: {
            delay: 100,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
    });
}

function famSale2024_01() {
    var swiper = new Swiper(".famSale2024_01", {
        spaceBetween: 10,
        loop: true,
        speed: 200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 4,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        pagination: {
            el: ".swiper-pagination1",
        },
    });
}

function famSale2024_02() {
    var swiper = new Swiper(".famSale2024_02", {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 4,
        speed: 200,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        pagination: {
            el: ".swiper-pagination2",
        },
    });
}

function m_famSale2024_01() {
    var swiper = new Swiper(".m_famSale2024_01", {
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        spaceBetween: 10,
        loop: false,
        speed: 200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 2.5,
        centeredSlides: false,
        pagination: {
            el: ".swiper-pagination1",
        },
    });
}

function m_famSale2024_02() {
    var swiper = new Swiper(".m_famSale2024_02", {
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        spaceBetween: 10,
        loop: false,
        speed: 200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 2.5,
        centeredSlides: false,
        pagination: {
            el: ".swiper-pagination2",
        },
    });
}

function famSale_raffle() {
    var swiper = new Swiper(".famSale_raffle", {
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        spaceBetween: 8,
        loop: false,
        speed: 200,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 1.32,
        centeredSlides: false,
        pagination: {
            el: ".swiper-pagination3",
        },
    });
}

function swiper__holiday1() {
    const swiper = new Swiper(".swiper__holiday1", {
        spaceBetween: 12,
        // speed: 8000,
        slidesPerView: 4,
        // centeredSlides: true,
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: {
            delay: 3000,
            // disableOnInteraction: false,
        },
        pagination: {
            // 페이징 설정
            el: ".swiper-pagination1",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper_btn-next1",
            prevEl: ".swiper_btn-prev1",
        },
    });
}

function swiper__holiday2() {
    const swiper = new Swiper(".swiper__holiday2", {
        spaceBetween: 12,
        // speed: 8000,
        slidesPerView: 4,
        // centeredSlides: true,
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: {
            delay: 3000,
            // disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper_btn-next2",
            prevEl: ".swiper_btn-prev2",
        },
    });
}

function m_swiper__holiday1() {
    const swiper = new Swiper(".m_swiper__holiday1", {
        spaceBetween: 20,
        slidesPerView: 2.5,
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: {
            delay: 3000,
            // disableOnInteraction: false,
        },
        pagination: {
            // 페이징 설정
            el: ".swiper-pagination1",
            clickable: true,
        },
    });
}

function m_swiper__holiday2() {
    const swiper = new Swiper(".m_swiper__holiday2", {
        spaceBetween: 20,
        slidesPerView: 2.5,
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: {
            delay: 3000,
            // disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
        },
    });
}

function timeDeal_h1() {
    const swiper = new Swiper(".timeDeal_h1", {
        spaceBetween: 40,
        loop: true,
        slidesPerView: 3,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".swiper-button--next1",
            prevEl: ".swiper-button--prev1",
        },
        autoplay: false,
        pagination: {
            el: ".swiper-pagination1",
            type: "fraction",
        },
    });
}
function timeDeal_h2() {
    const swiper = new Swiper(".timeDeal_h2", {
        spaceBetween: 40,
        loop: true,
        slidesPerView: 3,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".swiper-button--next2",
            prevEl: ".swiper-button--prev2",
        },
        autoplay: false,
        pagination: {
            el: ".swiper-pagination2",
            type: "fraction",
        },
    });
}

function m_timeDeal_h1() {
    const swiper = new Swiper(".m_timeDeal_h1", {
        spaceBetween: 40,
        loop: true,
        slidesPerView: 1.65,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".swiper-button--next1",
            prevEl: ".swiper-button--prev1",
        },
        pagination: {
            el: ".swiper-pagination1",
            type: "fraction",
        },
        autoplay: {
            delay: 4000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        autoplay: false,
    });
}
function m_timeDeal_h2() {
    const swiper = new Swiper(".m_timeDeal_h2", {
        spaceBetween: 40,
        loop: true,
        slidesPerView: 1.65,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".swiper-button--next2",
            prevEl: ".swiper-button--prev2",
        },
        pagination: {
            el: ".swiper-pagination2",
            type: "fraction",
        },
        autoplay: {
            delay: 4000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        autoplay: false,
    });
}
// gsap.registerPlugin(ScrollTrigger);

const itemsSec2 = [".couponWrap_effect .coupon01", ".couponWrap_effect .coupon02", ".couponWrap_effect .coupon03", ".couponWrap_effect .coupon04", ".couponWrap_effect .coupon05"];

// Timeline을 사용하여 순차적으로 나타나는 애니메이션 구성
const timeline = gsap.timeline({
    paused: true, // 처음에는 애니메이션이 멈춘 상태
});

// 각 쿠폰이 순차적으로 나타나도록 설정
timeline
    .fromTo(".couponWrap_effect .coupon01", { opacity: 0 }, { opacity: 1, duration: 0.2 })
    .fromTo(".couponWrap_effect .coupon02", { opacity: 0 }, { opacity: 1, duration: 0.2 }, "+=0.2")
    .fromTo(".couponWrap_effect .coupon03", { opacity: 0 }, { opacity: 1, duration: 0.2 }, "+=0.2")
    .fromTo(".couponWrap_effect .coupon04", { opacity: 0 }, { opacity: 1, duration: 0.2 }, "+=0.2")
    .fromTo(".couponWrap_effect .coupon05", { opacity: 0 }, { opacity: 1, duration: 0.2 }, "+=0.2");

// ScrollTrigger를 사용하여 couponWrap_effect에 도달하면 timeline을 실행
ScrollTrigger.create({
    trigger: ".couponWrap_effect",
    start: "top 80%", // couponWrap_effect가 화면의 80% 지점에 도달하면 트리거
    onEnter: () => {
        gsap.delayedCall(0.3, () => {
            timeline.play(); // 트리거에 도달한 후 0.3초 뒤에 타임라인 재생
        });
    },
    scrub: 1, // 한 번만 실행 (스크롤이 다시 일어나도 재실행되지 않음)
});
