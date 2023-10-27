const colors = document.querySelectorAll(".button");
const body = document.querySelector("body");
colors.forEach(function (color) {
  color.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
