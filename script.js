const revealElements = document.querySelectorAll(".reveal"); //finds every html element with the reveal class

const observer = new IntersectionObserver( //asks if this element has entered the view of the users screen
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active"); //targests the active css for reveal once it is visible on the users screen
      }
    });
  },
  {
    threshold: 0.2,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});
