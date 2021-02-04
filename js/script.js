$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  margin: 40,
  navText: ["<img src='img/left.png'>", "<img src='img/right.png'>"],
  responsive: {
    0: {
      items: 3,
    },
  },
});
