$(function(){
      $(".menu>li").on({
        mouseenter:function(){
          $(this).find(".submenu").stop().fadeIn(280);
        },
        mouseleave:function(){
          $(this).find(".submenu").stop().fadeOut(180);
        }
      });
    });
//

    $(function () {
      $(".spot a").on("click", function (e) {
        e.preventDefault(); 
    
        $(".spot a").removeClass("active");

        $(this).addClass("active");
      });
    });
//

$(function() {
  const $hamburger = $('.ham');
  const $mobileMenu = $('#mobileMenu');
  const $mobileOverlay = $('#mobileOverlay');
  const $closeBtn = $('#closeBtn');

  $hamburger.on('click', function() {
      $hamburger.addClass('active');
      $mobileMenu.addClass('active');
      $mobileOverlay.addClass('active');
      $('body').css('overflow', 'hidden');
  });

  $closeBtn.on('click', function() {
      closeMenu();
  });

  $mobileOverlay.on('click', function() {
      closeMenu();
  });

  $(document).on('keydown', function(e) {
      if (e.key === 'Escape') {
          closeMenu();
      }
  });

  function closeMenu() {
      $hamburger.removeClass('active');
      $mobileMenu.removeClass('active');
      $mobileOverlay.removeClass('active');
      $('body').css('overflow', '');
  }

  $(window).on('resize', function() {
      if ($(window).width() > 768) {
          closeMenu();
      }
  });

  $(".mobile_spot a").on("click", function (e) {
      e.preventDefault(); 
      $(".mobile_spot a").removeClass("active");
      $(this).addClass("active");
  });

  $(document).on('click', '[onclick*="toggleSubmenu"]', function(e) {
      e.preventDefault();
      
      const $this = $(this);
      const $submenu = $this.next('.mobile_submenu');
      const $arrow = $this.find('.arrow');
      
      $('.mobile_submenu').not($submenu).removeClass('active');
      $('.arrow').not($arrow).removeClass('rotated');
      
      $submenu.toggleClass('active');
      $arrow.toggleClass('rotated');
  });
});

//
$(function(){

  $(window).on('scroll',function(){
    let w = $(window).scrollTop()

    console.log(w)

    if(w>100){
      $(".top_button").fadeIn();
    } else{
      $(".top_button").fadeOut();
    }
  });


  $(".top_b4").on('click',function(){
    $(window).scrollTop(0)
  })
});

//

var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 5,
});

$(function(){
  AOS.init();
});