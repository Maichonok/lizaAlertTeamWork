const depButtons = document.querySelectorAll('.deploy-button');
const accDepButtons = document.querySelectorAll('.accordion__deploy-button');

// Открытие / Закрытие текстовых зон
depButtons.forEach((depButton) => {
  const parent = depButton.parentNode.parentNode;
  const parentContent = parent.querySelector('.text-area');
  if (!parentContent.classList.contains('text-area_hidden')) {
    parentContent.style.height = parentContent.scrollHeight + "px";
  }
  depButton.addEventListener('click', (evt) => {
    evt.stopPropagation();
    parentContent.classList.toggle('text-area_hidden');
    if (!parentContent.classList.contains('text-area_hidden')) {
      parentContent.style.height = parentContent.scrollHeight + "px";
      depButton.textContent = 'Свернуть';
    } else {
      parentContent.style.height = null;
      depButton.textContent = 'Развернуть';
    };
  });
});

// Открытие / Закрытие текстовых зон аккордиона
accDepButtons.forEach((accDepButtons) => {
  const accordion = accDepButtons.parentNode;
  const parentContent = accordion.parentNode;
  const accContent = accordion.querySelector('.accordion__content');
  const accIcon = accordion.querySelector('.accordion__icon');
  accDepButtons.addEventListener('click', (evt) => {
    evt.stopPropagation();
    accContent.classList.toggle('accordion__content_opened');
    accIcon.classList.toggle('accordion__icon_active');
    if (accContent.classList.contains('accordion__content_opened')) {
      accContent.style.height = accContent.scrollHeight + "px";
      parentContent.style.height = parentContent.scrollHeight + accContent.scrollHeight + "px";
    } else {
      parentContent.style.height = parentContent.scrollHeight - accContent.scrollHeight + "px";
      accContent.style.height = null;
    };
  });
});

const goToTextButton = document.querySelector("#goToText");

function goToTextButtonHandler() {
  document.location.href = "./text.html";
}
goToTextButton.addEventListener("click", goToTextButtonHandler);