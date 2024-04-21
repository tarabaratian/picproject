let div = document.querySelectorAll("div.wrapper>div");
let image = document.querySelectorAll("div.wrapper>div>img");
div.forEach((elem) => {
  elem.addEventListener("click", () => {
    removeActive();
    elem.classList.add("active");
    image.forEach((e) => {
      e.classList.add("active");
    });
  });
});
function removeActive() {
  div.forEach((elem) => {
    elem.classList.remove("active");
  });
}
