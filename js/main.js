const menu = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");
menu?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menu.setAttribute("aria-expanded", open ? "true" : "false");
});

const form = document.querySelector("form[data-mail]");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.company?.value) return;
  const data = new FormData(form);
  const body = [
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone")}`,
    `Service: ${data.get("service")}`,
    `Preferred time: ${data.get("when")}`,
    "",
    data.get("message")
  ].join("\n");
  const url = `mailto:candi@geauxtonotary.com?subject=${encodeURIComponent("Appointment request from Geaux To Notary website")}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
  const status = document.querySelector("[data-form-status]");
  if (status) status.innerHTML = '<div class="success">Your email app should open with this request addressed to candi@geauxtonotary.com. If it does not, call (504) 701-4378.</div>';
});
