const container_div = document.querySelector('.grid-container');

function changeColor(e, color = 'blue') {
  e.target.style.backgroundColor = color;
  console.log(e);
}

function fillGrid(size = 16) {
  for (let i = 1; i <= size * size; i++) {
    const square_div = document.createElement('div');
    square_div.classList.add('grid-square');
    if (i >= 1 && i <= size) square_div.classList.add('top');
    if (i % size === 0) square_div.classList.add('right');
    container_div.appendChild(square_div);
    square_div.style.cssText =`min-width: calc(1 / ${size} * 100%)`; // Maximum number of squares in a row at any time
    square_div.addEventListener('mouseenter', changeColor);
  }
}

fillGrid();


// Get current year in footer's copyright
document.getElementById('year').textContent = new Date().getFullYear();
