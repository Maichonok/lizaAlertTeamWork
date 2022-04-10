const depButtons = document.querySelectorAll('.deploy-button');
const accDepButtons = document.querySelectorAll('.accordion__deploy-button');

// Открытие / Закрытие текстовых зон
depButtons.forEach((depButton) => {
  const parent = depButton.parentNode.parentNode;
  const parentContent = parent.querySelector('.text-area');
  depButton.addEventListener('click', () => {
    parentContent.classList.toggle('text-area_hidden');
    depButton.classList.toggle('switch')
    if (!parentContent.classList.contains('text-area_hidden')) {
      depButton.textContent = 'Свернуть';
    } else {
      depButton.textContent = 'Развернуть';
    };
  });
});

// Открытие / Закрытие текстовых зон аккордиона
accDepButtons.forEach((accDepButtons) => {
  const accordion = accDepButtons.parentNode;
  const accContent = accordion.querySelector('.accordion__content');
  const accIcon = accordion.querySelector('.accordion__icon');
  accDepButtons.addEventListener('click', () => {
    accContent.classList.toggle('accordion__content_opened');
    accIcon.classList.toggle('accordion__icon_active');
  });
});