document.addEventListener("DOMContentLoaded", function () {
    noticeWrap(); // notice_wrap
    featured__siwperGif1();
    featured__siwperGif2();
    watch_mainSwiper(); // 240613_여성시계기획전
    m_watch_item_swiper();
    black_collection_scroll01(); //231002_black_collection
    black_collection_scroll02();
    poshe();
    swiper_happyStrap();
    m_swiper_happyStrap(); // happy_strap
});

/* TAB SCROLL */
$(window).scroll(function () {
    TabCheck2024();
});

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
    });

    function fix_func_2024() {
        if ($(".jestina-detail__event").hasClass("tabContent2024") == true) {
            var position = $(window).scrollTop();
            var nav = $(".tabV2024");
            var firstSection = $(".jestina-detail__event-wrap");

            // 섹션 요소와 탭의 매핑을 미리 정의
            var sections = [
                { id: "#contentV2024_1", tab: ".tab2024_1 a" },
                { id: "#contentV2024_2", tab: ".tab2024_2 a" },
                { id: "#contentV2024_3", tab: ".tab2024_3 a" },
                { id: "#contentV2024_4", tab: ".tab2024_4 a" },
            ];
            // 섹션들의 위치를 계산
            var sectionPositions = sections
                .map(function (section) {
                    var element = $(section.id);
                    return element.length ? { tab: section.tab, top: element.offset().top } : null;
                })
                .filter(Boolean); // 존재하지 않는 섹션은 필터링

            $(".tabV2024 a").each(function () {
                $(this).removeClass("active");
            });

            // 현재 스크롤 위치에 따라 활성화할 탭을 결정
            var headerHeight = $(".header.fixed").height() || 0;
            var navHeight = nav.height() || 0;
            var offset = headerHeight + navHeight + 35;

            for (var i = sectionPositions.length - 1; i >= 0; i--) {
                if (position > sectionPositions[i].top - offset) {
                    $(sectionPositions[i].tab).addClass("active");
                    break;
                }
            }

            // 네비게이션 고정 처리
            if (firstSection.length && position > firstSection.offset().top - (headerHeight + navHeight)) {
                nav.addClass("fixed");
            } else {
                nav.removeClass("fixed");
            }
        }
        return;
    }
}

// popup
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

function noticeWrap() {
    const noticeWrap = $(".notice-wrap");
    noticeWrap.find(".tle").click(function () {
        const $currentNoticeWrap = $(this).closest(".notice-wrap");
        const $contentWrap = $currentNoticeWrap.find(".content-wrap");

        if ($(this).hasClass("close")) {
            $(this).removeClass("close").addClass("open");
            $contentWrap.slideDown(200);
        } else {
            $(this).removeClass("open").addClass("close");
            $contentWrap.slideUp(200);
        }
        return false;
    });
}
// POPUP close
function fn_layer_close(e) {
    $(e).closest(".layerPop").fadeOut();
    $("body, html").css({ overflow: "auto" });
    // location.reload();
}

function featured__siwperGif1() {
    var swiper = new Swiper(".featured__siwper--gif1", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        // autoplay: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
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
        on: {
            slideChange: function () {
                // 슬라이드가 변경될 때마다 opacity를 수동으로 조정
                var slides = document.querySelectorAll(".swiper-slide");
                slides.forEach((slide) => {
                    slide.style.opacity = 0;
                });
                // 현재 활성화된 슬라이드의 opacity를 1로 설정
                slides[swiper.activeIndex].style.opacity = 1;
            },
        },
    });
}
function featured__siwperGif2() {
    var swiper = new Swiper(".featured__siwper--gif2", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        autoplay: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        speed: 500,
        observer: true,
        observeParents: true,
        on: {
            slideChange: function () {
                // 슬라이드가 변경될 때마다 opacity를 수동으로 조정
                var slides = document.querySelectorAll(".swiper-slide");
                slides.forEach((slide) => {
                    slide.style.opacity = 0;
                });
                // 현재 활성화된 슬라이드의 opacity를 1로 설정
                slides[swiper.activeIndex].style.opacity = 1;
            },
        },
    });
}
function watch_mainSwiper() {
    var bar = document.querySelector(".watch_progressbar__active");
    var speed = 4000;

    window.onload = function () {
        const swiper = new Swiper(".watch_mainSwiper", {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            on: {
                slideChangeTransitionStart: function () {
                    (bar.style.transitionDuration = "0s"), (bar.style.transform = "scaleX(0)");
                },
                slideChangeTransitionEnd: function () {
                    (bar.style.transitionDuration = speed + "ms"), (bar.style.transform = "scaleX(1)");
                },
            },
            effect: "fade",
        });
    };
}
function m_watch_item_swiper() {
    var swiper = new Swiper(".m_watch_item_swiper", {
        spaceBetween: 17,
        slidesPerView: 1,
        centeredSlides: false,
        loop: false,
        loopAdditionalSlides: 1,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        observer: true,
        observeParents: true,
    });
}

/*
 * 아이유 매거진
 */

function black_collection_scroll01() {
    var tl = new TimelineMax();
    tl.fromTo(".tlt01", 0.7, { opacity: 0, x: -300 }, { opacity: 1, x: 0 });

    scrollMotion01(tl, ".tlt01", -50);
}
function scrollMotion01(tl, obj, off) {
    var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -200 });
}

function black_collection_scroll02() {
    var tl = new TimelineMax();
    tl.fromTo(".tlt02", 0.7, { opacity: 0, x: 300 }, { opacity: 1, x: 0 });

    scrollMotion02(tl, ".tlt02", -50);
}
function scrollMotion02(tl, obj, off) {
    var scene = new ScrollMagic.Scene({ triggerElement: obj, offset: -200 });
}

/*
 * poshe
 */

function poshe() {
    $(".first").on("click", function () {
        $("#result_box").css("display", "block");
        $(".select01").css("display", "block");
        $(".select02").css("display", "none");
        $(".select03").css("display", "none");
        $(".select04").css("display", "none");
    });
    $(".second").on("click", function () {
        $("#result_box").css("display", "block");
        $(".select01").css("display", "none");
        $(".select02").css("display", "block");
        $(".select03").css("display", "none");
        $(".select04").css("display", "none");
    });
    $(".third").on("click", function () {
        $("#result_box").css("display", "block");
        $(".select01").css("display", "none");
        $(".select02").css("display", "none");
        $(".select03").css("display", "block");
        $(".select04").css("display", "none");
    });
    $(".fourth").on("click", function () {
        $("#result_box").css("display", "block");
        $(".select01").css("display", "none");
        $(".select02").css("display", "none");
        $(".select03").css("display", "none");
        $(".select04").css("display", "block");
    });
}

/** happyStrap */

function swiper_happyStrap() {
    const swiper = new Swiper(".swiper_container.swiper_happyStrap", {
        spaceBetween: 20,
        loop: true,
        observer: true,
        loopAdditionalSlides: 1,
        loopedSlides: 1,
        centeredSlides: true,
        slidesPerView: 3.5,
        slidesPerGroup: 1,
        freeMode: false,
        initialSlide: 0,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1500,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function m_swiper_happyStrap() {
    var swiper = new Swiper(".m_swiper_happyStrap", {
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        speed: 1000,
        slidesPerView: 1,
        centeredSlides: true,
        loopAdditionalSlides: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
