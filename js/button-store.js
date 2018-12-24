const $button = document.querySelector(".-second");
const $bag = document.querySelector(".-last");

$button.addEventListener("click", handleClick);

function handleClick() {
  $bag.textContent = "Carrinho(11)";
}
