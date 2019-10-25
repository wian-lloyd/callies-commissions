$(document).ready(function () {
    /*-------------------- COLOUR THEME --------------------*/
        // light
        let mainLight = '#FFFFFF';
        let offsetLight = '#f4f4f4;';
        let fontLight = '#FFFFFF';
        let contrastLight = '#555';

        // dark
        let mainDark = '#333';
        let offsetDark = '#373737';
        let fontDark = '#555';
        let contrastDark = '#FFFFFF';
    /*------------------------------------------------------*/

    /*-------------------- SETUP --------------------*/
        /* init variables */
        let root = document.documentElement;

        /* loader */
        $('#content').removeClass('hidden');
        $('.loader').addClass('hidden');

        /* parralax images */
        $('.header-img-parallax').parallax({imageSrc: 'resources/img/source.gif'});
        $('.reviews-img-parallax').parallax({imageSrc: 'resources/img/original.gif'});

        /* colour theme */
        let darkMode = localStorage.getItem('darkMode');
        if (localStorage.getItem('darkMode') === null) {
            localStorage.setItem('darkMode', 'false'); // if no mode is set, set to light
        }
        if ( darkMode === 'false' ) {
            root.style.setProperty('--js-main', mainLight);
            root.style.setProperty('--js-main-offset', offsetLight);
            root.style.setProperty('--js-font', fontLight);
            root.style.setProperty('--js-font-contrast', contrastLight);
    
            $(".js--switch-lights input[type='checkbox']").prop('checked', false);
        }else {
            root.style.setProperty('--js-main', mainDark);
            root.style.setProperty('--js-main-offset', offsetDark);
            root.style.setProperty('--js-font', fontDark);
            root.style.setProperty('--js-font-contrast', contrastDark);
    
            $(".js--switch-lights input[type='checkbox']").prop('checked', true);
        }
    /*-----------------------------------------------*/
    
    /*-------------------- FUNCTIONS --------------------*/
        function darkModeSwitch() {
            if ( darkMode === 'false' ) { // if dark mode is disabled, enable it
                root.style.setProperty('--js-main', mainDark);
                root.style.setProperty('--js-main-offset', offsetDark);
                root.style.setProperty('--js-font', fontDark);
                root.style.setProperty('--js-font-contrast', contrastDark);

                localStorage.setItem('darkMode', 'true');
                darkMode = localStorage.getItem('darkMode');

            }else { // if dark mode is enabled, disable it
                root.style.setProperty('--js-main', mainLight);
                root.style.setProperty('--js-main-offset', offsetLight);
                root.style.setProperty('--js-font', fontLight);
                root.style.setProperty('--js-font-contrast', contrastLight);

                localStorage.setItem('darkMode', 'false');
                darkMode = localStorage.getItem('darkMode');

            };
        };
    /*---------------------------------------------------*/

    /*--------------------- TRIGGERS ---------------------*/
    $(".js--switch-lights").mouseup(darkModeSwitch); // toggle dark mode

    /*----------------------------------------------------*/

    $(window).on("load", function() {
        /* loader */
        // alert("Please note that this website is not yet finalized.")
        // $('#content').removeClass('hidden');
        // $('.loader').addClass('hidden');
    });

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
