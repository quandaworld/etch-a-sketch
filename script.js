const container_div = document.querySelector('.grid-container');


function fillGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const square_div = document.createElement('div');
      square_div.classList.add('grid-square');
      // square_div.textContent = '.';                       
      container_div.appendChild(square_div);
    }
  }
}

fillGrid();


// Get current year in footer's copyright
document.getElementById('year').textContent = new Date().getFullYear();
