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
