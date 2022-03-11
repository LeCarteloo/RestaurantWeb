const swiperElem = document.querySelector(".swiper");

swiperElem.addEventListener("mousedown", () => {
  console.log("YO");
  swiperElem.style.cursor = "grabbing";
});

console.log(swiperElem);

const swiper = new Swiper(".swiper", {
  loop: true,
  //   mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
