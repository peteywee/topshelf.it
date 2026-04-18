(() => {
  "use strict";

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  };

  const openNav = () => {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation");
    const firstLink = nav.querySelector("a");
    if (firstLink) firstLink.focus();
  };

  toggle.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 860) {
        closeNav();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeNav();
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      nav.classList.contains("is-open") &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closeNav();
    }
  });
})();
