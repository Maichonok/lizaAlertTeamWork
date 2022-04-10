const goToCourseButton = document.querySelector("#goToCourse");
function goToCourseButtonHandler() {
  document.location.href = "./course.html";
}
goToCourseButton.addEventListener("click", goToCourseButtonHandler);

const goToWebinarButton = document.querySelector("#goToWebinar");
function goToWebinarButtonHandler() {
  document.location.href = "./webinar.html";
}
goToWebinarButton.addEventListener("click", goToWebinarButtonHandler);

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
