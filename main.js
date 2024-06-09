document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector(".button-menu");
  const closeButton = document.querySelector(".button__close");

  // Toggle sidebar on menu button click
  menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar--active");
  });

  // Hide sidebar on close button click
  closeButton.addEventListener("click", function () {
    sidebar.classList.remove("sidebar--active");
  });
});
