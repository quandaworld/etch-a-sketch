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
let eraser = false;

function changeColor(e, color = DEFAULT_COLOR) {
  if (isPressed && eraser) e.target.style.backgroundColor = '';
  if (isPressed && !eraser) e.target.style.backgroundColor = color;
}

function addMouseEvent(element) {
  element.addEventListener('mousedown', () => isPressed = true);
  document.body.addEventListener('mouseup', () => isPressed = false);
  element.addEventListener('mousemove', changeColor);
}

function fillGrid(size = DEFAULT_SIZE) {
  for (let i = 1; i <= size * size; i++) {
    const square_div = document.createElement('div');
    square_div.classList.add('grid-square');
    if (i >= 1 && i <= size) square_div.classList.add('border-top');
    if (i % size === 0) square_div.classList.add('border-right');
    square_div.style.minWidth =`calc(1 / ${size} * 100%)`; // Maximum number of square_div in a row at any time
    container_div.appendChild(square_div);
    addMouseEvent(square_div);
  }
}

fillGrid();

const gridSquare_list = document.querySelectorAll('.grid-square');

eraser_button.addEventListener('click', () => {
  eraser = true;
  gridSquare_list.forEach(square => addMouseEvent(square));
});

reset_button.addEventListener('click', () => {
  gridSquare_list.forEach(square => {
    square.style.backgroundColor = '';
  });
  eraser = false;
});




document.getElementById('year').textContent = new Date().getFullYear(); // Get current year in footer's copyright