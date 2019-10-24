$(document).ready(function () {
    let root = document.documentElement;

    $(window).on("load", function() {
        /* loader */
        // alert("Please note that this website is not yet finalized.")
        // $('#content').removeClass('hidden');
        // $('.loader').addClass('hidden');
    });

    /* loader */
    $('#content').removeClass('hidden');
    $('.loader').addClass('hidden');
    
    if (localStorage.getItem('lights') === undefined) {
        localStorage.setItem('lights', 'true');
    }

    if ( localStorage.getItem('lights') === 'false' ) {
        root.style.setProperty('--js-main', '#333');
        root.style.setProperty('--js-main-offset', '#373737');
        root.style.setProperty('--js-font', '#555');
        root.style.setProperty('--js-font-contrast', '#FFFFFF');
        localStorage.setItem('lights', 'false');

        $(".js--switch-lights input[type='checkbox']").prop('checked', true);
    }

    $(".js--switch-lights").mouseup(function() {
        let lights = localStorage.getItem('lights');

        if ( lights === 'true' ) {
            root.style.setProperty('--js-main', '#333');
            root.style.setProperty('--js-main-offset', '#373737');
            root.style.setProperty('--js-font', '#555');
            root.style.setProperty('--js-font-contrast', '#FFFFFF');
            localStorage.setItem('lights', 'false');
        }else {
            root.style.setProperty('--js-main', '#FFFFFF');
            root.style.setProperty('--js-main-offset', '#f4f4f4');
            root.style.setProperty('--js-font', '#FFFFFF');
            root.style.setProperty('--js-font-contrast', '#555');
            localStorage.setItem('lights', 'true');
        }
    });

    /* parralax images */
    $('.header-img-parallax').parallax({imageSrc: 'resources/img/source.gif'});
    $('.reviews-img-parallax').parallax({imageSrc: 'resources/img/original.gif'});

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

    $(".back-to-top").click(function(){
        $('html, body').animate({
            scrollTop: ($('#content').offset().top)
        },500);
    }); 

    /* waypoint triggers */
    $('#js--page-content').waypoint(function(direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky-nav');
            $('nav').addClass('animation--slide-in');
            $('.back-to-top').removeClass('hidden');
            $('.back-to-top').addClass('animation--slide-in--right');

            setTimeout(() => {
                $('nav').removeClass('animation--slide-in');
            }, 100); // remove the animation class so it doesn't keep repeating

            setTimeout(() => {
                $('.back-to-top').removeClass('animation--slide-in--right');
            }, 280); // remove the animation class so it doesn't keep repeating

        }else {
            $('nav').addClass('animation--slide-out');
            $('.back-to-top').addClass('animation--slide-out--right');

            setTimeout(() => {
                $('nav').removeClass('animation--slide-out');
                $('nav').removeClass('sticky-nav');
            }, 90); // remove the animation class so it doesn't keep repeating
            
            setTimeout(() => {
                $('.back-to-top').removeClass('animation--slide-out--right');
                $('.back-to-top').addClass('hidden');
            }, 280); // remove the animation class so it doesn't keep repeating
        }
    }, {
        offset: '70px'
    })

});