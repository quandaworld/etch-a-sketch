const DEFAULT_SIZE = 30;
const DEFAULT_COLOR = '#3d3d3d';
const container_div = document.querySelector('.grid-container');
let isPressed = false;

function changeColor(e, color = DEFAULT_COLOR) {
  if (isPressed) e.target.style.backgroundColor = color;
}

function fillGrid(size = DEFAULT_SIZE) {
  for (let i = 1; i <= size * size; i++) {
    const square_div = document.createElement('div');
    square_div.classList.add('grid-square');
    if (i >= 1 && i <= size) square_div.classList.add('border-top');
    if (i % size === 0) square_div.classList.add('border-right');
    square_div.style.minWidth =`calc(1 / ${size} * 100%)`; // Maximum number of square_div in a row at any time
    container_div.appendChild(square_div);
    square_div.addEventListener('mousedown', () => isPressed = true);
    square_div.addEventListener('mouseup', () => isPressed = false);
    square_div.addEventListener('mousemove', changeColor);
  }
}

fillGrid();




document.getElementById('year').textContent = new Date().getFullYear(); // Get current year in footer's copyright