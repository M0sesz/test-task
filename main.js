document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".button-menu");
  const closeButton = document.querySelector(".button__close");

  if (window.innerWidth > 1160) {
    sidebar.classList.add("sidebar--active");
  }

  menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar--active");
  });

  closeButton.addEventListener("click", function () {
    sidebar.classList.remove("sidebar--active");
  });
});
