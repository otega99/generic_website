const hero = document.querySelector(".hero");
const header = document.querySelector("header");
const sliders = document.querySelectorAll(".slide-in");
const hamburgerBtn = document.querySelector(".hamburgerBtn");
const innerLists = document.querySelectorAll(".inner-list");

hamburgerBtn.addEventListener("click", () => {
  header.classList.toggle("extend");
  innerLists.forEach((innerList) => {
    innerList.classList.toggle("drop");
  });
});

const heroObserverOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, heroObserverOptions);

heroObserver.observe(hero);

const sliderObserverOptions = {
  rootMargin: "0px 0px -100px 0px",
};

const sliderObserver = new IntersectionObserver(function (
  entries,
  sliderObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      sliderObserver.unobserve(entry.target);
    }
  });
},
sliderObserverOptions);

sliders.forEach((slider) => {
  sliderObserver.observe(slider);
});
