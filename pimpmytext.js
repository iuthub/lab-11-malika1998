let text = document.getElementById("text");
let chbBling = document.getElementById("chbBling");

function changeFontSize() {
  text.style.fontSize = "24pt";
}

function changeTextStyle() {
  if (chbBling.checked) {
    text.classList.add("textStyled");
  }
  else {
    text.classList.remove("textStyled");
  }
}

function snoopify() {
  text.value = text.value.toUpperCase();
  text.value = text.value.split(".").join("-izzle.");
}