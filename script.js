const container_div = document.querySelector('.grid-container');

function changeColor(e, color = 'blue') {
  e.target.style.backgroundColor = color;
  console.log(e);
}

function fillGrid(squareNum = 16) {
  for (let i = 0; i < squareNum * squareNum; i++) {
    const square_div = document.createElement('div');
    square_div.classList.add('grid-square');
    container_div.appendChild(square_div);
    square_div.style.cssText =`min-width: calc(1 / ${squareNum} * 100%)`; // Maximum number of squares in a row at any time
    square_div.addEventListener('mouseenter', changeColor);
  }
}

fillGrid();


// Get current year in footer's copyright
document.getElementById('year').textContent = new Date().getFullYear();
