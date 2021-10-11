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