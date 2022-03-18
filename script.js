window.onload = () => {
  const handleHamburger = (lines) => {
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
  };

  // Fixing viewport after using keyboard on android browser
  const viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    viewport.content + ", height=" + window.innerHeight
  );

  // Navbar hamburger
  const hamburger = document.querySelector(".hamburger");
  const lines = document.querySelectorAll(".line");
  const hamburgerBackground = document.querySelector(".hamburger-background");

  hamburger.addEventListener("click", () => {
    handleHamburger(lines);
  });

  const navLinks = document.querySelectorAll(".hamburger-menu a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      handleHamburger(lines);
    });
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

  // Mouse move animation
  const leaf = document.querySelector(".leaf");
  const leafOne = document.querySelector(".leaf-one");
  const circle = document.querySelector(".circle");
  const chef = document.querySelector(".image-chef");
  const fullPage = document.querySelector(".mouse-move");

  fullPage.addEventListener("mousemove", (event) => {
    leaf.style.transform = `rotate(180deg) translate3d(
      ${event.offsetX / 40}px,
      ${event.offsetY / 40}px,
      0)`;
    leafOne.style.transform = `rotate(-90deg) translate3d(
      ${event.offsetX / 40}px,
      ${event.offsetY / 40}px,
      0)`;
    circle.style.transform = `rotate(-90deg) translate3d(
      ${event.offsetX / 35}px,
      ${event.offsetY / 35}px,
      0)`;
    chef.style.transform = `translate3d(
      ${event.offsetX / 140}px,
      ${event.offsetY / 140}px,
      0)`;
  });
};
