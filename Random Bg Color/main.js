const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

function randomColor() {
  hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i <= 5; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let flag;
const startChangingColor = function () {
  if (!flag) {
    flag = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(flag);
  flag = null;
};

start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
