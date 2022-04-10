const goToTextButton = document.querySelector("#goToText");
function goToTextButtonHandler() {
  document.location.href = "./text.html";
}
goToTextButton.addEventListener("click", goToTextButtonHandler);

const menuItemList = document.querySelectorAll(".sidebar-menu__item-list");

menuItemList.forEach(item => {
  item.parentNode.addEventListener("click", function (evt) {
    evt.stopPropagation();
    item.classList.toggle("sidebar-menu__item-list_open");
  });
});

const menuIcon = document.querySelectorAll(".icon__sidebar-menu");

menuIcon.forEach(item => {
  item.parentNode.addEventListener("click", function (evt) {
    evt.stopPropagation();
    item.classList.toggle("icon__sidebar-menu_rotated");
  });
});
