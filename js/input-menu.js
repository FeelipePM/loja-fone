const $inputMenu = document.querySelector(".input-menu");
const $menu = document.querySelector(".menu");

$inputMenu.addEventListener("click", () => {
  $menu.classList.toggle("-open");
  console.log("Funcionou!");
});

console.log($inputMenu);
