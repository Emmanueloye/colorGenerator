const box = document.querySelector('#color-box');
const btn = document.querySelector('#change-color-btn');
const heading = document.querySelector('h1');

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = function () {
  return `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(
    0,
    255
  )})`;
};

document.addEventListener('DOMContentLoaded', () => {
  btn.addEventListener('click', () => {
    const color = randomColor();
    box.style.backgroundColor = color;
    heading.style.color = color;
  });
});
