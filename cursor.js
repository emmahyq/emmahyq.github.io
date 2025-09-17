// const cursor = document.querySelector("#cursor");
// const cursorBorder = document.querySelector("#cursor-border");
const cursorBlur = document.querySelector("#cursor-blur");
const cursorPos = { x: 0, y: 0 };
// const cursorBorderPos = { x: 0, y: 0 };
const cursorBlurPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  // const easting = 8;
  const easting2 = 2;
  // cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  // cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  // cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;

  cursorBlurPos.x += (cursorPos.x - cursorBlurPos.x) / easting2;
  cursorBlurPos.y += (cursorPos.y - cursorBlurPos.y) / easting2;

  cursorBlur.style.transform = `translate(${cursorBlurPos.x}px, ${cursorBlurPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
        // cursorBorder.style.backgroundColor = "rgba(186, 191, 255, .4)";
        // cursorBorder.style.setProperty("--size", "28px");
        cursorBlur.style.opacity = "0.07";
        cursorBlur.style.setProperty("--size", "42em");

        // cursor.style.backgroundColor = "rgba(186, 191, 255, 0.4)";
        // cursor.style.setProperty("--size", "16px");
    }
  });
  item.addEventListener("mouseout", (e) => {
        // cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .0)";
        // cursorBorder.style.setProperty("--size", "50px");
        cursorBlur.style.opacity = "0.05";
        cursorBlur.style.setProperty("--size", "50em");

        // cursor.style.backgroundColor = "rgba(255, 255, 255, 1)";
        // cursor.style.setProperty("--size", "8px");
  });
});