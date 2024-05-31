function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("navbar-sticky");
    }
  });
}

// Counter stats
function incrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", incrementStats);
