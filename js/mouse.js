let cursor = document.querySelectorAll(".js-cursor");
let main_bg = document.querySelector(".main-bg");

let to_b_dropped = document.querySelectorAll(".drop");
let to_b_scale = document.querySelectorAll(".scale");

for (let x = 0; x < to_b_dropped.length; x++) {
  to_b_dropped[x].style.animationDelay = `${x * 0.1}s`;
}

document.querySelectorAll(".js-side-bar").forEach((e) => {
  e.addEventListener("click", (ev) => {
    document.querySelector(".side-bar").classList.toggle("closed");
  });
});

window.addEventListener("load", function () {
  main_bg.style.animationName = `reduce`;
  setTimeout(() => {
    to_b_dropped.forEach((e) => {
      e.style.animationName = "drop";
    });
    to_b_scale.forEach((e) => {
      e.style.animationName = "scale";
    });
  }, 1000);
});

window.addEventListener("mousemove", function (ev) {
  let x = ev.clientX;
  let y = ev.clientY;

  this.console.log("move");

  cursor.forEach((e) => {
    e.style.top = `${y}px`;
    e.style.left = `${x}px`;
  });
});
