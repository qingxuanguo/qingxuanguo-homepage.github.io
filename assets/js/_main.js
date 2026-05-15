/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
   // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 925 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // Mark elements that have video and preload them
  $(window).on('load', function() {
    $('.paper-box-image').each(function() {
      var video = $(this).find('video.project-video')[0];
      if (video) {
        $(this).addClass('has-video');
        console.log('Found video element, adding has-video class:', video.src);
        video.load(); // Force browser to start loading the video
      }
    });
  });

  // Video hover effect: play on hover, pause on leave
  $(window).on('load', function() {
    console.log('Window loaded, initializing video hover effects...');
    
    $('.paper-box-image').each(function() {
      var $box = $(this);
      var video = $box.find('video.project-video')[0];
      
      if (video) {
        console.log('✓ Found video element:', video.src);
        
        // Preload video for faster playback
        video.load();
        
        // Mouse enter: show and play video
        $box.on('mouseenter', function() {
          console.log('→ Mouse enter - attempting to play video');
          video.style.opacity = '1';
          
          video.play().then(function() {
            console.log('✓ Video playing successfully');
          }).catch(function(error) {
            console.error('✗ Video play failed:', error.message);
            console.error('  Error code:', error.code);
            console.error('  Video readyState:', video.readyState);
            console.error('  Video src:', video.src);
          });
        });
        
        // Mouse leave: hide and pause video
        $box.on('mouseleave', function() {
          console.log('← Mouse leave - pausing video');
          video.pause();
          video.currentTime = 0;
          video.style.opacity = '0';
        });
      } else {
        console.log('- No video in this paper-box-image');
      }
    });
    
    console.log('Video hover initialization complete');
  });

});
