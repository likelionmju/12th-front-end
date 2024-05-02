let hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundcolor = "coral";
});
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.width = "20px";
  hoverBox.style.backgroundcolor = "blue";
});
