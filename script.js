const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#3d3d3d';
const container_div = document.querySelector('.grid-container');
const color_button = document.getElementById('color');
const rainbow_button = document.getElementById('rainbow');
const eraser_button = document.getElementById('eraser');
const reset_button = document.getElementById('reset');
const size_span = document.getElementById('grid-size');
const slider_input = document.getElementById('myRange');
let isPressed = false;
let currentMode = 'default';

size_span.innerHTML = `${slider_input.value} x ${slider_input.value}`

slider_input.oninput = function() {
  size_span.innerHTML = `${this.value} x ${this.value}`;
} 

function addMouseEvent(element) {
  element.addEventListener('mousedown', changeColor);
  element.addEventListener('mouseenter', changeColor);
  document.body.addEventListener('mouseup', () => isPressed = false);
}

function changeColor(e) {
  if (e.type === 'mousedown') isPressed = true;
  if (isPressed) {
    if (currentMode === 'default') e.target.style.backgroundColor = DEFAULT_COLOR;
    if (currentMode === 'colored') e.target.style.backgroundColor = 'coral';
    if (currentMode === 'rainbow') e.target.style.backgroundColor = randomizeRGB();
    if (currentMode === 'eraser') e.target.style.backgroundColor = '';
  }
}

function randomizeRGB() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256); 
  return `rgb(${r}, ${g}, ${b})`;
}

function fillGrid(size = DEFAULT_SIZE) {
  for (let i = 1; i <= size * size; i++) {
    const square_div = document.createElement('div');
    square_div.classList.add('grid-square');
    if (i === 1) square_div.classList.add('border-top', 'border-left');
    if (i > 1 && i <= size) square_div.classList.add('border-top');
    if (i % size === 0) square_div.classList.add('border-right');
    if (i % size === 1) square_div.classList.add('border-left');
    if (i >= size * (size - 1) + 1 && i <= Math.pow(size, size)) square_div.classList.add('border-bottom');
    square_div.style.minWidth =`calc(1 / ${size} * 100%)`; // Maximum number of square_div in a row at any time
    container_div.appendChild(square_div);
    addMouseEvent(square_div);
  }
}

fillGrid();

let gridSquare_list = document.querySelectorAll('.grid-square');

color_button.addEventListener('click', () => {
  currentMode = 'colored';
  gridSquare_list.forEach(square => addMouseEvent(square));
});

rainbow_button.addEventListener('click', () => {
  currentMode = 'rainbow';
  gridSquare_list.forEach(square => addMouseEvent(square));
})

eraser_button.addEventListener('click', () => {
  currentMode = 'eraser';
  gridSquare_list.forEach(square => addMouseEvent(square));
});

reset_button.addEventListener('click', () => {
  currentMode = 'default';
  gridSquare_list.forEach(square => square.style.backgroundColor = '');
});

slider_input.addEventListener('click', () => {
  container_div.innerHTML = ''; // Clear grid
  fillGrid(Number(slider_input.value));
  gridSquare_list = document.querySelectorAll('.grid-square'); // Update gridSquare_list
});


document.getElementById('year').textContent = new Date().getFullYear(); // Get current year in footer's copyright