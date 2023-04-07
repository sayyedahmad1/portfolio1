// ==============sticky navbar================//

// ======secroll=section==active=link=======//

// ==============sticky navbar================//

// ==============scroll revel================//
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container .portfolio-box, .contact form ",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "Right" });

const typed = new Typed(".multipule-text", {
  strings: [
    "Hi I am ahmad",
    "A Frontend developer.",
    "Availble to hire!",
    "Have a great day!",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
