jQuery(document).ready(function($) {

    
    new WOW().init();

     // Init Bootstrap Scrollspy
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    

    $(function(){
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            loop: true,
            typeSpeed: 100,
            startDelay: 500,
            backSpeed: 0,
            backDelay: 3000,
        });
    });


    // Collapse responsive navbar on navbar item click.
    $('.navbar-inverse li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Page scrolling animation.
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });


});
