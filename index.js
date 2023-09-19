const grid = document.querySelector('#grid');
const setBtn = document.querySelector('button#set');
const userInput = document.querySelector('input#grid-size');

makeGrid(userInput.value);

function makeGrid(size) {

    const squareDimension = 100/size;

    console.log(`userInput: ${userInput.value}`);
    console.log(`Dimension: ${squareDimension}`);
    console.log(`Fxn argument (size): ${size}`);

    for (let i = 1; i <= size ** 2; i++) {
        
        const newSquare = document.createElement('div');
        newSquare.setAttribute('class', 'square');
        newSquare.style.width = `${squareDimension}%`;
        newSquare.style.height = `${squareDimension}%`;
        grid.appendChild(newSquare);
        
    }
}

function clearGrid() {
    while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
    }
}

setBtn.addEventListener('click', () => {
    clearGrid();
    makeGrid(userInput.value);
});
