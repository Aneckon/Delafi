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
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var swiper3 = new Swiper('.swiper3', {
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});