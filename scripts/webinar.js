const goToTextButton = document.querySelector("#goToText");
function goToTextButtonHandler() {
  document.location.href = "./text.html";
}
goToTextButton.addEventListener("click", goToTextButtonHandler);
