document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     1. SCROLL REVEAL
  =============================== */
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();


  /* ===============================
     2. NAVBAR SHADOW ON SCROLL
  =============================== */
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-md");
    } else {
      navbar.classList.remove("shadow-md");
    }
  });


  /* ===============================
     3. SMOOTH SCROLL (FOR CONTACT)
  =============================== */
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });


  /* ===============================
     4. TYPING EFFECT
  =============================== */
  const words = ["Creative Artist", "Voice Talent", "Storyteller"];
  let i = 0, j = 0, currentWord = "", isDeleting = false;
  const typingElement = document.getElementById("typing");

  function typeEffect() {
    if (!typingElement) return;

    currentWord = words[i];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, j--);
    } else {
      typingElement.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }

  typeEffect();

});