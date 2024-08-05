const box = document.querySelector('#color-box');
const btn = document.querySelector('#change-color-btn');
const heading = document.querySelector('h1');

// Generates random number inclusive of the max number specified.
const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Generate random color based on the random number
const randomColor = function () {
  return `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(
    0,
    255
  )})`;
};

// Handle the click event to change color on button click.
document.addEventListener('DOMContentLoaded', () => {
  btn.addEventListener('click', () => {
    const color = randomColor();
    box.style.backgroundColor = color;
    heading.style.color = color;
  });
});
