const gridContainer = document.querySelector('.gridContainer');
const button = document.querySelector('#squaresBtn');
let num;
let squares = document.querySelectorAll('#square');

// create initial grid
createGrid(16);

// ask for a grid size when button is clicked
button.addEventListener('click', () => {
    num = prompt('Enter number:');
    createGrid(num);
})

function createGrid(number) {
    // clear grid before creating new grid
    clearGrid();

    for (let i = 0; i < number * number; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', 'square');
        div.setAttribute('style', 'flex-basis: ' + (100 / number) + '%');
        gridContainer.appendChild(div);
    };
    
    coloring();
}

// // mouseenter event to change div color
function coloring() {
    squares = document.querySelectorAll('#square');

    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "black";
        });
    });

}

function clearGrid() {
    squares.forEach((square) => {
        gridContainer.removeChild(square);
    });
}


