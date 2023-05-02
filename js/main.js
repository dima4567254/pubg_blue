$(function name(params) {

    $('.product-tabs__link').on('click', function (e) {
        e.preventDefault();

        $('.product-tabs__link').removeClass('product-tabs__link--active');
        $(this).addClass('product-tabs__link--active');

        $('.product-tabs__text').removeClass('product-tabs__text--active');
        $($(this).attr('href')).addClass('product-tabs__text--active'); /*убирает добовляет класс*/
        // табы
        // product-tabs__text--active


    });

    // $('.product-tabs__link').on('click', function () {
    //     $('.product-tabs__link').toggleClass('product-tabs__link--active');
    //     $('.product-tabs__text').toggleClass('product-tabs__text--active');
    //     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
    // });

    // $('.product-tabs__link').on('click', function (e) {
    //     e.preventDefault();
    //     $('.product-tabs__link').removeClass('product-tabs__link--active');
    //     $(this).addClass('product-tabs__link--active');

    //     $('.product-tabs__text').removeClass('product-tabs__text--active');
    //     $($(this).attr('href')).addClass('product-tabs__text--active'); /*убирает добовляет класс*/
    //     // табы
    //     // product-tabs__text--active
    // });

    setTimeout(function () {
        $('select,filter-selects__sort').styler();
    }, 100)
    // document.querySelector('.video').style.display = 'none';

    // $(function name(params) {
    const swiper = new Swiper('.swiper', {
        // slidesPerView: 1,
        // loop: true,
        // loopedslides: 1,
        // slidesPerView: 2,
        // grid: {
        //     rows: 2,
        // },
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
    });

    const swiperAbout = new Swiper('.swiperAbout', {
        // slidesPerView: 1,
        // loop: true,
        // loopedslides: 1,
        // slidesPerView: 2,
        // grid: {
        //     rows: 2,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    /*	$(".menu a").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        });
 
        /*для закрыть меню*/
    /*
              $('.menu__btn').on('click', function () {
                  $('.menu__items').toggleClass('menu__items--active');
              });
              $('.menu__btn').on('click', function () {
                  $('.menu__btn').toggleClass('active');
              });
           
            $('.home__slider').slick({
                dots: true,
                arrows: false,
                 responsive: [
 
 
                     {
                         breakpoint: 1150,
                         settings: {
                             slidesToShow: 4,
                         }
                     },
                     {
                         breakpoint: 1000,
                         settings: {
                             slidesToShow: 3,
                         }
                     },
                     {
                         breakpoint: 620,
                         settings: {
                             slidesToShow: 2,
                             slidesToScroll: 2,
                         }
                     },
                 ]
            });
           
           
           */


});