// Simple scroll animation for navbar
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.style.background = window.scrollY > 30 ? "black" : "black";
});
