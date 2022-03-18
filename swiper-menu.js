const swiperElem = document.querySelector(".swiper");

swiperElem.addEventListener("mousedown", () => {
  swiperElem.style.cursor = "grabbing";
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  //   mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
