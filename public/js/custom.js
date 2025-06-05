jQuery( document ).ready(function() {

  // ===== Select Language Js ===== //
  jQuery('#selectButton').click(function() {
    jQuery(this).toggleClass('active');
    jQuery('#selectOptions').toggleClass('hidden');
  });
  jQuery('#selectOptions li').click(function() {
    var selectedText = jQuery(this).text();
    jQuery('#selectButton').html(selectedText + ' <svg class="transition-all w-4 h-4 float-right" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>');
    jQuery('#selectOptions').addClass('hidden');
    jQuery('#selectButton').removeClass('active');
  });
  jQuery(document).click(function(e) {
    if (!jQuery(e.target).closest('#selectButton, #selectOptions').length) {
      jQuery('#selectOptions').addClass('hidden');
      jQuery('#selectButton').removeClass('active');
    }
  });


  // ===== Initialize the thumbs swiper ===== //
  var hero_slider_thumb = new Swiper(".wb-hero-slider-thumbs", {
    spaceBetween: 30,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });


  // ===== Initialize the main swiper ===== //
  var hero_slider = new Swiper(".wb-hero-slider-view", {
    spaceBetween: 0,
    thumbs: {
      swiper: hero_slider_thumb,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  hero_slider.on('slideChange', function () {
    var activeSlide = hero_slider.slides[hero_slider.activeIndex];
    var active_img = jQuery(activeSlide).attr('data-src');    
    jQuery(hero_slider.el).closest('.wb-hero-section').find('.bg-hero-box').attr( 'src', active_img );
  });


  // ===== Partner Silder Js ===== //
  var swiper = new Swiper(".wb-partner-slider-view", {
    direction: 'horizontal',
    speed:18000,
    direction: 'horizontal',
    zoom: true,
    keyboard:{
      enabled: true,
      onlyInViewport: false,
    },
    mousewheel:{
      invert: true,
    },
    autoplay: {
      delay: 0,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      991: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 70,
      },
    },
  });


  // ===== Testimonials Js ===== //
  var swiper = new Swiper(".wb-testimonials-slider-thumbs", {
    spaceBetween: 0,
    slidesPerView: 1,
    effect: "fade",
  });
  var swiper2 = new Swiper(".wb-testimonials-slider-view", {
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: ".wb-testimonials-section .swiper-pagination",
      type: "fraction",
    },
  });


  // ===== Preloader Js ===== //
  setTimeout(function() {
    jQuery('.preloader').addClass('hidden');
  }, 3000);


  // ===== Accordion Js ===== //
  jQuery(".accordion-content:not(:first-of-type)").hide(); 
  jQuery(".js-accordion-title").click(function() {
    jQuery(".open").not(this).removeClass("open").next().slideUp(300);
    jQuery(this).toggleClass("open").next().slideToggle(300);
  });


  // ===== Hero Bigmentor Slider Js ===== //
  var swiper = new Swiper(".wb-hero-bigmentor-thumbs", {
    spaceBetween: 26,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".wb-bigmentor-slider-view", {
    spaceBetween: 26,
    thumbs: {
      swiper: swiper,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // ===== Mega Iitem Js ===== //
  if (jQuery(window).width() < 992) {
    // Click event on mega item
    jQuery('.mega-item').click(function(event) {
      event.stopPropagation();
      var $this = jQuery(this);
      // Close all other open menus
      jQuery('.mega-item').not($this).removeClass('active');
      jQuery('.mega-menu').not($this.find('.mega-menu')).slideUp();
      // Toggle the clicked menu
      $this.toggleClass('active');
      $this.find('.mega-menu').slideToggle();
    });
    // Close the menu when clicking outside of it
    jQuery(document).mousedown(function(event) {
      var $target = jQuery(event.target);
      if (!$target.closest('.mega-item').length) {
        jQuery('.mega-item').removeClass('active');
        jQuery('.mega-menu').slideUp();
      }
    });
  }


  // ===== Menu Js ===== //
  jQuery(document).on("click", "button[name=\"mobile-menu-view\"]", function(e) {
    jQuery("#mainmenu").addClass("active");
  });
  jQuery(document).on("click", "button[name=\"close\"]", function(e) {
    jQuery("#mainmenu").removeClass("active");
  });


  // ===== Video Playing Js ===== //
  var isPlaying = false;
  jQuery('.play-btn').on('click', function() {
    var video = jQuery('.background-video').get(0);
    if (isPlaying) {
      video.pause();
      jQuery(this).html('<i class="fa-solid fa-play"></i>');
    } else {
      video.play();
      jQuery(this).html('<i class="fa-solid fa-pause"></i>');
    }
    isPlaying = !isPlaying;
  });


  // ===== Tab Section Js ===== //
  const $tabButtons = jQuery('.tab-button');
  const $tabPanels = jQuery('.tab-panel');
  $tabButtons.on('click', function () {
    $tabButtons.removeClass('tab-active').find('a').attr('aria-selected', 'false');
    $tabPanels.addClass('hidden');
    jQuery(this).addClass('tab-active').find('a').attr('aria-selected', 'true');
    const panelId = jQuery(this).find('a').attr('aria-controls');
    jQuery('#' + panelId).removeClass('hidden');
  });


  // ===== Cookie Js ===== //
  jQuery(".cookie-section .all-btn").click(function() {
    jQuery(".cookie-section").addClass("hidden");
  });


  // ===== Header Js ===== //
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 0) {
      jQuery('#header').addClass('scrolled');
      jQuery('.header-style-1 .site-logo img ').attr( 'src', jQuery('.wc_header_logo').attr('data-hover-logo'));
    } else {
      jQuery('#header').removeClass('scrolled');
      jQuery('.header-style-1 .site-logo img').attr( 'src', jQuery('.wc_header_logo').attr('data-main-logo'));
    }
  });
  jQuery('.header-style-1').hover(
    function() {
      jQuery('.header-style-1:not(.scrolled) .site-logo img').attr('src', jQuery('.wc_header_logo').attr('data-hover-logo'));
    },
    function() {
      jQuery('.header-style-1:not(.scrolled) .site-logo img').attr('src', jQuery('.wc_header_logo').attr('data-main-logo'));
    }
    );


  // ===== Search Js ===== //
  jQuery(".site-search__open").click(function() {
    jQuery('#nav-site-search').addClass("open");
    jQuery('html, body').addClass('overflow-x-hidden');
    setTimeout(function() {
      jQuery('#nav-site-search').addClass('search_bar');
    }, 1000);
  });
  jQuery(".site-search__close").click(function() {
    jQuery('html, body').removeClass('overflow-x-hidden');
    jQuery('#nav-site-search').removeClass('search_bar');
    setTimeout(function() {
      jQuery('#nav-site-search').removeClass("open");
    }, 1000);
  });
  jQuery(document).click(function(event) {
    if (!jQuery(event.target).closest('#nav-site-search, .site-search__open').length) {
      jQuery('#nav-site-search').removeClass('search_bar');
      jQuery('html, body').removeClass('overflow-x-hidden');
      setTimeout(function() {
        jQuery('#nav-site-search').removeClass("open");
      }, 1000);
    }
  });


  // ===== Search Js ===== //
  jQuery('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
  });

  // ===== Search Js ===== //
  jQuery(".site-search__open").click(function() {
    jQuery('#nav-site-search').addClass("open");
    setTimeout(function() {
      jQuery('#nav-site-search').addClass('search_bar');
    }, 1000);
  });
  jQuery(".site-search__close").click(function() {
    jQuery('#nav-site-search').removeClass('search_bar');
    setTimeout(function() {
      jQuery('#nav-site-search').removeClass("open");
    }, 1000);
  });


  jQuery(window).on('load', function () {
    function totop_button(state) {
      var b = jQuery("#scroll-to-top");
      if (state === "on") {
        b.addClass("on fadeInRight").removeClass("off fadeOutRight");
      } else {
        b.addClass("off fadeOutRight animated").removeClass("on fadeInRight");
      }
    }
    jQuery(window).scroll(function() {
      var b = jQuery(this).scrollTop(),
      c = jQuery(this).height(),
      d = b > 0 ? b + c / 2 : 1;
      if (d < 1300 && d < c) {
        totop_button("off");
      } else {
        totop_button("on");
      }
    });
    jQuery("#scroll-to-top").click(function(e) {
      e.preventDefault();
      jQuery("body,html").animate({
        scrollTop: 0
      }, 1000, "swing");
    });
  });

});