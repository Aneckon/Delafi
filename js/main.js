$(document).ready(function () {
  $('.menu__mob').click(function () {
    $('.menu__list').toggleClass('open__menu');
    $('.menu__mob').toggleClass('remove__menu');
    $('body').toggleClass('fixed');
  });
});
$(document).ready(function () {
  $('.catalog__sidebar-menu').click(function () {
    $('.catalog__sidebar').toggleClass('open__menu');
    $('.catalog__sidebar-menu').toggleClass('catalog__remove');
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
  $('.menu__link').click(function () {
    $(this).next('.menu__link-dropdown').toggle();
  });
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
  $('.dropdown__span').click(function () {
    $('.menu__link-dropdown').hide();
    $('.menu__link-dropdown').hide();
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