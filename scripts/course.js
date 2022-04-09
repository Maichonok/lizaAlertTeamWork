const depButtons = document.querySelectorAll('.deploy-button');
const accDepButtons = document.querySelectorAll('.accordion__deploy-button');

depButtons.forEach((depButton) => {
  const parent = depButton.parentNode.parentNode;
  const parentContent = parent.querySelector('.text-area');
  depButton.addEventListener('click', () => {
    parentContent.classList.toggle('text-area_opened');
    if (parentContent.classList.contains('text-area_opened')) {
      parentContent.style.height = parentContent.scrollHeight + "px";
      depButton.textContent = 'Свернуть';
    } else {
      parentContent.style.height = null;
      depButton.textContent = 'Развернуть';
    };
    // Проверяем содержит ли секция аккорден
    if (parent.classList.contains('accordions')) {
      accDepButtons.forEach((accDepButtons) => {
        const accordion = accDepButtons.parentNode;
        const accContent = accordion.querySelector('.accordion__content');
        const accIcon = accordion.querySelector('.accordion__icon');
        accDepButtons.addEventListener('click', () => {
          accContent.classList.toggle('accordion__content_opened');
          accIcon.classList.toggle('accordion__icon_active');
          if (accContent.classList.contains('accordion__content_opened')) {
            parentContent.style.height = parentContent.scrollHeight + accContent.scrollHeight + "px";
            accContent.style.height = accContent.scrollHeight + "px";
          } else {
            parentContent.style.height = parentContent.scrollHeight - accContent.scrollHeight + "px";
            accContent.style.height = null;
          };
        });
      });
    };
  });
});