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


$(document).ready(function () {
  $('.menu__mob').click(function () {
    $('.menu__list').toggleClass('open__menu');
    $('.menu__mob').toggleClass('remove__menu');
    $('body').toggleClass('fixed');
  });
});

$(document).ready(function () {
  $('.open__content-top .menu__link').click(function () {
    $(this).next('.menu__link-dropdown').toggle();
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