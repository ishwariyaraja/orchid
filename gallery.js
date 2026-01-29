// ==============contact side buttuon ======================== */

function openContact(){
  document.getElementById("contactSidebar").classList.add("active");
}
function closeContact(){
  document.getElementById("contactSidebar").classList.remove("active");
}

  /* ================= PAGE LOAD TRANSITION ================= */
window.addEventListener("load", () => {
  document.getElementById("pageTransition").classList.remove("active");
});
// /* =================Next PAGE BUTTON ================= */

function goNext() {
  const page = document.getElementById("page");
  page.classList.add("scroll-right");

  setTimeout(() => {
    window.location.href = "portfolio.html";
  }, 800);
}

function goBack() {
  const page = document.getElementById("page");
  page.classList.add("scroll-right");

  setTimeout(() => {
    window.location.href = "service.html";
  }, 800);
}

/* ================= CURSOR EFFECT ================= */
const dot = document.getElementById("cursorDot");
const outline = document.getElementById("cursorOutline");

window.addEventListener("mousemove", e => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

  outline.style.left = e.clientX - 15 + "px";
  outline.style.top = e.clientY - 15 + "px";
});
