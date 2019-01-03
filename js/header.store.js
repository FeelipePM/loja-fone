const $search = document.querySelector("[type=search]");
const $iconSearch = document.querySelector(".iconSearch");
const $iconClose = document.querySelector(".iconClose");

$iconSearch.addEventListener("click", () => {
  $iconSearch.classList.add("-active");
  $iconClose.classList.add("-active");
  $search.classList.add("-active");
});

$iconClose.addEventListener("click", () => {
  $iconClose.classList.remove("-active");
  $iconSearch.classList.remove("-active");
  $search.classList.remove("-active");
});
