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
      jQuery('.site-search__search-input').trigger('focus');
    }, 1000);
  });
  jQuery(".site-search__close").click(function() {
    jQuery('html, body').removeClass('overflow-x-hidden');
    jQuery('#nav-site-search').removeClass('search_bar');
    setTimeout(function() {
      jQuery('#nav-site-search').removeClass("open");
      jQuery('.site-search__search-input').val('');
    }, 1000);
  });
  jQuery(document).click(function(event) {
    if (!jQuery(event.target).closest('#nav-site-search, .site-search__open').length) {
      jQuery('#nav-site-search').removeClass('search_bar');
      jQuery('html, body').removeClass('overflow-x-hidden');
      setTimeout(function() {
        jQuery('#nav-site-search').removeClass("open");
        jQuery('.site-search__search-input').val('');
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

   $(document).on('submit','.get-free-quote-form', function(e) {
  
      e.preventDefault(); 
      const $form = $(this);  
      var $message = $form.find('.form-message');
      const email = $form.find('#email').val();
      const privacy_policy = $form.find('#privacy_policy').is(':checked');
      $('.field-error').text('');

      $.ajax({
        url: newsLetterUrl,  
        method: 'get',
        data: {
          email:email,
          privacy_policy:privacy_policy ? 1 : 0
        },
        dataType: 'json',
        success: function(response) {
        // You get a JSON response from Statamic
          if (response.status === true) {
            $message.text(response.message).css('color', '#ffcb79').fadeIn();
              setTimeout(() => {
                $form[0].reset();
              }, 1000);
          } else {
            
            $message.text(response.message).addClass('text-red-500').fadeIn();           
          }
        },
        error: function(response) {
          
          if (response.responseJSON.errors) {
            $.each(response.responseJSON.errors, function (field, message) {
              const $input = $form.find('[name="' + field + '"]');
              const $errorContainer = $form.find('[data-error-for="' + field + '"]');

              $input.addClass('error');
              $errorContainer.html(Array.isArray(message) ? message.join('<br>') : message);
            });
          }
        }
      });
    });

   $(document).on('click', '.pagination a', function(e) {
    e.preventDefault();
      let url = $(this).attr('href'); // ✅ use `let`, not `const`
      const appEnv = document.querySelector('meta[name="app-env"]')?.getAttribute('content');

      if (appEnv === 'production') {
        if (url && url.startsWith("http:")) {
              url = url.replace(/^http:/, "https:"); // ✅ now valid
            }
          }
          $('.grid_append').load(url + ' .grid_append > *');
          $('.pagination-part').load(url + ' .pagination-part > *');
        });

  $(document).on('submit','#contactForm', function(e) {
    e.preventDefault(); 

    const $form = $(this);

    var $message = $form.find('.form-message');
    $message.html('');
    $form.find('.field-error').html('');
    $form.find('.form-control').removeClass('error');

    const formData = new FormData(this);

    $.ajax({
        // Statamic sets form action automatically
      url: $form.attr('action'),  
      method: 'POST',
      data: formData,
      processData: false, 
      contentType: false, 
      success: function(response) {
          // You get a JSON response from Statamic
        if(response.success) {
          $message.text("Thank you! We'll be in touch shortly.").css('color', '#0e5e6f').fadeIn();

          $form[0].reset();
        } 
      },
      error: function(response) {

        if (response.responseJSON.error) {
         $.each(response.responseJSON.error, function(field, message) {
          const $input = $form.find('[name="' + field + '"]');
          const $errorContainer = $form.find('[data-error-for="' + field + '"]');

          $input.addClass('error');
          $errorContainer.html(Array.isArray(message) ? message.join('<br>') : message);
        });
       }

     }
   });
  });


  $(document).on('submit','#apply-screen-form', function(e) {
    e.preventDefault(); 

    const $form = $(this);
    
    var $message = $form.find('.form-message');
    $message.html('');
    $form.find('.field-error').html('');
    $form.find('.form-control').removeClass('error');
    
    const formData = new FormData(this);

    $.ajax({
        // Statamic sets form action automatically
      url: $form.attr('action'),  
      method: 'POST',
      data: formData,
      processData: false, 
      contentType: false, 
      success: function(response) {
          // You get a JSON response from Statamic
        if(response.success) {
          $message.text("Thank you! We'll be in touch shortly.").css('color', '#0e5e6f').fadeIn();

          setTimeout(function(){
            $('.mfp-close').click();
            $form[0].reset();
            $message.text('');
          }, 1000);
        } 
      },
      error: function(response) {

        if (response.responseJSON.error) {
         $.each(response.responseJSON.error, function(field, message) {
          const $input = $form.find('[name="' + field + '"]');
          const $errorContainer = $form.find('[data-error-for="' + field + '"]');

          $input.addClass('error');
          $errorContainer.html(Array.isArray(message) ? message.join('<br>') : message);
        });
       }
       
     }
   });
  });

 
  var grid = $(".isotope").isotope({
    itemSelector: ".item",
    layoutMode: "fitRows",
  });

  $(".menu-filter button").on("click", function () {
    var filterValue = $(this).attr("data-filter");
    grid.isotope({ filter: filterValue });

    $(".menu-filter button").removeClass("active");
    $(this).addClass("active");


  });
  grid.isotope({ filter: '.all_results' });


  const input = document.getElementById("site-search");
  const resultBox = document.getElementById("combined-search");

  const urlParams = new URLSearchParams(window.location.search);
  const q = urlParams.get("q");
  if (q && input) {
    input.value = decodeURIComponent(q.replace(/\+/g, " "));
    triggerSearch(q); // 🔄 Auto-trigger on load
  }

  if (input && resultBox) {
    let timeout = null;

    input.addEventListener("keyup", function () {
      const query = input.value.trim();

      clearTimeout(timeout);

      if (query.length < 2) {
        resultBox.innerHTML = "";
        resultBox.classList.remove("show");
        grid.isotope("remove", grid.isotope("getItemElements")).isotope("layout");
        return;
      }

      timeout = setTimeout(() => {
        triggerSearch(query);
      }, 300);
    });
  }

  function triggerSearch(query) {
    fetch(`/search_page_results?q=${encodeURIComponent(query)}`)
    .then((response) => {
      if (!response.ok) throw new Error(`Network error: ${response.status}`);
      return response.text();
    })
    .then((fullHtml) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(fullHtml, "text/html");
      const innerContent = doc.getElementById("combined-search");

      if (innerContent) {
        resultBox.innerHTML = innerContent.innerHTML;
        resultBox.classList.add("show");

        grid.isotope("remove", grid.isotope("getItemElements")).isotope("layout");

        const newItems = resultBox.querySelectorAll(".item");
        if (newItems.length > 0) {
          grid.append(newItems).isotope("appended", newItems);
          grid.isotope("layout");
        }
      } else {
        resultBox.innerHTML = '<p class="text-red-600">No results found.</p>';
        resultBox.classList.add("show");
        grid.isotope("remove", grid.isotope("getItemElements")).isotope("layout");
      }
    })
    .catch((error) => {
      console.error("Search error:", error);
      resultBox.innerHTML = '<p class="text-red-600">Error loading results.</p>';
      resultBox.classList.add("show");
      grid.isotope("remove", grid.isotope("getItemElements")).isotope("layout");
    });
  }

  const $banner = $('#cookie-banner');
  const $acceptBtn = $('#accept-cookies');
  const $rejectBtn = $('#reject-cookies');

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Check if consent already stored (in localStorage or cookie)
  if (localStorage.getItem('cookieConsent') || getCookie('OptanonConsent')) {
    $banner.hide();
  }

  // Accept button click
  $acceptBtn.on('click', function () {
    localStorage.setItem('cookieConsent', 'accepted');
    setCookie('OptanonAlertBoxClosed', new Date().toISOString(), 365);

    const consentValue =
      'landingPath=NotLandingPage&datestamp=' +
      encodeURIComponent(new Date().toString()) +
      '&version=202403.1.0&groups=C0004:0,C0002:0,C0001:1,C0003:0&hosts=';
    setCookie('OptanonConsent', consentValue, 365);

    $banner.hide();
    // TODO: Initialize analytics/tracking scripts here
  });

  // Reject button click
  $rejectBtn.on('click', function () {
    localStorage.setItem('cookieConsent', 'rejected');
    setCookie('OptanonAlertBoxClosed', new Date().toISOString(), 365);

    const consentValue =
      'landingPath=NotLandingPage&datestamp=' +
      encodeURIComponent(new Date().toString()) +
      '&version=202403.1.0&groups=C0004:0,C0002:0,C0001:0,C0003:0&hosts=';
    setCookie('OptanonConsent', consentValue, 365);

    $banner.hide();
    // TODO: Ensure tracking scripts do NOT run
  });
});