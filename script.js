const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#16123f';
const DEFAULT_MODE = 'colored';
const container_div = document.querySelector('.grid-container');
const color_button = document.getElementById('color');
const rainbow_button = document.getElementById('rainbow');
const eraser_button = document.getElementById('eraser');
const reset_button = document.getElementById('reset');
const size_span = document.getElementById('grid-size');
const slider_input = document.getElementById('myRange');
const color_input = document.getElementById('color-picker');
const buttons_list = document.querySelectorAll('.btn');
let isPressed = false;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;


function unhighlightButton() { // remove highlight of buttons
  buttons_list.forEach(button => button.classList.remove('clicked'));
}

container_div.addEventListener('mousedown', changeColor); // change grid color when mouse is pressed down inside grid container
container_div.addEventListener('mouseover', changeColor); // change grid color when mouse is dragged inside grid container
document.body.addEventListener('mouseup', () => isPressed = false); // stop drawing effect when mouse is up outside of the container

function changeColor(e) { // change color effect
  if (e.type === 'mousedown') isPressed = true;
  if (isPressed) {
    if (currentMode === 'colored') e.target.style.backgroundColor = currentColor;
    if (currentMode === 'rainbow') e.target.style.backgroundColor = randomizeRGB();
    if (currentMode === 'eraser') e.target.style.backgroundColor = '';
  }
}

function randomizeRGB() { // RGB color mode
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256); 
  return `rgb(${r}, ${g}, ${b})`;
}

function fillGrid(size = DEFAULT_SIZE) { // fill grid container based on grid size
  for (let i = 1; i <= size * size; i++) {
    const square_div = document.createElement('div');
    square_div.classList.add('grid-square');
    if (i === 1) square_div.classList.add('border-top', 'border-left');
    if (i % size === 1) square_div.classList.add('border-left');
    if (i >= size * (size - 1) + 1 && i <= Math.pow(size, size)) square_div.classList.add('border-bottom');
    square_div.style.minWidth =`calc(1 / ${size} * 100%)`; // Maximum number of square_div in a row at any time
    container_div.appendChild(square_div);
  }
}

fillGrid(); 

let gridSquare_list = document.querySelectorAll('.grid-square');

color_input.addEventListener('input', () => { // take color input from color palette
  currentColor = color_input.value;
});

color_button.addEventListener('click', () => { // highlight colored pencil button
  unhighlightButton();
  color_button.classList.add('clicked');
  currentMode = 'colored';
});

rainbow_button.addEventListener('click', () => { // highlight rainbow pencil button
  unhighlightButton();
  rainbow_button.classList.add('clicked')
  currentMode = 'rainbow';
})

eraser_button.addEventListener('click', () => { // highlight eraser button
  unhighlightButton();
  eraser_button.classList.add('clicked')
  currentMode = 'eraser';
});

reset_button.addEventListener('click', () => { // reset grid container
  unhighlightButton();
  color_button.classList.add('clicked');
  currentMode = DEFAULT_MODE;
  currentColor = DEFAULT_COLOR;
  color_input.value = DEFAULT_COLOR;
  gridSquare_list.forEach(square => square.style.backgroundColor = '');
});

size_span.innerHTML = `${slider_input.value} x ${slider_input.value}`

slider_input.oninput = function() { // take grid size from slider input
  size_span.innerHTML = `${this.value} x ${this.value}`;
} 

slider_input.addEventListener('click', () => {
  container_div.innerHTML = ''; // Clear grid
  fillGrid(Number(slider_input.value)); // fill grid container based on slider input
  gridSquare_list = document.querySelectorAll('.grid-square'); // Update gridSquare_list
});


document.getElementById('year').textContent = new Date().getFullYear(); // Get current year in footer's copyright