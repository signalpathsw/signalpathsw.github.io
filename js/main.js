const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");
menu?.addEventListener("click", () => links.classList.toggle("open"));

const layers = document.querySelectorAll("[data-speed]");
function onScroll() {
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
  const y = window.scrollY;
  layers.forEach((el) => {
    const speed = parseFloat(el.dataset.speed || "0.2");
    el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
  });
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const sent = new URLSearchParams(location.search).get("sent");
const banner = document.querySelector("[data-form-status]");
if (banner && sent === "1") banner.innerHTML = '<div class="success">Thank you. Your request was sent to Candi at candi@geauxtonotary.com.</div>';
if (banner && sent === "0") banner.innerHTML = '<div class="error">The message could not be sent from this server. Please call (504) 701-4378 or email candi@geauxtonotary.com.</div>';
