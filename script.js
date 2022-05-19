const gridContainer = document.querySelector('.gridContainer');
const button = document.querySelector('#squaresBtn');
const lineBtn = document.querySelector('#lineBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const blackBtn = document.querySelector('#blackBtn');
let num;
let color = '';
let squares = document.querySelectorAll('#square');

// create initial grid
createGrid(16);

// ask for a grid size when button is clicked
button.addEventListener('click', () => {
    num = prompt('Enter number:');
    createGrid(num);
})

lineBtn.addEventListener('click', () => {
    gridContainer.classList.toggle('gridLines');
})

rainbowBtn.addEventListener('click', () => {
    color = 'rainbow';
})

blackBtn.addEventListener('click', () => {
    color = 'black';
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
            if (color == 'rainbow') {
                square.style.backgroundColor = rainbow();
            } else {
                square.style.backgroundColor = 'black';   
            }
        });
    });
}

function rainbow() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}

function clearGrid() {
    squares.forEach((square) => {
        gridContainer.removeChild(square);
    });
}



