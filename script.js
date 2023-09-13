const container_div = document.querySelector('.grid-container');

function fillGrid(squareNum = 16) {
  for (let i = 0; i < squareNum; i++) {
    for (let j = 0; j < squareNum; j++) {
      const square_div = document.createElement('div');
      square_div.classList.add('grid-square');
      square_div.style.cssText =`min-width: calc(1/${squareNum}*100%)`;
      container_div.appendChild(square_div);
    }
  }
}

fillGrid();


// Get current year in footer's copyright
document.getElementById('year').textContent = new Date().getFullYear();
