$(function () {
    //active class in navbar==
    $('.navbar .nav-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    
    $('.color-icon i').on('click',function(){
        $('.color-picker').toggleClass('colorpos');
    });

    
    //banner slider;

    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: '2500',
    });

    //about-video popup;
    $('.venobox').venobox({
        overlayColor: 'rgba(226, 62, 56, 0.5)',
        spinner: 'wandering-cubes',
        spinColor: '#e23e38',
        closeBackground: 'red',
    });

    //testimonials slider;
    $('.feedback-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: '1500',
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ],
    });

    //funfact counter up ;
    $('.counter').counterUp({
        time: 1500,
    });

    //brand slider;
    $('.brand-slider').slick({
        slidesToShow: 5,
        prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next next-arrow fas fas fa-chevron-right"></i>',
        centerMode: true,
        centerPadding: '',
        autoplay: true,
        autoplaySpeed: '1500',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
        ],
    });

    //gallery zoom in;
    $('.venobox').venobox();

    //Dark Mode===;
    var content = document.getElementsByTagName('body')[0];
    var darkMode = document.getElementById('dark-change');
    darkMode.addEventListener('click', function () {
        darkMode.classList.toggle('active');
        content.classList.toggle('night');
    });
    
    
    
    //back to top button==;
    var backToTop = $('.back_to_top');
    
    //window scroll;
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 500){
            backToTop.fadeIn();
        }else{
            backToTop.fadeOut();
        }
        
        if(scrolling > 200){
            $('.navbar').addClass('fixed-nav');
        }else{
            $('.navbar').removeClass('fixed-nav');
        }
    });
    
    //back to top click--
    backToTop.click(function(){
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    $('.navbar .navbar-nav .nav-item a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
    
});




















