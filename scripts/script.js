function changeBackgroundColor(e) {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor =
    "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
}

window.addEventListener("mousemove", changeBackgroundColor);
