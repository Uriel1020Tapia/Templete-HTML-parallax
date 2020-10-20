const $iconHamburger = document.querySelector(".icon-hamburguer");
const $menuNavigation = document.querySelector(".menu-navigation");

$iconHamburger.addEventListener("click", () => {
  $menuNavigation.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    $menuNavigation.classList.contains("spread") &&
    e.target != $menuNavigation &&
    e.target != $iconHamburger
  ) {
    $menuNavigation.classList.toggle("spread");
  }
});
