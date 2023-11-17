document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "slide",
    perPage: 1,
    perMove: 1,
    width: "90%",
    focus: "center",
    rewind: true,
    speed: 600,
    autoplay: true,
    interval: 4000,
    breakpoints: {
      640: {
        perPage: 1,
        perMove: 1,
        focus: "center",
        width: "100%",
      },
    },
  }).mount();
});
