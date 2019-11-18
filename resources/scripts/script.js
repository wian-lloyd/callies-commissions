$(document).ready(function () {

    showSlides(slideIndex);
    
    // Next/previous controls
    $('.--prev').click(() => {
        showSlides(slideIndex += -1)
    });

    $('.--next').click(() => {
        showSlides(slideIndex += 1)
    });

    $('.showcase_photo').click(() => {
        $('.modal').addClass('animation--modal-in');
        $('#lightboxModal').removeClass('hidden');

        setTimeout(() => {
            $('.modal').removeClass('animation--modal-in');
        }, 700);

        $('#overlay').removeClass('hidden');
        $('#overlay').addClass('animation--overlay-fade-in');
        setTimeout(() => {
            $('#overlay').removeClass('animation--overlay-fade-in');
        }, 200);

        $('body').addClass('scroll-lock');
    });

    $('#js--lightbox-modal-close').click(() => {

        $('.modal').addClass('animation--modal-out');
        setTimeout(() => {
            $('.modal').removeClass('animation--modal-out');
            $('#lightboxModal').addClass('hidden');
        }, 600);

        $('#overlay').addClass('animation--overlay-fade-out');
        setTimeout(() => {
            $('#overlay').removeClass('animation--overlay-fade-out');
            $('#overlay').addClass('hidden');
        }, 200);

        $('body').removeClass('scroll-lock');

        $('html, body').animate({
            scrollTop: ($('#showcase').offset().top - 60)
        },500);

    });

    /*-------------------- COLOUR THEME --------------------*/
        // light
        let mainLight = '#FFFFFF';
        let offsetLight = '#f4f4f4';
        let fontLight = '#FFFFFF';
        let contrastLight = '#555';

        // dark
        let mainDark = '#333';
        let offsetDark = '#373737';
        let fontDark = '#555';
        let contrastDark = '#FFFFFF';
    /*------------------------------------------------------*/

    /*-------------------- SETUP --------------------*/
        $(window).on("load", function() {

            /* feedback modal */
            let feedback = localStorage.getItem('feedbackClosed');
            if (localStorage.getItem('feedbackClosed') === null) {
                $('#overlay').removeClass('hidden');
                $('#overlay').addClass('animation--overlay-fade-in');
    
                $('#feedbackModal').removeClass('hidden');
                $('body').addClass('scroll-lock');
    
                $('.modal').addClass('animation--modal-in');
                setTimeout(() => {
                    $('.modal').removeClass('animation--modal-in');
                }, 600);
            }            
        });

        /* init variables */
        let root = document.documentElement;

        /* loader */
        $('.loader').addClass('hidden');
        $('#content').removeClass('hidden');

        /* parralax images */
        $('.header-img-parallax').parallax({imageSrc: 'resources/img/backgrounds/hero-bg.jpg'});
        $('.reviews-img-parallax').parallax({imageSrc: 'resources/img/backgrounds/reviews-bg.jpg'});

        /* colour theme */
        let darkMode = localStorage.getItem('darkMode');
        if (darkMode === null) {
            localStorage.setItem('darkMode', 'false'); // if no mode is set, set to light
            darkMode = localStorage.getItem('darkMode');
        }

        if ( darkMode === 'false' ) {
            root.style.setProperty('--js-main', mainLight);
            root.style.setProperty('--js-main-offset', offsetLight);
            root.style.setProperty('--js-font', fontLight);
            root.style.setProperty('--js-font-contrast', contrastLight);

            $('.cross').css("backgroundImage", "url(./resources/img/sprites/cross-dark.png)");
            $('.light').css("backgroundImage", "url(./resources/img/sprites/light-dark.png)");
            $('.pop').css("backgroundImage", "url(./resources/img/sprites/pop-dark.png)");
            $('.sparkle').css("backgroundImage", "url(./resources/img/sprites/sparkle-dark.png)");
    
            $(".js--switch-lights input[type='checkbox']").prop('checked', false);
            $(".js--switch-lights").attr('data-tooltip', 'Enable dark mode.');
        }else {
            root.style.setProperty('--js-main', mainDark);
            root.style.setProperty('--js-main-offset', offsetDark);
            root.style.setProperty('--js-font', fontDark);
            root.style.setProperty('--js-font-contrast', contrastDark);

            $('.cross').css("backgroundImage", "url(./resources/img/sprites/cross-light.png)");
            $('.light').css("backgroundImage", "url(./resources/img/sprites/light-light.png)");
            $('.pop').css("backgroundImage", "url(./resources/img/sprites/pop-light.png)");
            $('.sparkle').css("backgroundImage", "url(./resources/img/sprites/sparkle-light.png)");
    
            $(".js--switch-lights input[type='checkbox']").prop('checked', true);
            $(".js--switch-lights").attr('data-tooltip', 'Disable dark mode.');
        }
    /*-----------------------------------------------*/
    
    /*-------------------- FUNCTIONS --------------------*/
        function darkModeSwitch() {
            if ( darkMode === 'false' ) { // if dark mode is disabled, enable it
                root.style.setProperty('--js-main', mainDark);
                root.style.setProperty('--js-main-offset', offsetDark);
                root.style.setProperty('--js-font', fontDark);
                root.style.setProperty('--js-font-contrast', contrastDark);

                $('.cross').css("backgroundImage", "url(./resources/img/sprites/cross-light.png)");
                $('.light').css("backgroundImage", "url(./resources/img/sprites/light-light.png)");
                $('.pop').css("backgroundImage", "url(./resources/img/sprites/pop-light.png)");
                $('.sparkle').css("backgroundImage", "url(./resources/img/sprites/sparkle-light.png)");
                $(".js--switch-lights").attr('data-tooltip', 'Disable dark mode.');

                localStorage.setItem('darkMode', 'true');
                darkMode = localStorage.getItem('darkMode');

            }else { // if dark mode is enabled, disable it
                root.style.setProperty('--js-main', mainLight);
                root.style.setProperty('--js-main-offset', offsetLight);
                root.style.setProperty('--js-font', fontLight);
                root.style.setProperty('--js-font-contrast', contrastLight);

                $('.cross').css("backgroundImage", "url(./resources/img/sprites/cross-dark.png)");
                $('.light').css("backgroundImage", "url(./resources/img/sprites/light-dark.png)");
                $('.pop').css("backgroundImage", "url(./resources/img/sprites/pop-dark.png)");
                $('.sparkle').css("backgroundImage", "url(./resources/img/sprites/sparkle-dark.png)");
                $(".js--switch-lights").attr('data-tooltip', 'Enable dark mode.');

                localStorage.setItem('darkMode', 'false');
                darkMode = localStorage.getItem('darkMode');

            };
        };
    /*---------------------------------------------------*/

    /*--------------------- TRIGGERS ---------------------*/
    $(".js--switch-lights").mouseup(darkModeSwitch); // toggle dark mode

    $('#js--feedback-modal-close').click(() => {

        $('.modal').addClass('animation--modal-out');
        setTimeout(() => {
            $('.modal').removeClass('animation--modal-out');
            $('#feedbackModal').addClass('hidden');
        }, 600);

        $('#overlay').addClass('animation--overlay-fade-out');
        setTimeout(() => {
            $('#overlay').addClass('hidden');
        }, 200);

        $('body').removeClass('scroll-lock');
        localStorage.setItem('feedbackClosed', 'true'); // set so that modal doesn't show again
    });

    /*----------------------------------------------------*/

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

    var slideIndex = 1;

    // Thumbnail image controls
    function CurrentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");


        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //   dots[i].className = dots[i].className.replace(" active", "");
        // }

        slides[slideIndex-1].style.display = "block";
        // dots[slideIndex-1].className += " active";
        captionText.innerHTML = slides[slideIndex-1].dataset.description;
    }
