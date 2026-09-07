const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        // Only animate once
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,

    // Makes the animation wait until the element
    // is further inside the screen
    rootMargin: "0px 0px -100px 0px",
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});
