!function(e){"use strict";function o(o){const t=e(o.target).closest(".dropdown"),n=e(".dropdown-menu",t);setTimeout((function(){const a="click"!==o.type&&t.is(":hover");n.toggleClass("show",a),t.toggleClass("show",a),e('[data-toggle="dropdown"]',t).attr("aria-expanded",a)}),"mouseleave"===o.type?300:0)}e(window).on("scroll load",(function(){e(".navbar").offset().top>60?e(".fixed-top").addClass("top-nav-collapse"):e(".fixed-top").removeClass("top-nav-collapse")})),e((function(){e(document).on("click","a.page-scroll",(function(o){var t=e(this);e("html, body").stop().animate({scrollTop:e(t.attr("href")).offset().top},600,"easeInOutExpo"),o.preventDefault()}))})),e('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on("click",(function(){e(".offcanvas-collapse").toggleClass("open")})),e("body").on("mouseenter mouseleave",".dropdown",o).on("click",".dropdown-menu a",o),e(".popup-with-move-anim").magnificPopup({type:"inline",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-slide-bottom"}),new Swiper(".image-slider",{autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,spaceBetween:50,slidesPerView:5,breakpoints:{575:{slidesPerView:1,spaceBetween:10},767:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3,spaceBetween:20},1199:{slidesPerView:4,spaceBetween:20}}}),new Swiper(".card-slider",{autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:2,spaceBetween:40,breakpoints:{991:{slidesPerView:1}}});var t=0;e(window).scroll((function(){if(e("#counter").length){var o=e("#counter").offset().top-window.innerHeight;0==t&&e(window).scrollTop()>o&&(e(".counter-value").each((function(){var o=e(this),t=o.attr("data-count");e({countNum:o.text()}).animate({countNum:t},{duration:2e3,easing:"swing",step:function(){o.text(Math.floor(this.countNum))},complete:function(){o.text(this.countNum)}})})),t=1)}})),e("input, textarea").keyup((function(){""!=e(this).val()?e(this).addClass("notEmpty"):e(this).removeClass("notEmpty")})),e("body").prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>'),e(window).scroll((function(){e(window).scrollTop()>700?e("a.back-to-top").fadeIn("500"):e("a.back-to-top").fadeOut("500")})),e(".button, a, button").mouseup((function(){e(this).blur()}))}(jQuery);