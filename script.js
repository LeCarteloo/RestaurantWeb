window.onload = () => {
  // Navbar hamburger
  const hamburger = document.querySelector(".hamburger");
  const lines = document.querySelectorAll(".line");
  const hamburgerBackground = document.querySelector(".hamburger-background");

  hamburger.addEventListener("click", () => {
    if (lines[0].classList.contains("active")) {
      lines[0].classList.remove("active");
      lines[1].classList.remove("unactive");
      lines[2].classList.remove("active");
      hamburgerBackground.classList.remove("open");
      return;
    }

    lines[0].classList.add("active");
    lines[1].classList.add("unactive");
    lines[2].classList.add("active");
    hamburgerBackground.classList.add("open");
  });

  // Scroll animation

  window.addEventListener("scroll", () => {
    const menuWrapper = document.querySelector(".menu-wrapper");
    const scrollPos = menuWrapper.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const showPoint = 150;
    if (scrollPos < windowHeight - showPoint) {
      menuWrapper.classList.add("active");
    } else {
      menuWrapper.classList.remove("active");
    }
  });
};
