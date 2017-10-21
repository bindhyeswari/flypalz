(function($) {
    "use strict";

    //when dom is ready
    $(document).ready(function() {

        // on scroll Navbar Fixed and back to top show
        $(window).on('scroll', function() {
            if($(window).width() > 600){
                if ($(window).scrollTop() > 600) {
                    $('#header').addClass('navbar-fixed-top');
                    $('#back-to-top').addClass('reveal');
                } else {
                    $('#header').removeClass('navbar-fixed-top');
                    $('#back-to-top').removeClass('reveal');
                }
            }
        });


        // Start Back to Top
        $('#back-to-top').on('click', function() {
            $("html, body").animate({scrollTop: 0}, 1000);
            return false;
        });

        // revolution slider start
        // revolution slider end


        // Start Portfolio Section
        $(window).on('load', function() {

            //Portfolio Start
            var $container = $('.portfolio-box');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.filter a').on('click', function() {
                $('.filter .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.portfolio-box').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
            //Portfolio End
        });


        // Start Animated Number
        $('.animated-counter').appear(function() {
            $('.animated-number').countTo({
                speed: 4000,
                refreshInterval: 60,
                formatter: function(value, options) {
                    return value.toFixed(options.decimals);
                }
            });
        });


        //Progress Bar
        $('.progress-bar').each(function(){
            var width = $(this).data('percentage');
            $(this).css({'transition': 'width 3s'});
            $(this).appear(function () {
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50,
                });
            });
        });

        // Start Easy Pie Chart
        $('.progress-chart-feature').appear(function() {
            $('.chart').easyPieChart({
                animate: 2000,
                barColor: '#ed1c24',
                trackColor: '#f6f6f6',
                scaleColor: '',
                lineCap: 'round',
                lineWidth: 10,
                size: 130
            });
        });

        //Owl Carousel-- Testimonial
        $(".testimonial-carousel").owlCarousel({
            pagination: false,
            navigation: false,
            items : 1,
            itemsDesktop : [1000,1],
            itemsDesktopSmall : [900,1],
            itemsTablet: [767,1],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });

        //Owl Carousel-- Latest News
        $(".news-carousel").owlCarousel({
            pagination: true,
            navigation: false,
            items : 3,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });

        //Tooltip
        $('[data-toggle="tooltip"]').tooltip()

        //video background
        try {
            jQuery(".player").mb_YTPlayer();
        } catch (err) {}

        //WOW js
        new WOW().init();



        // Styles Switcher
        $(document).ready(function(){
            $('.open-switcher').click(function(){
                if($(this).hasClass('show-switcher')) {
                    $('.switcher-box').css({'left': 0});
                    $('.open-switcher').removeClass('show-switcher');
                    $('.open-switcher').addClass('hide-switcher');
                }else if(jQuery(this).hasClass('hide-switcher')) {
                    $('.switcher-box').css({'left': '-212px'});
                    $('.open-switcher').removeClass('hide-switcher');
                    $('.open-switcher').addClass('show-switcher');
                }
            });
        });
        
        
        //Layout Switcher
        $(".layout-style").change(function(){
            if( $(this).val() == 1){
                $("#container").removeClass("boxed-page"),
                $(window).resize();
            } else{
                $("#container").addClass("boxed-page"),
                $(window).resize();
            }
        });
        
        //Background Switcher
        $('.switcher-box .bg-list li a').click(function() {
            var current = $('.switcher-box select[id=layout-style]').find('option:selected').val();
            if(current == '2') {
                var bg = $(this).css("backgroundImage");
                $("body").css("backgroundImage",bg);
            } else {
                alert('Please select boxed layout');
            }
        });


    });
    //dom ready end

    

    

    

})(jQuery);