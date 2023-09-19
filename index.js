const grid = document.querySelector('#grid');
const setBtn = document.querySelector('button#set');
const eraseBtn = document.querySelector('button#erase');
const userInput = document.querySelector('input#grid-size');
let squares;

function makeGrid(size) {

    console.log(size);

    size > 100 ? size = 100 : size;

    console.log(size);

    const squareDimension = 100/size;

    for (let i = 1; i <= size ** 2; i++) {
        
        const newSquare = document.createElement('div');
        newSquare.setAttribute('class', 'square');
        newSquare.style.width = `${squareDimension}%`;
        newSquare.style.height = `${squareDimension}%`;
        grid.appendChild(newSquare);
    }

    squares = document.querySelectorAll('.square');
    allowDrawing();
}

function allowDrawing() {
    squares.forEach((square) => {
        square.addEventListener('mouseover' || 'mousedown', () => {
                square.style.backgroundColor = '#111';
            })
    });
}

function clearGrid() {
    while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
    }
}

function eraseGrid() {
    squares.forEach((square) => {
        square.style.backgroundColor = 'transparent';
    });
}

makeGrid(userInput.value);

setBtn.addEventListener('click', () => {
    clearGrid();
    makeGrid(userInput.value);
});

eraseBtn.addEventListener('click', () => {
    eraseGrid();
});