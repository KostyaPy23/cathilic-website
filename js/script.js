(function($) {
	'use strict';
// Add icon, when menu-item has submenu
    $(".primary-menu .nav-item").each(function () {
        if ($(this).children().hasClass("menu-sub")) {
            $(this).addClass("has-sub");
        }
    });

    // Mobile navigation
    $(".mobile-menu-icon").click(function () {
        $(".primary-menu").stop(true, true).slideToggle();
        $(".primary-menu .nav-item").each(function () {
            if ($(this).children().hasClass("menu-sub")) {
                $(this).click(function(e) {
                    e.preventDefault();
                    $(this).children(".menu-sub").toggle('show');
                });
            }
        });
    });

    // Back To Top
    if ($('.back-to-top').length) {
        var scrollTrigger = 100,
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
})(jQuery);


(function() {
    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
        new SelectFx(el);
    } );
})();