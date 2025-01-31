const buttons = document.querySelectorAll('.accordion-button');

// click event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      if (btn !== button) {
        btn.nextElementSibling.classList.remove('open');
        btn.classList.remove('open');
      }
    });

    // Toggle  clicked section
    const content = button.nextElementSibling;
    content.classList.toggle('open');
    button.classList.toggle('open');
  });
});

// Open first section by default
const firstButton = document.querySelector('.accordion-button');
firstButton.nextElementSibling.classList.add('open');
firstButton.classList.add('open');