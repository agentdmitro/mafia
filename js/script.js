



	$('a.open-register').click(function (e) {
		e.preventDefault();
		$('.popup.popup-register.show').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	
	$('a.open-login').click(function (e) {
		e.preventDefault();
		$('.popup.popup-login.show').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	
		
	$('a.open-login').click(function (e) {
		e.preventDefault();
		$('.popup.popup-login').toggleClass('show');
		$('.popup.popup-register.show').removeClass('show');
		$('.bg-menu').toggleClass('show');
	});
	
	
	$('a.open-register').click(function (e) {
		e.preventDefault();
		$('.popup.popup-register').toggleClass('show');
		$('.popup.popup-login.show').removeClass('show');
		$('.bg-menu').toggleClass('show');
	});
	
	
	$('.bg-menu').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	$('.close').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu').removeClass('show');
	});




var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      centeredSlides: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});


var swiper = new Swiper('.swiper-container2', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
      200: {
        slidesPerView: 1.1,
      },
      360: {
        slidesPerView: 1.3,
      },
      420: {
        slidesPerView: 1.4,
      },
      500: {
        slidesPerView: 1.6,
      },
      640: {
        slidesPerView: 1.8,
      },
      850: {
        slidesPerView: 2.8,
      },
      1060: {
        slidesPerView: 3.6,
      },
      1200: {
        slidesPerView: 4,
      },
    }
});

var swiper = new Swiper('.swiper-container3', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
      },
      breakpoints: {
        200: {
          slidesPerView: 1.4,
        },
        500: {
          slidesPerView: 1.6,
        },
        640: {
          slidesPerView: 1.8,
        },
        850: {
          slidesPerView: 2.8,
        },
        1060: {
          slidesPerView: 3.6,
        },
        1200: {
          slidesPerView: 4,
        },
      }
});

var swiper = new Swiper('.swiper-container4', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
      },
      breakpoints: {
        200: {
          slidesPerView: 1.4,
        },
        500: {
          slidesPerView: 1.6,
        },
        640: {
          slidesPerView: 1.8,
        },
        850: {
          slidesPerView: 2.8,
        },
        1060: {
          slidesPerView: 3.6,
        },
        1200: {
          slidesPerView: 4,
        },
      }
});


$(document).ready(function() {
  $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
  $('.header__list').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

	

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    100: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    470: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
}); 
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  },
});


(function($) {
  $(document).on('click', '.group a', function(e) {
    e.preventDefault();

    var $this = $(this),
      id = $this.data('id');

    $('.group-data .active').removeClass('active');
    $('.group .active').removeClass('active');
    $(this).addClass('active');

    $('#group-' + id).addClass('active');
  });
})(jQuery);


var elem = document.getElementById('add_num'), num = +elem.innerHTML;

function addNum(){
    elem.innerHTML = num++;
    
}

function endNum(){
  elem.innerHTML = num--;
  if(num == 0){
      num = 5;
    }
}








