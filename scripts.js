// Navbar scroll effect (shrink on scroll)
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#111";
  } else {
    navbar.style.background = "black";
  }
});

// Contact form success message
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMessage");

form.addEventListener("submit", () => {
  setTimeout(() => {
    successMsg.style.display = "block";
  }, 500);
});

