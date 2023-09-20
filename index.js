const grid = document.querySelector('#grid');
const setBtn = document.querySelector('button#set');
const eraseBtn = document.querySelector('button#erase');
const userInput = document.querySelector('input#grid-size');
let squares;

function makeGrid(size) {

    size > 100 ? size = 100 : size;

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
        let opacityValue = 0.1;

        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = `rgba(0, 0, 0, ${opacityValue})`;
            opacityValue += 0.1;
            console.log(e.target.style.backgroundColor);
        });      
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

setBtn.addEventListener('click', () => {
    clearGrid();
    makeGrid(userInput.value);
});

eraseBtn.addEventListener('click', () => {
    eraseGrid();
});

makeGrid(userInput.value);