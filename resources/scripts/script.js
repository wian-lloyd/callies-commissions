$(document).ready(function () {
    
    /* loader */
    $('#content').removeClass('hidden');
    $('.loader').addClass('hidden');

    /* dynamic date */
    var date = new Date().getFullYear();

    var str = document.getElementById('date-replace').innerHTML;
    var res = str.replace('DynamicDataYear', date);
    document.getElementById('date-replace').innerHTML = res;

    /* scroll */
    $(".js--about-button").click(function(){
        $('html, body').animate({
            scrollTop: ($('#about').offset().top - 60)
        },500);
    });

    $(".js--showcase-button").click(function(){
        $('html, body').animate({
            scrollTop: ($('#showcase').offset().top - 60)
        },500);
    });

    $(".js--reviews-button").click(function(){
        $('html, body').animate({
            scrollTop: ($('#reviews').offset().top - 60)
        },500);
    }); 

    $(".js--tos-button").click(function(){
        $('html, body').animate({
            scrollTop: ($('#terms').offset().top - 60)
        },500);
    }); 

    /* sticky header */
    $('#js--page-content').waypoint(function(direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky-nav');
            $('nav').addClass('animation--slide-in');

            setTimeout(() => {
                $('nav').removeClass('animation--slide-in');
            }, 150);
        }else {
            $('nav').addClass('animation--slide-out');

            setTimeout(() => {
                $('nav').removeClass('animation--slide-out');
                $('nav').removeClass('sticky-nav');
            }, 150);
        }
    }, {
        offset: '70px'
    })

});