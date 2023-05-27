const cols = document.querySelectorAll(".col");

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() === "space") {
    setRandomColors();
  }
});

function generateRandomColor() {
  const hexCodes = "0123456789ABCDEF";

  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
}

function setRandomColors(isInitial) {
  cols.forEach((col, index) => {
    const text = col.querySelector("h4");
    const button = col.querySelector("button");
    const color = generateRandomColor();

    text.textContent = color;
    col.style.background = color;

    setTextColor(text, color);
    setTextColor(button, color);
  });
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "#232731" : "#dedede";
}

setRandomColors();
