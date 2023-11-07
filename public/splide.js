document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
        type: "loop",
        perPage: 1,
        perMove: 1,
        focus: "center",
        width: "80%",
        breakpoints: {
            640: {
                perPage: 1,
                perMove: 1,
                focus: "center",
                width: "100%"
            }
        }
    }).mount();
});