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

  const hamburgerLink = document.querySelectorAll(".hamburger-menu a");

  hamburgerLink.forEach((link) => {
    link.addEventListener("click", () => {
      handleHamburger(lines);
    });
  });

  // Scroll animation

  const addScrollAnim = (styleClass) => {
    const elementWrapper = document.querySelector(styleClass);
    const scrollPos = elementWrapper.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const showPoint = 200;

    if (scrollPos < windowHeight - showPoint) {
      elementWrapper.classList.add("active");
    } else {
      elementWrapper.classList.remove("active");
    }
  };

  window.addEventListener("scroll", () => {
    addScrollAnim(".menu-wrapper");
    addScrollAnim(".about-wrapper");
    addScrollAnim(".contact-wrapper");
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

  // Section-aware navigation with Intersection Observer API
  // Could be done with scroll event but Observer make it more efficient
  const navLinks = {
    nav_menu: document.getElementById("nav-menu"),
    nav_about: document.getElementById("nav-about"),
    nav_contact: document.getElementById("nav-contact"),
  };

  const sections = {
    home: document.getElementById("home"),
    menu: document.getElementById("menu"),
    about: document.getElementById("about"),
    contact: document.getElementById("contact"),
  };

  const hambLinks = {
    hamb_home: document.getElementById("hamb-home"),
    hamb_menu: document.getElementById("hamb-menu"),
    hamb_about: document.getElementById("hamb-about"),
    hamb_contact: document.getElementById("hamb-contact"),
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const navLink = navLinks[`nav_${entry.target.id}`];
        const hambLink = hambLinks[`hamb_${entry.target.id}`];

        hambLink.classList.add("active");

        if (entry.target.id !== "home") {
          navLink.classList.add("active");
        }

        Object.values(navLinks).forEach((link) => {
          if (link != navLink) {
            link.classList.remove("active");
          }
        });

        Object.values(hambLinks).forEach((link) => {
          if (link != hambLink) {
            link.classList.remove("active");
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  Object.values(sections).forEach((section) => {
    observer.observe(section);
  });
};
