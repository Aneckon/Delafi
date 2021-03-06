$(document).ready(function () {
  $('.menu__mob').click(function () {
    $('.menu__list').toggleClass('open__menu');
    $('.dropdown__top').toggleClass('d-block');
    $('.menu__link').toggleClass('d-none');
    $('.menu__mob').toggleClass('remove__menu');
    $('body').toggleClass('fixed');
  });
  $('.item__one').click(function () {
    $('.one').toggleClass('d-block');
  });
  $('.item__two').click(function () {
    $('.two').toggleClass('d-block');
  });
  $('.item__tree').click(function () {
    $('.tree').toggleClass('d-block');
  });
  $('.item__for').click(function () {
    $('.for').toggleClass('d-block');
  });
  $('.item__fav').click(function () {
    $('.fav').toggleClass('d-block');
  });
  $('.item__six').click(function () {
    $('.six').toggleClass('d-block');
  });
  $('.item__seven').click(function () {
    $('.seven').toggleClass('d-block');
  });
  $('.item__nain').click(function () {
    $('.nain').toggleClass('d-block');
  });
  $('.item__sublast').click(function () {
    $('.sublast').toggleClass('d-block');
  });
  $('.item__last').click(function () {
    $('.last__last').toggleClass('d-block');
  });
  $('.dropdown__span').click(function () {
    $('.menu__dropdown-right').hide();
  });
});
$(document).ready(function () {
  $('.catalog__sidebar-menu').click(function () {
    $('.catalog__sidebar').toggleClass('open__menu');
    $('.catalog__sidebar-menu').toggleClass('catalog__remove');
  });
});
$(document).ready(function () {
  $('.aboute__bg-arow').click(function () {
    $('.aboute__bg-dropdown').toggleClass('d-block');
    $('.aboute__content').toggleClass('content__top');
  });
});
$(document).ready(function () {
  $('.catalog__icon-img__left').click(function () {
    $('.catalog__inner').removeClass('catalog__row')
    $('.catalog__icon-img__left').addClass('catalog__icon-active')
    $('.catalog__icon-img__right').removeClass('catalog__icon-active')
  })
  $('.catalog__icon-img__right').click(function () {
    $('.catalog__inner').addClass('catalog__row')
    $('.catalog__icon-img__right').addClass('catalog__icon-active')
    $('.catalog__icon-img__left').removeClass('catalog__icon-active')
  })
});
$(document).ready(function () {
  $('.catalog__mob-title').click(function () {
    $(this).next('.catalog__dropdown').toggle();
  });
});
$(document).ready(function () {
  $('.catalog__btn').click(function () {
    $('.catalog__btn').removeClass('catalog__active');
    $(this).addClass('catalog__active');
  });
});
$(document).ready(function () {
  $('.news__link').click(function () {
    $('.news__link').removeClass('news__list-active');
    $(this).addClass('news__list-active');
  });
});

$(document).ready(function () {
  $('.n').click(function () {
    $('.none').hide();
    $('.new').show();
  });
  $('.b').click(function () {
    $('.none').hide();
    $('.bestele').show();
  });
  $('.a').click(function () {
    $('.none').hide();
    $('.action').show();
  });
  $('.l').click(function () {
    $('.none').hide();
    $('.lob').show();
  });
});


var swiper1 = new Swiper('.swiper1', {
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});
var swiper2 = new Swiper('.swiper2', {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var swiper3 = new Swiper('.swiper3', {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});

(function () {

  'use strict';

  const breakpoint = window.matchMedia('(min-width:575px)');

  let mySwiper;


  const breakpointChecker = function () {


    if (breakpoint.matches === true) {

      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      return;

    } else if (breakpoint.matches === false) {

      return enableSwiper();

    }

  };


  const enableSwiper = function () {

    mySwiper = new Swiper('.swiper4', {
      navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
      },
    });

  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
})();